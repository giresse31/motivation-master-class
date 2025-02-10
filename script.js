// document.addEventListener('DOMContentLoaded', function () {
//     //   appel du bti et du btn
//     const payBtn = document.getElementById("payBtn");
//     const payBtn2 = document.getElementById("payBti");
//     const payBtn3 = document.getElementById("btn-3");
//     const payBtn4 = document.getElementById("btn-4");
//     const payBtn5 = document.getElementById("btn-5");
//     const payBtn6 = document.getElementById("btn-6");

//     // Effet du texte transparent sur le bouton
//     const applyTextEffect = (btn) => {
//         const span = btn.querySelector("span");
//         span.style.background = "linear-gradient(90deg, #ffafbd 0%, #ffc3a0 100%)";
//         span.style.backgroundClip = "text";
//         span.style.webkitBackgroundClip = "text";
//     };

//     applyTextEffect(payBtn);
//     applyTextEffect(payBtn2);

//     // Fonction pour désactiver le bouton et afficher le spinner
//     const showLoading = (btn) => {
//         const loading = btn.querySelector(".loading");
//         loading.style.display = "block";
//         btn.style.pointerEvents = "none";
//         btn.style.opacity = "0.6";
//     };

//     const hideLoading = (btn) => {
//         const loading = btn.querySelector(".loading");
//         loading.style.display = "none";
//         btn.style.pointerEvents = "auto";
//         btn.style.opacity = "1";
//     };

//     // Fonction pour obtenir le pays
//     async function getCountry() {
//         try {
//             const response = await fetch('https://ipapi.co/json/');
//             const data = await response.json();
//             return data.country_code;
//         } catch (error) {
//             console.error('Erreur lors de la récupération du pays:', error);
//             return null;
//         }
//     }

//     // Redirection basée sur la localisation
//     async function redirectToPayment(countryCode) {
//         if (countryCode) {
//             if (['CI', 'SN', 'BJ', 'ML', 'TG', 'NE', 'BF'].includes(countryCode)) {
//                 window.location.href = 'https://me.fedapay.com/formationmaster';
//             } else if (['CM', 'CD', 'CG', 'GA', 'KE', 'MW', 'RW', 'TZ', 'ZM'].includes(countryCode)) {
//                 window.location.href = "https://pay.lygosapp.com/link/a24246f6-c1a1-472b-a4ec-7756b8e5d8dc";
//             }
//         } else {
//             window.location.href = 'https://motivation-master-class.systeme.io/paiement';
//         }
//     }

//     // Action pour le bouton 'payBtn'
//     payBtn.addEventListener("click", async function (e) {
//         e.preventDefault();
//         showLoading(payBtn);

//         const countryCode = await getCountry();
//         if (countryCode) {
//             redirectToPayment(countryCode);
//         } else {
//             alert("Impossible de déterminer la localisation.");
//             hideLoading(payBtn); // Réinitialisation du bouton en cas d'erreur
//         }
//     });

//     // Action pour le bouton 'payBti'
//     payBtn2.addEventListener("click", async function (e) {
//         e.preventDefault();
//         showLoading(payBtn2);

//         const countryCode = await getCountry();
//         if (countryCode) {
//             redirectToPayment(countryCode);
//         } else {
//             alert("Impossible de déterminer la localisation.");
//             hideLoading(payBtn2); // Réinitialisation du bouton en cas d'erreur
//         }
//     });

//     // Action pour le bouton 'paybtn-3'
//     payBtn3.addEventListener("click", async function (e) {
//         e.preventDefault();
//         showLoading(payBtn);

//         const countryCode = await getCountry();
//         if (countryCode) {
//             redirectToPayment(countryCode);
//         } else {
//             alert("Impossible de déterminer la localisation.");
//             hideLoading(payBtn); // Réinitialisation du bouton en cas d'erreur
//         }
//     });

//     // Action pour le bouton 'paybtn-4'
//     payBtn4.addEventListener("click", async function (e) {
//         e.preventDefault();
//         showLoading(payBtn);

//         const countryCode = await getCountry();
//         if (countryCode) {
//             redirectToPayment(countryCode);
//         } else {
//             alert("Impossible de déterminer la  localisation.");
//             hideLoading(payBtn); // Réinitialisation du bouton en cas d'erreur
//         }
//     });

//     // Action pour le bouton 'paybtn-5'
//     payBtn5.addEventListener("click", async function (e) {
//         e.preventDefault();
//         showLoading(payBtn2);

//         const countryCode = await getCountry();
//         if (countryCode) {
//             redirectToPayment(countryCode);
//         } else {
//             alert("Impossible de déterminer la  localisation.");
//             hideLoading(payBtn2); // Réinitialisation du bouton en cas d'erreur
//         }
//     });

//     // Action pour le bouton 'paybtn-6'
//     payBtn6.addEventListener("click", async function (e) {
//         e.preventDefault();
//         showLoading(payBtn2);

//         const countryCode = await getCountry();
//         if (countryCode) {
//             redirectToPayment(countryCode);
//         } else {
//             alert("Impossible de déterminer la  localisation.");
//             hideLoading(payBtn2); // Réinitialisation du bouton en cas d'erreur
//         }
//     });
// });


// //   faire scroller les commentaire
// function startScrolling() {
//     const commentContainer = document.getElementById('comment-container');
//     commentContainer.classList.add('scroll-active');
// }

// function stopScrolling() {
//     const commentContainer = document.getElementById('comment-container');
//     commentContainer.classList.remove('scroll-active');
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const commentContainer = document.getElementById('comment-container');

//     startScrolling();

//     commentContainer.addEventListener('mouseover', stopScrolling);

//     commentContainer.addEventListener('mouseout', startScrolling);
// });



// //   ouvris et fermer les module
// const openModale = document.getElementById('open-module2');
// const closeModale = document.getElementById('close-module2');
// const modale = document.getElementById('module2');

// //  ouvris module
// openModale.addEventListener("click", function (event) {
//     event.preventDefault();
//     modale.style.display = "flex";
// });

// // fermer module
// closeModale.addEventListener("click", function (event) {
//     event.preventDefault();
//     modale.style.display = "none";
// });


// // Fermer le module en cliquant en dehors
// window.addEventListener("click", function (event) {
//     // Vérifier si le clic est en dehors du module et du bouton "Ouvrir"
//     if (event.target === modale) {
//         modale.style.display = "none"; // Masquer le module
//     }
// });




// //   ouvris et fermer les module2
// const openModal = document.getElementById('open-module');
// const closeModal = document.getElementById('close-module');
// const modal = document.getElementById('module');

// //  ouvris module
// openModal.addEventListener("click", function (event) {
//     event.preventDefault();
//     modal.style.display = "flex";
// });

// // fermer module
// closeModal.addEventListener("click", function (event) {
//     event.preventDefault();
//     modal.style.display = "none";
// });


// // Fermer le module en cliquant en dehors
// window.addEventListener("click", function (event) {
//     // Vérifier si le clic est en dehors du module et du bouton "Ouvrir"
//     if (event.target === modal) {
//         modal.style.display = "none"; // Masquer le module
//     }
// });




// // formulaire
// document.getElementById('contactForm').addEventListener('submit', function () {
//     // Sélectionne le bouton de soumission et le spinner
//     const submitButton = document.getElementById('submitButton');
//     const loadingSpinner = submitButton.querySelector(".loadin");
//     const buttonText = submitButton.querySelector(".button-text");

//     // Affiche le spinner et masque le texte du bouton
//     loadingSpinner.style.display = "flex";
//     buttonText.style.pointerEvents = "none";
//     buttonText.style.opacity = "0.6";

//     // Désactive le bouton pour éviter plusieurs clics
//     submitButton.disabled = true;

//     // Aucune nécessité d'appeler e.preventDefault() car on veut que le formulaire soit soumis
// });



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
    window.open('https://pay.lygosapp.com//link/a24246f6-c1a1-472b-a4ec-7756b8e5d8dc');
  });
});
