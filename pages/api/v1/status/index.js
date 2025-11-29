import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query('SELECT 1 + 1 as sum;');
  console.log(result.rows);
  response.status(200).json({ chave: "I will complete my tiny experiment" });
}

export default status;
