function status(request, response) {
  response.status(200).json({ chave: "I will complete my tiny experiment" });
}

export default status;
