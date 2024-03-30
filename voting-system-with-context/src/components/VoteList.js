import React, { useContext } from "react";
import cartContext from "../store/cart-context";

function VoteList() {
  const voteCtx = useContext(cartContext);
  return (
    <div className="candidatesList">
      {voteCtx.items.map((candidate) => (
        <span key={candidate._id}>
          {candidate.monitor === "Suresh" && (
            <div>
              <div>
                <b>Suresh</b>
              </div>
              <div>Total Votes : {candidate.totalVote || 0}</div>
              <div>
                <span>
                  {candidate.name}
                  <button onClick={() => voteCtx.removeItem(candidate._id)}>
                    Delete
                  </button>
                </span>
              </div>
            </div>
          )}
          {candidate.monitor === "Deepak" && (
            <div>
              <div>
                <b>Deepak</b>
              </div>
              <div>Total Votes : {candidate.totalVote || 0}</div>
              <div>
                <span>
                  {candidate.name}
                  <button onClick={() => voteCtx.removeItem(candidate._id)}>
                    Delete
                  </button>
                </span>
              </div>
            </div>
          )}
          {candidate.monitor === "Abhik" && (
            <div>
              <div>
                <b>Abhik</b>
              </div>
              <div>Total Votes : {candidate.totalVote || 0}</div>
              <div>
                <span>
                  {candidate.name}
                  <button onClick={() => voteCtx.removeItem(candidate._id)}>
                    Delete
                  </button>
                </span>
              </div>
            </div>
          )}
        </span>
      ))}
    </div>
  );
}

export default VoteList;
