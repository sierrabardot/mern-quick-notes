const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/notes.js');
const ensureLoggedIn = require('../../middleware/ensure-logged-in.js');

router.post('/', ensureLoggedIn, notesCtrl.create);
router.get('/', ensureLoggedIn, notesCtrl.getNotes);
router.delete('/:id', ensureLoggedIn, notesCtrl.delete);

module.exports = router;
