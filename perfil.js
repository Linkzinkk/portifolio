 // Selecionando os cards
 const imagem = document.querySelectorAll('.imagens');

 // Adicionando evento de mouseover
 imagem.forEach(imagens => {
   imagens.addEventListener('mouseover', () => {
     imagens.style.transform = 'scale(1.1)';
   });

   // Voltando ao estado normal no mouseout
   imagens.addEventListener('mouseout', () => {
     imagens.style.transform = 'scale(1)';
   });
 });
