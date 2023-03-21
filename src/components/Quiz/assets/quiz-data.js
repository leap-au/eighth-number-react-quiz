const quizData = {
  title: 'LEAPing into Mathematics: Number Systems',
  description:
    'Number systems is the mathematical notation of representing numbers that provides a unique representation of every number and represents the arithmetic and algebraic structure of the figures. This interactive, multiple-choice quiz is great to test your knowledge in a fun way.  Press START to LEAP into the fun!',
  img: 'leap-orange-navy-brand.png',
  questions: [
    {
      id: 1,
      text: 'Which of the following expressions is irrational?',
      alternatives: [
        {
          id: 1,
          text: 'sqrt(81)',
          isCorrect: false,
        },
        {
          id: 2,
          text: '4.525',
          isCorrect: false,
        },
		    {
          id: 3,
          text: '1/3',
          isCorrect: false,
        },
        {
          id: 4,
          text: 'sqrt(48)',
          isCorrect: true,
        },
      ],
    },
    {
      id: 2,
      text: 'Which of these expressions is not irrational?',
      alternatives: [
        {
          id: 1,
          text: 'sqrt(71)',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'sqrt(91)',
          isCorrect: false,
        },        
		{
          id: 3,
          text: 'sqrt(64)',
          isCorrect: true,
        },
		        {
          id: 4,
          text: 'sqrt(101)',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: 'Which of the following is an irrational number?',
      alternatives: [
        {
          id: 1,
          text: '7',
          isCorrect: false,
        },
        {
          id: 2,
          text: '1.25',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'sqrt(2)',
          isCorrect: true,
        },
        {
          id: 4,
          text: 'sqrt(25)',
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: 'Which of the following choices represents a rational number?',
      alternatives: [
        {
          id: 1,
          text: 'π',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'sqrt(2)',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'sqrt(3)',
          isCorrect: false,
        },
        {
          id: 4,
          text: 'sqrt(16)',
          isCorrect: true,
        },      
      ],
    },
	{
      id: 5,
    text: 'Which of the following choices represents a rational number?',
      alternatives: [
        {
          id: 1,
          text: 'sqrt(7)',
          isCorrect: false,
        },
        {
          id: 2,
          text: '0.75',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'sqrt(5)',
          isCorrect: false,
        },
        {
          id: 4,
          text: 'π',
          isCorrect: false,
        },
      ],
    },
	{
      id: 6,
      text: 'Which point on the number line best represents sqrt(49)?',
      img: 'question-6.png',
      alternatives: [
        {
          id: 1,
          text: 'G',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'L',
          isCorrect: false,
        },
		{
          id: 3,
          text: 'I',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'J',
          isCorrect: false,
        },
      ],
    },
	{
      id: 7,
    text: 'Which point on the number line best represents π?',
    img: 'question-7.png',
      alternatives: [
        {
          id: 1,
          text: 'B',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C',
          isCorrect: true,
        },
		{
          id: 3,
          text: 'A',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'D',
          isCorrect: false,
        },
      ],
    },
	{
      id: 8,
      text: 'Which point on the number line best represents sqrt(81)?',
      img: 'question-8.png',
      alternatives: [
        {
          id: 1,
          text: 'K',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'L',
          isCorrect: false,
        },
		{
          id: 3,
          text: 'I',
          isCorrect: false,
        },
        {
          id: 4,
          text: 'J',
          isCorrect: false,
        }
      ],
    },
	{
      id: 9,
      text: 'Which point on the number line best represents sqrt(107)?',
      img: 'question-9.png',
      alternatives: [
        {
          id: 1,
          text: 'L',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'K',
          isCorrect: false,
        },
		{
          id: 3,
          text: 'M',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'J',
          isCorrect: false,
        },
      ],
    },
	{
      id: 10,
    text: 'Which point on the number line best represents sqrt(2)?',
    img: 'question-10.png',
      alternatives: [
        {
          id: 1,
          text: 'D',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'A',
          isCorrect: true,
        },
		{
          id: 3,
          text: 'C',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'B',
          isCorrect: false,
        },
      ],
    },
  ],
  results: [
    {
      id: 1,
      range: {
        from: 0,
        to: 6,
      },
      title: 'You only got a few questions right.',
      description:
        'Please restart the Quiz to achieve 70% or higher.',
	  img: 'result-example.jpg',
    },
	{
      id: 2,
      range: {
        from: 7,
        to: 7,
      },
      title: 'Congratulations, you scored 70%!',
      description:
        'Please accelerate to the next level.',
	  img: 'result-example.jpg',
    },
	{
      id: 3,
      range: {
        from: 8,
        to: 8,
      },
      title: 'Congratulations, you scored 80%!',
      description:
        'Please accelerate to the next level.',
	  img: 'result-example.jpg',
    },
    {
      id: 4,
      range: {
        from: 9,
        to: 9,
      },
      title: 'Congratulations, you scored 90%!',
      description:
        'Please accelerate to the next level.',
	  img: 'result-example.jpg',
    },
    {
      id: 5,
      range: {
        from: 10,
        to: 10,
      },
      title: 'Congratulations, you got everything right!',
      description:
        'Please accelerate to the next level.',
      img: 'result-example.jpg',
    },
  ],
};

export default quizData;
