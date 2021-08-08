const quizData = [
    {
        question: 'What is the longest-running animated television show in the United States?',
        a: 'Family Guy',
        b: 'The Simpsons',
        c: 'Futurama',
        d: 'South Park',
        correct: 'b'
    }, {
        question: 'Which Friends character was Courteney Cox originally asked to play?',
        a: 'Monica',
        b: 'Phoebe',
        c: 'Janice',
        d: 'Rachel',
        correct: 'd'
    }, {
        question: 'What’s the name of the ice cream parlor Steve and Robin work at in season three of Stranger Things?',
        a: 'Scoops Ahoy',
        b: 'Cups up',
        c: 'Sugar rush',
        d: 'frozen delights',
        correct: 'a'
    }, {
        question: 'Finish this quote from The Office: “I’m not superstitious, but I am a ______.”',
        a: 'cautious guy',
        b: 'little stitious',
        c: 'believer',
        d: 'man of God',
        correct: 'b'
    }
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id; // check if selected
        }
    });

    return answer; 
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score++; // increase score if correct
        }

        currentQuiz++; // next question

        if (currentQuiz < quizData.length) {
        loadQuiz();
        } else {
        quiz.innerHTML = `<h2>You answered ${score} / ${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Replay</button>`;
        }
    }
});

