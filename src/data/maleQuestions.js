export default [
    { 
      id: 3, 
      text: 'Choose your current body type',
      choices: [{answer: 'Average', image: "../assets/logo.png"}, {answer: 'Slightly overweight', image: "../assets/logo.png"}, {answer: 'Overweight', image: "../assets/logo.png"},],
    },
    { 
      id: 4, 
      text: 'Choose the body type you want to have', 
      choices: [{answer: 'Fit', image: "../assets/logo.png"}, {answer: 'Cut', image: "../assets/logo.png"}, {answer: 'Bulk', image: "../assets/logo.png"},],
    },
    { 
      id: 5, 
      text: 'What do you want to achieve?', 
      extraText: 'You can select multiple goals',
      checkbox: true,
      choices: [{answer: 'Lose weight', emoji: "👔"}, {answer: 'Boost brain power', emoji: "🧠"}, {answer: 'Improve blood pressure', emoji: "❤️‍🩹"}, {answer: 'Increase life expectancy', emoji: "👴"}, {answer: 'Reduce cholesterol level', emoji: "🩸"}, {answer: 'Sleep better', emoji: "🌙"}, {answer: 'Improve bone health', emoji: "💪"}, {answer: 'Reduce the risk of cancer', emoji: "🎗️"}],
    },
    { 
      id: 6, 
      text: 'Choose your target zones',
      extraText: 'You can select multiple goals',
      checkbox: true, 
      choices: [{answer: 'Belly', image: "../assets/logo.png"}, {answer: 'Butt', image: "../assets/logo.png"}, {answer: 'Pecs', image: "../assets/logo.png"}, {answer: 'Legs', image: "../assets/logo.png"},],
    },
    { 
      id: 7, 
      text: 'When were you last happy with your weight?',
      choices: [{answer: 'Less than a year ago', emoji: "🤔"}, {answer: '1 or 2 years ago', emoji: "😅"}, {answer: 'More than 3 years ago', emoji: "😢"}, {answer: 'Never', emoji: "❌"},],
    },
    { 
      id: 8, 
      text: 'What time do you usually eat breakfast?',
      choices: [{answer: 'Before 7:00 am', image: "🤔"}, {answer: 'After 7:00 am', image: "😅"}, {answer: 'Between 9 to 11 am', image: "😢"}, {answer: 'I usually skip breakfast', image: "❌"},],
    },
    { 
      id: 9, 
      text: 'What about lunch?',
      choices: [{answer: 'Before 1:00 pm', image: "🤔"}, {answer: 'Between 1 and 2 pm', image: "😅"}, {answer: 'Between 2 and 4 pm', image: "😢"}, {answer: 'I usually skip lunch', image: "❌"},],
    },
    { 
      id: 10, 
      text: 'And what time do you have your dinner?',
      choices: [{answer: 'Before 4:00 pm', image: "🤔"}, {answer: 'Between 4 and 7 pm', image: "😅"}, {answer: 'After 7:00 pm', image: "😢"}, {answer: 'I usually skip dinner', image: "❌"},],
    },
    { 
      id: 11, 
      text: 'Do you prefer to cook at home or eat out?',
      choices: [{answer: 'I usually cook at home', emoji: "🍳"}, {answer: 'I generally eat out', emoji: "🍽️"}, {answer: 'I like to do both', emoji: "🍲"}],
    },
    { 
      id: 12, 
      text: 'What are your feelings about fasting for a whole weekend?',
      choices: [{answer: 'No problem!', emoji: "👌"}, {answer: 'I will try', emoji: "💪"}, {answer: 'No way!', emoji: "🙅"}],
    },
    { 
      id: 13, 
      text: 'What is your activity level?',
      choices: [{answer: 'Little or no exercise/no physical labor', emoji: "👌"}, {answer: 'Exercise 1-2 days per week/light physical labor', emoji: "💪"}, {answer: 'Exercise 3-5 days per week/physical labor', emoji: "🙅"}, {answer: 'Exercise 6-7 days per week/hard physical labor', emoji: "🙅"}, {answer: 'Hard daily exercise & physical labor', emoji: "🙅"},],
    },
    // Add more questions as needed
  ];