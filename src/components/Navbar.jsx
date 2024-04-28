import React from 'react'

function Navbar() {
  return (
    <>
    <div className="flex flex-wrap justify-between bg-black h-[8%] text-white pt-2">
        <div className="pl-5 text-lg">
            Basic Auth
        </div>
        <div className="flex flex-wrap">
            <div className="mx-4">Login</div>
            <div className="mx-4">Signup</div>
        </div>
    </div>
    </>
  )
}

export default Navbar