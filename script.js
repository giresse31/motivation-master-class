
document.getElementById('openPage').onclick = function() {
    document.getElementById('page').classList.add('show');
    document.body.classList.add('noscroll');
}

document.getElementById('closePage').onclick = function() {
    document.getElementById('page').classList.remove('show');
    document.body.classList.remove('noscroll');
}


// rédiriger vers la page de paiement quand l'on click sur les btn
const PayBtn = document.querySelectorAll('.pay-btn');

PayBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.pay.moneyfusion.net/formation-masterclass_1753774062299/');
  });
});



//show image adv fonctionnality 
const advSection = document.querySelector('.adv-section');
const img = advSection.querySelectorAll('img');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');
const closeBtn = document.getElementById('closeBtn');

img.forEach(im => {
  im.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImg.src = im.src;
    document.body.classList.add('noscroll');
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.body.classList.remove('noscroll');
});

