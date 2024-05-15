import { notesApi, useGetNotesQuery } from "./api/notesApi";
import { notesActions, notesReducer } from "./model/notesSlice";
import ClosedNote from "./ui/ClosedNote/ClosedNote";
import OpenedNote from "./ui/OpenedNote/OpenedNote";

export { OpenedNote, ClosedNote, notesReducer, notesActions, notesApi, useGetNotesQuery };