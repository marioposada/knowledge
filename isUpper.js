// Verificar si una palabra comienza con mayusculas

function isUpper(str) {
    return (/^[A-Z]/.test(str))? true : false ;

}

console.log(isUpper("Mario"))

