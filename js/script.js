var year = new Date();
var fuel = 0;

function calc() {

    var pr = document.getElementById('price').value;
    var vol = document.getElementById('vol').value;
    var fuel = document.getElementById('fuel').value;
    var age = document.getElementById('age').value;
    var eu = document.getElementById('euro').value;
    var total = 0;
    var akz = 0;
    var y = (vol / 1000) * (year.getUTCFullYear() - age);

    if (fuel == 1) {
        if (vol < 3000) {
            akz = (y * 50) / eu;
        } else if (vol >= 3000) {
            akz = (y * 100) / eu;
        }
    } else if (fuel == 2) {
        if (vol <= 3500) {
            akz = (y * 75) / eu;
        } else if (vol > 3500) {
            akz = (y * 150) / eu;
        }
    }
    var poh = pr / 10;
    var fullprice = akz + (pr * 1) + poh;
    var nds = (fullprice / 100) * 20;
    total = nds + akz + poh;
    total=Math.round(total);
    console.log(total);




}