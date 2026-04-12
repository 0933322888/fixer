import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  canonicalHostRedirectTarget,
  getCanonicalHostname,
} from "@/lib/canonical-site";

export function middleware(request: NextRequest) {
  const canonicalHost = getCanonicalHostname();
  if (!canonicalHost) return NextResponse.next();

  const hostHeader = request.headers.get("host") ?? "";
  const requestHost = hostHeader.split(":")[0];
  const targetHost = canonicalHostRedirectTarget(requestHost, canonicalHost);
  if (!targetHost) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.hostname = targetHost;
  url.protocol = "https:";
  // Behind a reverse proxy, nextUrl can retain the Node listen port (e.g. :3000); never
  // emit that in Location — browsers must use default HTTPS (443).
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except Next internals and common static files
     * (middleware runs on those too; skipping reduces work).
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
