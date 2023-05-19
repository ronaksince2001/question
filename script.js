const questions = [
"If you could have any superpower, what would it be?",
"Would you rather be in jail for five years or be in a coma for a decade?",
"Would you rather lose your sight or your memories?",
"Would you rather never be able to go out during the day or never be able to go out at night?",
"Would you rather vomit on your hero or have your hero vomit on you?",
"Would you rather be royalty 1,000 years ago or an average person today?",
"Would you rather always be 10 minutes late or always be 20 minutes early?",
"Would you rather spend a week in the forest or a night in a real haunted house?",
"Would you rather have a pause or a rewind button in your life?",
"Would you rather be forced to live the same day over and over again for a full year, or take 3 years off the end of your life?",
"Would you rather die in 20 years with no regrets or live to 100 with a lot of regrets?",
"Would you rather labor under a hot sun or extreme cold?",
"Would you rather buy 10 things you don’t need every time you go shopping or always forget the one thing that you need when you go to the store?",
"Would you rather be an extra in an Oscar-winning movie or the lead in a box office bomb?",
"Would you rather wear the same socks for a month or the same underwear for a week?",
"Would you rather get trapped in the middle of a food fight or a water balloon fight?",
"Would you rather die before or after your partner?",
"Would you rather take amazing selfies but look terrible in all other photos or be photogenic everywhere but in your selfies?",
"Would you rather be able to take back anything you say or hear any conversation that is about you?",
"Would you rather lose all of your friends but keep your BFF or lose your BFF but keep the rest of your buds?",
"Would you rather be the absolute best at something that no one takes seriously or be average at something well respected?",
"Would you rather win $25,000 or your best friend win $100,000?",
"Would you rather be in history books for something terrible or be forgotten completely after you die?",
"Would you rather go back to the past and meet your loved ones who passed away or go to the future to meet your children or grandchildren to be?",
"Would you rather be in a zombie apocalypse or a robot apocalypse?",
"Would you rather be alone all your life or surrounded by really annoying people?",
"Would you rather give up your cellphone for a month or bathing for a month?",
"Would you rather have a photographic memory or an IQ of 200?",
"Would you rather lose the ability to read or lose the ability to speak?",
"Would you rather be beautiful and stupid or unattractive but a genius?",
"Would you rather never get another present in your life but always pick the perfect present for everyone else or keep getting presents but giving terrible ones to everyone else?",
"Would you rather be able to speak any language or be able to communicate with animals?",
"Would you rather run at 100 mph or fly at 20 mph?",
"Would you rather detect every lie you hear or get away with every lie you tell?",
"Would you rather be the funniest person in a room or the smartest person in a room?",
"Would you rather clean up someone else’s vomit or someone else’s blood?",
"Would you rather spend the weekend with pirates or ninjas?",
"Would you rather hear a comforting lie or an uncomfortable truth?",
"Would you rather be locked for a week in a room that’s overly bright or a room that’s totally dark?",
"Would you rather have police hunting you down for a crime you didn’t commit or a serial killer actually hunting you?",
"Would you rather find your soulmate or your calling?",
"Would you rather visit the International Space Station for a week or spend a week in a hotel at the bottom of the ocean?",
"Would you rather lose your long-term memory or your short-term memory?",
"Would you rather be stranded in the jungle or in the desert?",
"Would you rather be invisible or be able to fly?",
"Would you rather run as fast as The Flash or be as strong as Superman?",
"Would you rather go back to kindergarten with everything you know now or know now everything your future self will learn?",
"Would you rather be able to read minds or predict the future?",
"Would you rather take a pill a day for nutrients and to feel full, but never eat anything again or eat whatever you want but never really feel full?",
"Would you rather be an unknown superhero or an infamous villain?",
"Would you rather be Batman or Iron Man?",
"Would you rather be married to someone stunning who doesn’t think you’re attractive or be married to someone ugly who thinks you’re gorgeous?",
"Would you rather have a third ear or a third eye?",
"Would you rather have $1 million now or $5,000 a week for the rest of your life?",
"Would you rather be rich working a job you hate or poor working a job you love?",
"Would you rather work a high-paying job that you hate or your dream job with only just enough money for rent, food, and utilities?",
"Would you rather never eat your favorite food for the rest of your life or only eat your favorite food?",
"Would you rather be able to erase your own memories or be able to erase someone else’s memories?",
"Would you rather save your best friend’s life if it meant five strangers would die or save five strangers if it meant sacrificing your best friend?",
"Would you rather clean a toilet with your toothbrush or a floor with your tongue?",
"Would you rather be reincarnated as a fly or just stop existing when you die?",
"Would you rather be criticized or be ignored?",
"Would you rather eat an undercooked meal or a burnt meal?",
"Would you rather have your first child when you’re 18 or when you’re 50?",
"Would you rather give up brushing your hair or give up brushing your teeth?",
"Would you rather always have wet socks or a small rock in your shoe?",
"Would you rather be the class clown or the teacher’s pet?",
"Would you rather never age physically or never age mentally?",
"Would you rather date someone with bad breath or bad manners?",
"Would you rather have X-ray vision of people you find unattractive or everyone else have X-ray vision of you?",
"Would you rather know when you’re going to die or how you’re going to die?",
"Would you rather lose all of your teeth or all of your hair?",
"Would you rather be rich with no friends or poor and popular?",
"Would you rather look strong and be weak or look weak and be strong?",
"Would you rather have the ability to see 10 years into your own future or six months into the future of the world?",
"Would you rather be a genius everyone thinks is an idiot or an idiot everyone thinks is a genius?",
"Would you rather be beloved by the general public but your family and friends hate you or be hated by the general public but your family and friends love you?",
"Would you rather be color blind or lose your sense of taste?",
"Would you rather live on a desert island with your celebrity crush or in a mansion with your ex?",
"Would you rather be forced to live the same day over and over again for a full year or take three years off the end of your life?",
"Biggest Lie you have told?",
"Deepest Darkest Secret?",
"What's the worst thing you've ever done?",
"What would you do if you were the opposite gender for a week?",
"What do most people think is true about you, but isn't?",
"What is something that people think you would never be into, but you are?",
"What's your worst habit?",
"If you could be invisible, What is the first thing you would do?",
"What is a secret you kept from your parents?",
"What is one thing you wish you could change about yourself?",
"If a genie granted you three wishes, what would you ask for?",
"Which player would survive a zombie apocalypse and which would be the first to go?",
"What five things would you bring to a deserted island?",
"What animal do you think you most look like?",
"What's the longest time you've ever gone without showering?",
"What was your favorite childhood show?",
"If you could be a fictional character for a day, who would you choose?",
"What's your favorite part of your body?",
"What is your biggest insecurity?",
"What are the top three things you look for in a boyfriend/girlfriend?",
"What is one thing that you would want to change about yourself?",
"Do you ever just stare at yourself in the mirror?",
"What is one thing you find the most annoying about _____?",
"What is the worst thing about your gender?",
"Pick between Money and Power?",
"Pick between Speed and Perfection?",
"Who is your favorite superhero?",
"Want to have 100 Million Dollars now or be born with same knowledge(Go Back)(Born Again)?",
"Would you rather win $25,000 or your best friend win $100,000?",
"Would you rather be rich and dumb, or poor and smart?",
"Would you rather lose your sight or your memories?",
"Would you rather know when you’re going to die or how you’re going to die?",
"Would you rather have a pause or a rewind button in your life?",
"Would you rather live on a desert island with your celebrity crush or in a mansion with your ex?",
"Would you rather die in 20 years with no regrets or live to 100 with a lot of regrets?",
"Would you rather vomit on your hero or have your hero vomit on you?",
"Would you rather be in a zombie apocalypse or a robot apocalypse?",
"Would you rather be an unknown superhero or an infamous villain?",
"Would you rather be royalty 1,000 years ago or an average person today?",
"Would you rather be married to someone stunning who doesn’t think you’re attractive or be married to someone ugly who thinks you’re gorgeous?",
"Would you rather work a high-paying job that you hate or your dream job with only just enough money for rent, food and utilities?",
"Would you rather be in jail for five years or be in a coma for a decade?",
"Would you rather wear the same socks for a month or the same underwear for a week?",
"Would you rather die before or after your partner?",
"If You Had Three Wishes, What Would You Wish For?",
"Would you like to be famous? If Yes, In what way?",
"What Would You Rather Throw Away: Love Or Money? (Love=Soulmate and Money=10 Million Dollars)",
"Would you rather have 1 million dollars or 1 million loyal friends?",
"Would you rather be jack of all trades or master of one?",
"Do you prefer Mountains or Beaches?",
"Pick between Money and Power?",
"Pick between Speed and Perfection?",
"If You Could Have Any Super Power, Which One Would You Choose?",
"If you stuck at deserted island and you can bring only 5 things, what would you bring?",
"If You Could Erase One Event From History, Which One Would You Erase?",
"Date, Marry, Kill?",
"Who is your favourite superhero?",
"According to you, what thing is underrated and most overrated?",
"What hobby would you get into if time and money weren’t an issue?",
"What game or movie universe would you most like to live in?",
"What Would You Do With 10 Million Dollars?",
"Would you rather be filthy Rich or be incredibly Famous?",
"If You Could Trade Lives With Someone, Who Would It Be?",
"Want to have 100 Million Dollar now or born with same knowledge(go back)(Born Again)",
"What was the best book or series that you’ve ever read or watched?",
"Would you rather never age physically or never age mentally?",
"Would you rather clean a toilet with your toothbrush or a floor with your tongue?",
"Would you rather buy all used underwear or all used toothbrushes?",
"Pick between Free Food or Free travel?",
"What's your guilty pleasure?",
"What's the one bad habit you have?",
"What's the worst punishment you received as a child in school?",
"If you were opposite gender for a day, what will you do?",
"If you could be a car, what car brand would you want to be?",
"Which famous character do you want to be (From Movies or Show or Anime)?",
"What's your favorite movie of all time?",
"If you could travel anywhere in the world, where would you go?",
"What's the most adventurous thing you've ever done?"
];

let askedQuestions = [];
let currentQuestionIndex = -1;

function getRandomQuestion() {
  if (askedQuestions.length === questions.length) {
    // Reset askedQuestions if all questions have been asked
    askedQuestions = [];
  }

  const availableQuestions = questions.filter(question => !askedQuestions.includes(question));
  const index = Math.floor(Math.random() * availableQuestions.length);
  const question = availableQuestions[index];

  askedQuestions.push(question);

  return question;
}

function askQuestion() {
  const questionElement = document.getElementById("question");
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");

  if (currentQuestionIndex < askedQuestions.length - 1) {
    currentQuestionIndex++;
    questionElement.textContent = askedQuestions[currentQuestionIndex];
  } else {
    const question = getRandomQuestion();
    askedQuestions.push(question);
    currentQuestionIndex++;
    questionElement.textContent = question;
  }

  backButton.disabled = false;
  nextButton.disabled = true;
}

function goBack() {
  const questionElement = document.getElementById("question");
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");

  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    questionElement.textContent = askedQuestions[currentQuestionIndex];
  }

  if (currentQuestionIndex === 0) {
    backButton.disabled = true;
  }

  nextButton.disabled = false;
}

function generateQuestion() {
  const questionElement = document.getElementById("question");
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");

  const question = getRandomQuestion();
  askedQuestions.push(question);
  currentQuestionIndex = askedQuestions.length - 1;

  questionElement.textContent = question;
  backButton.disabled = false;
  nextButton.disabled = true;
}