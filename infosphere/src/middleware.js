import { NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isAdmin = request.cookies.get("isAdmin");

 
  if (pathname.startsWith("/admin")) {
    if (!isAdmin && pathname !== "/admin/login") {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }

    if (isAdmin && pathname === "/admin/login") {
      return NextResponse.redirect(
        new URL("/admin", request.url)
      );
    }

    return NextResponse.next();
  }

  // locale 
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};