import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function ProtectedPage() {
    const session = await getServerSession(authOptions);

    return (
        <main className="flex flex-col py-8 px-4">
            <h1 className="text-xl font-semibold text-gray-900 leading-7">Protected page</h1>
            <p className="mt-2 text-lg text-gray-700">Here you can see content below only if you are signed in.</p>
            <div className="mt-4">
                {session && <p className="text-green-800 text-lg tracking-tight">You are seeing content that is protected.</p>}
            </div>
        </main>
    )
}
