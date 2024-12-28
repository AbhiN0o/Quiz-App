const questions=[{
    question:"Who is the most Dangerous person in Nowgong?",
    answers:[
        {text:"Harshu🥴" ,correct:false},
        {text:"Anshu🤡" ,correct:false},
        {text:"Kavya🤠" ,correct:false},
        {text:"Dhruv😎" ,correct:true}
    ]
},{question:"Peter Parker ko kis janwar ke katne par power mili thi",
answers:[
    {text:"Narendra Modi" ,correct:false},
    {text:"Peppa Pig" ,correct:false},
    {text:"Thala" ,correct:true},
    {text:"Spider" ,correct:false}
]}
,
{question:"Who got the most stylist hair in the house?",
    answers:[
        {text:"Anshu Appa" ,correct:false},
        {text:"Dhurrru" ,correct:false},
        {text:"Harshu Spikes" ,correct:true},
        {text:"Kavya Navratan" ,correct:false}
    ]},
    {question:"Ghar me sabse jyada daure kise padte hai?",
        answers:[
            {text:"Anshu Aaalu" ,correct:true},
            {text:"Dhurrru Don" ,correct:false},
            {text:"Harshu Hathiyar" ,correct:false},
            {text:"Kavya Gunda" ,correct:false}
        ]},
        {question:"Navodaya ke Sabse Bade Gunde ka name batao",
answers:[
    {text:"Kavya Damodar Das Modi" ,correct:false},
    {text:"Kavya Daaku" ,correct:false},
    {text:"Kavya Gunda" ,correct:false},
    {text:"Lord Kavya Voldemort Potter" ,correct:true}
]}];
const questionElement=document.querySelector('#question')
const answerButton=document.querySelector('#answer-buttons')
const nextButton=document.querySelector('#next-btn')

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;;
    nextButton.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". " +currentQuestion.question;
    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement('button')
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',(e)=>{
            selectAnswer(e);
        })

    });
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score+=1;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}


function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex+=1;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})



startQuiz();