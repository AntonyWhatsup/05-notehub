import React from "react";
import css from "./NoteList.module.css";
import type { Note } from "../../types/note";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../../services/noteService";

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deleteNote(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["notes"] });
      const previous = queryClient.getQueryData<{ notes: Note[] } | any>(["notes"]);
      if (previous?.notes) {
        queryClient.setQueryData(["notes"], {
          ...previous,
          notes: previous.notes.filter((n: Note) => n.id !== id),
        });
      } else if (Array.isArray(previous)) {
        queryClient.setQueryData(["notes"], previous.filter((n: Note) => n.id !== id));
      }
      return { previous };
    },
    onError: (_, __, context: any) => {
      if (context?.previous) {
        queryClient.setQueryData(["notes"], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => {
        const isDeleting = mutation.isPending && (mutation.variables === note.id);
        return (
          <li className={css.listItem} key={note.id}>
            <h2 className={css.title}>{note.title}</h2>
            <p className={css.content}>{note.content}</p>
            <div className={css.footer}>
              <span className={css.tag}>{note.tag}</span>
              <button
                className={css.button}
                onClick={() => mutation.mutate(note.id)}
                disabled={isDeleting}
                aria-disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;