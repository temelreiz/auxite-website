// Same-origin proxy for the Auxite Radio widget on auxite.io.
// Forwards /api/radio/* to the vault app (which owns the radio APIs) so the
// embedded widget makes only same-origin requests — no CORS needed.
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

const VAULT = "https://vault.auxite.io";

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const search = new URL(req.url).search;
  const target = `${VAULT}/api/radio/${(path || []).join("/")}${search}`;

  try {
    const r = await fetch(target, { cache: "no-store", redirect: "follow" });
    const ct = r.headers.get("content-type") || "application/octet-stream";
    const buf = await r.arrayBuffer();
    return new Response(buf, {
      status: r.status,
      headers: {
        "content-type": ct,
        "cache-control": r.headers.get("cache-control") || "no-store",
      },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e?.message || "radio proxy failed" }), {
      status: 502, headers: { "content-type": "application/json" },
    });
  }
}
