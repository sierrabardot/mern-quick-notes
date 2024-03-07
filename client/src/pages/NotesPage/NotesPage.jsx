import { useState } from 'react';
import { AddNoteForm } from "../../components/AddNoteForm/index"
import { NotesList } from "../../components/NotesList/index"

export function NotesPage() {
    const [notes, setNotes] = useState([])

    return (
        <div>
            <AddNoteForm />
            { notes ? (
                <>
                    <p>No Notes Yet!</p>
                </>
            ) : (
                <NotesList />
            )}
        </div>
    );
}
