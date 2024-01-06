import React, { useEffect, useRef, useState } from 'react'
import avatar from '../../../assets/profile.png'
import styles from '../styles/Username.module.css'
import extend from '../styles/Profile.module.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUserAsync, selectAllUser, selectLoggedInUser, updateUserAsync } from '../userSlice'
import convertToBase64 from './utlity/convert'
import toast from 'react-hot-toast'





export default function UserProfile() {

  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser);
  const allUser = useSelector(selectAllUser)
  const [file, setFile] = useState()
  const fileInputRef = useRef(null);
  console.log(user)
  
  useEffect(() => {
    dispatch(fetchAllUserAsync())
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = useForm()

  const handleFormSubmit = (data) => {
    console.log(data)
    const updateData = { firstName: data.firstName, lastName: data.lastName, email: data.email, phoneNumber: data.phoneNumber, id: user.id, profilePic: file || data?.profile }
    dispatch(updateUserAsync(updateData))
    toast.success('Profile details updated successfully...!')

  }


  

  useEffect(() => {
    if (user) {
      setValue('firstName', user?.firstName);
      setValue('lastName', user?.lastName);
      setValue('email', user.email);
      setValue('phoneNumber', user?.phoneNumber);
    }
  }, [user, setValue])
  
  const hanldeImageClick = () => {
    fileInputRef.current.click();
  }

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    console.log(base64)
    setFile(base64)
  }

  useEffect(() => {
    console.log(file)
},[file])
  return (
    <div className='container mx-auto'>
      
  <div className="flex w-full justify-center  items-center h-full">
    <div className="w-full sm:w-5/6 md:w-2/3  bg-transparent backdrop-blur-xl visible rounded-xl px-5 sm:px-10 py-8">
      <div className="title flex flex-col items-center">
        <h4 className='text-2xl sm:text-4xl lg:text-5xl text-gray-800'>Your profile </h4>
        <span className='py-4 text-xl sm:text-lg w-2/3 text-center text-gray-500'>
          You can update the details
        </span>
      </div>


      <form noValidate className='py-1' onSubmit={handleSubmit(handleFormSubmit)}>
      <div className='profile overflow-hidden flex justify-center py-4'>
      <label htmlFor="profile" className="w-40 cursor-pointer border-4 border-gray-100 rounded-full shadow-lg hover:border-gray-200" onClick={hanldeImageClick}>
            <img src={ file || user.profilePic || avatar} alt="avatar" className="rounded-full shadow-lg" />
        </label>
        <input onChange={onUpload} ref={fileInputRef} type="file" name="profile" id="profile" className='hidden' />

      </div>
      <div className="textbox flex flex-col items-center gap-6">
        <div className="name flex w-full sm:w-3/4 gap-4 sm:gap-10">
          <input {...register("firstName", {
                    required: "First Name is required",
                  })} type="text" className="w-full border-0 px-4 sm:px-5 py-3 sm:py-4 rounded-xl shadow-sm text-base sm:text-lg focus:outline-none" placeholder='firstName'/>
          <input {...register("lastName", {
                    required: "Last Name is required",
                  })} type="text" className="w-full border-0 px-4 sm:px-5 py-3 sm:py-4 rounded-xl shadow-sm text-base sm:text-lg focus:outline-none" placeholder='lastName'/>
        </div>

        <div className="name flex w-full sm:w-3/4 gap-4 sm:gap-10">
          {/* <input type="text" className={`${styles.textbox} ${extend.textbox}`} placeholder='Mobile No.'/> */}
          <input type="text" {...register("email", {
                    required: "User Id is required",
                  })} className="w-full border-0 px-4 sm:px-5 py-3 sm:py-4 rounded-xl shadow-sm text-base sm:text-lg focus:outline-none" placeholder='Email*'/>
        </div>

              <div className="name flex w-full sm:w-3/4 gap-4 sm:gap-10">
          <input {...register("phoneNumber")} type="text" className={`${styles.textbox} ${extend.textbox}`} placeholder='Phone No.'/>
              </div>

              <div className="name flex w-full sm:w-3/4 gap-4 sm:gap-10">

              <button className="w-full border bg-indigo-500 py-3 sm:py-4 rounded-lg text-gray-50 text-lg sm:text-xl shadow-sm text-center" type='submit'>Update</button>
              </div>
      </div>
      <div className="text-center py-4">
        <span className='text-gray-500'>come back later <Link className='text-red-500' to="/logout">Logout</Link></span>
      </div>
      </form>
    </div>
  </div>
    </div>
  )
}
