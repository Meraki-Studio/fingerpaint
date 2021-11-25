import { getIcon } from '../../utils/useIcons';

const JuliImage = getIcon('makers', 'Juli');

const NickImage = getIcon('makers', 'Nick');

const JamesImage = getIcon('makers', 'James');

export const makers = [
  {
    name: 'Juli Vela',
    pronoun: 'her',
    img: JuliImage,
    role: 'Developer',
    blurb:
      'An engineer with a passion for learning and teaching others, Juli codes to save the planet, advocate for mental health, and encourage other neurodiverse womxn along the way!',
    links: {
      portfolio: 'https://juliannevela.dev',
      linkedIn: 'https://www.linkedin.com/in/juliannevela',
      gitHub: 'https://www.github.com/juliannevela',
      twitter: 'https://twitter.com/nessi_codes',
    },
  },
  {
    name: 'Nick Day',
    pronoun: 'his',
    img: NickImage,
    role: 'Developer',
    blurb:
      'A creative in pursuit of expression through code, writing, and music, Nick is an engineer with a growth mindset (the power of yet). His experience growing up with an artist and in technical and creative writing gives him an eye for design and clean code.',
    links: {
      portfolio: 'https://nickday.info',
      linkedIn: 'https://www.linkedin.com/in/nickdayfsd',
      gitHub: 'https://www.github.com/nickdayfsd',
      twitter: 'https://twitter.com/nickdayfsd',
    },
  },
  {
    name: 'James',
    pronoun: 'his',
    img: JamesImage,
    role: 'Designer',
    blurb:
      'Really just a kid at heart, James loves creating delightful user interfaces and design kits. He always puts the user first. If it’s a joy to use, then it’s a success.',
    links: {
      portfolio: 'https://www.jamesrothbart.com/',
      linkedIn: 'https://www.linkedin.com/in/jamesrothbart/',
    },
  },
];
