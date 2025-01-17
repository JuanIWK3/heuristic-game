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
    name: 'Supermecados Bh',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The application does not notify you when an item added to the cart is out of stock.',
        answer: 'visibility',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          "The promotions layout does not display old prices for comparison with discounts.,
           answer:'match'
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          "The 'Back' button takes the user to the home page instead of the previous page.",
        answer: 'usercontrol',
      },
    ],
  },
  {
    name: 'Amazon',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Product categories are sometimes inconsistent with user expectations, leading to confusion.',
        answer: 'consistency',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The checkout page doesn’t provide a clear way to undo or modify an order, limiting user control.',
        answer: 'userControl',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Search results often show unrelated products due to lack of error prevention in filtering options.',
        answer: 'errorPrevention',
      },
    ],
  },
  {
    name: 'iFood',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'When choosing a restaurant, the user cannot see delivery fees before adding something to the cart.',
        answer: 'visibility',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The 'Cancel order' option is inaccessible after payment confirmation, even before the order is prepared',
        answer: 'usercontrol',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Generic error messages appear when payment fails, without detailing the reason.',
        answer: 'errorPrevention',
      },
    ],
  },
  {
    name: 'Facebook',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Privacy settings are hidden deep in the menu, making it difficult for users to recognize and change them.',
        answer: 'recognition',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Friend suggestions clutter the interface, reducing aesthetic and minimalist design.',
        answer: 'aesthetic',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The help center provides lengthy articles but lacks concise instructions for common issues.',
        answer: 'documentation',
      },
    ],
  },
  {
    name: 'Netflix',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          "After pausing a video, the subtitle disappears on the pause screen.",
        answer: 'visibility',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The recommendations algorithm prioritizes popular content over the user's favorite genres.',
        answer: 'consistency',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Errors while streaming only show cryptic codes, making it hard for users to diagnose the problem.',
        answer: 'help',
      },
    ],
  },
  {
    name: 'Twitter',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The character counter is not prominently visible when composing a tweet, reducing visibility of system status.',
        answer: 'visibility',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'User options for muting or blocking accounts are buried in submenus, reducing flexibility and efficiency.',
        answer: 'flexibility',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Error messages during login do not guide users clearly to resolve the issue.',
        answer: 'help',
      },
    ],
  },
];
