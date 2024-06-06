// import { BASE_URl } from "@/lib/request";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         console.log(credentials);
        
//         const res = await fetch(`${BASE_URl}/auth/hotel-user/login`, {
//           method: "POST",
//           body: JSON.stringify({
//             email: credentials?.email,
//             password: credentials?.password,
//           }),
//           headers: { "Content-Type": "application/json" },
//         });

//         const user = await res.json();

// console.log('asas',user)

//         // If no error and we have user data, return it
//         if (res.ok && user) {
//           return user;
//         }
//         // Return null if user data could not be retrieved
//         return null;
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/login",
//     signOut: "/registration",
//     // error: "/auth/error", // Error code passed in query string as ?error=
//     // verifyRequest: "/auth/verify-request", // (used for check email message)
//     // newUser: "/auth/new-user", // New users will be directed here on
//   },
// };
// console.log('llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll');

// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };.


import NextAuth from 'next-auth';
import { options } from './options';

const handler = NextAuth(options);

export { handler as GET, handler as POST };



