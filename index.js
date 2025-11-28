import express from 'express'
import mongoose  from "mongoose"

const app = express();

app.use(express.json());

app.get('/saldo', (req, res) => {
  res.send(150000)
});

app.post('/extrato', (req, res) => {
  const body = req.body;
  res.json({ recebido: body });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
