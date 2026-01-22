const Note = require("../models/Note");

// SELLER: CREATE NOTE
const createNote = async (req, res) => {
  const {
    title,
    description,
    college,
    course,
    branch,
    semester,
    subject,
    price,
    fileUrl,
    fileType,
  } = req.body;

  const note = await Note.create({
    title,
    description,
    college,
    course,
    branch,
    semester,
    subject,
    price,
    fileUrl,
    fileType,
    seller: req.user._id,
  });

  res.status(201).json(note);
};

// PUBLIC: GET NOTES (FILTER READY)
const getNotes = async (req, res) => {
  const filters = { isActive: true, isApproved: true };

  if (req.query.college) filters.college = req.query.college;
  if (req.query.subject) filters.subject = req.query.subject;
  if (req.query.semester) filters.semester = req.query.semester;

  const notes = await Note.find(filters)
    .populate("seller", "name")
    .sort({ createdAt: -1 });

  res.json(notes);
};

module.exports = { createNote, getNotes };
