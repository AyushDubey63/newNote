import React, { useState } from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Notes from "../User/components/Notes";
import UserProfile from "../User/components/UserProfile";
import Logout from "../User/components/Logout";
import bg_img from '../../assets/bg_img.jpg'
import profile from '../../assets/profile.png'
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../User/userSlice";
import AboutUsPage from "../../Pages/AboutUsPage";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const menuItems = [
  { id: 'myNotes', icon: <svg
  className="w-6 h-6 fill-current inline-block"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
</svg>, label: 'My Notes' },
  { id: 'userProfile', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>, label: 'User Profile' },
  { id: 'about', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>, label: 'About App' },
  { id: 'logout', icon:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>, label: 'Logout' },
];

export default function Sidebar() {
  const user = useSelector(selectLoggedInUser)
  const [sidenav, setSidenav] = useState(true);
  const [navigate, setNavigate] = useState('myNotes')
  const [selectedMonth, setselectedMonth] = useState(0)
  const sortOptions = [
    { name: 'all',value:"0", current: true },
    { name: 'January',value:"01", current: false },
    { name: 'February',value:"02", current: false },
    { name: 'March',value:"03", current: false },
    { name: 'April',value:"04", current: false },
    { name: 'May',value:"05", current: false },
    { name: 'June',value:"06", current: false },
    { name: 'July',value:"07", current: false },
    { name: 'August',value:"08", current: false },
    { name: 'September',value:"09", current: false },
    { name: 'October',value:"10", current: false },
    { name: 'November',value:"11", current: false },
    { name: 'December',value:"12", current: false },
  ]

  const handleToggleSidebar = () => {
    setSidenav(prev=>!prev)
    console.log(sidenav)
  }
  return (
    <div className="font-poppins antialiased">
      <div
        id="view"
        className="h-full w-screen flex flex-row"
        x-data="{ sidenav: true }"
      >
        <button
          onClick={handleToggleSidebar}
          className="p-2 z-20 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
        >
          <svg
            className="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
       <div
          id="sidebar"
          className={`bg-[#d268cc] ${sidenav? 'visible' :'hidden'} h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out`}
        >
           <div className="bg-transparent backdrop-blur-md space-y-6 md:space-y-10 mt-10">
            <h1 className="font-bold text-4xl text-center md:hidden">
              D<span className="text-teal-600">.</span>
            </h1>
            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
              The Notes<span className="text-teal-600">.</span>
            </h1>
            <div id="profile" className="space-y-3">
              <img
                src={user.profilePic || profile}
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-[#2d1a57]">
                  {user.firstName}
                </h2>
                <p className="text-xs text-gray-500 text-center">{ user.email}</p>
              </div>
            </div>

            <div id="menu" className="flex flex-col space-y-2">
            {menuItems.map((item) => (
          <span
            key={item.id}
            id={item.id}
            onClick={() =>setNavigate(item.id)}
            className="text-sm xsm:flex xsm:justify-center font-medium text-[#2d1a57] py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
          >
            {item.icon}
            <span className="xsm:hidden">{item.label}</span>
          </span>
        ))}
            </div>
          </div>
        </div>
        <main className="flex-1 ">
          <div style={{backgroundImage:`url(${bg_img})`}} className="mx-auto bg-cover bg-center  w-full h-screen overflow-y-scroll pt-2  sm:px-2 lg:px-2 ">
            <div className="bg-transparent flex flex-col gap-2">

              {navigate === 'myNotes' && 
                <>
                  <div className="flex sticky top-0 z-10 bg-transparent border-white rounded-[2rem] flex-row   justify-between py-4 px-5">
                <div className="">
                  <h1 className="text-6xl pl-5 font-mono block text-[#2d1a57] backdrop-blur-md">My Notes</h1>
                </div>
              <div className="pr-5 flex justify-center items-center">
              <Menu as="div" className=" backdrop-blur-md relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-xl font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <p
                              value={option.value}
                              onClick={() => { setselectedMonth(option.value); console.log(option.value) }}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              </div>
            </div>
              <div  className="rounded-[2rem]  bg-transparent">
             <Notes month={selectedMonth}></Notes>
                
                  </div></>}
              
              {
                navigate === 'userProfile' &&
                <UserProfile> </UserProfile>
              }
              {
                navigate === 'logout' &&
                <Logout> </Logout>
              }
              {
                navigate === 'about' &&
                <AboutUsPage></AboutUsPage>
              }
              </div>
          </div>
        </main>
      </div>
    </div>
  );
}
