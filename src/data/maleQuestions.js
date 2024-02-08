export default [
    { 
      id: 3, 
      text: {
        en: 'Choose your current body type',
        de: 'Wählen Sie Ihren aktuellen Körpertyp'
      },
      choices: [{answer: { en:'Average', de: 'Durchschnitt'}, image: "averageMaleBodyType.png"}, {answer: {en: 'Slightly overweight', de: "Leicht übergewichtig"}, image: "slightlyOverweightMaleBodyType.png"}, {answer: {en: 'Overweight', de: "Übergewicht"}, image: "overweightMaleBodyType.png"}],
    },
    { 
      id: 4, 
      text: {
        en:'Choose the body type you want to have',
        de: "Wählen Sie den Körpertyp, den Sie haben möchten"
      }, 
      choices: [{answer: {en: 'Fit', de: "Fit"}, image: "fitMaleBodyType.png"}, {answer: {en: 'Cut', de: "karosserie ausschnitt"}, image: "cutMaleBodyType.png"}, {answer: {en: 'Bulk', de: "Schüttgut" }, image: "bulkMaleBodyType.png"}],
    },
    { 
      id: 5, 
      text: {
        en: 'What do you want to achieve?',
        de: "Was möchten Sie erreichen?",
      }, 
      extraText: {
        en: 'You can select multiple goals',
        de: "Sie können mehrere Ziele auswählen"
      },
      checkbox: true,
      choices: [{answer: {en: 'Lose weight', de: "Abnehmen"}, emoji: "👔"}, {answer: {en: 'Boost brain power', de: "Steigern Sie die Gehirnleistung"}, emoji: "🧠"}, {answer: {en: 'Improve blood pressure', de: "Verbessern Sie den Blutdruck"}, emoji: "🫀"}, {answer: {en: 'Increase life expectancy', de: "Erhöhen Sie die Lebenserwartung"}, emoji: "👴"}, {answer: {en: 'Reduce cholesterol level', de: "Cholesterinspiegel senken"}, emoji: "🩸"}, {answer: {en: 'Sleep better', de: "Besser schlafen"}, emoji: "🌙"}, {answer: {en: 'Improve bone health', de: "Verbessern Sie die Knochengesundheit"}, emoji: "💪"}, {answer: {en: 'Reduce the risk of cancer', de: "Reduzieren Sie das Krebsrisiko"}, emoji: "🎗️"}],
    },
    { 
      id: 6, 
      text: {
        en: 'Choose your target zones',
        de: 'Wählen Sie Ihre Zielzonen'
      },
      checkbox: true, 
      choices: [{answer: {en: 'Belly', de: "Bauch"}, image: "fatMaleBelly.png"}, {answer: {en: 'Butt', de: "Hintern"}, image: "fatMaleButt.png"}, {answer: {en: 'Pecs', de: "Brustmuskeln"}, image: "fatMalePecs.png"}, {answer: {en: 'Legs', de: "Beine"}, image: "fatMaleLegs.png"},],
    },
    { 
      id: 7, 
      text: {
        en: 'When were you last happy with your weight?',
        de: "Wann waren Sie zuletzt mit Ihrem Gewicht zufrieden?"
      },
      choices: [{answer: {en: 'Less than a year ago', de: "Vor weniger als einem Jahr"}, emoji: "🤔"}, {answer: {en: '1 or 2 years ago', de: "Vor 1 oder 2 Jahren"}, emoji: "😅"}, {answer: {en: 'More than 3 years ago', de: "Vor mehr als 3 Jahren"}, emoji: "😢"}, {answer: {en: 'Never', de: "Niemals"}, emoji: "❌"},],
    },
    { 
      id: 8, 
      text: {
        en: 'What time do you usually eat breakfast?',
        de: 'Um wie viel Uhr frühstücken Sie normalerweise?'
      },
      choices: [{answer: {en: 'Before 7:00 am', de: "Vor 7:00 Uhr"}, image: "beforeSevenAM.png"}, {answer: {en: 'After 7:00 am', de: "Nach 7:00 Uhr"}, image: "afterSevenAM.png"}, {answer: {en: 'Between 9 to 11 am', de: "Zwischen 9 und 11 Uhr"}, image: "breakfast9-11AM.png"}, {answer: {en: 'I usually skip breakfast', de: "Normalerweise lasse ich das Frühstück aus"}, image: "breakfastSkip.png"}],
    },
    { 
      id: 9, 
      text: {
        en: 'What about lunch?',
        de: 'Was ist mit Mittagessen?'
      },
      choices: [{answer: {en: 'Before 1:00 pm', de: "Vor 13:00 Uhr"}, image: "lunchBefore1PM.png"}, {answer: {en: 'Between 1 and 2 pm', de: "Zwischen 13 und 14 Uhr"}, image: "lunchBetween1-2PM.png"}, {answer: {en: 'Between 2 and 4 pm', de: "Zwischen 14 und 16 Uhr"}, image: "lunchBetween2-4PM.png"}, {answer: {en: 'I usually skip lunch', de: "Normalerweise lasse ich das Mittagessen aus"}, image: "lunchSkipe.png"}],
    },
    { 
      id: 10, 
      text: {
        en: 'And what time do you have your dinner?',
        de: "Und um wie viel Uhr essen Sie zu Abend?"
      },
      choices: [{answer: {en: 'Before 4:00 pm', de: "Vor 16:00 Uhr"}, image: "dinnerBefore4PM.png"}, {answer: {en: 'Between 4 and 7 pm', de: "Zwischen 16 und 19 Uhr"}, image: "dinnerBetween4-7PM.png"}, {answer: {en: 'After 7:00 pm', de: "Nach 19:00 Uhr"}, image: "dinnerAfter7PM.png"}, {answer: {en: 'I usually skip dinner', de: "Normalerweise lasse ich das Abendessen aus"}, image: "lunchSkipe.png"},],
    },
    { 
      id: 11, 
      text: {
        en: 'Do you prefer to cook at home or eat out?',
        de: "Kochen Sie lieber zu Hause oder essen Sie lieber auswärts?"
      },
      choices: [{answer: {en: 'I usually cook at home', de: "Normalerweise koche ich zu Hause"}, emoji: "🍳"}, {answer: {en: 'I generally eat out', de: "Normalerweise esse ich auswärts"}, emoji: "🍽️"}, {answer: {en: 'I like to do both', de: "Ich mache gerne beides"}, emoji: "🍲"}],
    },
    { 
      id: 12, 
      text: {
        en: 'What are your feelings about fasting for a whole weekend?',
        de: "Was halten Sie davon, ein ganzes Wochenende lang zu fasten?"
      },
      choices: [{answer: {en: 'No problem!', de: "Kein Problem!"}, emoji: "👌"}, {answer: {en: 'I will try', de: "Ich werde versuchen"}, emoji: "💪"}, {answer: {en: 'No way!', de: "Auf keinen Fall!"}, emoji: "🙅"}],
    },
    { 
      id: 13, 
      text: {
        en: 'What is your activity level?',
        de: "Wie hoch ist Ihr Aktivitätsniveau?"
      },
      choices: [{answer: {en: 'Little or no exercise/no physical labor', de: "Wenig oder keine Bewegung/keine körperliche Arbeit"}, emoji: "🙅"}, {answer: {en: 'Exercise 1-2 days per week/light physical labor', de: "Trainieren Sie 1-2 Tage pro Woche/leichte körperliche Arbeit"}, emoji: "🤏"}, {answer: {en: 'Exercise 3-5 days per week/physical labor', de: "Trainieren Sie 3-5 Tage pro Woche/körperliche Arbeit"}, emoji: "💪"}, {answer: {en: 'Exercise 6-7 days per week/hard physical labor', de: "Trainieren Sie 6-7 Tage pro Woche/schwere körperliche Arbeit"}, emoji: "🔥"}],
    },
    { 
      id: 14, 
      text: {
        en: 'How often do you work out?',
        de: "Wie oft trainierst du?"
      },
      choices: [{answer: {en: 'Every day', de: "Täglich"}, emoji: "🏋️‍♂️"}, {answer: {en: 'A few days a week', de: "Ein paar Tage in der Woche"}, emoji: "🏃‍♂️"}, {answer: {en: 'Once a week', de: "Wöchentlich"}, emoji: "☝️"}, {answer: {en: 'From time to time', de: "Von Zeit zu Zeit"}, emoji: "🤏"}, {answer: {en: 'Never', de: "Niemals"}, emoji: "🤷‍♂️"}],
    },
    { 
      id: 15, 
      text: {
        en: 'What is your workload like?',
        de: "Wie hoch ist Ihr Arbeitspensum?"
      },
      choices: [{answer: {en: '9 to 5', de: "9 zu 5"}, emoji: "🌞"}, {answer: {en: 'Night shifts', de: "Nachtschichten"}, emoji: "🌚"}, {answer: {en: "It's fairly flexible", de: "Es ist ziemlich flexibel"}, emoji: "🙆‍♂️"}, {answer: {en: "I don't work anymore", de: "Ich arbeite nicht mehr"}, emoji: "🏖️"}],
    },
    { 
      id: 16, 
      text: {
        en: 'How active are you while at work?',
        de: "Wie aktiv sind Sie bei der Arbeit?"
      },
      choices: [{answer: {en: "I'm fairly inactive", de: "Ich bin ziemlich inaktiv"}, emoji: "🙅‍♂️"}, {answer: {en: 'Physical labor / pretty active', de: "Körperliche Arbeit / ziemlich aktiv"}, emoji: "🏃‍♂️"}, {answer: {en: 'A bit of both', de: "Ein bisschen von beidem"}, emoji: "😅"}],
    },
    { 
      id: 17, 
      text: {
        en: 'What are you interested in?',
        de: "Was interessiert dich?"
      }, 
      checkbox: true,
      choices: [{answer: {en: 'Lose weight', de: "Abnehmen"}, emoji: "👔"}, {answer: {en: 'Fat Burn', de: "Fettverbrennung"}, emoji: "🔥"}, {answer: {en: 'Energy Boost', de: "Energieschub"}, emoji: "🔋"}, {answer: {en: 'Metabolism Boost', de: "Stoffwechsel Schub"}, emoji: "🏃‍♂️"}, {answer: {en: 'Better Figure', de: "Bessere Figur"}, emoji: "👨"}, {answer: {en: 'Reduce Blood Sugar Levels', de: "Reduzieren Sie den Blutzuckerspiegel"}, emoji: "🍭"}, {answer: {en: 'Insulin Resistance', de: "Insulinresistenz"}, emoji: "💉"}, {answer: {en: 'Better Sleep', de: "Besserer Schlaf"}, emoji: "🌙"}, {answer: {en: 'Increased Life Expectancy', de: "Erhöhte Lebenserwartung"}, emoji: "👴"}, {answer: {en: 'Lowered Cholesterol Levels', de: "Gesenkter Cholesterinspiegel"}, emoji: "🩸"}, {answer: {en: 'Heart Health', de: "Herz Gesundheit"}, emoji: "🫀"}],
    },
    { 
      id: 18, 
      text: {
        en: 'Are you out of breath after walking up a flight of stairs?',
        de: "Sind Sie nach dem Treppensteigen außer Atem?"
      },
      choices: [{answer: {en: "I am so out of breath that I cannot talk", de: "Ich bin so außer Atem, dass ich nicht sprechen kann"}, emoji: "🙅‍♂️"}, {answer: {en: 'I am somewhat out of breath but can talk', de: "Ich bin etwas außer Atem, kann aber reden"}, emoji: "😅"}, {answer: {en: 'I am OK after one flight of stairs', de: "Nach einer Treppe geht es mir gut"}, emoji: "👌"}, {answer: {en: 'I could walk up a few flights of stairs easily', de: "Ich konnte problemlos ein paar Treppen hochgehen"}, emoji: "💪"}],
    },
    { 
      id: 19, 
      text: {
        en: 'How much time do you spend walking on a typical day?',
        de: "Wie viel Zeit verbringen Sie an einem typischen Tag mit Spaziergängen?"
      },
      choices: [{answer: {en: "Less than 20 mins", de: "Weniger als 20 Minuten"}, emoji: "👌"}, {answer: {en: '20-60 mins', de: "20-60 Min"}, emoji: "👍"}, {answer: {en: 'More than 60 mins', de: "Mehr als 60 Min"}, emoji: "💪"}],
    },
    { 
      id: 20, 
      text: {
        en: 'How much water do you drink every day?',
        de: "Wie viel Wasser trinken Sie täglich?"
      },
      choices: [{answer: {en: "None, I drink coffee and tea", de: "Keine, ich trinke Kaffee und Tee"}, emoji: "☕"}, {answer: {en: 'About 2 glasses (16 oz)', de: "Ungefähr 2 Gläser (16 oz)"}, emoji: "✌️"}, {answer: {en: 'Between 2 and 6 glasses (0.5 - 1.5L)', de: "Zwischen 2 und 6 Gläser (0,5 – 1,5 l)"}, emoji: "👌"}, {answer: {en: 'A lot - probably more than 6 glasses', de: "Eine Menge - wahrscheinlich mehr als 6 Gläser"}, emoji: "🙌"}],
    },
    { 
      id: 21, 
      text: {
        en: 'Truthfully, what is an average night like for you?',
        de: "Ehrlich gesagt, wie sieht eine durchschnittliche Nacht für Sie aus?"
      },
      choices: [{answer: {en: "Not enough rest (under 5 hours)", de: "Zu wenig Ruhe (unter 5 Stunden)"}, emoji: "😴"}, {answer: {en: 'Some sleep (5-6 hours)', de: "Etwas schlafen (5-6 Stunden)"}, emoji: "💤"}, {answer: {en: 'A good rest (7-8 hours)', de: "Eine gute Erholung (7-8 Stunden)"}, emoji: "🧸"}, {answer: {en: "I'm an expert sleeper (more than 8 hours)", de: "Ich bin ein erfahrener Schläfer (mehr als 8 Stunden)"}, emoji: "🤓"}],
    },
    { 
      id: 22, 
      text: {
        en: 'Do you suffer from any of the following conditions?',
        de: "Leiden Sie unter einer der folgenden Erkrankungen?"
      },
      extraText: {
        en: 'By providing us with this information, we will be able to give you the best fasting advice',
        de: "Durch die Bereitstellung dieser Informationen können wir Ihnen die beste Fastenberatung geben"
      },
      checkbox: true,
      condition: true,
      choices: [{answer: {en: "No I don't", de: "Nein, ich nicht"}, emoji: "⚪"}, {answer: {en: 'Diabetes', de: "Diabetes"}, emoji: "⚪"}, {answer: {en: 'Heart disease', de: "Herzkrankheit"}, emoji: "⚪"}, {answer: {en: 'High blood pressure', de: "Bluthochdruck"}, emoji: "⚪"}, {answer: {en: 'High cholesterol', de: "Hoher Cholesterinspiegel"}, emoji: "⚪"}, {answer: {en: 'Mental health disorders', de: "Psychische Gesundheitsstörungen"}, emoji: "⚪"}, {answer: {en: 'Chronic kidney disease (CKD)', de: "Chronische Nierenerkrankung"}, emoji: "⚪"}, {answer: {en: 'Cancer', de: "Krebs"}, emoji: "⚪"}, {answer: {en: 'Gastrointestinal disorder', de: "Magen-Darm-Störung"}, emoji: "⚪"}, {answer: {en: 'Physical disability', de: "Körperliche Behinderung"}, emoji: "⚪"}, {answer: {en: 'Other', de: "Andere"}, emoji: "⚪"}],
    },
    { 
      id: 23, 
      text: {
        en: 'Are you taking any medication?',
        de: "Nimmst du irgendwelche Medikamente?"
      },
      checkbox: true,
      condition: true,
      choices: [{answer: {en: 'None of them', de: "Keiner von denen"}, emoji: "⚪"}, {answer: {en: "Vitamins", de: "Vitamine"}, emoji: "⚪"}, {answer: {en: 'Hormones', de: "Hormone"}, emoji: "⚪"}, {answer: {en: 'Antibiotics', de: "Antibiotika"}, emoji: "⚪"}],
    },
    { 
      id: 24, 
      text: {
        en: 'Do you have any serious back problems?',
        de: "Haben Sie ernsthafte Rückenprobleme?"
      },
      choices: [{answer: {en: "Yes", de: "Ja"}, emoji: "⚠️"}, {answer: {en: 'No', de: "NEIN"}, emoji: "✅"}],
    },
    { 
      id: 25, 
      text: {
        en: 'Bad habits',
        de: "Schlechte Angewohnheiten"
      },
      extraText: {
        en: "We've all got some - what are yours?",
        de: "Wir haben alle welche - was ist Ihres?"
      },
      checkbox: true,
      condition: true,
      choices: [{answer: {en: 'None of them', de: "Keiner von denen"}, emoji: "❌"}, {answer: {en: "Unable to rest enough", de: "Kann mich nicht ausreichend ausruhen"}, emoji: "🌙"}, {answer: {en: 'I love chocolate and candy', de: "Ich liebe Schokolade und Süßigkeiten"}, emoji: "🍫"}, {answer: {en: 'Soda is my best friend', de: "Soda ist mein bester Freund"}, emoji: "🥤"}, {answer: {en: 'I consume a lot of salty food', de: "Ich esse viel salziges Essen"}, emoji: "🧂"}, {answer: {en: "I'm a midnight snacker", de: "Ich bin ein Mitternachtssnacker"}, emoji: "🍟"}],
    },
    { 
      id: 26, 
      text: {
        en: 'What do you know about Intermittent Fasting?',
        de: "Was wissen Sie über intermittierendes Fasten?"
      },
      choices: [{answer: {en: "Only the name", de: "Nur der Name"}, emoji: "🙅‍♀️"}, {answer: {en: 'A couple of things', de: "Ein paar Dinge"}, emoji: "👌"}, {answer: {en: "I'm experienced in fasting", de: "Ich habe Erfahrung im Fasten"}, emoji: "😎"}],
    },
    { 
      id: 27, 
      text: {
        en: 'How excited are you to shed some extra weight?',
        de: "Wie aufgeregt sind Sie, etwas mehr Gewicht zu verlieren?"
      },
      choices: [{answer: {en: "I just want to see what the buzz about fasting is about", de: "Ich möchte nur sehen, worum es beim Fasten geht"}, emoji: "👀"}, {answer: {en: 'I want to try and lose some weight', de: "Ich möchte versuchen, etwas Gewicht zu verlieren"}, emoji: "💪"}, {answer: {en: "I'm serious about losing as much weight as possible", de: "Mir ist es ernst damit, so viel Gewicht wie möglich zu verlieren"}, emoji: "🔥"}],
    },
    { 
      id: 28, 
      text: {
        en: 'How tall are you?',
        de: "Wie groß bist du?"
      },
      question: 'height'
    },
    { 
      id: 29, 
      text: {
        en: 'What is your current weight?',
        de: "Wie viel wiegst du momentan?"
      },
      question: 'weight',
      extension: true,
    },
    { 
      id: 30, 
      text: {
        en: 'What would you consider your perfect weight?',
        de: "Was würden Sie als Ihr Idealgewicht bezeichnen?"
      },
      question: 'preferedWeight'
    },
    { 
      id: 31, 
      text: {
        en: 'What is your age?',
        de: "Wie alt bist du?"
      },
      question: 'age'
    },
    { 
      id: 32, 
      text: {
        en: 'Your personal 4-week intermittent fasting plan is ready',
        de: "Fertig ist Dein persönlicher 4-wöchiger Intervallfasten-Plan"
      },
      question: 'email'
    },
    // Add more questions as needed
  ];