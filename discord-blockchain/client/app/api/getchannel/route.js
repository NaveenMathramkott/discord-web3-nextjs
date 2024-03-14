import client from "../../../constants/sanity";
import { NextResponse } from "next/server";

const query = `*[_type == "conversations" && isDm==false]{
  roomId,
  roomName,
  "avatar": image.asset->url
}`;

export async function GET() {
  try {
    const sanityResponse = await client.fetch(query);
    return NextResponse.json(sanityResponse);
  } catch (error) {
    console.error(error);
  }
}
