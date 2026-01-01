const share = document.querySelector('.share-btn');
const bottom = document.querySelector('.bottom');

share.addEventListener('click', () =>{
  bottom.classList.toggle("active");
})