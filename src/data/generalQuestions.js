export default [
    { 
        id: 1, 
        text: {
            en: 'Select your age group!',
            de: "Wählen Sie Ihre Altersgruppe!"
        },
        choices: [{answer: {en: '18-25', de: "18-25"}, image: "LandingPageAge18-25.png"}, {answer: {en: '26-35', de: "26-35"}, image: "LandingPageAge26-35.png"}, {answer: {en: '36-45', de: "36-45"}, image: "LandingPageAge36-45.png"}, {answer: {en: '46+', de: "46+"}, image: "LandingPageAge46+.png"}],
    },
    { 
        id: 2, 
        text: {
            en: 'Select your gender!',
            de: "Wähle dein Geschlecht!"
        },
        extraText: {
            en: 'Biological sex is a factor that affects your BMR (metabolic rate), which determines how many calories you burn in a day!',
            de: "Das biologische Geschlecht ist ein Faktor, der Ihren BMR (Stoffwechselrate) beeinflusst, der bestimmt, wie viele Kalorien Sie an einem Tag verbrennen!"
        }, 
        choices: [{answer: {en: 'Female', de: "Weiblich"}, emoji: "👩"}, {answer: {en: 'Male', de: "Männlich"}, emoji: "👨"}],
    },
]