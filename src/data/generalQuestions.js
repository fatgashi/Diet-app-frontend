export default [
    { 
        id: 1, 
        text: 'Select your age group !',
        choices: [{answer: '18-25', image: "LandingPageAge18-25.png"}, {answer: '26-35', image: "LandingPageAge26-35.png"}, {answer: '36-45', image: "LandingPageAge36-45.png"}, {answer: '46+', image: "LandingPageAge46+.png"}],
    },
    { 
        id: 2, 
        text: 'Select your gender',
        extraText: 'Biological sex is a factor that affects your BMR (metabolic rate), which determines how many calories you burn in a day!', 
        choices: [{answer: 'Female', emoji: "👩"}, {answer: 'Male', emoji: "👨"}],
    },
]