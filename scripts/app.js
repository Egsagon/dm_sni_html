// ===== Script appelé sur toutes les pages ===== //


hdr = document.querySelector('.header')                 // header
bts = document.querySelectorAll('.header button')       // boutons du header (liste)
sub = document.querySelector('.menu')                   // sous-menu
sbn = document.querySelector('#dvpmenu')                // bouton principal du sous-menu
sld = document.querySelector('.side')                   // panneau de côté

// ===== Fonctions ===== //

function do_hide(bool, el, rmw = false) {               // fonction qui cache un élement HTML
    if (bool) {el.classList.add('hidden')}              // rmw : cacher l'élement sur le plan Z aussi
    else {el.classList.remove('hidden')}
    if (rmw) {el.style.zIndex = bool ? -100 : 100}
}

function isVisible(r) {                                 // fonction qui renvoie si un élement est visible
    return r.top < window.innerHeight && r.bottom >= 0  // sur la page ou non
}

// ===== Initialisation ===== //

sub.style.display = 'unset'                             // montrer le sous-menu après le chargement de la page
do_hide(true, sub)                                      // cacher le sous-menu par défaut

isClosedMenu = true
let minMenuHeight = sub.offsetHeight.toString() + 'px'  // récuperer la hauteur du sous-menu

for (let btn of bts) {                                  // copier les boutons du header dans le sous-menu
    sub.appendChild(btn.cloneNode(true))                // pour avoir les mêmes
    sub.appendChild(document.createElement('br'))
}

let maxMenuheight = sub.offsetHeight.toString() + 'px'  // récuperer la hauteur du sous-menu après la copie

sub.style.height = minMenuHeight                        // mettre le menu à sa taille minimale par défaut

let update = () => {                                    // fonction pour update les élements
    // cacher ou montrer le sous-menu
    var rect = hdr.getBoundingClientRect()              // récuperer le header
    do_hide(isVisible(rect), sub)                       // cacher ou montrer le sous-menu

    // changer la taille du panneau de côté
    let btm = rect.bottom < 0 ? 0 : rect.bottom         // éviter les valeurs négatives
    sld.style.top = btm.toString() + 'px'               // changer la distance avec le haut de la page
    sld.style.height = (window.innerHeight - btm - 28 * 2 - 12).toString() + 'px' // changer la hauteur
}

// ===== Actions ===== //

update()
window.addEventListener('scroll', update)               // A chaque fois que la page bouge : hop, update

sbn.addEventListener('click', () => {                   // ouvrir ou fermer le sous-menu
    isClosedMenu = !isClosedMenu
    sub.style.height = isClosedMenu ? minMenuHeight : maxMenuheight
})