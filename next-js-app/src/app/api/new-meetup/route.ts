import { MongoClient } from "mongodb";

import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
  console.log("inside abckend");

  // if (req.method === "POST") {
  // const data = req.body;
  // console.log("***1 req ===", req);
  // console.log("req.body =", data);

  // const client = await MongoClient.connect(
  //   "mongodb+srv://dkirti301999:Pwd123@cluster0.w3rmzvi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  // );
  // const db = client.db();
  // const meetupCollection = db.collection("meetups");

  // const result = await meetupCollection.insertOne(data);
  // console.log("result after data is added successfully =", result);

  // client.close();

  // res.status(201).json({ message: "Data Inserted Successfully" });
  // console.log("*****Res =", res);
  // return NextResponse.json({
  //   message: "Login successful",
  //   success: true,
  // });

  const data: any = await req.json();

  try {
    if (req.method === "POST") {
      const client = await MongoClient.connect(
        "mongodb+srv://dkirti301999:Pwd123@cluster0.w3rmzvi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();
      const meetupCollection = db.collection("meetups");

      const result = await meetupCollection.insertOne(data);
      console.log("result after data is added successfully =", result);

      client.close();
      return NextResponse.json({
        message: "Data Inserted Successfully",
        data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
