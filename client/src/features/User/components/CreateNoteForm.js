import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../userSlice";

const CreateNoteForm = ({ onClose, onSubmit }) => {
  const user = useSelector(selectLoggedInUser)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  // console.log(errors.text.message)

  const handleFormSubmit = (data) => {
    console.log(data);
    onSubmit(data);
    onClose();
  };
  useEffect(() => {
    if (user) {
      setValue('userId',user.id)
    }
  },[user,setValue])
  // useEffect(() => {
  //   if (user) {
  //     setValue('userId', user.id)
    
  //   }, [setValue]))


  const currentMonth = new Date().toLocaleDateString('en-US', { month: '2-digit' });
  return (
    <div className="fixed w-full z-50  overflow-y-scroll inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <section className="bg-white h-full  w-[100%] dark:bg-gray-900 sm:w-[70%] lg:w-[50%] ">
        <div className=" px-4 mx-auto lg:py-4">
          <h2 className="my-4 mt-10 text-2xl font-bold text-gray-900 dark:text-white">
            Add a new Note
          </h2>
          <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  for="userId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Id
                </label>
                <input
                  readOnly
                  type="text"
                  {...register("userId", {
                    required: "User Id is required",
                  })}
                  name="userId"
                  id="userId"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="User Id"
                />
                {errors.userId && (
                  <span className="text-red-500">{errors.userId.message}</span>
                )}
              </div>
              
              <div className="w-full">
                <label
                  for="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  {...register("title", {
                    required: "title is required",
                  })}
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="enter your note title here"
                />
                {errors.title && (
                  <span className="text-red-500">{errors.title.message}</span>
                )}
              </div>
              <div className="w-full">
                <label
                  for="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  readOnly
                  type="text"
                  {...register("date")}
                  value={new Date().toLocaleDateString()}
                  name="date"
                  id="date"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                {errors.date && (
                  <span className="text-red-500">{errors.date.message}</span>
                )}
              </div>
              <div className="w-full hidden">
      <label
        htmlFor="title"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Month
      </label>
      <input
        type="text"
        {...register("month")}
        value={currentMonth}
        name="month"
        id="month"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
      {errors.date && (
        <span className="text-red-500">{errors.date.message}</span>
      )}
    </div>
              <div>
                <label
                  for="type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  {...register("type", {
                    required: "type is required",
                  })}
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select type of your note</option>
                  <option value="casual">casual</option>
                  <option value="important">important</option>
                </select>
                {errors.type && (
                  <span className="text-red-500">{errors.type.message}</span>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  for="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Content
                </label>
                <textarea
                  {...register("text", {
                    required: "text is required",
                  })}
                  id="text"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your text here"
                ></textarea>
                {errors.text && (
                    <span className="text-red-500">{errors.text.message}</span>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add Note
              </button>
              <button
                onClick={onClose}
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

//  <div className="bg-white p-6 rounded-md shadow-md w-96">
//  <h2 className="text-2xl font-bold mb-4">Create New Note</h2>
//  <form onSubmit={handleSubmit(handleFormSubmit)}>
//    <div className="form-group mb-4">
//      <label className="block text-gray-700 text-sm font-bold mb-2">User ID:</label>
//      <input type="text" name="userId" {...register("userId", {
//                  required: "userId is required",
//                })} />
//      {/* {errors.userId && <span className="error">{errors.userId.message}</span>} */}
//    </div>
//    <div className="form-group mb-4">
//      <label className="block text-gray-700 text-sm font-bold mb-2">ID:</label>
//      <input type="text" name="id" {...register("Id", {
//                  required: "id is required",
//                })} />
//      {/* {errors.id && <span className="error">{errors.id.message}</span>} */}
//    </div>
//    <div className="form-group mb-4">
//      <label className="text-2xl font-bold mb-4">Title:</label>
//      <input type="text" name="title"{...register("title", {
//                  required: "title is required",
//                })} />
//      {/* {errors.title && <span className="error">{errors.title.message}</span>} */}
//    </div>
//    <div className="form-group mb-4">
//      <label className="text-2xl font-bold mb-4">Content:</label>
//      <textarea name="content" {...register("content", {
//                  required: "title is required",
//                })} />
//      {/* {errors.content && <span className="error">{errors.content.message}</span>} */}
//    </div>
//    <div className="form-group">
//      <label>Type:</label>
//      <input type="text" name="type" {...register("type", {
//                  required: "type is required",
//                })}/>
//      {/* {errors.type && <span className="error">{errors.type.message}</span>} */}
//    </div>
//    <div className="form-group mb-4">
//      <label className="text-2xl font-bold mb-4">Date:</label>
//      <input type="text" name="date" value={new Date().toLocaleDateString()} disabled />
//    </div>
//    <div className="form-group mb-4">
//      <button type="submit">Submit</button>
//      <button type="button" onClick={onClose}>Cancel</button>
//    </div>
//  </form>
// </div>

export default CreateNoteForm;
