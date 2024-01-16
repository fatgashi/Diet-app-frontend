export default [
    { 
      id: 3, 
      text: 'Choose your current body type', 
      choices: [{answer: 'Average', image: "averageFemaleBodyType.png"}, {answer: 'Plump', image: "plumpFemaleBodyType.png"}, {answer: 'Extra', image: "extraFemaleBodyType.png"},],
    },
    { 
      id: 4, 
      text: 'Choose the body type you want to have', 
      choices: [{answer: 'Fit', image: "fitFemaleBodyType.png"}, {answer: 'Athletic', image: "athleticFemaleBodyType.png"}, {answer: 'Shapely', image: "shapelyFemaleBodyType.png"},],
    },
    { 
      id: 5, 
      text: 'What do you want to achieve?', 
      extraText: 'You can select multiple goals',
      checkbox: true,
      choices: [{answer: 'Lose weight', emoji: "👔"}, {answer: 'Boost brain power', emoji: "🧠"}, {answer: 'Improve blood pressure', emoji: "❤️‍🩹"}, {answer: 'Increase life expectancy', emoji: "👵🏻"}, {answer: 'Reduce cholesterol level', emoji: "🩸"}, {answer: 'Sleep better', emoji: "🌙"}, {answer: 'Improve bone health', emoji: "💪"}, {answer: 'Reduce the risk of cancer', emoji: "🎗️"}],
    },
    { 
      id: 6, 
      text: 'Choose your target zones',
      checkbox: true, 
      choices: [{answer: 'Belly', image: "fatFemaleBelly.png"}, {answer: 'Butt', image: "fatFemaleButt.png"}, {answer: 'Breasts', image: "fatFemaleBreast.png"}, {answer: 'Legs', image: "fatFemaleLegs.png"},],
    },
    // Add more questions as needed
  ];