import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectLoggedInUser, signOutAsync } from '../userSlice'
import { resetNote } from '../../Notes/notesSlice'

export default function Logout() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  useEffect(() => {
    dispatch(signOutAsync())
    // dispatch(resetNote())
  })
  return (
    <>
    { !user && <Navigate to={'/login'} replace={true}></Navigate>}
    </>
  )
}
