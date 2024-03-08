const Notes = require('../models/note');

module.exports = {
    getNotes,
    create,
    delete: deleteNote,
};

async function getNotes(req, res) {
    try {
        const notes = await Notes.find({ user: req.user.sub });
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error,
        });
    }
}

async function create(req, res) {
    const user = req.user.sub;
    const text = req.body.text;
    const noteData = { text, user };
    try {
        const note = await Notes.create(noteData);
        res.json(note);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error,
        });
    }
}

async function deleteNote(req, res) {
    try {
        const note = await Notes.findOne({
            user: req.user.sub,
            _id: req.params.id,
        });
        await Notes.deleteOne(note);
        res.status(204).json();
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error,
        });
    }
}
