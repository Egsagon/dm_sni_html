// ===== Scripts pour le diaporama ===== //

imgs = ['1.jpg', '2.jpg', '3.png']     // liste des images disponibles
indx = 0                                    // numéro de l'image courante


function url () {return './src/' + imgs[indx]} // function qui retourne l'url de l'image

function reload () {                        // fonction pour recharger l'image
    if (indx == imgs.length) {indx = 0}     // si indx est trop grand, le remettre à 0
    if (indx < 0) {indx = imgs.length - 1}  // si indx est trop petit, le mettre au max
    document.querySelector('.img').style.backgroundImage = `url(${url()})` // placer l'image
}


// ===== Main ===== //

reload() // recharger au chargement de la page

// avancer d'une image
document.querySelector('.bw').addEventListener('click', () => {indx--; reload()})

// reculer d'une image
document.querySelector('.fw').addEventListener('click', () => {indx++; reload()})

// ouvrir une image en grand
document.querySelector('.fl').addEventListener('click', () => {window.open(url(), '_blank')})