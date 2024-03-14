import client from "../../../constants/sanity";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userAddress } = await request.json();

  const conversationDoc = {
    _type: "conversations",
    _id: `${userAddress}-dm`,
    isDm: true,
    roomId: userAddress,
    userReference: {
      _key: userAddress,
      _ref: `${userAddress}-user`,
      _type: "reference",
    },
  };

  try {
    await client.createIfNotExists(conversationDoc);

    return NextResponse.json({ message: "Successfull" });
  } catch (error) {
    console.error(error);
  }
}
