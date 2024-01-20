export default [
    { 
      id: 3, 
      text: 'Choose your current body type', 
      choices: [{answer: 'Average', image: "plumpFemaleBodyType.png"}, {answer: 'Plump', image: "averageFemaleBodyType.png"}, {answer: 'Extra', image: "extraFemaleBodyType.png"},],
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
      choices: [{answer: 'Lose weight', emoji: "👗"}, {answer: 'Boost brain power', emoji: "🧠"}, {answer: 'Improve blood pressure', emoji: "🫀"}, {answer: 'Increase life expectancy', emoji: "👵🏻"}, {answer: 'Reduce cholesterol level', emoji: "🩸"}, {answer: 'Sleep better', emoji: "🌙"}, {answer: 'Improve bone health', emoji: "💪"}, {answer: 'Reduce the risk of cancer', emoji: "🎗️"}],
    },
    { 
      id: 6, 
      text: 'Choose your target zones',
      checkbox: true, 
      choices: [{answer: 'Belly', image: "fatFemaleBelly.png"}, {answer: 'Butt', image: "fatFemaleButt.png"}, {answer: 'Breasts', image: "fatFemaleBreast.png"}, {answer: 'Legs', image: "fatFemaleLegs.png"},],
    },
    { 
      id: 7, 
      text: 'When were you last happy with your weight?',
      choices: [{answer: 'Less than a year ago', emoji: "🤔"}, {answer: '1 or 2 years ago', emoji: "😅"}, {answer: 'More than 3 years ago', emoji: "😢"}, {answer: 'Never', emoji: "❌"},],
    },
    { 
      id: 8, 
      text: 'What time do you usually eat breakfast?',
      choices: [{answer: 'Before 7:00 am', image: "beforeSevenAM.png"}, {answer: 'After 7:00 am', image: "afterSevenAM.png"}, {answer: 'Between 9 to 11 am', image: "breakfast9-11AM.png"}, {answer: 'I usually skip breakfast', image: "breakfastSkip.png"},],
    },
    { 
      id: 9, 
      text: 'What about lunch?',
      choices: [{answer: 'Before 1:00 pm', image: "lunchBefore1PM.png"}, {answer: 'Between 1 and 2 pm', image: "lunchBetween1-2PM.png"}, {answer: 'Between 2 and 4 pm', image: "lunchBetween2-4PM.png"}, {answer: 'I usually skip lunch', image: "lunchSkipe.png"}],
    },
    { 
      id: 10, 
      text: 'And what time do you have your dinner?',
      choices: [{answer: 'Before 4:00 pm', image: "dinnerBefore4PM.png"}, {answer: 'Between 4 and 7 pm', image: "dinnerBetween4-7PM.png"}, {answer: 'After 7:00 pm', image: "dinnerAfter7PM.png"}, {answer: 'I usually skip dinner', image: "lunchSkipe.png"},],
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
      choices: [{answer: 'Little or no exercise/no physical labor', emoji: "🙅‍♀️"}, {answer: 'Exercise 1-2 days per week/light physical labor', emoji: "🤏"}, {answer: 'Exercise 3-5 days per week/physical labor', emoji: "💪"}, {answer: 'Exercise 6-7 days per week/hard physical labor', emoji: "🔥"}],
    },
    { 
      id: 14, 
      text: 'How often do you work out?',
      choices: [{answer: 'Every day', emoji: "🏋️‍♀️"}, {answer: 'A few days a week', emoji: "🏃‍♀️"}, {answer: 'Once a week', emoji: "☝️"}, {answer: 'From time to time', emoji: "🤏"}, {answer: 'Never', emoji: "🤷‍♀️"}],
    },
    { 
      id: 15, 
      text: 'What is your workload like?',
      choices: [{answer: '9 to 5', emoji: "🌞"}, {answer: 'Night shifts', emoji: "🌚"}, {answer: 'Its fairly flexibile', emoji: "🙆‍♀️"}, {answer: "I don't work anymore", emoji: "🏖️"}],
    },
    { 
      id: 16, 
      text: 'How active are you while at work?',
      choices: [{answer: "I'm fairly inactive", emoji: "🙅‍♀️"}, {answer: 'Physical labor / pretty active', emoji: "🏃‍♀️"}, {answer: 'A bit of both', emoji: "😅"}],
    },
    { 
      id: 17, 
      text: 'What are you interested in?', 
      checkbox: true,
      choices: [{answer: 'Lose weight', emoji: "👗"}, {answer: 'Fat Burn', emoji: "🔥"}, {answer: 'Energy Boost', emoji: "🔋"}, {answer: 'Metabolism Boost', emoji: "🏃‍♀️"}, {answer: 'Better Figure', emoji: "👩"}, {answer: 'Reduce Blood Sugar Levels', emoji: "🍭"}, {answer: 'Insulin Resistance', emoji: "💉"}, {answer: 'Better Sleep', emoji: "🌙"}, {answer: 'Increased Life Expectancy', emoji: "👵🏻"}, {answer: 'Lowered Cholesterol Levels', emoji: "🩸"}, {answer: 'Heart Health', emoji: "🫀"}],
    },
    { 
      id: 18, 
      text: 'Are you out of breath after walking up a flight of stairs?',
      choices: [{answer: "I am so out of breath that I cannot talk", emoji: "🙅‍♀️"}, {answer: 'I am somewhat out of breath but can talk', emoji: "😅"}, {answer: 'I am OK after one flight of stairs', emoji: "👌"}, {answer: 'I could walk up a few flights of stairs easily', emoji: "💪"}],
    },
    { 
      id: 19, 
      text: 'How much time do you spend walking on a typical day?',
      choices: [{answer: "Less than 20 mins", emoji: "👌"}, {answer: '20-60 mins', emoji: "👍"}, {answer: 'More than 60 mins', emoji: "💪"}],
    },
    { 
      id: 20, 
      text: 'How much water do you drink every day?',
      choices: [{answer: "None, I drink caffe and tea", emoji: "☕"}, {answer: 'About 2 glasses (16 oz)', emoji: "✌️"}, {answer: 'Between 2 and 6 glasses (0.5 - 1.5L)', emoji: "👌"}, {answer: 'A lot - probably more than 6 glasses', emoji: "🙌"}],
    },
    { 
      id: 21, 
      text: 'Truthfully, what is an average night like for you?',
      choices: [{answer: "Not enough rest (under 5 hours)", emoji: "😴"}, {answer: 'Some sleep (5-6 hours)', emoji: "💤"}, {answer: 'A good rest (7-8 hours)', emoji: "🧸"}, {answer: "I'm an expert sleeper (more than 8 hours)", emoji: "🤓"}],
    },
    { 
      id: 22, 
      text: 'Do you suffer from any of the following conditions?',
      extraText: 'By providing us with this information, we will be able to give you the best fasting advice',
      checkbox: true,
      condition: true,
      choices: [{answer: "No I don't", emoji: "⚪"}, {answer: 'Diabetes', emoji: "⚪"}, {answer: 'Heart disease', emoji: "⚪"}, {answer: 'High blood pressure', emoji: "⚪"}, {answer: 'High cholesterol', emoji: "⚪"}, {answer: 'Mental health disorders', emoji: "⚪"}, {answer: 'Chronic kidney disease (CKD)', emoji: "⚪"}, {answer: 'Cancer', emoji: "⚪"}, {answer: 'Gastrointestinal disorder', emoji: "⚪"}, {answer: 'Physical disability', emoji: "⚪"}, {answer: 'Other', emoji: "⚪"}],
    },
    { 
      id: 23, 
      text: 'Are you taking any medication?',
      checkbox: true,
      condition: true,
      choices: [{answer: 'None of them', emoji: "⚪"}, {answer: "Vitamins", emoji: "⚪"}, {answer: 'Hormones', emoji: "⚪"}, {answer: 'Antibiotics', emoji: "⚪"}],
    },
    { 
      id: 24, 
      text: 'Do you have any serious back problems?',
      choices: [{answer: "Yes", emoji: "⚠️"}, {answer: 'No', emoji: "✅"}],
    },
    { 
      id: 25, 
      text: 'Bad habits',
      extraText: "We've all got some - what are yours?",
      checkbox: true,
      condition: true,
      choices: [{answer: 'None of them', emoji: "❌"}, {answer: "Unable to rest enough", emoji: "🌙"}, {answer: 'I love chocolate and candy', emoji: "🍫"}, {answer: 'Soda is my best friend', emoji: "🥤"}, {answer: 'I consume a lot of salty food', emoji: "🧂"}, {answer: "I'm a midnight snacker", emoji: "🍟"}],
    },
    { 
      id: 26, 
      text: 'What do you know about Intermittent Fasting?',
      choices: [{answer: "Only the name", emoji: "🙅‍♀️"}, {answer: 'A couple of things', emoji: "👌"}, {answer: "I'm experienced in fasting", emoji: "😎"}],
    },
    { 
      id: 27, 
      text: 'How excited are you to shed some extra weight?',
      choices: [{answer: "I just want to see what the buzz about fasting is about", emoji: "👀"}, {answer: 'I want to try and lose some weight', emoji: "💪"}, {answer: "I'm serious about losing as much weight as possible", emoji: "🔥"}],
    },
    { 
      id: 28, 
      text: 'How tall are you?',
      question: 'height'
    },
    { 
      id: 29, 
      text: 'What is your current weight?',
      question: 'weight',
      extension: true,
    },
    { 
      id: 30, 
      text: 'What would you consider your perfect weight?',
      question: 'weight'
    },
    // Add more questions as needed
  ];