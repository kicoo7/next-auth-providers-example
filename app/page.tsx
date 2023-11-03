import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <main className="flex flex-col py-8 px-4">
        <h1 className="text-xl font-semibold text-gray-900 leading-7">Welcome to your Home page</h1>
        <p className="mt-2 text-lg text-gray-700">This is an example site to show how NextAuth.js works.</p>

        <div className="mt-4">
          {!session ?
            <p className="text-red-800 text-lg tracking-tight">You are not signed in.</p>
            :
            <p className="text-green-800 text-lg tracking-tight">You are signed in.</p>
          }
        </div>
      </main >
    </>
  )
}
