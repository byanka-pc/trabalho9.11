
const animais = [
    {
      nome: "Cachorro",
      especie: "Mamífero",
      quantidade: 1,
      preco: 700.00
    },
    {
        nome: "Gato",
      especie: "Mamífero",
      quantidade: 1,
      preco: 500.00
    },
    {
        nome: "Papagaio",
      especie: "Ave",
      quantidade: 1,
      preco: 1500.00
    },
    {
        nome: "Hamster",
      especie: "Roedor",
      quantidade: 1,
      preco: 200.00
    },
    {
        nome: "Calopsita",
      especie: "Ave",
      quantidade: 1,
      preco: 400.00
    },
    {
        nome: "Porquinho-da-índia",
      especie: "Roedor",
      quantidade: 1,
      preco: 150.00
    },
    {
        nome: "Peixe Betta",
      especie: "Peixe",
      quantidade: 1,
      preco: 1100.00
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let animal of animais){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${animal.nome}</td>
        <td>${animal.especie}</td>
        <td>${animal.quantidade}</td>
        <td class="preco">${animal.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }
