let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];
let compteur = 0;

for (let i = 0; i < paires.length; i++) {
    let x = paires[i][0];
    let y = paires[i][1];

    let egal = (x == y);
    let strict = (x === y);

    console.log(String(x) + " == " + String(y) + " -> " + egal +
        " | " + String(x) + " === " + String(y) + " -> " + strict);

    if (egal && !strict) {
        compteur++;
    }
}

console.log("---");
console.log(compteur + " paire(s) où == et === donnent des résultats différents");
