// ===== Scripts pour la page HOME (./index.html) seulement ===== //
// sert à montrer ou cacher la calculatrice et le diaporama


clt = document.querySelector('.clt')            // div de la calculatrice
sds = document.querySelector('.slides')         // div du diaporama
shd = document.querySelector('.shadow')         // div pour ajouter de l'opacité avec l'arrière-plan

function opa (bool) {                           // fonction pour ajouter de l'opacité en fonction d'un booléen
    shd.style.zIndex = bool ? -50 : 50
    shd.style.display = bool ? "none" : "unset"
}

// cacher les application par défaut (utilise la fonction do_hide() de ./app.js)
do_hide(true, clt)
do_hide(true, sds)
opa(true) // enlever l'opacité par défaut

// booléens qui gardent la trace de la visibilité des applications
let cltState = false
let sdsttate = false

// fonction pour changer la visibilité des applications
let toggleClt = () => {do_hide(cltState, clt, true); opa(cltState); cltState = !cltState}
let toggleSds = () => {do_hide(sdsttate, sds, true); opa(sdsttate); sdsttate = !sdsttate}

// application des fonctions aux boutons de ./index.html pour ouvrir + ceux des apps pour fermer
document.querySelector('.launchClt').addEventListener('click', toggleClt)
document.querySelector('.clt #close').addEventListener('click', toggleClt)

document.querySelector('.launchSds').addEventListener('click', toggleSds)
document.querySelector('.slides #close').addEventListener('click', toggleSds)