document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    // Función para añadir texto al área de visualización
    function appendText(value) {
        if (display.innerText === '0' || display.innerText === 'Error') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }

    // Función para evaluar la expresión en el área de visualización
    function evaluateExpression() {
        try {
            let result = math.evaluate(display.innerText);
            display.innerText = result.toString();
        } catch (e) {
            display.innerText = "Error";
        }
    }

    // Función para limpiar el área de visualización
    function clearDisplay() {
        display.innerText = "0";
    }

    // Función para eliminar el último carácter
    function deleteLastCharacter() {
        const currentText = display.innerText;
        if (currentText.length > 1) {
            display.innerText = currentText.slice(0, -1);
        } else {
            display.innerText = "0";
        }
    }

    // Añadir event listeners a los botones
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            if (value) {
                appendText(value);
            } else {
                switch (this.innerText) {
                    case '=':
                        evaluateExpression();
                        break;
                    case 'C':
                        clearDisplay();
                        break;
                    case 'dirección izquierda eliminar':
                        deleteLastCharacter();
                        break;
                    default:
                        appendText(this.innerText);
                        break;
                }
            }
        });
    });
});
