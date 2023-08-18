import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
// Import additional providers here.
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Configure additional providers here.
  ],
};

export default NextAuth(authOptions);
