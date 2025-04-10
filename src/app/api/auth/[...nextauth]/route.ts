import NextAuth, { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import config from '@/shared/lib/config';

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: config.github.clientId,
      clientSecret: config.github.clientSecret,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = session.user as any;
      user.id = token.sub; // Attach user ID
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
