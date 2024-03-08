import { useState, useEffect } from 'react';
import { AddNoteForm } from "../../components/AddNoteForm/index"
import { NotesList } from "../../components/NotesList/index"
import * as notesAPI from "../../utilities/notes-api"

export function NotesPage() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const getNotes = async () => {
            const notes = await notesAPI.getNotes()
            setNotes(notes)
        }
        getNotes()
    }, [])

    return (
        <div>
            <AddNoteForm notes={notes} setNotes={setNotes} />
            { notes ? (
                <NotesList notes={notes} setNotes={setNotes} />
            ) : (
                <>
                    <p>No Notes Yet!</p>
                </>
            )}
        </div>
    );
}
