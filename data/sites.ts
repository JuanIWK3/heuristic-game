import type { Heuristic } from './heuristics';

export type Problem = {
  image: string;
  answer: Heuristic;
  description: string;
  userAnswer?: Heuristic | null;
};

export type Site = {
  name: string;
  problems: Problem[];
};

export const sites: Site[] = [
  {
    name: 'Supermercados Bh',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The official website does not provide clear information about store opening hours',
        answer: 'visibility',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The website interface is outdated and not responsive on mobile devices.',
        answer: 'aesthetic',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          "The 'There is no option to purchase online or check product availability in stores.",
        answer: 'flexibility',
      },
    ],
  },
  {
    name: 'Amazon',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Product categorization is not always intuitive, making navigation difficult for users.',
        answer: 'match',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The product return process has complex and unclear steps.',
        answer: 'userControl',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Product recommendations based on past purchases are not always relevant.',
        answer: 'flexibility',
      },
    ],
  },
  {
    name: 'iFood',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Product recommendations based on past purchases are not always relevant.',
        answer: 'aesthetic',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          "The order tracking option does not always provide accurate delivery status information.",
        answer: 'visibility',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The restaurant review interface after delivery is not intuitive, resulting in a low rate of user feedback.',
        answer: 'recognition',
      },
    ],
  },
  {
    name: 'Facebook',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Complex privacy settings make it difficult for users to control personal information.',
        answer: 'documentation',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'O feed de notícias apresenta atualizações não cronológicas, confundindo os usuários sobre a ordem dos posts.',
        answer: 'consistency',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Notifications about irrelevant activities increase information overload for users.',
        answer: 'aesthetic',
      },
    ],
  },
  {
    name: 'Netflix',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'A reprodução automática de trailers na tela inicial pode ser considerada invasiva por alguns usuários.',
        answer: 'usercontrol',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          "Content categorization does not always accurately reflect users' genres or preferences.",
        answer: 'match',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The option to skip series introductions is not always available or visible.',
        answer: 'flexibility',
      },
    ],
  },
  {
    name: 'Farmacias Araujo',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Usuários relataram dificuldades ao tentar aplicar descontos de laboratórios durante a compra online, resultando em erros frequentes..',
        answer: 'errorPrention',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The search functionality on the site presents inaccurate or irrelevant results for certain medications.',
        answer: 'help',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'During the checkout process, mandatory information is not clearly indicated, leading to possible omissions and the need for corrections.',
        answer: 'documentation',
      },
    ],
  },
].slice(0, 6) as Site[];
