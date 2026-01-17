import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CRON_SECRET = process.env.CRON_SECRET;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // =====================================================
  // 1) WALLET REDIRECT
  // =====================================================
  if (pathname === "/wallet" || pathname.startsWith("/wallet/")) {
    const target = new URL("https://wallet.auxite.io");
    const restPath = pathname.replace("/wallet", "") || "/";
    target.pathname = restPath;
    target.search = request.nextUrl.search;
    return NextResponse.redirect(target, 308);
  }

  const response = NextResponse.next();

  // =====================================================
  // 2) SECURITY HEADERS
  // =====================================================
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );

  // =====================================================
  // 3) CRON protection
  // =====================================================
  if (pathname.startsWith("/api/cron/")) {
    const authHeader = request.headers.get("authorization");
    const isVercelCron = request.headers.get("x-vercel-cron") === "true";
    const hasValidAuth = authHeader === `Bearer ${CRON_SECRET}`;

    if (!isVercelCron && !hasValidAuth && CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
