import NextAuth, { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import config from '@/shared/lib/config';

const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: config.github.clientId,
      clientSecret: config.github.clientSecret,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = session.user as any;
      user.id = token.sub;
      user.role = token.role; // Attach user ID
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        // Just assign a fixed role for now — no DB needed
        token.role = 'user';
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
