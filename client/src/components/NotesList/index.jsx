import * as notesApi from '../../utilities/notes-api'

export function NotesList({ notes, setNotes }) {
    async function handleClick(noteId) {
        await notesApi.deleteNote(noteId)
        setNotes(notes.filter(note => note._id !== noteId))
    }

    const notesArray = Object.values(notes);
    const notesList = notesArray.map((note) => (
        <div className="list-group-item" key={note._id}>
            <p>{note.text}</p>
            <p>{new Date(note.createdAt).toLocaleDateString("en-AU")} @ {new Date(note.createdAt).toLocaleTimeString("en-AU")}</p>
            <button onClick={() => handleClick(note._id)} className="btn btn-secondary">Delete</button>
        </div>
    ))
    return (
        <ul className="list-group">
            {notesList}
        </ul>
    )
}