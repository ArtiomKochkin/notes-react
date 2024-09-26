const express = require("express");

const { readDB, writeDB } = require("./utils");
const { authenticateToken } = require("../auth/utils");

const dbRouter = express.Router();

// Получение всех заметок
dbRouter.get('/notes', authenticateToken, (req, res) => {
  const data = readDB();
  res.json(data.notes);
});

// Добавление новой заметки
dbRouter.post('/notes', authenticateToken, (req, res) => {
  const newNote = req.body;
  const data = readDB();

  data.notes.push(newNote);
  writeDB(data);
  res.status(201).json(newNote);
});

// Обновление заметки (PATCH)
dbRouter.patch('/notes/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const data = readDB();
  
  const noteIndex = data.notes.findIndex(note => note.id === Number(id));
  if (noteIndex !== -1) {
    data.notes[noteIndex] = { ...data.notes[noteIndex], ...updatedData };
    writeDB(data);
    res.status(200).json(data.notes[noteIndex]);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

// Удаление заметки
dbRouter.delete('/notes/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const data = readDB();

  const newNotes = data.notes.filter(note => note.id !== Number(id));
  if (newNotes.length !== data.notes.length) {
    data.notes = newNotes;
    writeDB(data);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

// Получение всех ярлыков
dbRouter.get('/labels', authenticateToken, (req, res) => {
  const data = readDB();
  res.json(data.labels);
});

// Добавление нового ярлыка
dbRouter.post('/labels', authenticateToken, (req, res) => {
  const newLabel = req.body;
  const data = readDB();

  data.labels.push(newLabel);
  writeDB(data);
  res.status(201).json(newLabel);
});

// Обновление ярлыка (PATCH)
dbRouter.patch('/labels/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const data = readDB();
  
  const labelIndex = data.labels.findIndex(label => label.id === Number(id));
  if (labelIndex !== -1) {
    data.labels[labelIndex] = { ...data.labels[labelIndex], ...updatedData };
    writeDB(data);
    res.status(200).json(data.labels[labelIndex]);
  } else {
    res.status(404).json({ message: "Label not found" });
  }
});

// Удаление ярлыка
dbRouter.delete('/labels/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const data = readDB();

  const newLabels = data.labels.filter(label => label.id !== Number(id));
  if (newLabels.length !== data.labels.length) {
    data.labels = newLabels;
    writeDB(data);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Label not found" });
  }
});

module.exports = dbRouter;