let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";
console.log('nom              : "' + nomCorrige + '"');

let ageCorrige = parseInt(age);
if (Number.isNaN(ageCorrige) || ageCorrige <= 0) {
    console.log("age              : valeur invalide");
} else {
    console.log("age              : " + ageCorrige + " (valide)");
}

let emailValide = false;
let positionArrobase = email.indexOf("@");
if (positionArrobase !== -1 && email.indexOf(".", positionArrobase) !== -1) {
    emailValide = true;
}
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide") + ")");

let scoreCorrige = parseInt(scoreJeu);
if (Number.isNaN(scoreCorrige)) scoreCorrige = 0;
console.log("scoreJeu         : " + scoreCorrige);

let estAdminCorrige = (estAdmin === "true");
console.log("estAdmin         : " + estAdminCorrige);

let connexion = derniereConnexion ?? "Jamais connecté";
console.log("derniereConnexion: " + connexion);

let nbConn = Number(nombreConnexions);
if (nbConn === 0) {
    console.log('nombreConnexions : "Aucune connexion"');
} else {
    console.log("nombreConnexions : " + nbConn);
}

console.log("================================");
