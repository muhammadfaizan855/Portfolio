import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100 flex justify-between items-center p-4 px-[5rem]">
  <a className="btn btn-ghost text-xl">Faizan</a>
  <div className="flex gap-5">
    <Link href={'/'} className="hover:underline transition duration-300 ease-in-out">Home</Link>
    <Link href={'/about'} className="hover:underline transition duration-300 ease-in-out">About</Link>
    <Link href={'/project'} className="hover:underline transition duration-300 ease-in-out">Project</Link>
    <Link href={'/contact'} className="hover:underline transition duration-300 ease-in-out">Contact</Link>
</div>
</div>

    </> 
  )
}

export default Navbar