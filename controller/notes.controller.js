import { Note } from "../model/Notes.js"

export const fetchNotesByUserId = async (req, res) => {
  try {
    const { userId } =  req.params
    console.log(userId)
    const notes = await Note.find({userId:userId} )
    console.log(notes)
    res.status(200).json(notes)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const createNote = async (req, res) => {
  try {
    const note = new Note(req.body)
    const data = await note.save()
    console.log(note)
    res.status(201).json(data)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}





export const updateNote = async (req, res) => {
  const {id} = req.params
  try {
    const note = await Note.findByIdAndUpdate(id,req.body,{new : true})
    res.status(200).json(note)
  } catch (error) {
    res.status(400).json(error)
  }
}
export const deleteNote = async (req, res) => {
  const {id} = req.params
  try {
    const note = await Note.findByIdAndDelete(id,req.body,{new : true})
    res.status(200).json(note)
  } catch (error) {
    res.status(400).json(error)
  }
}

