function RealemDolar() {
    let realdolar = document.getElementById('irealemdolar')
    let res = document.getElementById('res')
    let redo = (realdolar.value)
    let rd = redo / 5.28

    res.innerHTML = `US$: ${rd.toFixed(2)}`

    if (realdolar.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = '' 
    }

    realdolar.value = ''
}

function RealemEuro() {
    let realeuro = document.getElementById('irealemeuro')
    let res = document.getElementById('res')
    let reeu = (realeuro.value)
    let re = reeu / 5.69

    res.innerHTML = `&euro;: ${re.toFixed(2)}`

    if (realeuro.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    realeuro.value = ''
}

function RealemLibra() {
    let reallibra = document.getElementById('irealemlibra')
    let res = document.getElementById('res')
    let reli = (reallibra.value)
    let rl = reli / 6.43

    res.innerHTML = `&pound;: ${rl.toFixed(2).replace(',', '.')}`

    if (reallibra.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    reallibra.value = ''
}

function DolaremReal() {
    let dolarreal = document.getElementById('idolaremreal')
    let res = document.getElementById('res')
    let dore = (dolarreal.value)
    let dr = dore * 5.28

    res.innerHTML = `R$: ${dr.toFixed(2).replace('.', ',')}`

    if (dolarreal.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    dolarreal.value = ''
}

function DolaremEuro() {
    let dolareuro = document.getElementById('idolaremeuro')
    let res = document.getElementById('res')
    let doeu = (dolareuro.value)
    let de = doeu / 1.41

    res.innerHTML = `&euro;: ${de.toFixed(2)}`

    if (dolareuro.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    dolareuro.value = ''
}

function DolaremLibra() {
    let dolarlibra = document.getElementById('idolaremlibra')
    let res = document.getElementById('res')
    let doli = (dolarlibra.value)
    let dl = doli / 2.15

    res.innerHTML = `&pound;: ${dl.toFixed(2)}`

    if (dolarlibra.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    dolarlibra.value = ''
}

function EuroemReal() {
    let euroreal = document.getElementById('ieuroemreal')
    let res = document.getElementById('res')
    let eure = (euroreal.value)
    let er = eure * 5.69

    res.innerHTML = `R$: ${er.toFixed(2).replace('.', ',')}`

    if (euroreal.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    euroreal.value = ''
}

function EuroemDolar() {
    let eurodolar = document.getElementById('ieuroemdolar')
    let res = document.getElementById('res')
    let eudo = (eurodolar.value)
    let ed = eudo * 1.41

    res.innerHTML = `US$: ${ed.toFixed(2)}`

    if (eurodolar.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    eurodolar.value = ''
}

function EuroemLibra() {
    let eurolibra = document.getElementById('ieuroemlibra')
    let res = document.getElementById('res')
    let euli = (eurolibra.value)
    let el = euli / 1.74

    res.innerHTML = `&pound;: ${el.toFixed(2)}`

    if (eurolibra.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    eurolibra.value = ''
}

function LibraemReal() {
    let librareal = document.getElementById('ilibraemreal')
    let res = document.getElementById('res')
    let lire = (librareal.value)
    let lr = lire * 6.43

    res.innerHTML = `R$: ${lr.toFixed(2).replace('.', ',')}`

    if (librareal.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    librareal.value = ''
}

function LibraemDolar() {
    let libradolar = document.getElementById('ilibraemdolar')
    let res = document.getElementById('res')
    let lido = (libradolar.value)
    let ld = lido * 2.15

    res.innerHTML = `US$: ${ld.toFixed(2)}`

    if (libradolar.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    libradolar.value = ''
}

function LibraemEuro() {
    let libraeuro = document.getElementById('ilibraemeuro')
    let res = document.getElementById('res')
    let lieu = (libraeuro.value)
    let le = lieu * 1.74

    res.innerHTML = `&euro;: ${le.toFixed(2)}`

    if (libraeuro.value.length == 0) {
        window.alert('Por favor, digite um valor!')
        res.innerHTML = ''
    }

    libraeuro.value = ''
}