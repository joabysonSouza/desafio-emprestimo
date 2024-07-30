
async function buscarValor(event) {
  event.preventDefault()
  const inputNome = document.getElementById("inputNome").value;
  const inputIdade = document.getElementById("inputIdade").value;
  const inputSalario = document.getElementById("inputSalario").value;
  const inputEstado = document.getElementById("inputEstado").value;


  if(!inputNome || !inputIdade || !inputSalario || !inputEstado){
    return alert('nenhum campo pode está vazio')
  }

  let data = {
    name: inputNome,
    income: Number(inputSalario),
    age: Number(inputIdade),
    city: inputEstado,
    
  };

  try {
    const response = await fetch("http://localhost:3001/v1/consultLoans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
     sessionStorage.setItem("resultado", JSON.stringify(response))
    window.location.href="result.html"

  } catch (error) {
    console.error('Erro ao buscar valor:', error);
  }  

  
}


document.getElementById('loanForm').addEventListener('submit', buscarValor);




 



