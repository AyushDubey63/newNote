import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../userSlice";

const UpdateNoteForm = ({ note, onClose, onSubmit }) => {
  const user = useSelector(selectLoggedInUser)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  // console.log(errors)
  const newNote = note;
  console.log(newNote.id)
  useEffect(() => {
    if (newNote) {
      setValue('userId',user.id)
      setValue('title',newNote.title)
      setValue('id',newNote.id)
      setValue('text',newNote.text)
      setValue('type',newNote.type)
    }
  },[newNote,setValue])

  const handleUpdate = (data) => {
    onSubmit(data)
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <section className="bg-white w-full h-full dark:bg-gray-900 sm:w-[50%]">
        <div className=" px-4 mx-auto  lg:py-14">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update new Note
          </h2>
          <form noValidate onSubmit={handleSubmit(handleUpdate)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label
                  for="userId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Id
                </label>
                <input
                  type="text"
                  readOnly
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
              
              <div className="sm:col-span-2 hidden">
                <label
                  for="userId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Note
                </label>
                <input
                  type="text"
                  readOnly
                  {...register("id", {
                    required: "Id is required",
                  })}
                  name="id"
                  id="id"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="id"
                />
                {errors.id && (
                  <span className="text-red-500">{errors.id.message}</span>
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
                  type="text"
                  readOnly
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
                {errors.content && (
                  <span className="text-red-500">{errors.content.message}</span>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Update Note
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

export default UpdateNoteForm;
