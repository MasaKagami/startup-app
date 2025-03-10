import { auth, signOut, signIn } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { worksans } from '../app/styles/font'

const Navbar = async () => {
    const session = await auth()

    return (
        <div className={`px-5 py-3 bg-white ${worksans.className} shadow-sm`}>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt='logo' width={144} height={30} />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {/* if session exists and if session has user */}

                    { session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>    

                            <form action={async () => {
                                "use server";
                                await signOut( {redirectTo:"/"} );
                            }}>
                                <button type="submit">Logout</button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </> 
                    // need to provide second half of the code (a.k.a when we don't alrady have a user)
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type="submit">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </div>
  )
}

export default Navbar