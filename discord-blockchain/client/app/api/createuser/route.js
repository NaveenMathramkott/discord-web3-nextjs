import client from "../../../constants/sanity";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userAddress } = await request.json();

  const userDoc = {
    _type: "users",
    _id: `${userAddress}-user`,
    name: "Unnamed",
    walletAddress: userAddress,
  };

  try {
    await client.createIfNotExists(userDoc);

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
  }
}
