const express = require('express');
const app = express();

const porta = process.env.PORT || 3000;

app.get('/api/exercicios', (req, res) => {
  const jsonData = require('./api.json');
  const exercicios = {
    abdominal: jsonData.abdominal,
    antebraco: jsonData.antebraco,
    aquecimento: jsonData.aquecimento,
    biceps: jsonData.biceps,
    cardio: jsonData.cardio,
    'corpo-todo': jsonData['corpo-todo'],
    costas: jsonData.costas,
    gluteo: jsonData.gluteo,
    ombro: jsonData.ombro,
    panturrilha: jsonData.panturrilha,
    peito: jsonData.peito,
    perna: jsonData.perna,
    trapezio: jsonData.trapezio,
    triceps: jsonData.triceps
  };
  res.json(exercicios);
});


app.get('/api/abdominal', (req, res) => {
  const jsonData = require('./api.json');
  const abdominalExercises = jsonData.abdominal;
  res.json(abdominalExercises);
});

app.get('/api/antebraco', (req, res) => {
  const jsonData = require('./api.json');
  const antebracoExercises = jsonData.antebraco;
  res.json(antebracoExercises);
});

app.get('/api/aquecimento', (req, res) => {
  const jsonData = require('./api.json');
  const aquecimentoExercises = jsonData.aquecimento;
  res.json(aquecimentoExercises);
});

app.get('/api/biceps', (req, res) => {
  const jsonData = require('./api.json');
  const bicepsExercises = jsonData.biceps;
  res.json(bicepsExercises);
});

app.get('/api/cardio', (req, res) => {
  const jsonData = require('./api.json');
  const cardioExercises = jsonData.cardio;
  res.json(cardioExercises);
});

app.get('/api/corpo-todo', (req, res) => {
  const jsonData = require('./api.json');
  const corpoTodoExercises = jsonData['corpo-todo'];
  res.json(corpoTodoExercises);
});

app.get('/api/costas', (req, res) => {
  const jsonData = require('./api.json');
  const costasExercises = jsonData.costas;
  res.json(costasExercises);
});

app.get('/api/gluteo', (req, res) => {
  const jsonData = require('./api.json');
  const gluteoExercises = jsonData.gluteo;
  res.json(gluteoExercises);
});

app.get('/api/ombro', (req, res) => {
  const jsonData = require('./api.json');
  const ombroExercises = jsonData.ombro;
  res.json(ombroExercises);
});

app.get('/api/panturrilha', (req, res) => {
  const jsonData = require('./api.json');
  const panturrilhaExercises = jsonData.panturrilha;
  res.json(panturrilhaExercises);
});

app.get('/api/peito', (req, res) => {
  const jsonData = require('./api.json');
  const peitoExercises = jsonData.peito;
  res.json(peitoExercises);
});

app.get('/api/perna', (req, res) => {
  const jsonData = require('./api.json');
  const pernaExercises = jsonData.perna;
  res.json(pernaExercises);
});

app.get('/api/trapezio', (req, res) => {
  const jsonData = require('./api.json');
  const trapezioExercises = jsonData.trapezio;
  res.json(trapezioExercises);
});

app.get('/api/triceps', (req, res) => {
  const jsonData = require('./api.json');
  const tricepsExercises = jsonData.triceps;
  res.json(tricepsExercises);
});


app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
