import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNote, deleteeNote, fetchNotesUserById, updateNote } from "./notesApi";

export const fetchNotesAsync = createAsyncThunk(
  "notes/fetch",
  async (userId) => {
    const response = await fetchNotesUserById(userId);
    console.log(response instanceof Array)
    console.log(response)
    return response; // Assuming your API returns an array of notes
  }
);

export const addNoteAsync = createAsyncThunk("notes/add", async (note) => {
  const response = await createNote(note);
  console.log(response)
  return response; // Assuming your API returns the newly created note
});

export const updateNoteAsync = createAsyncThunk(
  "notes/update",
  async (update) => {
    const response = await updateNote(update);
    return response.data; // Assuming your API returns the updated note
  }
);

export const deleteNoteAsync = createAsyncThunk(
  "notes/delete",
  async (id) => {
    await deleteeNote(id);
    return id;
  }
);



const notesSlice = createSlice({
  name: "notes",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    resetNote: (state) => {
      state.data = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchNotesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNoteAsync.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateNoteAsync.fulfilled, (state, action) => {
        const update = action.payload;
        const index = state.data.findIndex((note) => note.id === update.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteNoteAsync.fulfilled, (state, action) => {
        const noteId = action.payload;
        state.data = state.data.filter((note) => note.id !== noteId);
      });
  },
});

export const {resetNote } = notesSlice.actions;

export const selectUserNotes = (state)=>state.notes.data 


export default notesSlice.reducer;
