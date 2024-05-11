import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhook/clerk',
  ],
  ignoredRoutes: [
    '/api/webhook/clerk'
  ]
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};
