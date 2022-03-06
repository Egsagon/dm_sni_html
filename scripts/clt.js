// ===== Scripts pour la calculatrice ===== //

inp = document.querySelector('.clt input')                  // champ de texte
pad = document.querySelector('.clt .btns')                  // div des boutons


let ops = ['+', '-', '*', '/', '.']                         // liste des opérateurs
let iop = 0
let fin = false // booléen qui définit si la dernière opération est effectuée ou non.
                // Si vrai, le texte sera effacé avant de faire une autre opération.


function addBtn(name, cls = undefined, callback = undefined) {
    // fonction pour ajouter un bouton à la calculatrice avec un nom
    // et eventuellement une classe ou une action (callback) spéciale.
    // les boutons sont automatiquement plaçés en grille par le CSS.

    let btn = document.createElement('button')
    btn.innerHTML = name                                    // définir le nom du bouton

    //if (cls == undefined) {btn.className = name}          // définir sa classe
    //else {btn.className = cls}
    btn.className = cls
    
    if (callback == undefined) {callback = () => {          // action par défaut
        if (fin) {inp.value = ''}                           // effacer le texte si besoin
        inp.value += name                                   // ajouter la valeur du bouton
        fin = false                                         // reset le booléen
    }}

    btn.addEventListener('click', callback)                 // ajouter l'action

    pad.appendChild(btn)                                    // ajouter à la div des boutons
}


// ===== Creation des boutons ===== //

// les boutons avec la class op sont des opérateurs et seront coloriés differement
addBtn('.', 'op')                                               // le point
addBtn('<-', 'op', () => {inp.value = inp.value.slice(0, -1)})  // pour suprimer un charactère
addBtn('delete', 'del', () => inp.value = '')                   // pour suprimer tout

for (let i=9; i>=0; i--) {                                      // ajouter les boutons chiffres
    if (i%3==0 || i==0) {addBtn(ops[iop], 'op'); iop++}         // tous les trois boutons, ajouter un op
    addBtn(i)                                                   // ajouter un bouton
}

addBtn('OK', 'sub', () => {                                     // bouton pour calculer
    // utilise un try-catch pour les erreurs
    try {inp.value = eval(inp.value).toString()} catch {inp.value = 'Error'}
    fin = true  // fin d'opération, les prochaines entrées effaceront le texte
})