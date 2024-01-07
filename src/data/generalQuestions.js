export default [
    { 
        id: 1, 
        text: 'Select your age group !',
        choices: [{answer: '18-25', image: "couple18-25.jpg"}, {answer: '26-35', image: "couple26-35.webp"}, {answer: '36-45', image: "photo36-45.webp"}, {answer: '46+', image: "couple46+.jpg"}],
    },
    { 
        id: 2, 
        text: 'Select your gender',
        extraText: 'Biological sex is a factor that affects your BMR (metabolic rate), which determines how many calories you burn in a day!', 
        choices: [{answer: 'Female', emoji: "👩"}, {answer: 'Male', emoji: "👨"}],
    },
]