export function NotesList({ notes }) {
    const notesList = notes.map((note) => (
        <div className="list-group-item" key={note._id}>
            <p>{note.text}</p>
            <p>{new Date(note.createdAt).toLocaleDateString()}</p>
        </div>
    ))
    return (
        <ul className="list-group">
            {notesList}
        </ul>
    )
}