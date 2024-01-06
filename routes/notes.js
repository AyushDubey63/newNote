import { Router } from "express";
import { createNote, deleteNote, fetchNotesByUserId, updateNote } from "../controller/notes.controller.js";

export const notesRouter = Router()

notesRouter
  .get('/:userId', fetchNotesByUserId)
  .post('/',createNote)
  .patch('/:id',updateNote)
  .delete('/:id',deleteNote)

