import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string | mongoose.Types.ObjectId;
      name?: string;
      email?: string;
      image?: string;
    };
  }

  interface User {
    id: string | mongoose.Types.ObjectId;
  }
}