
import { checkDatabaseConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    const isConnected = await checkDatabaseConnection();
    if (!isConnected) {
        return NextResponse.json(
            {
                status: "error",
                message: "Database connection is unhealthy."
            },
            { status: 500 }
        );
    }

    return NextResponse.json(
        {
            status: "success",
            message: "Database connection is healthy."
        },
        { status: 200 }
    );
}