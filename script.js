const share = document.querySelector('.btn');
const bottom = document.querySelector('.bottom');
const article = document.querySelector('.article')
share.addEventListener('click', () =>{
  bottom.classList.toggle("active");
  article.classList.toggle("active");
})