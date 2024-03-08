const express = require('express');
const notesCtrl = require('../../controllers/notes.js');
const ensureLoggedIn = require('../../middleware/ensure-logged-in.js');

const router = express.Router();

router.post('/', ensureLoggedIn, notesCtrl.create);
router.get('/', ensureLoggedIn, notesCtrl.getNotes);

module.exports = router;
