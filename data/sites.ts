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
          'The Google search website doesn’t provide clear documentation on how to use shortcuts like quotes for precise searches.',
        answer: 'documentation',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          "When searching for common errors, Google doesn't differentiate between developer-oriented and user-oriented solutions, causing confusion.",
        answer: 'match',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          "The search bar suggestions aren't visible immediately after typing a query, making the system status unclear.",
        answer: 'visibility',
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
    name: 'YouTube',
    problems: [
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The autoplay feature is not easily visible to users, leading to confusion when videos play automatically.',
        answer: 'visibility',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Video categories sometimes mix unrelated content, making it hard for users to find what they’re looking for.',
        answer: 'consistency',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'The settings menu uses jargon unfamiliar to average users, reducing ease of understanding.',
        answer: 'match',
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
          "The 'Continue Watching' section doesn’t allow users to easily remove items, reducing user control.",
        answer: 'userControl',
      },
      {
        image: 'https://via.placeholder.com/150',
        description:
          'Titles in non-native languages often don’t have translated descriptions, mismatching user expectations.',
        answer: 'match',
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
