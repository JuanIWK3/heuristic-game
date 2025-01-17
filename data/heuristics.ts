export const heuristics = {
  visibility: 'Visibility of System Status',
  match: 'Match between system and the real world',
  userControl: 'User control and freedom',
  consistency: 'Consistency and standards',
  errorPrevention: 'Error prevention',
  recognition: 'Recognition rather than recall',
  flexibility: 'Flexibility and efficiency of use',
  aesthetic: 'Aesthetic and minimalist design',
  help: 'Help users recognize, diagnose, and recover from errors',
  documentation: 'Help and documentation',
};

export type Heuristic = keyof typeof heuristics;
