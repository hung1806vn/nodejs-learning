function multi(a, b) {
    return a * b;
}

function square(n) {
    return multi (n,n);
}

function printSquare(n) {
    let rs = square(n);
    console.log(rs);
}

printSquare(3);