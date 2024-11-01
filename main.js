function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function linkss() {
    document.getElementById('homesection').style.opacity = '0%'
    document.getElementById('projectssection').style.opacity = '0%'
    document.getElementById('abtmesection').style.opacity = '0%'
    sleep(800).then(() => {
        document.getElementById('homesection').style.display = 'none'
        document.getElementById('abtmesection').style.display = 'none'
        document.getElementById('projectssection').style.display = 'none'
        document.getElementById('linkssection').style.display = 'block'
        sleep(100).then(() => {
            document.getElementById('linkssection').style.opacity = '100%'
        })
    })
}


function home() {
    document.getElementById('linkssection').style.opacity = '0%'
    document.getElementById('projectssection').style.opacity = '0%'
    document.getElementById('abtmesection').style.opacity = '0%'

    sleep(800).then(() => {
        document.getElementById('homesection').style.display = 'block'
        document.getElementById('abtmesection').style.display = 'none'
        document.getElementById('projectssection').style.display = 'none'
        document.getElementById('linkssection').style.display = 'none'
        sleep(100).then(() => {
            document.getElementById('homesection').style.opacity = '100%'
        })
    })
}

function projects() {
    document.getElementById('homesection').style.opacity = '0%'
    document.getElementById('linkssection').style.opacity = '0%'
    document.getElementById('abtmesection').style.opacity = '0%'

    sleep(800).then(() => {
        document.getElementById('homesection').style.display = 'none'
        document.getElementById('abtmesection').style.display = 'none'
        document.getElementById('linkssection').style.display = 'none'
        document.getElementById('projectssection').style.display = 'block'
        sleep(100).then(() => {
            document.getElementById('projectssection').style.opacity = '100%'
        })
    })
}

function abtme() {
    document.getElementById('homesection').style.opacity = '0%'
    document.getElementById('linkssection').style.opacity = '0%'
    document.getElementById('projectssection').style.opacity = '0%'

    sleep(800).then(() => {
        document.getElementById('homesection').style.display = 'none'
        document.getElementById('projectssection').style.display = 'none'
        document.getElementById('linkssection').style.display = 'none'
        document.getElementById('abtmesection').style.display = 'block'
        sleep(100).then(() => {
            document.getElementById('abtmesection').style.opacity = '100%'
        })
    })
}
