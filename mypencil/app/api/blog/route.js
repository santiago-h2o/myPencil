const { NextResponse } = require("next/server")

export async function GET(req) {
    console.log("Blog Get Hit")
    return NextResponse.json({msg: "API WORKED"})
}