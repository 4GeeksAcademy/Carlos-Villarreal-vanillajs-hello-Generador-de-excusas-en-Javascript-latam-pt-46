function generateExcuse() {

    const who = ['El perro', 'Mi hijo', 'Mi mujer', 'El gato'];

    const action = ['tiró', 'mojó', 'aplastó', 'rompió'];

    const what = ['mi trabajo', 'mi teléfono', 'el cuadro'];

    const when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras no estaba'];


    // Seleccionar un elemento aleatorio de cada arreglo

    const randomWho = who[Math.floor(Math.random() * who.length)];

    const randomAction = action[Math.floor(Math.random() * action.length)];

    const randomWhat = what[Math.floor(Math.random() * what.length)];

    const randomWhen = when[Math.floor(Math.random() * when.length)];


    // Concatenar la excusa

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

}


// Establecer la excusa en el innerHTML del elemento HTML #excuse al cargar la página

window.onload = function() {

    const excuseElement = document.getElementById('excuse');

    if (excuseElement) {

        excuseElement.innerHTML = generateExcuse();

    } else {

        console.error('El elemento con ID "excuse" no se encontró en el DOM.');

    }

};