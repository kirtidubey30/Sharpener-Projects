import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data: any = await req.json();

  try {
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
  } catch (error) {
    console.log(error);
    // return NextResponse.error(error.message);
  }
}
