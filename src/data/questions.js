export default [
    { 
      id: 1, 
      text: 'Select your age group !',
      choices: [{answer: '18-25', image: "../assets/logo.png"}, {answer: '26-35', image: "../assets/logo.png"}, {answer: '36-45', image: "../assets/logo.png"}, {answer: '46+', image: "../assets/logo.png"}],
    },
    { 
      id: 2, 
      text: 'Select your gender',
      extraText: 'Biological sex is a factor that affects your BMR (metabolic rate), which determines how many calories you burn in a day!', 
      choices: [{answer: 'Female', image: "../assets/logo.png"}, {answer: 'Male', image: "../assets/logo.png"}],
    },
    { 
      id: 3, 
      text: 'Question 2', 
      choices: [{answer: 'Option X', image: "../assets/logo.png"}, {answer: 'Option Y', image: "../assets/logo.png"}, {answer: 'Option Z', image: "../assets/logo.png"},],
    },
    { 
      id: 4, 
      text: 'Question 3', 
      choices: ['Option X', 'Option Y', 'Option Z'],
    },
    { 
      id: 5, 
      text: 'Question 4', 
      choices: ['Option X', 'Option Y', 'Option Z'],
    },
    { 
      id: 6, 
      text: 'Question 5', 
      choices: ['Option X', 'Option Y', 'Option Z'],
    },
    // Add more questions as needed
  ];