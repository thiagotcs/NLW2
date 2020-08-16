//Procurar botao
document.querySelector('#add-time').addEventListener('click', cloneField);

//quando clicar no botão
//excutar uma pcao
function cloneField() {
  //Duplicar os campos que campos?
  const newFieldsContainer = document
    .querySelector('.schedule-item')
    .cloneNode(true);

  //pegar os campos que campos?
  const fields = newFieldsContainer.querySelectorAll('input');
  // para cada campo limpar
  fields.forEach(function (fields) {
    // pegar o field do momento
    fields.value = '';
  });
  // colocar na página
  document.querySelector('#schedule-items').appendChild(newFieldsContainer);
}
