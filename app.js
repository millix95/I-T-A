var a = alert('Dobrodošli u program za računanje!\nPrimer jednog korišćenja programa bi izgledao ovako:\n1. korisnik unosi 3\n2. korisnik unosi +\n3. korisnik unosi 10\nProgram  će da emituje poruku 13')
var x = prompt('Unesite prvu vrijednost: ');
var x2 = parseInt(x);
var z = prompt('Unesite računsku operaciju:\n"+" - sabiranje\n"-" - oduzimanje\n"*" - množenje\n"/" - dijeljenje');
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
    default:
        alert('Unijeli ste pogrešnu računsku operaciju!');
        break;
}
