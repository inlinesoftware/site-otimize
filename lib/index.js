const button_hamburguer = document.getElementsByClassName('btn')[0]
const nav_hamburguer = document.getElementsByClassName('header_navBarHamburguer')[0]


// Get the modal
let modal = document.getElementById("myModal")

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0]

let form = document.getElementById("form")

button_hamburguer.addEventListener('click', () => {
  if (nav_hamburguer.style.display === "block") {
    nav_hamburguer.style.display = "none"
    button_hamburguer.classList.remove("active_btn")
    button_hamburguer.classList.add("not_active")
  }
  else {
    nav_hamburguer.style.display = "block"
    button_hamburguer.classList.remove("not_active")
    button_hamburguer.classList.add("active_btn")
  }
})

function mask(o, f) {
  setTimeout(function() {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}



/* Máscaras ER */
function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara()", 1)
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}


function id(el) {
  return document.getElementById(el);
}

function mascaraMoeda(event) {
  const onlyDigits = event.target.value
    .split("")
    .filter(s => /\d/.test(s))
    .join("")
    .padStart(3, "0")
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
  event.target.value = maskCurrency(digitsFloat)
}

function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(valor)
}


form.onsubmit = function (e) { abrirModal(e) }
// formWhatsapp.onsubmit = function (e) { conversaoWhats(e)}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

function abrirModal(e) {
  e.preventDefault()

  //Para o formulário de lead:
  fbq('track', 'Lead')

  form.reset()
  modal.style.display = "block"
  // gtag('event', 'conversion', { 'send_to': 'AW-340230055/emmUCJa6ms8DEKf_naIB' });
}



// function playPauseVideo() {
//   let videos = document.querySelectorAll("video")
  
//   videos.forEach((video) => {
//       // We can only control playback without insteraction if video is mute
//       video.muted = true;
//       // Play is a promise so we need to check we have it
//       let playPromise = video.play();
//       if (playPromise !== undefined) {
//           playPromise.then((_) => {
//               let observer = new IntersectionObserver(
//                   (entries) => {
//                       entries.forEach((entry) => {
//                           if (
//                               entry.intersectionRatio !== 1 &&
//                               !video.paused
//                           ) {
//                               video.pause();
//                           } else if (video.paused) {
//                               video.play();
//                           }
//                       });
//                   },
//                   { threshold: 0.2 }
//               );
//               observer.observe(video);
//           });
//       }
//   });
// }

// // And you would kick this off where appropriate with:
// playPauseVideo();
