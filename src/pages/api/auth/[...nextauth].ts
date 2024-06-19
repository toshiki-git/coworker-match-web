import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

if (
  !process.env.GOOGLE_CLIENT_ID ||
  !process.env.GOOGLE_CLIENT_SECRET ||
  !process.env.NEXTAUTH_SECRET
) {
  throw new Error(
    'Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET or NEXTAUTH_SECRET in environment variables (.env.local)'
  );
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account }) {
      if (account?.provider === 'google') {
        const idToken = account.id_token;

        console.log('ID Token:', idToken);

        if (!idToken) {
          console.error('Failed to retrieve ID Token');
          return false;
        }
      }
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.idToken = token.idToken as string;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl + '/mypage';
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
});
