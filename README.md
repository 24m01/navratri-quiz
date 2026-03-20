# 🪔 Navratri Mythology Quiz 🌸

A beautiful, interactive, and bilingual Navratri Mythology Quiz website built with HTML, CSS, and JavaScript.

## ✨ Features

### 🎯 Quiz Functionality
- **60 Multiple Choice Questions** covering:
  - Maa Durga and the nine forms
  - Hindu mythology concepts
  - Navratri traditions and significance
  - Goddesses (Lakshmi, Saraswati, Kali)

- **15-Minute Countdown Timer** - Track your time during the quiz
- **Progress Tracker** - Visual progress bar showing question completion
- **Previous/Next Navigation** - Easy navigation through questions
- **Answer Review** - See all questions with your answers vs. correct answers

### 🌐 Bilingual Support
- **English & Hindi** - Toggle between languages anytime
- Complete translations for:
  - All 60 questions and options
  - Quiz interface and buttons
  - Results and certificates
  - Navigation labels

### 📝 Registration & Tracking
- **Participant Information Collection**:
  - Full Name
  - Email Address
  - Phone Number
  
- **Automatic Google Forms Integration** - All responses automatically saved to Google Sheets
- **Digital Certificate** - Personalized certificate on completion

### 🎨 Beautiful Design
- **Navratri Color Scheme**: Warm reds, oranges, and golds
- **Animated Elements**:
  - Floating diyas with glowing effects
  - Rotating flower emoji
  - Smooth hover animations
  - Pulsing timer effects
- **Nine Forms of Maa Durga Display** - Interactive grid showcase
- **Fully Responsive** - Mobile-friendly design for all devices

### 🏆 Results & Performance
- **Score Calculation** - Automatic scoring (60 points possible)
- **Percentage Display** - Shows performance percentage
- **Time Tracking** - Records time taken to complete quiz
- **Performance Messages** - Personalized messages based on score:
  - 50%+ : Congratulations!
  - 40-49% : Good effort, keep learning
  - Below 40% : Nice try, attempt again
- **Answer Review Section** - Detailed view of all answers with correctness

## 📁 Files Structure

```
navratri-quiz/
├── index.html      # Main HTML file with landing page, quiz, and results
├── style.css       # Complete CSS styling with animations
├── script.js       # JavaScript logic for quiz functionality
└── README.md       # This file
```

## 🚀 Quick Start

### Option 1: Open Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/24m01/navratri-quiz.git
   cd navratri-quiz
   ```

2. Open `index.html` in your web browser
   - Double-click the file, or
   - Right-click → Open with → Your preferred browser

### Option 2: Use Local Server (Recommended)
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 3: Deploy on Netlify (Live Online)
1. Go to [Netlify](https://netlify.com)
2. Sign up (free account)
3. Drag and drop your folder
4. Get instant live link!

## 🔧 Google Forms Integration

To enable automatic response collection to Google Sheets:

1. Create a Google Form with these fields:
   - Timestamp
   - Participant Name
   - Email Address
   - Phone Number
   - Score (out of 60)
   - Percentage
   - Time Taken (minutes)

2. Get the Form Entry IDs by inspecting the form
3. Update these values in `script.js`:
   ```javascript
   const FORM_FIELDS = {
       timestamp: 'entry.XXXXXX',
       name: 'entry.XXXXXX',
       email: 'entry.XXXXXX',
       phone: 'entry.XXXXXX',
       score: 'entry.XXXXXX',
       percentage: 'entry.XXXXXX',
       timeTaken: 'entry.XXXXXX'
   };
   ```

## 📊 Quiz Flow

1. **Landing Page**
   - View quiz information
   - See rules and participation details
   - Learn about nine forms of Maa Durga

2. **Registration**
   - Enter name, email, and phone
   - Select preferred language

3. **Quiz Mode**
   - Answer 60 questions (15 minutes)
   - Toggle language anytime
   - Track progress with visual bar
   - Navigate with Previous/Next buttons

4. **Results Page**
   - View final score and percentage
   - See time taken
   - Receive personalized message
   - Review all answers
   - Get digital certificate
   - Option to return home

## 🎨 Customization

### Change Colors
Edit in `style.css`:
```css
:root {
    --primary-red: #C41E3A;
    --primary-orange: #FF6B35;
    --primary-gold: #FFD700;
}
```

### Add More Questions
Edit `quizData` in `script.js`:
```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of correct answer
}
```

### Change Timer Duration
In `script.js`:
```javascript
let timeRemaining = 10 * 60;  // Change 10 to desired minutes
```

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and gradients
- **JavaScript (Vanilla)** - No frameworks, pure JavaScript
- **Google Forms API** - For data collection
- **LocalStorage** - For saving language preference

## 📱 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS & Android)

## 🎓 Educational Value

Perfect for:
- Navratri celebrations and awareness
- Hindu mythology education
- Interactive learning
- Cultural festivities
- School and community events

## 🔐 Privacy & Data

- Participant data is only sent to your Google Form/Sheets
- No external tracking
- All processing happens in the browser
- Data is yours to manage

## 📄 License

This project is open source and available for educational and personal use.

## 🙏 Credits

- Designed with love for Navratri celebrations
- Inspired by Hindu mythology and traditions
- Created to promote cultural awareness

## 📧 Contact & Support

- **GitHub**: [24m01/navratri-quiz](https://github.com/24m01/navratri-quiz)
- Have suggestions? Feel free to contribute!

---

## 🌟 Future Enhancements

- Leaderboard system
- User profiles and progress tracking
- More questions and categories
- Difficulty levels
- Certificates with QR codes
- Mobile app version
- Multiplayer quiz mode
- Audio pronunciation guide

---

**Celebrate Navratri with Knowledge! 🪔✨**

Made with ❤️ for the Navratri community
