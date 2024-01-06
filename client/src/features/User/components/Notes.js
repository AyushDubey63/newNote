import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNoteAsync,
  deleteNoteAsync,
  fetchNotesAsync,
  selectUserNotes,
  updateNoteAsync,
} from "../../Notes/notesSlice";
import { fetchAllUserAsync, selectLoggedInUser, selectAllUser } from "../userSlice";
import CreateNoteForm from "./CreateNoteForm";
import UpdateNoteForm from "./UpdateNoteForm";
import toast from "react-hot-toast";



export default function Notes({ month }) {
  const selectedMonth = month
  console.log(selectedMonth)
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const notes = useSelector(selectUserNotes);
  const [note, setNote] = useState()
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [updateFormOpen, setUpdateFormOpen] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);
  
  console.log(user);

  useEffect(() => {
    dispatch(fetchAllUserAsync());
  }, []);

  useEffect(() => {
      dispatch(fetchNotesAsync(user.id));
    
  }, [user]);

  useEffect(() => {
    if (month == 0) {
      setFilteredNotes(notes);
      console.log(notes);
    } else {
      const filtered = notes.filter((note) => note.month === month);
      setFilteredNotes(filtered);
      console.log(filtered)
    }
  }, [month, notes]);


  const handleCreateNote = (data) => {
    // Handle submitting the note data (e.g., dispatching an action to update the state)
    console.log("Creating note:", data);
    dispatch(addNoteAsync(data));
    toast.success('Notes created successfully...!')
  };

  const handleUpdateForm = (data) => {
    dispatch(updateNoteAsync(data))
    setUpdateFormOpen(false)
    toast.success('Notes updated successfully...!')

  }

  const handlleDelete = (id) => {
    dispatch(deleteNoteAsync(id));
  };

 

  return (
      <div className="mx-auto  max-w-2xl px-4  sm:px-6 sm:py-10 lg:max-w-7xl ">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
        {updateFormOpen && (
                      <UpdateNoteForm
                        note={note}
                        onClose={() => setUpdateFormOpen(false)}
                        onSubmit={handleUpdateForm}
                      />
      )}
      {isFormOpen && (
              <CreateNoteForm
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleCreateNote}
              />
            )}
      <div className=" mt-2 grid justify-items-center grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {notes.length===0 && (
          <span className="text-blue-950 col-span-3 text-3xl bg-transparent backdrop-blur-md">Got something to note down.. Create a new note here ...</span>
        ) }
          {filteredNotes.map((note) => (
            <div className=" text-[#2d1a57] w-full p-1 max-w-sm bg-transparent backdrop-blur-md border-2 border-[#2d1a57] rounded-[2rem] shadow ">
              <div className="h-[22rem]" >
                <textarea
                  value={note.text} // Display product name in the textarea
                  readOnly
                  className="text-xl  border-2 outline-none border-[#2d1a57] font-bold font-mono aspect-h-1 h-[95%] aspect-w-1 w-full overflow-hidden rounded-[2rem] bg-transparent backdrop-blur-md lg:aspect-none group-hover:opacity-75 lg:h-80 p-4"
                />
              </div>
              <div className="px-4 max-w-full text-lg border-2 border-[#2d1a57]  rounded-[2rem] py-1">
                
                <div className="flex flex-col items-left  gap-2 justify-between mt-1 mb-2">
                  <div className="text-sm text-[#2d1a57]">Note Id #{note.id}</div>
                  <div className="flex justify-start ">
                  <span className={` ${note.type=='important'? 'dark:bg-red-300':'dark:bg-blue-300'} text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  dark:text-blue-800 `}>
                    {note.type}
                    </span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl leading-7 font-bold text-[#2d1a57]">
                    {note.title}
                  </span>
                  <div className="flex gap-5 justify-between">
                    <button
                      className="text-green-500 "
                      onClick={() => { setUpdateFormOpen(true); setNote(note)}}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 transition duration-150 ease-in-out hover:backdrop-blur-xl hover:text-green-600 hover:scale-110"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                    

                    <button
                      className="text-red-500"
                      onClick={() => handlleDelete(note.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 transition duration-150 ease-in-out hover:backdrop-blur-xl hover:text-red-600 hover:scale-110"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div >
                  <h5 className="text-xl font-semibold tracking-tight text-[#2d1a57]">
                    {note.date}
                  </h5>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className="flex flex-col justify-center items-center h-full">
              <button className="transition duration-150 ease-in-out hover:rounded-full hover:backdrop-blur-xl hover:text-green-600 hover:scale-110" onClick={() => setIsFormOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-20 text-green-600 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <span className="text-green-600 text-2xl font-bold font-mono ">Add new note</span>
            </div>

            
          </div>
        </div>
      </div>
    
  );
}

