

function sorteiaNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function sorteiaCiv() {
    document.addEventListener('click', function (e) {
        const el = e.target;
        console.log(el)
        let num = sorteiaNumero(1, 37);
        
        if (el.classList.contains('civ-sorteada')) {
            if (num === 1) {
                el.setAttribute('src', '/assets/img/civs/astecas.png')
            }
            if (num === 2) {
                el.setAttribute('src', '/assets/img/civs/berberes.png')
            }
            if (num === 3) {
                el.setAttribute('src', '/assets/img/civs/birmaneses.png')
            }
            if (num === 4) {
                el.setAttribute('src', '/assets/img/civs/bizantinos.png')
            }
            if (num === 5) {
                el.setAttribute('src', '/assets/img/civs/bretoes.png')
            }
            if (num === 6) {
                el.setAttribute('src', '/assets/img/civs/bulgaros.png')
            }
            if (num === 7) {
                el.setAttribute('src', '/assets/img/civs/celtas.png')
            }
            if (num === 8) {
                el.setAttribute('src', '/assets/img/civs/chineses.png')
            }
            if (num === 9) {
                el.setAttribute('src', '/assets/img/civs/coreanos.png')
            }
            if (num === 10) {
                el.setAttribute('src', '/assets/img/civs/cumanos.png')
            }
            if (num === 11) {
                el.setAttribute('src', '/assets/img/civs/eslavos.png')
            }
            if (num === 12) {
                el.setAttribute('src', '/assets/img/civs/espanhois.png')
            }
            if (num === 13) {
                el.setAttribute('src', '/assets/img/civs/etiopes.png')
            }
            if (num === 14) {
                el.setAttribute('src', '/assets/img/civs/francos.png')
            }
            if (num === 15) {
                el.setAttribute('src', '/assets/img/civs/godos.png')
            }
            if (num === 16) {
                el.setAttribute('src', '/assets/img/civs/hindustanis.png')
            }
            if (num === 17) {
                el.setAttribute('src', '/assets/img/civs/hunos.png')
            }
            if (num === 18) {
                el.setAttribute('src', '/assets/img/civs/incas.png')
            }
            if (num === 19) {
                el.setAttribute('src', '/assets/img/civs/italianos.png')
            }
            if (num === 20) {
                el.setAttribute('src', '/assets/img/civs/japoneses.png')
            }
            if (num === 21) {
                el.setAttribute('src', '/assets/img/civs/khmers.png')
            }
            if (num === 22) {
                el.setAttribute('src', '/assets/img/civs/lituanos.png')
            }
            if (num === 23) {
                el.setAttribute('src', '/assets/img/civs/magiares.png')
            }
            if (num === 24) {
                el.setAttribute('src', '/assets/img/civs/maias.png')
            }
            if (num === 25) {
                el.setAttribute('src', '/assets/img/civs/malaios.png')
            }
            if (num === 26) {
                el.setAttribute('src', '/assets/img/civs/malineses.png')
            }
            if (num === 27) {
                el.setAttribute('src', '/assets/img/civs/mongois.png')
            }
            if (num === 28) {
                el.setAttribute('src', '/assets/img/civs/persas.png')
            }
            if (num === 29) {
                el.setAttribute('src', '/assets/img/civs/portugueses.png')
            }
            if (num === 30) {
                el.setAttribute('src', '/assets/img/civs/sarracenos.png')
            }
            if (num === 31) {
                el.setAttribute('src', '/assets/img/civs/tartaros.png')
            }
            if (num === 32) {
                el.setAttribute('src', '/assets/img/civs/teutoes.png')
            }
            if (num === 33) {
                el.setAttribute('src', '/assets/img/civs/turcos.png')
            }
            if (num === 34) {
                el.setAttribute('src', '/assets/img/civs/vietinamitas.png')
            }
            if (num === 35) {
                el.setAttribute('src', '/assets/img/civs/vinkings.png')
            }
            if (num === 36) {
                el.setAttribute('src', '/assets/img/civs/sorte.png')
            }
        }
        console.log(el)
    })
}

sorteiaCiv()