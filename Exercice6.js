let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = { nom, age, ville, score, actif };

for (let key in variables) {
    console.log(key + " ?? 'valeur par défaut' -> " + (variables[key] ?? "valeur par défaut"));
}

console.log("-----");

for (let key in variables) {
    console.log(key + " || 'valeur par défaut' -> " + (variables[key] || "valeur par défaut"));
}

console.log("-----");

for (let key in variables) {
    let r1 = variables[key] ?? "valeur par défaut";
    let r2 = variables[key] || "valeur par défaut";

    if (r1 === r2) {
        console.log(key + " : ?? et || -> même résultat");
    } else {
        console.log(key + " : ?? et || -> résultat différent");
    }
}
