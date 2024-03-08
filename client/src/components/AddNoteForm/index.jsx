import { useState } from "react"
import * as notesAPI from "../../utilities/notes-api"

export function AddNoteForm({ notes, setNotes }) {
    const [form, setForm] = useState({
        text: '',
    })
    const [error, setError] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const note = await notesAPI.createNote(form)
            setNotes(prevNotes => [...prevNotes, note]);
            setForm({ text: '' })
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div>
            <h2 className="my-4">Quick Notes</h2>
            <div>
                <form className="my-4" autoComplete="off" onSubmit={handleSubmit}>
                    <textarea
                        name="text"
                        value={form.text}
                        onChange={handleChange}
                        className="form-control my-4"
                        required
                    />
                    <button type="submit" className="btn btn-primary">Add Note</button>
                </form>
            </div>
            <p className="error-message">{error}</p>
        </div>
    )
}