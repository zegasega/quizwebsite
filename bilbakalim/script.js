const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Vietnam", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false },
        ]
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        answers: [
            { text: "Silver", correct: false },
            { text: "Gold", correct: true },
            { text: "Copper", correct: false },
            { text: "Iron", correct: false },
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false },
        ]
    },
    
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "J.K. Rowling", correct: false },
            { text: "George Orwell", correct: false },
            { text: "Ernest Hemingway", correct: false },
        ]
    },



    // Diğer sorular...
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score");
const backgroundMusic = document.getElementById("background-music");

    

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function playBackgroundMusic() {
    backgroundMusic.play();
}

function pauseBackgroundMusic() {
    backgroundMusic.pause();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false; // Başlangıçta cevap verilmedi
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    answered = false; // Her soru gösterildiğinde, cevap seçimi sıfırlanacak
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", () => selectAnswer(button));
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(selectedBtn) {
    if (answered) return; // Eğer cevap zaten seçildiyse işlem yapma
    answered = true;

    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    nextButton.style.display = "block"; // Cevap seçildikten sonra "Next" butonunu göster
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        resetState();
        showQuestion();
        nextButton.style.display = "none"; // "Next" butonunu bir sonraki soru gösterilmeden önce gizle
    } else {
        alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
});
function updateScore() {
    scoreText.innerText = "Score: " + score + " / " + questions.length;
}

function selectAnswer(selectedBtn) {
    if (answered) return;

    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    answered = true;
    nextButton.style.display = "block";
    updateScore();
}
startQuiz();
playBackgroundMusic();
