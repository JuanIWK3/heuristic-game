import type { Heuristic } from './heuristics';
import Face1 from '../assets/face1.png';
import Face2 from '../assets/face2.png';
import Face3 from '../assets/face3.png';
import FaceLogo from '../assets/face-logo.png';
import AraujoLogo from '../assets/araujo-logo.png';
import BhLogo from '../assets/bh-logo.png';
import IfoodLogo from '../assets/ifood-logo.png';
import AmazonLogo from '../assets/amazon-logo.png';
import type { StaticImageData } from 'next/image';
import Ifood1 from '../assets/ifood1.png';
import Ifood2 from '../assets/ifood2.png';
import Ifood3 from '../assets/ifood3.png';
import bh1 from '../assets/bh1.png';
import bh3 from '../assets/bh3.png';
import amazon1 from '../assets/amazon-1.png';
import amazon2 from '../assets/amazon-2.png';
import amazon3 from '../assets/amazon-3.png';
import OpenLogo from '../assets/open-logo.png';
import open1 from '../assets/open1.png';
import open2 from '../assets/open2.png';
import araujo2 from '../assets/araujo-2.png';
import araujo3 from '../assets/araujo-3.png';

export type Problem = {
  image: StaticImageData;
  answer: Heuristic;
  description: string;
  userAnswer?: Heuristic | null;
};

export type Site = {
  name: string;
  logo: StaticImageData;
  problems: Problem[];
};

export const sites: Site[] = [
  {
    name: 'Supermercados Bh',
    logo: BhLogo,
    problems: [
      {
        image: bh1,
        description:
          'The official website does not provide clear information about store opening hours',
        answer: 'visibility',
      },
      {
        image: bh1,
        description:
          'The website interface is outdated and not responsive on mobile devices.',
        answer: 'aesthetic',
      },
      {
        image: bh3,
        description:
          "The 'There is no option to purchase online or check product availability in stores.",
        answer: 'flexibility',
      },
    ],
  },
  {
    name: 'Amazon',
    logo: AmazonLogo,
    problems: [
      {
        image: amazon1,
        description:
          'Product categorization is not always intuitive, making navigation difficult for users.',
        answer: 'match',
      },
      {
        image: amazon2,
        description:
          'The product return process has complex and unclear steps.',
        answer: 'userControl',
      },
      {
        image: amazon3,
        description:
          'Product recommendations based on past purchases are not always relevant.',
        answer: 'flexibility',
      },
    ],
  },
  {
    name: 'iFood',
    logo: IfoodLogo,
    problems: [
      {
        image: Ifood1,
        description:
          'Product recommendations based on past purchases are not always relevant.',
        answer: 'aesthetic',
      },
      {
        image: Ifood2,
        description:
          'The order tracking option does not always provide accurate delivery status information.',
        answer: 'visibility',
      },
      {
        image: Ifood3,
        description:
          'The restaurant review interface after delivery is not intuitive, resulting in a low rate of user feedback.',
        answer: 'recognition',
      },
    ],
  },
  {
    name: 'Facebook',
    logo: FaceLogo,
    problems: [
      {
        image: Face1,
        description:
          'Complex privacy settings make it difficult for users to control personal information.',
        answer: 'documentation',
      },
      {
        image: Face2,
        description:
          'O feed de notícias apresenta atualizações não cronológicas, confundindo os usuários sobre a ordem dos posts.',
        answer: 'consistency',
      },
      {
        image: Face3,
        description:
          'Notifications about irrelevant activities increase information overload for users.',
        answer: 'aesthetic',
      },
    ],
  },
  {
    name: 'Open English',
    logo: OpenLogo,
    problems: [
      {
        image: open1,
        description: 'The page has spelling errors.',
        answer: 'consistency',
      },
      {
        image: open2,
        description:
          'There is no clear information about the duration of classes or modules on the website.',
        answer: 'visibility',
      },
      {
        image: open2,
        description:
          'The platform does not provide a free trial or demonstration option for classes.',
        answer: 'flexibility',
      },
    ],
  },
  {
    name: 'Farmacias Araujo',
    logo: AraujoLogo,
    problems: [
      {
        image: araujo2,
        description:
          'Users report difficulties when trying to apply laboratory discounts during online purchases, resulting in frequent errors.',
        answer: 'errorPrevention',
      },
      {
        image: araujo2,
        description:
          'The search functionality on the site presents inaccurate or irrelevant results for certain medications.',
        answer: 'help',
      },
      {
        image: araujo3,
        description:
          'During the checkout process, mandatory information is not clearly indicated, leading to possible omissions and the need for corrections.',
        answer: 'documentation',
      },
    ],
  },
];
