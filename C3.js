var elementos;
var Ultimo_vazio = 'vazio';
var Ultimo = Ultimo_vazio;

calculate = function (a1, a2, b1, b2) {
    var valued = '';

    if (a1 != '') { valued += '1'; }
    if (a2 != '') { valued += '2'; }
    if (b1 != '') { valued += '3'; }
    if (b2 != '') { valued += '4'; }

    if (Ultimo !== Ultimo_vazio) {
        valued = Ultimo;
    }

    if (valued.length > 2 && valued !== '1234') {
        switch (valued) {
            case '123':
                elementos.B2.value = b1 * a2 / a1;
                break;
            case '124':
                elementos.B1.value = b2 * a1 / a2;
                break;
            case '134':
                elementos.A2.value = a1 * b2 / b1;
                break;
            case '234':
                elementos.A1.value = a2 * b1 / b2;
                break;
        }
        Ultimo = valued;
    }
};

initCalculation = function() {
    var limpar = document.getElementById('reset');
    elementos = {
        A1: document.getElementById('A_topo'),
        A2: document.getElementById('A_baixo'),
        B1: document.getElementById('B_topo'),
        B2: document.getElementById('B_baixo')
    };

    limpar.onclick = function () {
        elementos.A1.value = '';
        elementos.A2.value = '';
        elementos.B1.value = '';
        elementos.B2.value = '';
        Ultimo = Ultimo_vazio;
    };

    document.querySelector('body').onkeyup = function() {
        calculate(
            elementos.A1.value,
            elementos.A2.value,
            elementos.B1.value,
            elementos.B2.value
        );
    };
};

// Start the functions.
window.onload = function() {
    initCalculation();
};