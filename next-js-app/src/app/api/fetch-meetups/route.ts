import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://dkirti301999:Pwd123@cluster0.w3rmzvi.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetups = await meetupCollection.find().toArray();
    client.close();
    return NextResponse.json({
      message: "Data Fetched Successfully",
      data: meetups,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
