import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route';
import BugpilotComponent from './BugpilotComponent';

export default async function Navbar() {
    const session = await getServerSession(authOptions);

    return (
        <nav className="max-w-screen-md mx-auto flex items-center justify-between flex-wrap bg-indigo-500 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Our Cool App</span>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm flex flex-row lg:flex-grow items-center">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4">
                        Home
                    </Link>

                    <Link href="/protected" className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4">
                        Protected
                    </Link>

                    <div className="flex-1" />

                    {session && session.user && <BugpilotComponent user={{ id: session.user.email, email: session.user?.email, ...session?.user }} />}

                    {
                        session && session.user ? (
                            <Link href="/api/auth/signout" className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4">
                                <div>
                                    <img src={String(session?.user?.image)} alt="Profile Photo" className='w-6 h-6 rounded-full mr-2 inline-block' />
                                    {session.user.name || session.user.email}
                                </div>
                            </Link>
                        ) :
                            (
                                <Link href="/api/auth/signin" className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4">
                                    Sign In
                                </Link>
                            )
                    }

                </div>
            </div>
        </nav>
    );
}