const endPoint = "https://crudcrud.com/api/6b9b2378d4ef44a5a93edc1308537579/candidateDataa"
let totalVotesHeading = 0;
let mainHeading = document.querySelector('.heading');
let headingTotal = document.createElement('h3');

//append the headingTotal to mainHeading
mainHeading.insertAdjacentElement("afterend",headingTotal); 
let candidateData = 
  [
  {
    "name" : "Suresh",
    "count" : 0
  },
   {
    "name" : "Deepak",
    "count" : 0
  },
  {
    "name" : "Abhik",
    "count" : 0
  }
]
function displayCandidateList() {
  // Select the candidateList
  let candidateList = document.getElementById('candidateList');
  candidateList.innerHTML = '';

  // Calculate the total votes by summing up the counts of all candidates
  let totalVotes = candidateData.reduce((total, candidate) => total + candidate.count, 0);

  // Display the total votes
  headingTotal.textContent = `Total Votes: ${totalVotes}`;
  headingTotal.style = `display: flex;justify-content: center;`;

  candidateData.forEach((element) => {
      // Create a div and add h2 tag and h4Tag with innerHtml
      let divTag = document.createElement('div');
      divTag.innerHTML += `<h2>${element.name}</h2>
          <h4 style="font-weight: 500;">Total : ${element.count}`;

      if (element.count > 0) {
          let deleteBtn = document.createElement('button');
          deleteBtn.className = 'deleteBtn';
          deleteBtn.textContent = 'Delete';
          deleteBtn.dataset.candidateName = element.name; // Set the candidate name as a data attribute
          divTag.appendChild(deleteBtn);

          // Create an event listener for the delete button
          deleteBtn.addEventListener('click', (e) => {
              e.stopPropagation(); // Stop the event from propagating to parent elements

              // Check if the count is greater than 0 before decrementing
              if (element.count > 0) {
                  // Reduce the count of its respective candidate
                  element.count--;
                  // Update the candidate data on the server
                  updateCandidateData(element);
                  // Refresh the candidate list
                  displayCandidateList();
              }
          });
      }

      divTag.innerHTML += '</h4>';
      candidateList.appendChild(divTag);
  });
}

// Add the event listener for the delete button
document.getElementById('candidateList').addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
      // Delete button was clicked
      const candidateName = event.target.dataset.candidateName;
      const candidate = candidateData.find((element) => element.name === candidateName);
      if (candidate && candidate.count > 0) {
          candidate.count--;
          updateCandidateData(candidate);
          displayCandidateList();
      }
  }
});

// Initial display of total votes
displayCandidateList();







function vote(event) {
  event.preventDefault();
  //select the selected element by using MontiorOptions.value 
  let dropdownVal = document.getElementById('MontiorOptions');
  let selectedCandidate = dropdownVal.value;
  //use .find function to check if obj.name == selected 
  let candidate = candidateData.find((element => element.name == selectedCandidate));
  // if yes the increment the count of that particular value 
  //also increment the totalVal
  if(candidate) {
    candidate.count++;
    totalVotesHeading += 1;
    headingTotal.textContent = `Total Votes : ${totalVotesHeading}`;
    headingTotal.style = `display: flex;justify-content: center;`;
    updateCandidateData(candidate);
    displayCandidateList();
  }
  dropdownVal.value = '';
  document.getElementById('Sname').value = '';
}
displayCandidateList();
function updateCandidateData(candidate) {
  // If the candidate has an _id, it means it already exists on the server, so update it using PUT
  if (candidate._id) { 
    const updatedCandidate = {
      name: candidate.name,
      count: candidate.count,
    };
    axios.put(`${endPoint}/${candidate._id}`, updatedCandidate)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  } else {
    // If the candidate doesn't have an _id, it's a new candidate, so add it to the server using POST
    axios.post(`${endPoint}`, candidate)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
}
document.addEventListener('DOMContentLoaded', function () {
  // Make a GET request to fetch the data
  axios.get(`${endPoint}`)
    .then((result) => {
      // Update the candidateData array with the fetched data
      candidateData = result.data;
      // Display the candidate data
      displayCandidateList();
    })
    .catch((err) => console.log(err));
});


