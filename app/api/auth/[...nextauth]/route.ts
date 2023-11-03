import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import GitHubProvider from "next-auth/providers/github";
import SpotifyProvider from "next-auth/providers/spotify";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
    GitHubProvider({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
    }),
    LinkedInProvider({
      clientId: String(process.env.LINKEDIN_CLIENT_ID),
      clientSecret: String(process.env.LINKEDIN_CLIENT_SECRET),
      authorization: {
        params: { scope: "openid profile email" },
      },
      issuer: "https://www.linkedin.com",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      profile(profile, tokens) {
        const defaultImage =
          "https://cdn-icons-png.flaticon.com/512/174/174857.png";
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
    }),
    SpotifyProvider({
      clientId: String(process.env.SPOTIFY_CLIENT_ID),
      clientSecret: String(process.env.SPOTIFY_CLIENT_SECRET),
    }),
    TwitterProvider({
      clientId: String(process.env.TWITTER_CLIENT_ID),
      clientSecret: String(process.env.TWITTER_CLIENT_SECRET),
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
