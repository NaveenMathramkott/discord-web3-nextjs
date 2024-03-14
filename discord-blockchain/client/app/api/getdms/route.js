import client from "../../../constants/sanity";
import { NextResponse } from "next/server";

const query = `*[_type == "conversations" && isDm==true]{
  "conversation": userReference->{
    name,
    walletAddress,
    "image": profileImage.asset->url
  }
}`;

export async function GET() {
  try {
    const sanityResponse = await client.fetch(query);

    const response = sanityResponse.map((item) => {
      return {
        avatar: item.conversation.image,
        name: item.conversation.name,
        id: item.conversation.walletAddress,
      };
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
  }
}
