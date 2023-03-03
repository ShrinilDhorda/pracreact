import React from 'react'

function Prac2() {
    return (
        <div className="h-screen   navbar">
            <nav className=' p-7 bg-gradient-to-b from-gray-400  to-transparent  '>
                <div className=" md:space-x-4 flex md:flex-row flex-col md:items-center space-y-5 md:space-y-0  ">

                    <div className="">
                        <img src="https://shrinildhorda.vercel.app/static/media/my.4ee0738226b1039ded81.webp" alt="" className='w-20 h-20 object-cover' />
                    </div>
                    <div className="itemss">
                        <ul className='flex md:flex-row flex-col md:space-x-6 space-y-5 md:space-y-0 '>
                            <li className='text-xl  font-bold text-gray-500'>Home</li>
                            <li className='text-xl font-bold text-gray-500'>About</li>
                            <li className='text-xl font-bold text-gray-500'>Contact Us</li>
                            <li className='text-xl font-bold text-gray-500'>Responsive</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Prac2