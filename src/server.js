import app from './app';
import { conectarAoDataBase } from './database';

const port = 3005;

app.listen(port, () => {
  conectarAoDataBase();
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
