// Objeto
const pessoa = {
  altura: "1,80m",
  idade: 24,
  solteiro: true,
  correr(){
    document.write("executar uma grande lógica de correr")
  }
}

pessoa.correr()

// Array - Vetores

const colecaoDeBolinhas = ["blue", "green", 1, {name: "Emerson"}]

document.write(colecaoDeBolinhas[3].name)

Registrar função - existe mas não usamos ainda
function sayMyName(name){
  document.write(name)
}

//Executar a função
sayMyName("Emerson") 
sayMyName("San")
sayMyName("Emilly")
sayMyName("Leticia")
sayMyName("Alessandro")
sayMyName("Maria")

const notaFinal = 6.9

if(notaFinal <= 5){
  document.write("Aprovado")
}else{
  document.write("Reprovado")
}

// loop repetições

for (i = 0; i < 10; i++){
  document.write("<h3>Emerson</h3>")
}

for (i = 0; i < 10; i++){
  document.write(`<p>${i}</p>`)
}
