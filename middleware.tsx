export { default } from "next-auth/middleware";

// export const middleware = (request : NextRequest) => {
//     return NextResponse.redirect(new URL('/new-page', request.url));
// };

export const config = {
    matcher : ["/users/:id*"]
}