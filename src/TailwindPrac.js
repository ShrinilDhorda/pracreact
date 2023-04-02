import React, { useEffect, useState } from 'react'
import Img from './wave.jpg'
import { GiNetworkBars } from 'react-icons/gi'
import { AiFillCamera, AiOutlineCamera, AiOutlineWifi } from 'react-icons/ai'
import { BsBatteryFull, BsUnlockFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
function TailwindPrac() {
    // const [num, setNum] = useState(0)
    // useEffect(() => {

    //     { alert("Hiii") }



    // }, [num])
    // empty array here,means jab page refresh hoga first time tab chalega ,uske baad nai chalega
    // write the var name where u want to see the effect,else it wont work when empty array is there
    return (
        <>

            <div><a href="./src/Spotify.js">Spotify</a></div>
            <div className="flex items-center justify-center ">
                <div className="relative group">
                    <img src="https://images.pexels.com/photos/15094640/pexels-photo-15094640.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className='rounded-md  ' />
                    <div className="absolute  text-justify bottom-0  
                  
                   text-white/60 bg-black/30 py-4 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, molestias reprehenderit numquam veritatis animi corrupti itaque mollitia suscipit voluptatem earum minus? Facilis molestiae asperiores soluta aliquam iusto, blanditiis quisquam autem dignissimos accusamus deleniti!</div>

                </div>

            </div>


            <div className="flex items-center justify-center py-10">
                <div className="relative group">
                    <img src="https://images.pexels.com/photos/15094640/pexels-photo-15094640.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className='rounded-md hover:opacity-80 transition-opacity duration-1000 ' />
                    <div className="absolute bottom-0 text-white z-10 px-4 text-justify ">
                        <div className="absolute bg-black/75 bottom-0 h-full inset-0  w-full z-0  "></div>
                        <div className="">

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae iusto repellat ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe delectus, soluta, dicta dolorum quam deleniti itaque quidem inventore velit quasi.
                        </div>
                    </div>

                </div>

            </div>
            {/* forms , circle blur design */}
            <div className="w-full flex justify-center items-center h-screen bg-gray-100 ">
                <div className="relative w-full max-w-lg">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full  mix-blend-multiply filter  opacity-75    animate-blob blur-xl "></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter opacity-70  animate-blob blur-xl animation-delay-2000  "></div>
                    <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter opacity-75  blur-xl animation-delay-4000 animate-blob"></div>
                    <form action="" className='flex w-1/2 mx-auto flex-col items-center  justify-center shadow-sm  py-20 gap-5 relative   '>
                        <div className="name flex ">
                            <input type="text" name='name' placeholder='Username' className='text-black py-2 px-4 bg-gray-200 outline-none rounded' />
                        </div>
                        <div className="name ">
                            <input type="text" name='name' placeholder='password' className='text-black py-2 px-4 bg-gray-200  rounded focus:outline-red-400' />
                        </div>
                        <div className="name ">
                            <input type="text" name='name' placeholder='Username' className='text-black py-2 px-4 bg-gray-200 outline-none rounded' />
                        </div>
                    </form>
                </div>

            </div>
            {/* uniquegallery */}
            <div className="h-screen uniquegallery p-3 bg-gray-50">
                <div className="text-black font-bold text-2xl">Lorem, ipsum dolor.</div>
                <div className="grid mt-3 ">
                    <div className="flex gap-3">
                        <div className="rounded w-40 h-40 bg-red-500 "></div>
                        <div className="text-sm to-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nostrum.</div>

                    </div>
                </div>
            </div>
            {/* cards prac */}
            <div className="h-screen flex justify-center items-center overflow-x-hidden gap-6 bg-white">
                <div className="group ">
                    <div className="card1 group  relative">
                        <div className=" bg-black absolute inset-0 p-10 text-white">Hi there </div>
                        <img src="https://images.pexels.com/photos/15045093/pexels-photo-15045093.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className='rounded w-80 hover:rotate-45 origin-bottom-right relative transition-all hover:duration-300 duration-1000' />

                    </div>
                </div>
                <div className="group ">
                    <div className="card1 group  relative">
                        <div className=" bg-black absolute inset-0 p-10 text-white">Hi there </div>
                        <img src="https://images.pexels.com/photos/15045093/pexels-photo-15045093.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className='rounded w-80 hover:rotate-45 origin-bottom relative transition-all hover:duration-300 duration-1000' />

                    </div>
                </div>
                <div className="group ">
                    <div className="card1 group  relative">
                        <div className=" bg-black absolute inset-0 p-10 text-white">Hi there </div>
                        <img src="https://images.pexels.com/photos/15045093/pexels-photo-15045093.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className='rounded w-80 hover:rotate-45 origin-left relative transition-all hover:duration-300 duration-1000' />

                    </div>
                </div>
            </div>
            {/* screen gradients */}
            <div className="h-screen bg-gray-500 flex gap-7 ">
                <div className="rounded-full h-80 w-80  bg-pink-700 filter blur-3xl absolute left-32 mix-blend-overlay "></div>
                <div className="rounded-full h-80 w-80 bg-blue-700 filter blur-3xl mix-blend-overlay animate-blob"></div>
            </div>
            {/* interesting btns */}
            <div className="h-screen bg-gradient-to-b from-orange-700 via-red-300  to-red-100 flex justify-center items-center flex-col space-y-10 ">
                <div className="relative w-1/3 cursor-pointer group" >
                    <div className="absolute bg-red-900 inset-0 rounded-sm w-0   group-hover:w-full transition-all duration-500   "></div>
                    <button className='sample bg-gradient-to-r from-red-300 to-transparent font-bold text-2xl relatve py-3  w-full     border  rounded-sm shadow-lg'>Submit</button>
                </div>
                <div className="nav ">
                    <div className="flex space-x-1 justify-center  cursor-pointer items-center">
                        <div className="items font-bold">Options</div>
                        <div className="font-semibold text-2xl">+</div>

                    </div>

                    <div className="navitems text-center ">

                        <div className="items">Home</div>
                        <div className="items">Order</div>
                        <div className="items">About</div>
                        <div className="items">Contact</div>
                    </div>
                </div>
            </div>
            {/* React hoooks */}
            {/* <div className="h-screen flex items-center justify-center  ">

                <button onClick={() => { setNum(num + 1) }} className='px-4 py-2 bg-blue-300 text-white text-xl font-semibold hover:bg-blue-700'> Hi there {num}</button>
            </div> */}
            <div className="h-screen flex justify-center items-center bg-slate-900">
                <div className="py-4 px-8 border-2 border-blue-500 relative   ">
                    {/* <img src={Img} alt="" className='wave absolute  inset-0 '/> */}
                    <button className='text-2xl uppercase text-blue-500  '>Shrinil Producitons</button>
                </div>
            </div>
            <div className="h-screen flex justify-center items-center flex-col bg-black">
                <div className="flex gap-5">
                    <div className="rounded-full bg-white w-7 h-7 animate-bigbounce  "></div>

                    <div className="rounded-full bg-white w-7 h-7 animate-bigbounce  animation-delay-1500 "></div>
                    <div className="rounded-full bg-white w-7 h-7 animate-bigbounce  animation-delay-2300"></div>
                    <div className="rounded-full bg-white w-7 h-7 animate-bigbounce  animation-delay-3000"></div>
                </div>
                <div className="border-2 w-1/4 ">

                </div>
                {/* <div className=" mt-10 relative group">
                    <div className="absolute bg-gray-600 h-0.5  inset-0  group-hover:h-full transition-all  duration-300 rounded-sm "></div>
                    <button className='font-semibold text-2xl    px-10 transition-all py-2  relative  text-gray-400'>Regsiter</button>
                </div> */}

                <div className=" mt-10 relative ">

                    <button className='font-semibold text-2xl    px-10 py-2 text-gray-400'>Regsiter</button>
                </div>
            </div>
            {/* card effect here */}
            <div className="h-screen flex items-center justify-center bg-black/95">
                <div className="flex justify-center relative group">
                    <img src="https://images.pexels.com/photos/14250723/pexels-photo-14250723.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className='w-2/4   hover:w-2/3 transition-all  duration-700  ' />
                    <div className="absolute content w-3/4 text-white -bottom-14 bg-gray-600  px-3 text-center group-hover:h-60 transition-all ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, impedit! Ipsa nostrum cumque architecto tenetur quasi ullam obcaecati vitae magnam debitis dolorem! </div>
                </div>
            </div>
            <div className="h-screen bg-slate-800 flex justify-center items-center flex-col">
                <div className="w-1/2 bg-slate-400 font-semibold rounded-md main flex justify-center items-center flex-col h-1/3  text-center px-7">

                    <h1 className='text-xl tracking-widest'>Hi there</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam, aliquid deserunt aliquam similique sit exercitationem optio, error magnam rem quia cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate.</p>
                </div>
                <div className="text-slate-500 text-sm mt-10">Using clip-path circle css property </div>
            </div>
            {/* iphone */}
            <div className="h-screen flex items-center justify-center bg-rose-50 ">
                <div className="w-[350px] relative h-[690px] bg-black rounded-[60px] overflow-hidden border-[14px] border-black " >
                    <img src="https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" className='inset-0  w-full object-cover h-full absolute ' />
                    <div className="absolute top-0 w-full  justify-center inset-x-0  flex ">
                        <div className="h-6 w-40 mx-auto bg-black rounded-b-3xl "></div>

                    </div>
                    {/* icons */}
                    <div className="icons relative mr-6 space-x-1 mt-1.5 flex justify-end text-white ">
                        <GiNetworkBars className='w-4 h-4' />
                        <AiOutlineWifi className='w-4 h-4' />
                        <BsBatteryFull className='w-4 h-4' />
                    </div>
                    <div className="absolute h-0.5 w-1/6 right-6 mt-2 opacity-60  bg-white"></div>
                    {/* time */}
                    <div className="relative w-full flex items-center   mt-4 flex-col justify-center space-y-2">
                        <div className="">

                            <BsUnlockFill className='w-10 h-10 text-white ' />
                        </div>
                        <div className="time text-white tracking-wider text-5xl font-thin">
                            9:55
                        </div>
                        <div className="time text-white tracking-wider text-md font-thin">
                            Monday, August 23
                        </div>
                    </div>
                    <div className="relative w-full mt-5 flex h-1/2  justify-center items-center ">
                        <div className="w-11/12 relative  mx-auto h-full  bg-slate-200/25 backdrop-blur-sm rounded-[14px] shadow-xl">
                            <div className="items2">
                                <div className="timedesc flex items-center justify-between">
                                    <div className="flex justify-start flex-col pl-3 mt-4">
                                        <div className="tracking-wide text-sm font-semibold ">9:30 AM</div>
                                        <div className="desc font-semibold">Your Morning Summary</div>
                                    </div>
                                    <div className="relative pr-5 ">
                                        <div className="absolute p-4 bg-gray-700/50 rounded-full "></div>
                                        <div className="relative text-white/80  inset-x-1">11</div>
                                    </div>
                                    {/* <div className="relative pr-3.5">
                                        <div className="absolute text-white inset-x-2">8</div>
                                        <div className="relative p-3.5 bg-gray-700/40 rounded-full "></div>
                                    </div> */}
                                </div>
                                {/* cards */}
                                <div className="pl-3  flex mt-3">
                                    <div className="card1 flex flex-col">
                                        <img src="https://images.pexels.com/photos/15418845/pexels-photo-15418845.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" className='h-20 w-32 object-cover' />
                                        <div className="shortdesc font-bold  text-base w-32">Here's your date partner!</div>
                                        <div className="shortdesc   text-sm  w-36 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="card1 flex flex-col">
                                        <img src="https://images.pexels.com/photos/14391382/pexels-photo-14391382.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" className='h-20 w-32 object-cover' />
                                        <div className="shortdesc font-bold  text-base w-32">Here's your date partner!</div>
                                        <div className="shortdesc   text-sm  w-36 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                </div>
                                <div className="bg-white/20 h-0.5 mt-3  shadow-xl  w-1/2 mx-auto"></div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-end pr-4 mt-10">
                        <div className="absolute rounded-full p-5 bg-gray-800/50"></div>
                        <AiFillCamera className='text-white text-xl -inset-x-2.5 inset-y-2 relative' />

                    </div>
                </div>

            </div>
            <div className="h-screen">
                <div className="flex bg-purple-500 bg-clip-text py-2 px-4 text-2xl font-semibold text-transparent">Instagram Stories</div>
                <div className="mains flex items-center space-x-6  px-4">
                    <div className="blocki relative mt-10 flex flex-col items-center justify-center">
                        <a href="https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <img src="https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="items1 h-20 w-20 rounded-full" alt="imh" />
                        </a>
                        <div className="text absolute -bottom-6">u1</div>
                        <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-white bg-blue-500 text-xl font-black text-white">+</div>
                    </div>
                    <div className="blocki relative mt-10 flex flex-col items-center justify-center">
                        <img src="https://images.pexels.com/photos/6752597/pexels-photo-6752597.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="items1 h-20 w-20 rounded-full" alt="" />
                        <div className="text absolute -bottom-6">u2</div>
                    </div>
                    <div className="blocki relative mt-10 flex flex-col items-center justify-center">
                        <img src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=600" className="items h-20 w-20 rounded-full" alt="" />
                        <div className="text absolute -bottom-6">u3</div>
                    </div>
                    <div className="blocki relative mt-10 flex flex-col items-center justify-center">
                        <img src="https://images.pexels.com/photos/3324591/pexels-photo-3324591.jpeg?auto=compress&cs=tinysrgb&w=600" className="items h-20 w-20 rounded-full" alt="" />
                        <div className="text absolute -bottom-6">u4</div>
                    </div>
                </div>
                {/* <!-- whatsappp --> */}
                <div className="h-[1000px]">

                    <div className="whatsapp mx-auto mt-7 h-[680px] w-[380px] overflow-hidden rounded-[16px] border-[6px] border-black  ">
                        <div className="wbitems flex items-center bg-teal-800 h-16 relative  px-4">
                            <div className="t1 flex-1 py-3 text-slate-300">Whatsapp Business</div>
                            <div className="flex items-center space-x-5">
                                <div className="cam">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#C0C2C9" className="h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                    </svg>
                                </div>
                                <div className="search">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#C0C2C9" className="h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#C0C2C9" className="h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 flex  mt-5 flex-col space-y-3 ">
                            <div className="w-full  bg-teal-700 h-20 flex justify-start items-center rounded-[40px]">
                                <div className="px-3 flex justify-start items-center space-x-3">
                                    <img src="https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className='rounded-full w-16 h-16 border-2 p-0.5 border-green-400' />
                                    <div className="text-white text-lg tracking-wide">Shrinil Dhorda</div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center  bg-teal-700 h-20 rounded-[40px]">

                            </div>
                            <div className="w-full  bg-teal-700 h-20  rounded-[40px]"></div>
                            <div className="w-full  bg-teal-700 h-20 rounded-[40px]"></div>

                        </div>
                    </div>
                </div>
                <div className="flex  justify-center items-center h-screen">
                    <div class="flex justify-center space-x-2">
                        <button
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="dark"
                            className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] bg-black/30">
                            Click me
                        </button>
                        {/* <!-- Required font awesome --> */}
                        <div class="flex justify-center space-x-2">
                            <div>
                                <button
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    class="flex items-center rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="mr-1 h-4 w-4">
                                        <path
                                            fill-rule="evenodd"
                                            d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    Button
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex justify-center items-center bg-gray-900">
                    <div className="">
                        <button className='text-purple-200 text-4xl   crush'>crush</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default TailwindPrac
