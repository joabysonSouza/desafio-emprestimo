import express, { json } from "express";
import cors from 'cors'



const app = express();


app.use(express.json())
app.use(cors())

app.listen(3001, () => console.log("servidor rodando!"));


const emprestimo =(age,income,city,)=>{
  let emprestimoResut = []

  if(income <= 3000){
    emprestimoResut.push({type:'pessoal',taxa:'4%'})
    emprestimoResut.push({type:'garantia',taxa:'3%'})
  }

  else if(income >=3000 ||  income <=5000 && age < 30 && city == "SP"){
    emprestimoResut.push({type:'pessoal',taxa:'4%'})
    emprestimoResut.push({type:'garantia',taxa:'3%'})
  }

  if(income >= 5000){
    emprestimoResut.push({type:'consignado', taxa: '2%'})
  }

  return emprestimoResut


}

app.post("/v1/consultLoans", (req, res) => {
  const { age, income,city,name} = req.body;
  const result = emprestimo(age,income,city)

  res.status(200).json({custumer:name ,result})

})


 




// if(income <= 3000){
//   result.push("emprestimo pessoal  e com garantia concedido")
// }

// else if(income <= 3000 || income <= 5000 && age < 30 && city == 'SP'){
//     result.push('emprestimo pessoal concedido')
// } if(income >= 5000){
//   result.push("o empréstimo consignado e empréstimo com garantia  foi consedido")

// }