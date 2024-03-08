import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRote = ["/cart/checkout", "/dashboard"];

export function middleware(request: NextRequest) {
  const currentUser = false;
  if (!currentUser && protectedRote.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}