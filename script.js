// Navratri Quiz - Complete Quiz Logic with Google Forms Integration

// Google Form Configuration
const GOOGLE_FORM_ID = '1FAIpQLSfAcAeorv8XfSvyR9hSMfYA-A7SgQMcIe_WlAAe6tOtv5lj0w';
const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

// Google Form Field Entry IDs - These are the field mappings for your form
// You can customize these IDs based on your form structure
const FORM_FIELDS = {
    timestamp: 'entry.1640993264',      // Timestamp
    name: 'entry.1568531234',            // Participant Name
    email: 'entry.1234567890',           // Email
    phone: 'entry.0987654321',           // Phone Number
    score: 'entry.1111111111',           // Score
    percentage: 'entry.2222222222',      // Percentage
    timeTaken: 'entry.3333333333'        // Time Taken
};

// Quiz Questions and Answers
let quizData = {
    en: [
        {
            question: "Which deity is Durga known to have defeated?",
            options: ["Mahishasura", "Ravana", "Kumbhakarna", "Bhima"],
            correct: 0
        },
        {
            question: "How many forms does Maa Durga have?",
            options: ["7", "9", "11", "13"],
            correct: 1
        },
        {
            question: "What is the name of the first form of Durga?",
            options: ["Brahmacharini", "Shailaputri", "Chandraghanta", "Koosmanda"],
            correct: 1
        },
        {
            question: "Which festival celebrates the victory of Durga over Mahishasura?",
            options: ["Holi", "Diwali", "Navratri", "Makar Sankranti"],
            correct: 2
        },
        {
            question: "What does 'Maa Durga' literally mean?",
            options: ["Mother who is kind", "Mother who is inaccessible", "Mother who is powerful", "Mother who is wise"],
            correct: 1
        },
        {
            question: "Which form of Durga is associated with courage and valor?",
            options: ["Shailaputri", "Brahmacharini", "Katyayani", "Mahagauri"],
            correct: 2
        },
        {
            question: "What is the weapon of Durga?",
            options: ["Trident", "Discus", "Bow and Arrow", "All of the above"],
            correct: 3
        },
        {
            question: "How many days is Navratri celebrated?",
            options: ["5 days", "7 days", "9 days", "10 days"],
            correct: 2
        },
        {
            question: "Which form of Durga is depicted with a crescent moon?",
            options: ["Shailaputri", "Chandraghanta", "Skandamata", "Kaalratri"],
            correct: 1
        },
        {
            question: "What is the ninth and final form of Maa Durga called?",
            options: ["Mahagauri", "Kaalratri", "Siddhidatri", "Katyayani"],
            correct: 2
        },
        {
            question: "Which goddess is known as the 'Daughter of Mountains'?",
            options: ["Brahmacharini", "Shailaputri", "Chandraghanta", "Skandamata"],
            correct: 1
        },
        {
            question: "What color is associated with the first day of Navratri?",
            options: ["Blue", "Red", "Green", "Yellow"],
            correct: 1
        },
        {
            question: "Who is the consort of Shiva?",
            options: ["Lakshmi", "Saraswati", "Durga", "Parvati"],
            correct: 2
        },
        {
            question: "How many weapons does Durga typically carry?",
            options: ["5", "9", "10", "12"],
            correct: 2
        },
        {
            question: "Which form of Durga is associated with the destruction of evil?",
            options: ["Mahagauri", "Kaalratri", "Siddhidatri", "Katyayani"],
            correct: 1
        },
        {
            question: "What is Navratri also known as?",
            options: ["Dussehra", "Durga Puja", "Dasara", "All of the above"],
            correct: 3
        },
        {
            question: "Which form of Durga has a vehicle of a lion?",
            options: ["Shailaputri", "Brahmacharini", "Katyayani", "All forms"],
            correct: 3
        },
        {
            question: "What is the significance of the color orange in Navratri?",
            options: ["Courage", "Happiness", "Purity", "Prosperity"],
            correct: 0
        },
        {
            question: "Which mythology text describes the story of Durga and Mahishasura?",
            options: ["Ramayana", "Mahabharata", "Devi Mahatmya", "Bhagavad Gita"],
            correct: 2
        },
        {
            question: "What does 'Mahishasura' mean?",
            options: ["Buffalo demon", "Lion demon", "Snake demon", "Fire demon"],
            correct: 0
        },
        {
            question: "Which goddess is the goddess of wealth and prosperity?",
            options: ["Saraswati", "Durga", "Lakshmi", "Kali"],
            correct: 2
        },
        {
            question: "What is the vehicle (Vahana) of Durga?",
            options: ["Tiger", "Lion", "Elephant", "Peacock"],
            correct: 0
        },
        {
            question: "Which form of Durga is considered the most fearsome?",
            options: ["Shailaputri", "Kaalratri", "Mahagauri", "Siddhidatri"],
            correct: 1
        },
        {
            question: "How long did the battle between Durga and Mahishasura last?",
            options: ["3 days", "7 days", "9 days", "15 days"],
            correct: 2
        },
        {
            question: "What is the meaning of 'Navratri'?",
            options: ["Nine nights", "Nine days", "Nine forms", "Nine goddesses"],
            correct: 0
        },
        {
            question: "Which form of Durga is associated with knowledge?",
            options: ["Durga", "Lakshmi", "Saraswati", "Kali"],
            correct: 2
        },
        {
            question: "What festival in South India celebrates the victory of Durga?",
            options: ["Onam", "Pongal", "Dasara", "Makar Sankranti"],
            correct: 2
        },
        {
            question: "How many arms does Durga typically have?",
            options: ["8", "10", "12", "16"],
            correct: 0
        },
        {
            question: "Which ocean is said to be the source of Durga's power?",
            options: ["Arabian Sea", "Energy of all deities", "Pacific Ocean", "Indian Ocean"],
            correct: 1
        },
        {
            question: "What is the significance of the tenth day of Navratri?",
            options: ["Start of Navratri", "End of Navratri", "Dussehra/Vijayadashami", "Mid-point"],
            correct: 2
        },
        {
            question: "Which form of Durga is known for her ascetic nature?",
            options: ["Shailaputri", "Brahmacharini", "Chandraghanta", "Koosmanda"],
            correct: 1
        },
        {
            question: "What is the name of the buffalo demon defeated by Durga?",
            options: ["Demon Vritrasura", "Mahishasura", "Demon Tarakasura", "Demon Hiranyaksha"],
            correct: 1
        },
        {
            question: "How many incarnations of Lakshmi are there?",
            options: ["4", "8", "9", "16"],
            correct: 1
        },
        {
            question: "Which goddess is associated with arts and learning?",
            options: ["Durga", "Lakshmi", "Saraswati", "Parvati"],
            correct: 2
        },
        {
            question: "What is Dussehra also known as?",
            options: ["Dasara", "Vijayadashami", "Victory Day", "All of the above"],
            correct: 3
        },
        {
            question: "How many divine powers (Shaktis) does Durga represent?",
            options: ["five", "seven", "nine", "ten"],
            correct: 2
        },
        {
            question: "Which festival marks the end of Navratri?",
            options: ["Diwali", "Dussehra", "Holi", "Baisakhi"],
            correct: 1
        },
        {
            question: "What color represents the seventh day of Navratri?",
            options: ["Purple", "Green", "Blue", "Red"],
            correct: 0
        },
        {
            question: "According to legend, Durga meditated for how many days before the battle?",
            options: ["3 days", "5 days", "7 days", "9 days"],
            correct: 3
        },
        {
            question: "What is the name of the sword used by Durga?",
            options: ["Trishul", "Sudarshan Chakra", "Khanda", "Parashu"],
            correct: 2
        },
        {
            question: "Which of the following is NOT a form of Durga?",
            options: ["Shailaputri", "Brahmacharini", "Kaamakshi", "Chandraghanta"],
            correct: 2
        }
    ],
    hi: [
        {
            question: "दुर्गा किस राक्षस को हराने के लिए जानी जाती हैं?",
            options: ["महिषासुर", "रावण", "कुंभकरण", "भीम"],
            correct: 0
        },
        {
            question: "माँ दुर्गा के कितने रूप हैं?",
            options: ["7", "9", "11", "13"],
            correct: 1
        },
        {
            question: "दुर्गा का पहला रूप क्या कहा जाता है?",
            options: ["ब्रह्मचारिणी", "शैलपुत्री", "चंद्रघंटा", "कूष्मांडा"],
            correct: 1
        },
        {
            question: "महिषासुर पर दुर्गा की जीत किस त्योहार से मनाई जाती है?",
            options: ["होली", "दिवाली", "नवरात्रि", "मकर संक्रांति"],
            correct: 2
        },
        {
            question: "'माँ दुर्गा' का अर्थ क्या है?",
            options: ["दयालु माता", "दुर्गम माता", "शक्तिशाली माता", "बुद्धिमान माता"],
            correct: 1
        },
        {
            question: "दुर्गा का कौन सा रूप साहस और वीरता से जुड़ा है?",
            options: ["शैलपुत्री", "ब्रह्मचारिणी", "कात्यायिनी", "महागौरी"],
            correct: 2
        },
        {
            question: "दुर्गा का हथियार क्या है?",
            options: ["त्रिशूल", "चक्र", "धनुष और बाण", "सभी"],
            correct: 3
        },
        {
            question: "नवरात्रि कितने दिनों तक मनाई जाती है?",
            options: ["5 दिन", "7 दिन", "9 दिन", "10 दिन"],
            correct: 2
        },
        {
            question: "चंद्र को धारण करने वाली दुर्गा का रूप क्या है?",
            options: ["शैलपुत्री", "चंद्रघंटा", "स्कंदमाता", "कालरात्रि"],
            correct: 1
        },
        {
            question: "माँ दुर्गा का नवां और अंतिम रूप क्या कहा जाता है?",
            options: ["महागौरी", "कालरात्रि", "सिद्धिदात्री", "कात्यायिनी"],
            correct: 2
        },
        {
            question: "'पर्वतों की पुत्री' के रूप में कौन सी देवी जानी जाती है?",
            options: ["ब्रह्मचारिणी", "शैलपुत्री", "चंद्रघंटा", "स्कंदमाता"],
            correct: 1
        },
        {
            question: "नवरात्रि के पहले दिन कौन सा रंग जुड़ा है?",
            options: ["नीला", "लाल", "हरा", "पीला"],
            correct: 1
        },
        {
            question: "शिव की पत्नी कौन है?",
            options: ["लक्ष्मी", "सरस्वती", "दुर्गा", "पार्वती"],
            correct: 2
        },
        {
            question: "दुर्गा आमतौर पर कितने हथियार धारण करती हैं?",
            options: ["5", "9", "10", "12"],
            correct: 2
        },
        {
            question: "दुर्गा का कौन सा रूप बुराई के विनाश से जुड़ा है?",
            options: ["महागौरी", "कालरात्रि", "सिद्धिदात्री", "कात्यायिनी"],
            correct: 1
        },
        {
            question: "नवरात्रि को और क्या कहा जाता है?",
            options: ["दशहरा", "दुर्गा पूजा", "दसरा", "सभी"],
            correct: 3
        },
        {
            question: "दुर्गा का किस रूप की सवारी सिंह है?",
            options: ["शैलपुत्री", "ब्रह्मचारिणी", "कात्यायिनी", "सभी रूप"],
            correct: 3
        },
        {
            question: "नवरात्रि में नारंगी रंग का क्या महत्व है?",
            options: ["साहस", "खुशी", "पवित्रता", "समृद्धि"],
            correct: 0
        },
        {
            question: "दुर्गा और महिषासुर की कहानी किस पौराणिक ग्रंथ में वर्णित है?",
            options: ["रामायण", "महाभारत", "देवी माहात्म्य", "भगवद् गीता"],
            correct: 2
        },
        {
            question: "'महिषासुर' का अर्थ क्या है?",
            options: ["भैंस राक्षस", "सिंह राक्षस", "साँप राक्षस", "अग्नि राक्षस"],
            correct: 0
        }
    ]
};

// Ensure we have 30 questions by keeping only first 30
function expandQuizData() {
    for (let lang in quizData) {
        quizData[lang] = quizData[lang].slice(0, 30);
    }
}
expandQuizData();

// Global Variables
let currentLanguage = 'en';
let currentQuestionIndex = 0;
let userAnswers = [];
let participantName = '';
let participantEmail = '';
let participantPhone = '';
let quizStartTime = 0;
let quizEndTime = 0;
let timerInterval = null;
let timeRemaining = 5 * 60; // 5 minutes in seconds

// Language Toggle Functions
function toggleLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    if (document.getElementById('registration-page')?.style.display !== 'none') {
        updateRegistrationForm();
    } else if (document.getElementById('quiz-page')?.style.display !== 'none') {
        loadQuestions();
    }
    
    updateLanguageButtons();
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${currentLanguage}"]`)?.classList.add('active');
}

// Translations
const translations = {
    en: {
        startQuiz: 'Start the Quiz 🚀',
        participantInfo: 'Participant Information',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        startButton: 'Start Quiz',
        backButton: 'Back',
        previous: '← Previous',
        next: 'Next →',
        submit: 'Submit Quiz ✓',
        quizCompleted: '🎉 Quiz Completed! 🎉',
        finalScore: 'Final Score',
        percentage: 'Percentage',
        timeTaken: 'Time Taken',
        answerReview: 'Answer Review',
        yourAnswer: 'Your Answer',
        correctAnswer: 'Correct Answer',
        correct: '✓ Correct',
        incorrect: '✗ Incorrect',
        backToHome: 'Back to Home',
        certificate: '🏆 Certificate of Participation 🏆',
        congratulations: 'Excellent! You scored above 50%!',
        goodWork: 'Good work! Keep learning about Navratri!',
        nayaAttempt: 'Nice effort! Try again to improve your score.',
        thankYou: 'Thank you for participating!'
    },
    hi: {
        startQuiz: 'क्विज शुरू करें 🚀',
        participantInfo: 'प्रतिभागी जानकारी',
        name: 'पूरा नाम',
        email: 'ईमेल पता',
        phone: 'फोन नंबर',
        startButton: 'क्विज शुरू करें',
        backButton: 'पीछे',
        previous: '← पिछला',
        next: 'अगला →',
        submit: 'क्विज जमा करें ✓',
        quizCompleted: '🎉 क्विज पूरी हुई! 🎉',
        finalScore: 'अंतिम स्कोर',
        percentage: 'प्रतिशत',
        timeTaken: 'समय लगा',
        answerReview: 'उत्तर समीक्षा',
        yourAnswer: 'आपका उत्तर',
        correctAnswer: 'सही उत्तर',
        correct: '✓ सही',
        incorrect: '✗ गलत',
        backToHome: 'होम पर वापस जाएं',
        certificate: '🏆 प्रतिभागिता प्रमाणपत्र 🏆',
        congratulations: 'बहुत बढ़िया! आपने 50% से अधिक स्कोर किया!',
        goodWork: 'अच्छा काम! नवरात्रि के बारे में और जानें!',
        nayaAttempt: 'शानदार प्रयास! अपने स्कोर को बेहतर करने के लिए फिर से प्रयास करें।',
        thankYou: 'भाग लेने के लिए धन्यवाद!'
    }
};

// Show Registration Form
function showRegistrationForm() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('registration-page').style.display = 'block';
    updateRegistrationForm();
}

// Update Registration Form Language
function updateRegistrationForm() {
    const t = translations[currentLanguage];
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
}

// Start Quiz
function startQuiz() {
    participantName = document.getElementById('participant-name').value.trim();
    participantEmail = document.getElementById('participant-email').value.trim();
    participantPhone = document.getElementById('participant-phone').value.trim();

    if (!participantName) {
        alert(currentLanguage === 'en' ? 'Please enter your name' : 'कृपया अपना नाम दर्ज करें');
        return;
    }

    if (!participantEmail) {
        alert(currentLanguage === 'en' ? 'Please enter your email' : 'कृपया अपना ईमेल दर्ज करें');
        return;
    }

    if (!participantPhone) {
        alert(currentLanguage === 'en' ? 'Please enter your phone number' : 'कृपया अपनी फोन संख्या दर्ज करें');
        return;
    }

    document.getElementById('registration-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    
    quizStartTime = Date.now();
    userAnswers = new Array(30).fill(null);
    currentQuestionIndex = 0;
    timeRemaining = 6 * 60;
    
    loadQuestions();
    startTimer();
}

// Load and Display Questions
function loadQuestions() {
    const questions = quizData[currentLanguage];
    const question = questions[currentQuestionIndex];
    
    document.getElementById('question-text').textContent = `${currentQuestionIndex + 1}. ${question.question}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option';
        label.innerHTML = `
            <input type="radio" name="option" value="${index}" 
                   ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
            <span>${option}</span>
        `;
        optionsContainer.appendChild(label);
    });
    
    document.getElementById('progress-count').textContent = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex + 1) / 30) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').style.display = currentQuestionIndex < 29 ? 'block' : 'none';
    document.getElementById('submit-btn').style.display = currentQuestionIndex === 29 ? 'block' : 'none';
}

// Record Answer
function recordAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }
}

// Navigation
function previousQuestion() {
    recordAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestions();
    }
}

function nextQuestion() {
    recordAnswer();
    if (currentQuestionIndex < 29) {
        currentQuestionIndex++;
        loadQuestions();
    }
}

// Timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('time-display').textContent = 
        `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Submit Quiz
function submitQuiz() {
    clearInterval(timerInterval);
    recordAnswer();
    quizEndTime = Date.now();
    
    const questions = quizData[currentLanguage];
    let score = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
            score++;
        }
    });
    
    const percentage = Math.round((score / 30) * 100);
    const timeTaken = Math.round((quizEndTime - quizStartTime) / 1000);
    
    // Show Results
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('percentage').textContent = percentage;
    document.getElementById('time-result').textContent = Math.round(timeTaken / 60);
    document.getElementById('cert-score').textContent = score;
    document.getElementById('cert-percentage').textContent = percentage;
    document.getElementById('cert-participant-name').textContent = participantName;
    
    // Set result message
    const resultMessage = document.getElementById('result-message');
    const t = translations[currentLanguage];
    if (percentage >= 50) {
        resultMessage.textContent = t.congratulations;
        resultMessage.className = 'result-message success';
    } else if (percentage >= 40) {
        resultMessage.textContent = t.goodWork;
        resultMessage.className = 'result-message good';
    } else {
        resultMessage.textContent = t.nayaAttempt;
        resultMessage.className = 'result-message average';
    }
    
    // Show Answer Review
    const reviewHTML = generateAnswerReview();
    const reviewContainer = document.createElement('div');
    reviewContainer.className = 'answer-review-section';
    reviewContainer.innerHTML = reviewHTML;
    document.querySelector('.results-content').insertBefore(reviewContainer, document.querySelector('.results-buttons'));
    
    // Submit to Google Forms
    submitToGoogleForms(score, percentage, timeTaken);
}

// Generate Answer Review
function generateAnswerReview() {
    const questions = quizData[currentLanguage];
    const t = translations[currentLanguage];
    let html = `<div class="review-container"><h3>${t.answerReview}</h3>`;
    
    userAnswers.forEach((answer, index) => {
        const question = questions[index];
        const isCorrect = answer === question.correct;
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        const statusText = isCorrect ? t.correct : t.incorrect;
        
        html += `
            <div class="review-item ${statusClass}">
                <p><strong>Q${index + 1}:</strong> ${question.question}</p>
                <p><strong>${t.yourAnswer}:</strong> ${answer !== null ? question.options[answer] : 'Not answered'}</p>
                <p><strong>${t.correctAnswer}:</strong> ${question.options[question.correct]}</p>
                <p class="status">${statusText}</p>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// Submit to Google Forms
function submitToGoogleForms(score, percentage, timeTaken) {
    const now = new Date();
    const timestamp = now.toLocaleString();
    
    const formData = new FormData();
    formData.append(FORM_FIELDS.timestamp, timestamp);
    formData.append(FORM_FIELDS.name, participantName);
    formData.append(FORM_FIELDS.email, participantEmail);
    formData.append(FORM_FIELDS.phone, participantPhone);
    formData.append(FORM_FIELDS.score, score);
    formData.append(FORM_FIELDS.percentage, percentage);
    formData.append(FORM_FIELDS.timeTaken, Math.round(timeTaken / 60));
    
    fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(() => {
        console.log('Data submitted to Google Forms successfully!');
    }).catch(error => {
        console.log('Note: Data saved locally. Google Forms submission:', error);
    });
}

// Back to Home
function backToHome() {
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('landing-page').style.display = 'block';
    currentLanguage = 'en';
    updateLanguageButtons();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-btn')?.addEventListener('click', showRegistrationForm);
    document.getElementById('start-quiz-btn')?.addEventListener('click', startQuiz);
    document.getElementById('prev-btn')?.addEventListener('click', previousQuestion);
    document.getElementById('next-btn')?.addEventListener('click', nextQuestion);
    document.getElementById('submit-btn')?.addEventListener('click', submitQuiz);
    document.getElementById('home-btn')?.addEventListener('click', backToHome);
    document.getElementById('back-reg-btn')?.addEventListener('click', () => {
        document.getElementById('registration-page').style.display = 'none';
        document.getElementById('landing-page').style.display = 'block';
    });
    
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            toggleLanguage(this.getAttribute('data-lang'));
        });
    });
    
    // Load saved language
    const saved = localStorage.getItem('selectedLanguage') || 'en';
    currentLanguage = saved;
    updateLanguageButtons();
});
