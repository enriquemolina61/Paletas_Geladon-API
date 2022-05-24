import app from './app';

const port = 3005;

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
