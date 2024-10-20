
function validateForm() {
  console.log('A função validateForm foi chamada');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const assuntoInput = document.getElementById('assunto');
  const mensagemInput = document.getElementById('mensagem');
  
  if (nomeInput.value.trim() === "") {
    alert('O campo Nome está vazio.');
    nomeInput.focus(); 
    return false;
  }
  if (emailInput.value.trim() === "") {
    alert('O campo E-mail está vazio.');
    emailInput.focus(); 
    return false;
  }
  if (assuntoInput.value.trim() === "") {
    alert('O campo Assunto está vazio.');
    assuntoInput.focus(); 
    return false;
  }
  if (mensagemInput.value.trim() === "") {
    alert('O campo Mensagem está vazio.');
    mensagemInput.focus(); 
    return false;
  }
  if (nomeInput === "" || emailInput === "" || assuntoInput === "" || mensagemInput === "") {
    alert('Todos os campos devem ser preenchidos.');
    return false;
}
  return true;
}

function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('assunto').value = '';
  document.getElementById('mensagem').value = '';
}

const form = document.getElementById('contato-formulario');

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault(); 
  } else {
  
    limparFormulario();
    redirectToHomepage();
  }
});


