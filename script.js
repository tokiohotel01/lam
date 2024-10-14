let index = 0;

function showImage(index) {
    const images = document.querySelector('.carousel-images');
    const totalImages = images.children.length;

    // Lógica de bucle infinito
    if (index >= totalImages) index = 0;
    if (index < 0) index = totalImages - 1;

    // Mover el carrusel a la imagen actual
    images.style.transform = `translateX(${-index * 100}%)`;
}

document.getElementById("startButton").addEventListener("click", function() {
    let area = document.getElementById("interactiveArea");

    // Configuración del área interactiva
    area.innerHTML = "<h2></h2>";

    area.innerHTML += "<button id='nextButton' class='optionButton'>Juega por tu regalo</button>";

    // Evento del botón "Jugar por regalo"
    document.getElementById("nextButton").addEventListener("click", function() {
        startQuiz();
    });
});

// Función para iniciar el cuestionario
function startQuiz() {
    let area = document.getElementById("interactiveArea");
    let questions = [
        {
            question: "¿Qué día nos conocimos?",
            options: ["17 de agosto", "7 de abril", "17 de marzo", "17 de febrero"],
            correctOption: 2
        },
        {
            question: "¿Cómo se llama la primera mascota que adoptamos?",
            options: ["Sam", "Odette", "Juan", "Bichito"],
            correctOption: 3
        },
        {
            question: "¿Quién ama más?",
            options: ["Tomás", "El esposo de Hannie", "Tomi", "El papi de Han"],
            correctOption: null  // Todas las opciones son correctas
        },
        {
            question: "¿Quién es la persona favorita de Tomi?",
            options: ["Lehan", "Han", "Hannie", "Bubi"],
            correctOption: null  // Todas las opciones son correctas
        },
        {
            question: "¿Quién cumple años hoy?",
            options: ["Pelicanger", "MI BEBÉ", "Bad Gyal", "Scoups"],
            correctOption: 1
        }
    ];
    let currentQuestion = 0;

    // Función para mostrar la pregunta actual
    function showQuestion() {
        area.innerHTML = ''; // Limpiar el área antes de mostrar la pregunta
        if (currentQuestion < questions.length) {
            let questionObj = questions[currentQuestion];
            area.innerHTML = `<h3>${questionObj.question}</h3>`;
            questionObj.options.forEach((option, index) => {
                area.innerHTML += `<button class='optionButton' data-index='${index}'>${option}</button>`;
            });

            document.querySelectorAll('.optionButton').forEach(button => {
                button.addEventListener('click', function() {
                    let selectedOption = parseInt(this.getAttribute('data-index'));
                    if (questionObj.correctOption === null || selectedOption === questionObj.correctOption) {
                        currentQuestion++;
                        showQuestion(); // Mostrar la siguiente pregunta si es correcto
                    } else {
                        alert("Me ofendes... intenta de nuevo");
                        // No incrementar currentQuestion, permitiendo al usuario intentarlo de nuevo
                    }
                });
            });
        } else {
            showFinalMessage();
        }
    }

    // Mostrar el mensaje final con el carrusel de fotos
    function showFinalMessage() {
        let area = document.getElementById("interactiveArea");
        area.innerHTML = "<h3>¡Acá está tu regalo!</h3>";
        
      // Mostrar el mensaje final con los cuadrados redondeados
    function showFinalMessage() {
        let area = document.getElementById("interactiveArea");
        area.innerHTML = "<h3>¡Acá está tu regalo!</h3>";
        
        // Añadir los cuadrados medio redondeados aquí
        area.innerHTML += `
        <div class="gift-grid">
            <div class="gift-square">Besitos</div>
            <div class="gift-square">Una cita</div>
            <div class="gift-square">Una película</div>
            <div class="gift-square">Flores</div>
            <div class="gift-square">Masajes</div>
            <div class="gift-square">Todo</div>
        </div>
        `;

        // Añadir evento click a cada cuadrado para mostrar el aviso
        document.querySelectorAll('.gift-square').forEach(square => {
            square.addEventListener('click', function() {
                alert("Puede canjear su regalo en @mellomanias");
            });
        });
    }
    
    // Inicia el cuestionario
    showQuestion();
}

    // Inicia el cuestionario
    showQuestion();
}
