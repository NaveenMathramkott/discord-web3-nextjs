import client from "../../../constants/sanity";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const accountQuery = searchParams.get("account");

  const query = `*[_type == "users" && walletAddress == "${accountQuery}"]{
    name,
    "avatar": profileImage.asset->url
  }`;

  try {
    const sanityResponse = await client.fetch(query);

    return NextResponse.json(sanityResponse[0]);
  } catch (error) {
    console.error(error);
  }
}
