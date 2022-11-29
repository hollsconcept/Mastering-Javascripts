const data = [
    {
        id: 1,
        question:"Which year did Nigeria gain independent?",
        answers:[
            {answer:1943 ,isCorrect: false},
            {answer:1969 ,isCorrect: false},
            {answer:1953 ,isCorrect: false},
            {answer:1960 ,isCorrect: true},
        ],
    },

    {
        id:2,
        question:"How many states are in Nigeria:",
        answers:[
            {answer:44, isCorrect:false},
            {answer:64, isCorrect:false},
            {answer:24, isCorrect:false},
            {answer:36, isCorrect:true},

        ],
    },
    {
        id:3,
        question:"How old is Nigeria:",
        answers:[
            
            {answer:62, isCorrect:true},
            {answer:64, isCorrect:false},
            {answer:24, isCorrect:false},
            {answer:244, isCorrect:false},

        ],
    },
   

];

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer= document.querySelector(".answers")
const play = document.querySelector(".play")
const submit  = document.querySelector(".submit")

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswers;

const playAgain = ()=>{
 
    qIndex = 0;
     correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion()
}

play.addEventListener("click",()=>{
    resultScreen.style.display = "none"
    gameScreen.style.display = "block"
    playAgain()
})

const showResult = ()=>{
    resultScreen.style.display = "block"
    gameScreen.style.display = "none"
    resultScreen.querySelector(".correct").textContent = `Your Correct Answer:${correctCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong scors:${wrongCount}`;
    resultScreen.querySelector(".score").textContent = `Your Total Answer:${(correctCount - wrongCount) * 10}`;

  }


const showQuestion = (qIndex)=>{
    if(qIndex === data.length) return showResult()
    selectedAnswers = null;
    question.textContent = data[qIndex].question;
    answersContainer.innerHTML = data[qIndex].answers.map((item,index)=>
    `
    <div class = "answer">
            <input name = "answer" type = "radio" id = ${index} value = ${item.isCorrect}>     
            <label for =1>${item.answer}</label>
        </div>
     `
    ).join("");
    selectAnswers();
};

 const selectAnswers = () =>{
    answersContainer.querySelectorAll("input").forEach(el=>{el.addEventListener("click",(e)=>{
        selectedAnswers = e.target.value;
    })});
};

const submitAnswer=()=>{
    submit.addEventListener("click",()=>{
        if (selectedAnswers !==null ){
            selectedAnswers ==="true" ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex);
        }else alert("Select an answer!");
        
       
    });
}

    
showQuestion(qIndex);
submitAnswer();
