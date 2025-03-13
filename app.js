function generateExcuse() {
    let who = ['El perro', 'Mi hijo', 'Mi mujer', 'El gato'];
    let action = ['tiró', 'mojó', 'aplastó', 'rompió'];
    let what = ['mi trabajo', 'mi teléfono', 'el cuadro'];
    let when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras no estaba'];

    // Seleccionar un elemento aleatorio de cada arreglo
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    // Concatenar la excusa
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

// Establecer la excusa en el innerHTML del elemento HTML #excuse al cargar la página
window.onload = function() {
    document.getElementById('excuse').innerHTML = generateExcuse();
};