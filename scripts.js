var bank = [];
function Enviar() {

  let nome = document.getElementById("Nome").value;
  let email = document.getElementById("Email").value;
  let senha = document.getElementById("Senha").value;
  let cfsenha = document.getElementById("Cfsenha").value;

  let usuario = {

    Nome: nome,
    Email: email,
    Senha: senha,
    Cfsenha: cfsenha,
  };
  bank.push(usuario);
  console.log(bank);
}
