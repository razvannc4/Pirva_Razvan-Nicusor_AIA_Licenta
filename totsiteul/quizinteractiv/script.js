
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
var restartButtons = document.getElementsByClassName("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 20;
let countdown;

let currentVideo;

const quizArray = [
    {
        id: "0",
        question: "Cum se numeste muschiul care lucreaza in videoul urmator?",
        options: ["Biceps", "Biceps femural", "Triceps", "Trapez"],
        correct: "Biceps",
        video:"https://www.youtube.com/embed/x9DM9x21m6Y"
        
      
    },
    {
        id: "1",
        question: "Cum se numeste muschiul care lucreaza in videoul urmator?",
        options: ["Cvadriceps", "Biceps femural", "Gambe", "Deltoid posterior"],
        correct: "Biceps femural",
        video:"https://www.youtube.com/embed/C8bCpuA4PQQ"
        

    },
    {
        id: "2",
        question: "Cum se numeste muschiul care lucreaza in videoul urmator?",
        options: ["Triceps", "Cvadriceps", "Deltoid anterior", "Deltoid lateral"],
        correct: "Triceps",
        video:"https://www.youtube.com/embed/arxCbR_KAqk"

    },
    {
        id: "3",
        question: "Completeaza spatiile punctate: _________ este muschiul antagonist tricepsului, ceea ce inseamna ca _________ este intins la maxim in momentul in care tricepsul este contractat la maxim",
        options: ["Deltoid anterior", "Spatele", "Biceps", "Triceps"],
        correct: "Biceps",
        video:""

    },
    {
        id: "4",
        question: "Ce muschi este implicat in ridicarea umerilor spre urechi?",
        options: ["Trapezul", "Tricepsul", "Deltoidul", "Cvadricepsul"],
        correct: "Trapezul",
        video:"https://www.youtube.com/embed/GytW9MeV_bY"

    },
    {
        id: "5",
        question: "Cum se numeste muschiul ce lucreaza in videoul urmator si care este muschiul sau antagonist?",
        options: ["Cvadriceps si biceps", "Biceps femural si cvadriceps", "Biceps femural si gambe", "Cvadriceps si gambe"],
        correct: "Biceps femural si cvadriceps",
        video:"https://www.youtube.com/embed/mN7yoPtPbo4"

    }, {
        id: "6",
        question: "Care este cel mai bun moment al zilei pentru a face exercitii fizice?",
        options: ["Dimineata devreme", "La pranz", "Seara tarziu", "Nu exista, depinde de programul fiecaruia"],
        correct: "Nu exista, depinde de programul fiecaruia",
        video:""

    },
    {
        id: "7",
        question: "Care dintre urmatoarele exercitii este eficient pentru antrenarea muschilor dorsalilor?",
        options: ["Flotarile", "Flexiile de biceps", "Tractiunile la bara fixa", "Extensiile de spate"],
        correct: "Tractiunile la bara fixa",
        video:""

    },
    {
        id: "8",
        question: "Ce grup muscular este solicitat in timpul efectuarii genuflexiunilor (squats)?",
        options: ["Muschii abdominali", "Muschii spatelui", "Muschii umerilor", "Muschii picioarelor"],
        correct: "Muschii picioarelor",
        video:""

    },
    {
        id: "9",
        question: "Care sunt cei 3 macronutrienti?",
        options: ["Proteina, carbohidratii si vitaminele", "Grasimea, fibra si mineralele", "Proteina, carbohidratii si grasimile", "Mineralele, vitaminele si fibra"],
        correct: "Proteina, carbohidratii si grasimile",
        video:""
    },
];

for (var i = 0; i < restartButtons.length; i++) {
    restartButtons[i].addEventListener("click", function() {
        initial();
        displayContainer.classList.remove("hide");
        scoreContainer.classList.add("hide");
    });
}

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
       
        questionCount += 1;
      
        if (questionCount == quizArray.length) {
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            userScore.innerHTML =
                "Ai raspuns corect la " + scoreCount + " din " + questionCount;
        } else {
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            quizDisplay(questionCount);
            count = 20;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    let currentCard = quizCards[questionCount];
    currentCard.classList.remove("hide");
    
    let questionDiv = currentCard.querySelector(".question");
    let videoUrl = quizArray[questionCount].video; 
    
    questionDiv.innerHTML = `
        <p>${quizArray[questionCount].question}</p>
        <div class="video-container">
        <iframe src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen></iframe>

        </div>
    `;
if (videoUrl) {
    let videoContainer = currentCard.querySelector(".video-container");
    let videoFrame = videoContainer.querySelector("iframe");
    videoFrame.src = videoUrl + "?autoplay=1";

    if (currentVideo && currentVideo !== videoFrame) {
        currentVideo.src = currentVideo.src.replace("?autoplay=1", "");
    }
    currentVideo = videoFrame;
}
};

          



function quizCreator() {
    quizArray.sort(() => Math.random() - 0.5);
    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 20;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};