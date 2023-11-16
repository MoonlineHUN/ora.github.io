const $ = (selector) => {
    return document.querySelector(selector);
}

const oraElem = $('#óra');
const percElem = $('#perc');
const masodpercElem = $('#masodperc');
const napElem = $('#napok');

function update() {
    const most = new Date();

    const oraString = most.getHours().toString().padStart(2, '0');
    const percString = most.getMinutes().toString().padStart(2, '0');
    const masodpercString = most.getSeconds().toString().padStart(2, '0');
    const napString = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'][most.getDay()];

    oraElem.textContent = oraString;
    percElem.textContent = percString + ':';
    masodpercElem.textContent = masodpercString;

    napElem.childNodes.forEach(node => {
        if (node.textContent === napString) {
            node.style.color = 'white';
            node.style.fontWeight = 'bold';
        } else {
            node.style.color = '#999';
            node.style.fontWeight = 'normal';
        }
    });

    masodpercElem.style.visibility = (most.getSeconds() % 2 === 0) ? 'hidden' : 'visible';
}

setInterval(update, 1000);
