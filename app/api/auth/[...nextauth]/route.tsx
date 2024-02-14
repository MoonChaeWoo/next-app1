import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

const authOptions = {

  adapter : PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({

      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "Insert Email" },
        password: {  label: "Password", type: "password", placeholder : "Insert Password"}
      },
      async authorize(credentials, req) {

        if(!credentials?.email || !credentials?.password){
          return null;
        };

        const user = await prisma.user.findUnique({
          where : {
            email : credentials.email
          }
        });
  
        if (!user || !user.hashedPassword) return null;

        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

        return passwordMatch ? user : null;
      }
    }),

    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session : {
    strategy: "jwt",
  }
};

const handler = NextAuth(authOptions as any)

export {handler as GET, handler as POST}