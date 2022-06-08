const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'https://media.discordapp.net/attachments/946606433426890774/984034437559881799/ligada.png';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = 'https://media.discordapp.net/attachments/946606433426890774/984034411756527656/desligada.png';
    }
}

function lampBroken () {
    lamp.src = 'https://media.discordapp.net/attachments/946606433426890774/984034509378949160/quebrada.png';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );