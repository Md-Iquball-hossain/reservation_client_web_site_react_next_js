import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   let accessUserToken: string | null = localStorage?.getItem("access-token");
  //   console.log("middle ", accessUserToken);

  const urlClone = request.nextUrl.clone();

  let isLogin = request.cookies.get("logged");

  //   const user = "true";
  console.log("asas", isLogin);

  if (isLogin) {
    if (request.nextUrl.pathname.startsWith("/service")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
// export const config = {
//   matcher: "/service",
// };
