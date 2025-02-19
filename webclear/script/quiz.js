const questions = [
    {
        questions: "Apa definisi sampah menurut WHO?",
        answer: [
            { text: "Benda yang tidak dapat didaur ulang", correct: false},
            { text: " Sesuatu yang tidak digunakan, tidak dipakai, tidak disenangi, atau sesuatu yang dibuang dari kegiatan manusia", correct: true},
            { text: "Limbah berbahaya yang dihasilkan oleh industri", correct: false},
            { text: "Sisa makanan yang tidak dimakan", correct: false},
        ]
    },
    {
        questions: "Berdasarkan UU Nomor 8 Tahun 2008, sampah dapat berasal dari mana saja?",
        answer: [
            { text: "Hanya dari kegiatan manusia", correct: false},
            { text: "Hanya dari proses alam", correct: false},
            { text: "Dari kegiatan manusia dan proses alam", correct: true},
            { text: "Hanya dari limbah pabrik", correct: false},
        ]
    },
    {
        questions: "Apa saja jenis sampah berdasarkan sifatnya?",
        answer: [
            { text: "Sampah plastik dan sampah kaca", correct: false},
            { text: "Sampah cair dan sampah kering", correct: false},
            { text: "Sampah domestik dan sampah industri", correct: false},
            { text: "Sampah organik dan sampah anorganik", correct: true},
        ]
    },
    {
        questions: "Apa yang membedakan sampah organik dan anorganik?",
        answer: [
            { text: "Sampah organik bisa didaur ulang, sedangkan anorganik tidak bisa", correct: false},
            { text: "Sampah organik dapat terurai secara alami, sedangkan anorganik sulit terurai", correct: true},
            { text: "Sampah organik lebih berbahaya bagi lingkungan dibandingkan sampah anorganik", correct: false},
            { text: "Sampah organik hanya berasal dari tumbuhan, sedangkan sampah anorganik berasal dari hewan", correct: false},
        ]
    },
    {
        questions: "Contoh sampah organik yang dapat diolah menjadi kompos adalah?",
        answer: [
            { text: "Botol plastik dan kaleng bekas", correct: false},
            { text: "Daun kering dan sisa makanan", correct: true},
            { text: "Kaca dan logam", correct: false},
            { text: "Baterai dan barang elektronik", correct: false},
        ]
    },
    {
        questions: " Mengapa sampah anorganik seperti plastik berbahaya bagi lingkungan?",
        answer: [
            { text: "Karena plastik dapat dengan mudah terbakar", correct: false},
            { text: "Karena plastik sulit terurai dan bisa mencemari lingkungan dalam jangka waktu lama", correct: true},
            { text: "Karena plastik tidak bisa digunakan kembali", correct: false},
            { text: "Karena plastik dapat berubah menjadi bahan beracun dalam satu hari", correct: false},
        ]
    },
    {
        questions: "Jenis sampah anorganik yang dapat didaur ulang adalah?",
        answer: [
            { text: "Sisa makanan", correct: false},
            { text: "Kaleng dan botol plastik", correct: true},
            { text: "Daun kering", correct: false},
            { text: "Air rebusan sayuran", correct: false},
        ]
    },
    {
        questions: "Di bawah ini yang termasuk sampah anorganik adalah?",
        answer: [
            { text: "Kulit pisang dan ranting pohon", correct: false},
            { text: "Kotak kardus bekas makanan", correct: false},
            { text: "Botol kaca dan baterai bekas", correct: true},
            { text: "Nasi basi dan air rebusan sayur", correct: false},
        ]
    },
    {
        questions: "Mengapa sampah organik lebih mudah diolah dibandingkan sampah anorganik?",
        answer: [
            { text: "Karena sampah organik bisa terurai secara alami dan dijadikan kompos", correct: true},
            { text: "Karena sampah organik lebih kuat dan tahan lama", correct: false},
            { text: "Karena sampah organik tidak memiliki bau", correct: false},
            { text: "Karena sampah organik bisa digunakan kembali tanpa proses tambahan", correct: false},
        ]
    },
    {
        questions: "Manakah di bawah ini yang termasuk sampah anorganik berbahaya?",
        answer: [
            { text: "Kertas tisu bekas", correct: false},
            { text: "Tulang ayam", correct: false},
            { text: "Baterai dan barang elektronik", correct: true},
            { text: "Daun kering", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.questions

    currentQuestion.answer.forEach(answer => {
         const button = document.createElement("button");
         button.innerHTML = answer.text;
         button.classList.add("btn")
         answerButtons.appendChild(button);
         if(answer.correct){
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/*function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.add === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}*/

//revisi blackbox
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
        // Menandai jawaban yang benar
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true; // Menonaktifkan semua tombol
        });
        selectedBtn.disabled = true;
        nextButton.style.display = "block";
    }

    // Menonaktifkan tombol yang dipilih
    

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    /*nextButton.innerHTML = "Play Again";*/
    nextButton.style.display = "none";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

//fungsi play again

/*nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();*/


//menonaktifkan tombol play again
nextButton.addEventListener("click", handleNextButton);

startQuiz();


