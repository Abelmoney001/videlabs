import { NextResponse } from "next/server";
import { getAdminSupabase } from "@/utils/supabase";

export async function POST(request: Request) {
  try {
    const { opacity } = await request.json();

    // 1. Validate Secret Key
    const authHeader = request.headers.get("authorization");
    const secretKey = process.env.API_SECRET_KEY || "videlabs123";

    if (authHeader !== `Bearer ${secretKey}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Validate input
    const opacityNum = Number(opacity);
    if (isNaN(opacityNum) || opacityNum < 0 || opacityNum > 100) {
      return NextResponse.json(
        { error: "Opacity must be a number between 0 and 100" },
        { status: 400 },
      );
    }

    // 3. Update Supabase
    const supabaseAdmin = getAdminSupabase();
    const { error } = await supabaseAdmin
      .from("site_config")
      .upsert(
        { key: "website_opacity", value: opacityNum },
        { onConflict: "key" },
      );

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to update configuration in database" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, newOpacity: opacityNum });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
