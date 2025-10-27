
document.getElementById('openPage').onclick = function() {
    document.getElementById('page').classList.add('show');
}

document.getElementById('closePage').onclick = function() {
    document.getElementById('page').classList.remove('show');
}


// changé les commentair en fonction des click sur les bouton 
document.addEventListener("DOMContentLoaded", function () {
  const comments = document.querySelectorAll(".comment");
  let index = 0;

  function showComment(i) {
      comments.forEach(comment => comment.classList.remove("show"));
      comments[i].classList.add("show");
  }

  document.getElementById("next").addEventListener("click", function (event) {
      event.preventDefault();
      index = (index + 1) % comments.length;
      showComment(index);
  });

  document.getElementById("prev").addEventListener("click", function (event) {
      event.preventDefault();
      index = (index - 1 + comments.length) % comments.length;
      showComment(index);
  });

  showComment(index); // Afficher le premier commentaire au chargement
});


// rédiriger vers la page de paiement quand l'on click sur les btn
const PayBtn = document.querySelectorAll('.pay-btn');

PayBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://bbzzdbpm.mychariow.shop/formation/checkout');
  });
});
