const quizDB = [
    {
        question: 'Q1: What is the full form of HTML?',
        a: 'Hello Teddy My Love',
        b: 'HyperText Makeover Language',
        c: 'HyperText Makeup Language',
        d: 'HyerText Markup Language',
        ans: 'ans4'
    },
    {
        question: 'Q2: What is the full form of CSS?',
        a: 'Casecading Style Shit',
        b: 'Casecading Style Sheets',
        c: 'Cartoon Style Sheet',
        d: 'Casecading Super Sheet',
        ans: 'ans2'
    },
    {
        question: 'Q3: What is the full form of HTTP?',
        a: 'HyperText Transfer Product',
        b: 'HyperText Test Protocol',
        c: 'Hey Transfer Protocol',
        d: 'HyperText Transfer Protocol',
        ans: 'ans4'
    },
    {
        question: 'Q4: What is the color red an orange?',
        a: 'Red',
        b: 'Blue',
        c: 'Orange',
        d: 'White',
        ans: 'ans3'
    }
]

let questionCount = 0;
let score = 0;

const questionArea = document.querySelector('.question-area');
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach(el => {
        if (el.checked) {
            answer = el.id;
        }
    })
    return answer;
}

const deselectOption = () => {
    answers.forEach(el => el.checked = false);
}


submit.addEventListener('click', () => {
    answers.forEach(el => {
        if (el.checked == true) {
            const checkedAnswer = getCheckedAnswer();

            if (checkedAnswer === quizDB[questionCount].ans) {
                score++;
            }

            questionCount++;

            deselectOption();

            if (questionCount < quizDB.length) {
                loadQuestion();
            } else {
                showScore.innerHTML = `
                        <h3> Your score is ${score} / ${quizDB.length}</h3>
                        <button class="btn" onclick="location.reload()">Play Again!</button>
                    `
                showScore.classList.remove('scoreArea');
                submit.style.display = 'none';
                questionArea.style.display = 'none';
                question.style.display = 'none';
            }
        }
    })
})

