import React from 'react'
import spot from './Imgs/spot.png'
import { AiFillCaretDown, AiFillHeart, AiFillHome, AiFillPlusSquare, AiFillStepBackward, AiOutlineHome, AiOutlineLeft, AiOutlineRight, AiOutlineStepBackward, AiOutlineUser } from 'react-icons/ai'
import { BsBookmarkFill, BsFillPlayFill, BsFillSuitHeartFill, BsPip, BsSearch } from 'react-icons/bs'
import { BiBarChart, BiHeartSquare, BiLibrary, BiRepeat, BiTime, BiVolumeFull } from 'react-icons/bi'
import { RxShuffle } from 'react-icons/rx'
import { IoIosSkipBackward } from 'react-icons/io'
import { TbMicrophone2 } from 'react-icons/tb'
import { MdConnectedTv, MdOutlineTv, MdQueueMusic } from 'react-icons/md'
const Sponav = () => {
    return (

        <>
            {/* navbar */}
            <div className="h-screen flex ">

                <div className="mainbox w-60 flex relative px-3 flex-col bg-black h-screen  ">
                    <div className="spot">
                        <img src={spot} alt="logo" className='w-32 -mt-3   h-32 object-contain' />
                    </div>
                    <div className="flex flex-col space-y-10 relative ">

                        <div className="items1 flex flex-col space-y-5 ">
                            <div className="home flex space-x-3 items-center cursor-pointer">
                                <div className="homeicon">
                                    <AiOutlineHome className='w-7 h-7  text-white' />
                                </div>
                                <p className='text-base text-white  font-semibold'>Home</p>
                            </div>
                            <div className="search flex space-x-3 items-center cursor-pointer">
                                <div className="searchicon">
                                    <BsSearch className='w-7 h-7 text-white ' />
                                </div>
                                <p className='text-base text-white/80 hover:text-white transition-all font-semibold'>Search</p>
                            </div>
                            <div className="lib flex space-x-3 items-center  cursor-pointer">
                                <div className="libicon">
                                    <BiLibrary className='w-7 h-7 text-white ' />
                                </div>
                                <p className='text-base text-white/80 hover:text-white transition-all font-semibold'>Library</p>
                            </div>
                        </div>
                        <div className="items2 flex flex-col space-y-5">
                            <div className="playlist flex space-x-3 items-center  cursor-pointer">
                                <div className="playlisticon">
                                    <AiFillPlusSquare className='w-7 h-7 text-white/80 ' />
                                </div>
                                <p className='text-base text-white/80 hover:text-white transition-all font-semibold'>Create Playlist</p>
                            </div>
                            <div className=" flex space-x-3 items-center  cursor-pointer">
                                <div className="">
                                    <BiHeartSquare className='w-7 h-7 text-violet-600    ' />
                                </div>
                                <p className='text-base text-white/80 hover:text-white transition-all font-semibold'> Liked Songs</p>
                            </div>
                            <div className=" flex space-x-3 items-center  cursor-pointer ">
                                <div className="">
                                    <BsBookmarkFill className='w-7 h-7 text-green-500    ' />
                                </div>
                                <p className='text-base text-white/80 hover:text-white transition-all font-semibold'> Your Episodes</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">

                            <div className=" h-[1.3px] bg-white/20  w-full "></div>
                        </div>
                    </div>
                    <div className="mt-2   ">
                        <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-40   object-cover scale-125' />
                    </div>

                </div>
                <div className="mainbody relative bg-gradient-to-b from-[#0C142A] to-[#6378b3] w-full flex flex-col  h-screen ">
                    <div className="absolute h-1/2 bottom-10 bg-gradient-to-t w-full from-black z-0  to-transparent"></div>
                    <div className="absolute top-0 text-gray-600  text-[10px] mt-3 text-center w-full  ">this is spotify UI clone created by Shrinil Dhorda , best displayed on screens having width= 1440px</div>
                    <div className="nav px-6 py-5 flex justify-center items-center">
                        <div className="leftright flex space-x-4 flex-1 ">
                            <AiOutlineLeft className='w-8 h-8 p-1  cursor-pointer bg-gray-800  rounded-full text-white' />
                            <AiOutlineRight className='w-8 h-8 p-1 cursor-not-allowed bg-gray-800 opacity-50 rounded-full text-white' />
                        </div>
                        <div className="item2 flex space-x-4">
                            <div className="explore border border-gray-700 rounded-full font-bold  text-white px-3 flex items-center text-sm hover:border-white hover:scale-105 transition-all py-1 select-none ">Explore Premium</div>

                            <div className="username relative bg-gray-900  rounded-full pr-3 pl-1 py-1  text-white font-semibold flex justify-center items-center space-x-2 cursor-pointer">
                                <div className="">
                                    <AiOutlineUser className='w-5 h-5 scale-[130%]  bg-gray-600 rounded-full' />
                                </div>
                                <p className='font-bold text-sm'>

                                    Shrinil
                                </p>
                                <div className="">

                                    <AiFillCaretDown className='w-5 h-5 ' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="songinfo flex space-x-7 px-6 py-5 items-end ">
                        <div className="songimg shadow-2xl ">
                            <img src="https://shrinil-productions.vercel.app/static/media/ps65.cd2aee2454d95ac1af1f.webp" alt="" className='w-60 h-60 object-cover    ' />
                        </div>
                        <div className="songdesc flex flex-col space-y-8  ">
                            <div className="flex flex-col space-y-1">

                                <p className='font-bold text-sm text-white uppercase'>Album</p>
                                <p className='text-8xl font-bold text-white capitalize select-none' >The eternal love</p>
                            </div>
                            <p className='text-sm text-white font-bold '>Shrinil . 500 songs</p>
                        </div>
                    </div>
                    {/* songs list */}
                    <div className="mainlist w-full px-6 overflow-y-hidden bg-black/20 backdrop-blur-md h-screen ">
                        <div className="navlist mt-5">

                            <BsFillPlayFill className='w-14 h-14 p-2.5 hover:scale-105 hover:brightness-105 bg-green-500 rounded-full  ' />
                        </div>

                        <div className="songlist  px-4  mt-6  space-y-5  ">
                            <div className="grid grid-cols-4  gap-y-5 pb-2.5 relative">

                                <div className="flex justify-self-start space-x-3">

                                    <div className=" uppercase text-gray-300 tracking-wider text-sm "># </div>
                                    <div className=" uppercase text-gray-400 tracking-wider  text-sm ">Title </div>
                                </div>

                                <div className=" uppercase justify-self-end  text-gray-400 tracking-wider  text-sm">Album </div>

                                <div className=" uppercase text-gray-400 tracking-wider justify-self-end  text-sm">Date added </div>

                                <div className=" uppercase text-gray-400 tracking-wider justify-self-end text-sm ">
                                    <BiTime className='w-5 h-5 text-gray-400' />
                                </div>
                                <div className="absolute bg-white/20  h-[0.6px] w-full top-7 "></div>
                                {/* 1st data */}
                                <div className="  justify-self-start     ">
                                    <div className="flex  space-x-3 items-center">
                                        <div className=" uppercase text-gray-300 tracking-wider  ">
                                            {/* <BiBarChart className='w-6 h-6 text-green-600 font-semibold' /> */}
                                            1
                                        </div>
                                        <div className="  text-gray-300 flex space-x-4  ">
                                            <img src="https://shrinil-productions.vercel.app/static/media/ps65.cd2aee2454d95ac1af1f.webp" alt="" className='w-11 h-11 object-cover    ' />
                                            <div className='namesong flex flex-col  '>
                                                <p className="head capitalize text-gray-200  font-semibold">The eternal love</p>
                                                <p className="desc capitalize text-gray-400 font-semibold text-[15px]">Shrinil Dhorda</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="album justify-self-end">
                                    <div className="uppercase    text-gray-500 font-semibold">pleasure</div>
                                </div>

                                <div className="  justify-self-end  text-gray-400 tracking-wider   ">12 hours ago </div>
                                <div className="  justify-self-end  text-gray-400 flex space-x-9   ">
                                    <div className="heart">
                                        <BsFillSuitHeartFill className='w-5 h-5 mt-0.5  text-green-500' />
                                    </div>
                                    <div className="time">3:20</div>
                                </div>
                                {/* 1st data end */}

                                <div className="  justify-self-start     ">
                                    <div className="flex  space-x-3 items-center">
                                        <div className=" uppercase text-gray-300 tracking-wider  ">
                                            {/* <BiBarChart className='w-6 h-6 text-green-600 font-semibold' /> */}
                                            2
                                        </div>
                                        <div className="  text-gray-300 flex space-x-4  ">
                                            <img src="https://images.pexels.com/photos/14270562/pexels-photo-14270562.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-11 h-11 object-cover    ' />
                                            <div className='namesong flex flex-col  '>
                                                <p className="head capitalize text-gray-200  font-semibold">beacuse of you</p>
                                                <p className="desc capitalize text-gray-400 font-semibold text-[15px]">Eguina remark</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="album justify-self-end">
                                    <div className="uppercase    text-gray-500 font-semibold">pleasure</div>
                                </div>

                                <div className="  justify-self-end  text-gray-400 tracking-wider    ">17 hours ago </div>
                                <div className="  justify-self-end  text-gray-400 flex space-x-9   ">
                                    <div className="heart">
                                        <BsFillSuitHeartFill className='w-5 h-5 mt-0.5  text-green-500' />
                                    </div>
                                    <div className="time">4:13</div>
                                </div>
                                {/* 2nd data end */}
                                <div className="  justify-self-start     ">
                                    <div className="flex  space-x-3 items-center">
                                        <div className=" uppercase text-gray-300 tracking-wider  ">
                                            {/* <BiBarChart className='w-6 h-6 text-green-600 font-semibold' /> */}
                                            2
                                        </div>
                                        <div className="  text-gray-300 flex space-x-4  ">
                                            <img src="https://images.pexels.com/photos/13862593/pexels-photo-13862593.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-11 h-11 object-cover    ' />
                                            <div className='namesong flex flex-col  '>
                                                <p className="head capitalize text-gray-200  font-semibold">beacuse of you</p>
                                                <p className="desc capitalize text-gray-400 font-semibold text-[15px]">Eguina remark</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="album justify-self-end">
                                    <div className="uppercase    text-gray-500 font-semibold">pleasure</div>
                                </div>

                                <div className="  justify-self-end  text-gray-400 tracking-wider   ">17 hours ago </div>
                                <div className="  justify-self-end  text-gray-400 flex space-x-9   ">
                                    <div className="heart">
                                        <BsFillSuitHeartFill className='w-5 h-5 mt-0.5  text-green-500' />
                                    </div>
                                    <div className="time">4:13</div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[92px] bg-[#181818] w-full absolute bottom-0 px-4 flex">
                <div className="songinfo flex space-x-7 items-center justify-between w-full">
                    {/* first */}
                    <div className="flex space-x-7 items-center ">

                        <div className="song flex flex-col items-start">
                            <p className='text-base  font-semibold text-gray-200 capitalize '>  The star dream</p>
                            <p className='text-[12px] text-gray-200 capitalize'> Shrinil Dhorda</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <div className="heart">
                                <BsFillSuitHeartFill className='w-4 h-4   text-green-500' />
                            </div>
                            <div className="">
                                <BsPip className='w-4 h-4  text-gray-500' />
                            </div>
                        </div>
                    </div>
                    {/* second */}

                    <div className="">
                        <div className="flex flex-col items-center space-y-1    ">

                            <div className="firstitems flex items-center space-x-6">
                                <div className="">
                                    <RxShuffle className='w-4  h-4 text-white' />
                                </div>
                                <div className="">
                                    <IoIosSkipBackward className='w-5 h-5 text-white' />
                                </div>
                                <div className="">

                                    <BsFillPlayFill className='w-8 h-8 hover:scale-105  bg-gray-200 rounded-full  ' />
                                </div>
                                <div className="">
                                    <IoIosSkipBackward className='w-5 h-5 text-white rotate-180' />
                                </div>
                                <div className="">
                                    <BiRepeat className='w-5 h-5 text-white rotate-180' />
                                </div>
                            </div>
                            <div className="line flex items-center   space-x-2">
                                <p className='text-gray-300 text-[12px]'>2:23</p>
                                <div className="w-[500px] bg-white/30 h-1 rounded-full relative">
                                    <div className="absolute inset-0 bg-gray-200 rounded-full w-1/2"></div>
                                </div>
                                <p className='text-gray-300 text-[12px]'>4:10</p>
                            </div>
                        </div>
                    </div>
                    {/* /third */}
                    <div className="flex items-center justify-center space-x-4">
                        <div className="">
                            <TbMicrophone2 className='w-5 h-5 text-white ' />
                        </div>
                        <div className="">
                            <MdQueueMusic className='text-white w-5 h-5' />
                        </div>
                        <div className="">
                            <MdConnectedTv className='text-white w-5 h-5' />
                        </div>
                        <div className="flex items-center space-x-1">

                            <div className="">
                                <BiVolumeFull className='text-white w-5 h-5' />
                            </div>
                            <div className="w-24 bg-white rounded-full h-1 hover:bg-green-500 ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Sponav