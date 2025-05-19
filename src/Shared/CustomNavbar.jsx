"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoNotificationsSharp, IoChatbubbleEllipses, IoNotifications } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { FaRegUserCircle, FaHome, FaNetworkWired, FaNewspaper, FaThList } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { RiMenu2Line, RiContactsBook3Fill } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { GiLifeBar } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

import ssllogo from '../../public/images/ssltLogo.jpg'
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

// shadcn data

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,

} from "@/components/ui/drawer"


import { Button } from "@/components/ui/button"
import Resources from "@/app/components/NavbarResources/Resources";


function CustomNavbar() {



    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
      const [resoursedropdown, setresoursedropdown] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);


    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };



    const isActive = (href) => {
        return pathname === href ||
            (href !== '/' && pathname.startsWith(href));
    };


    
      const menuItemClass = (active) =>
        `text-lg font-semibold flex gap-3 items-center  pb-4 ${active ? "text-[#9EFF00]" : "text-white"}`;
    
      const renderDropdownIcon = (open) =>
        <IoIosArrowDown className={`text-2xl transition-transform ${open ? "rotate-180" : "rotate-0"}`} />;
    
    









    const links = (
        <>

            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm  font-semibold ${isActive('/') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/">Home</Link>
            </li>
            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm font-semibold relative ${isActive("/components/Services") ? "text-[#84C2DB]" : "text-black"} ${isOpen ? "text-[#84C2DB]" : "text-black"}`}>
                <button onClick={() => setIsOpen(!isOpen)} className="2xl:text-lg lg:text-[12px] xl:text-sm font-semibold" >
                    <span>Resources</span> <span> <IoIosArrowDown className={`2xl:text-lg lg:text-[12px] xl:text-sm mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} /></span>
                </button>

            </li>

            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm font-semibold ${isActive('/components/News') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/News">News & Updates</Link>
            </li>
            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm font-semibold ${isActive('/components/Gallary') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/Gallary">Gallary</Link>
            </li>
            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm font-semibold ${isActive('/components/Membership') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/Membership">Membership</Link>
            </li>
            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm font-semibold ${isActive('/components/About') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/About">About Us</Link>
            </li>
            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm font-semibold ${isActive('/components/Contact') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/Contact">Contact</Link>
            </li>
            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm font-semibold ${isActive('/components/Details') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/Details">Details</Link>
            </li>
            <li className={`2xl:text-lg lg:text-[12px] xl:text-sm font-semibold ${isActive('/Deshboard') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/Deshboard">Deshboard</Link>
            </li>


        </>

    );


    const mobileLinks = (
        <>
            <li className={`text-sm md:text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-lg md:text-2xl"><FaHome /></span>
                <Link href="/" onClick={closeDrawer}>Home</Link>
            </li>
            {/* <li
                className={`text-sm md:text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Services') ? 'text-[#84C2DB]' : 'text-white'
                    }`}
            >
                <span className="text-lg md:text-2xl">
                    <MdOutlineMiscellaneousServices />
                </span>

              
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full pr-5"
                >
                    <span className="text-start">Resources</span>
                    <IoIosArrowDown
                        className={`2xl:text-lg lg:text-[12px] xl:text-sm mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                    />
                </button>
            </li> */}

            <li className={`flex-col gap-3 py-2 text-sm md:text-lg font-semibold items-center border-b border-[#585858] pb-4 ${menuItemClass(false)}`}>
                <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setresoursedropdown(!resoursedropdown)}>
                    <div className="flex items-center gap-1">
                        <span className="text-2xl "><MdOutlineMiscellaneousServices /></span>
                        <span>Resources</span>
                    </div>
                    {renderDropdownIcon(resoursedropdown)}
                </div>
                {resoursedropdown && (
                    <ul className="ml-6 mt-2  border-gray-500 pl-4">
                        {/* <li className={menuItemClass(false)}>
                            <span className="text-2xl"><FaThList /></span>
                            <Link href="/dashboard/DashboardAbout/AboutDataList">All Genearal Mambership List</Link>
                        </li>
                        <li className={menuItemClass(false)}>
                            <span className="text-2xl"><FaThList /></span>
                            <Link href="/dashboard/DashboardAbout/AboutBannerList">Genearal Mambership Post List</Link>
                        </li> */}

                    </ul>
                )}
            </li>

            <li className={`text-sm md:text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/News') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-lg md:text-2xl"><FaNetworkWired /></span>
                <Link href="/components/News" onClick={closeDrawer}>News</Link>
            </li>
            {/* <li className={`text-sm md:text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Gallery') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-lg md:text-2xl"><VscServerProcess /></span>
                <Link href="/components/Gallery" onClick={closeDrawer}>Gallery</Link>
            </li> */}
            <li className={`text-sm md:text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Membership') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-lg md:text-2xl"><TbArrowRoundaboutRight /></span>
                <Link href="/components/Membership" onClick={closeDrawer}>Membership</Link>
            </li>
            <li className={`text-sm md:text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/About') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-lg md:text-2xl"><FaNewspaper /></span>
                <Link href="/components/About" onClick={closeDrawer}>About Us</Link>
            </li>
            <li className={`text-sm md:text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Contact') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-lg md:text-2xl"><GiLifeBar /></span>
                <Link href="/components/Contact" onClick={closeDrawer}>Contact</Link>
            </li>
        </>
    );







    return (
        <div className="sticky top-0 lg:top-5 z-40 ">
            <div className="navbar max-w-[1596px] h-14 md:h-16 lg:20 xl:h-24 mx-auto bg-white/60 backdrop-blur-sm rounded-none lg:rounded-3xl">
                <div className="navbar-start">
                    <Link href="/">
                        <h1 className="flex items-center gap-2">
                            <span className="text-lg md:text-3xl font-extrabold text-[#A259FF]">
                                <Image src={ssllogo} className=" h-10 w-10 xl:h-14 xl:w-14 rounded-full"></Image>
                            </span>
                            <span className="font-bold text-[14px] md:text-2xl text-black block ">
                                SSLT
                            </span>
                        </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3 lg:gap-1 xl:gap-3">{links}</ul>
                </div>

                <div className="navbar-end">

                    <div className="hidden lg:block px-5 xl:px-0">


                        <Link href={"/components/Auth"}>
                            <button className="btn text-black bg-[#84C2DB] rounded-full h-10 px-5 xl:h-12 2xl:text-lg lg:text-[12px] xl:text-sm font-medium border-none shadow-2xs">
                                <span>Member Login</span>
                            </button>
                        </Link>

                    </div>
                    <div className="dropdown">
                        <button
                            className="btn bg-[#84C2DB] shadow-2xs border-none lg:hidden"
                            onClick={toggleDrawer}
                        >
                            <RiMenu2Line className="text-2xl text-black" />
                        </button>

                        {/* Drawer with Animation */}
                        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            {/* Overlay */}
                            <div
                                className="fixed inset-0 bg-black/50 transition-opacity duration-300"
                                onClick={closeDrawer}
                            ></div>

                            {/* Drawer Side */}
                            <div className={`w-[90%] fixed top-0 left-0 h-full  max-w-md bg-[#84C2DB] text-white transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} `}>
                                <div className="flex pt-5 px-5 justify-between border-b border-[#585858] pb-6">
                                    <div>
                                        <h1 className="flex items-center gap-2">
                                            <span className="text-lg md:text-3xl font-extrabold text-[#A259FF]">
                                                <Image src={ssllogo} className=" h-10 w-10 rounded-full"></Image>
                                            </span>
                                            <span className="font-bold text-[14px] md:text-2xl text-white  block">
                                                SSLT
                                            </span>
                                        </h1>
                                    </div>
                                    <div>
                                        <button
                                            className="text-4xl text-white cursor-pointer"
                                            onClick={closeDrawer}
                                        >

                                            <p className="text-white text-4xl cursor-pointer" >X</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-y-auto h-[calc(100vh-2px)] bg-[#659cb3] -mt-6 pt-4 ">
                                    <ul className="pl-6 mt-0 space-y-2 ">
                                        {mobileLinks}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <AnimatePresence >
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: '80vh', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute w-full flex justify-center mt-0  z-50"
                    >
                        <div className="bg-white shadow-2xl shadow-[#949494] w-full max-w-[1596px] rounded-bl-lg rounded-br-lg hidden lg:block">
                            {/* Content goes here */}
                            <p className="text-white text-2xl">
                                <Resources></Resources>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>

    )
}

export default CustomNavbar