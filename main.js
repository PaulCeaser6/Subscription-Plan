const checkbox = document.querySelector('#checkbox');
const label = document.querySelector('.label');

checkbox.addEventListener('change', showPlan);

function showPlan(){
   label.classList.toggle('active');
   checkbox.classList.toggle('active');
   displayPrice();
}

function displayPrice(){
   const price = document.querySelectorAll('.price');

   price.forEach(item => {
      item.classList.toggle('initial-price');
   })
}