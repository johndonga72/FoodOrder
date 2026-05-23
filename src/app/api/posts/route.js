import { NextResponse } from "next/server";
import connect from "@/utils/db";
export const GET = async (request) => {
    try {
        await connect();
        const posts = await Post.find();
        return new NextResponse(posts, { status: 200 });
    }
    catch (error) {
        return new NextResponse("Failed to fetch posts", { status: 500 });
    }
}