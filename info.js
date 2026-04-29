function adcionarvalores() {
const formulario = document.getElementById("meuFormulario"); /*Const -> cria uma constante para o formulário*/
formulario.addEventListener('submit', function(evento){ /*.addEventListener -> seta um "tocaia". Entrega um evento que servirá de condição para que a próxima função seja executada, esta que é acionada pelo "function"*/
    evento.preventDefault(); /*preventDefault -> está aqui pra evitar que o vazio seja guardado*/
    const tituloD = document.getElementById('titulo').value; /*Const -> novamente cria uma constante para o formulário, porém agora ele armazenará em "tituloD" o valor que será pego pelo getElementeById*/
    const imagemD = document.getElementById('imagem').value /*.value -> serve para se guardar apenas o valor atribuído ao Id*/

    const novo = {  /*Aqui criamos uma "caixa" vazia, onde serão armazenados os valores em evidencia de "tituloD", "imagemD". (exemplo: const novo na primeira utilização guardará tituloD-1, na próxima tituloD-2 e assim por diante)*/
        titulo: tituloD,
        imagem: imagemD
    };
    });
}
