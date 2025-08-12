import axios from 'axios';
import type { Note, FetchNotesResponse, CreateNotePayload } from '../types/note';

const API_URL = 'https://notehub-public.goit.study/api';
const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export const fetchNotes = async ({ page = 1, perPage = 12, search = '' }: FetchNotesParams): Promise<FetchNotesResponse> => {
  const { data } = await axiosInstance.get('/notes', {
    params: { page, perPage, search },
  });
  return data;
};

export const createNote = async (newNote: CreateNotePayload): Promise<Note> => {
  const { data } = await axiosInstance.post('/notes', newNote);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await axiosInstance.delete(`/notes/${id}`);
  return data;
};