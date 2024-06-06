import { BASE_URl } from "@/lib/request";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${BASE_URl}/auth/hotel-user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "md.m36038ict@gmail.com",
            password: "123456789",
          }),
        });
        const user = await res.json();
        console.log("HELLLOOOOOOOOOOOOOOOO");
        console.log({ user });
        console.log("HELLLOOOOOOOOOOOOOOOO");
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },

    async jwt({ token, user, account, trigger, session }) {
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    newUser: "/registration",
  },
};
