var x = prompt('Unesite prvu vrijednost: ');
var x2 = parseInt(x);
var z = prompt('Unesite računsku operaciju: +  -  *  / ');
var y = prompt('Unesite drugu vrijednost: ');
var y2 = parseInt(y);
var jedan = ('+');
var dva = ('-');
var tri = ('*');
var cetiri = ('/');
switch(z) {
    case jedan:
        var z2 = x2 + y2;
        alert('Rezultat sabiranja je: ' + z2.toFixed(2));
        break;
    case dva:
        var z2 = x2 - y2;
        alert('Rezultat oduzimanja je: ' + z2.toFixed(2));
        break;
    case tri:
        var z2 = x2 * y2;
        alert('Rezultat množenja je: ' + z2.toFixed(2));
        break;
    case cetiri:
        var z2 = x2 / y2;
        alert('Rezultat dijeljenja je: ' + z2.toFixed(2));
        break;
}
