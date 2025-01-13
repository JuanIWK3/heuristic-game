"use client";

import { createContext, type Dispatch, type SetStateAction } from "react";

export type Heuristic =
	| "visibility"
	| "match"
	| "userControl"
	| "consistency"
	| "errorPrevention"
	| "recognition"
	| "flexibility"
	| "aesthetic"
	| "help"
	| "documentation";

export const heuristics = {
	visibility: "Visibility of System Status",
	match: "Match between system and the real world",
	userControl: "User control and freedom",
	consistency: "Consistency and standards",
	errorPrevention: "Error prevention",
	recognition: "Recognition rather than recall",
	flexibility: "Flexibility and efficiency of use",
	aesthetic: "Aesthetic and minimalist design",
	help: "Help users recognize, diagnose, and recover from errors",
	documentation: "Help and documentation",
};

export type Problem = {
	image: string;
	answer: Heuristic;
	description: string;
};

export type Site = {
	name: string;
	problems: Problem[];
};

type UserContext = {
	points: number;
	setPoints: Dispatch<SetStateAction<number>>;
	sites: Site[];
	selectedSite: string | null;
	selectRandomSite: VoidFunction;
};

export const gameContext = createContext<UserContext>({
	points: 0,
	setPoints: () => {
		/* default implementation */
	},
	sites: [],
	selectedSite: "",
	selectRandomSite: () => {
		/* default implementation */
	},
});
