import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

export type Site = {
	name: string;
	problems: Problem[];
};
export type Problem = {
	description: string;
	answer: string;
	image: string;
};

const heuristics = [
	"visibility",
	"match",
	"userControl",
	"consistency",
	"errorPrevention",
	"recognition",
	"flexibility",
	"aesthetic",
	"help",
	"documentation",
];

export const useGameStore = defineStore("counter", () => {
	const sites = ref([
		{
			name: "Google",
			problems: [
				{
					image: "https://via.placeholder.com/150",
					description:
						"The Google search website doesn’t provide clear documentation on how to use shortcuts like quotes for precise searches.",
					answer: "documentation",
				},
				{
					image: "https://via.placeholder.com/150",
					description:
						"When searching for common errors, Google doesn't differentiate between developer-oriented and user-oriented solutions, causing confusion.",
					answer: "match",
				},
				{
					image: "https://via.placeholder.com/150",
					description:
						"The search bar suggestions aren't visible immediately after typing a query, making the system status unclear.",
					answer: "visibility",
				},
			],
		},
		{
			name: "Amazon",
			problems: [
				{
					image: "https://via.placeholder.com/150",
					description:
						"Product categories are sometimes inconsistent with user expectations, leading to confusion.",
					answer: "consistency",
				},
				{
					image: "https://via.placeholder.com/150",
					description:
						"The checkout page doesn’t provide a clear way to undo or modify an order, limiting user control.",
					answer: "userControl",
				},
				{
					image: "https://via.placeholder.com/150",
					description:
						"Search results often show unrelated products due to lack of error prevention in filtering options.",
					answer: "errorPrevention",
				},
			],
		},
		// {
		// 	name: "YouTube",
		// 	problems: [
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"The autoplay feature is not easily visible to users, leading to confusion when videos play automatically.",
		// 			answer: "visibility",
		// 		},
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"Video categories sometimes mix unrelated content, making it hard for users to find what they’re looking for.",
		// 			answer: "consistency",
		// 		},
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"The settings menu uses jargon unfamiliar to average users, reducing ease of understanding.",
		// 			answer: "match",
		// 		},
		// 	],
		// },
		// {
		// 	name: "Facebook",
		// 	problems: [
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"Privacy settings are hidden deep in the menu, making it difficult for users to recognize and change them.",
		// 			answer: "recognition",
		// 		},
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"Friend suggestions clutter the interface, reducing aesthetic and minimalist design.",
		// 			answer: "aesthetic",
		// 		},
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"The help center provides lengthy articles but lacks concise instructions for common issues.",
		// 			answer: "documentation",
		// 		},
		// 	],
		// },
		// {
		// 	name: "Netflix",
		// 	problems: [
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"The 'Continue Watching' section doesn’t allow users to easily remove items, reducing user control.",
		// 			answer: "userControl",
		// 		},
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"Titles in non-native languages often don’t have translated descriptions, mismatching user expectations.",
		// 			answer: "match",
		// 		},
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"Errors while streaming only show cryptic codes, making it hard for users to diagnose the problem.",
		// 			answer: "help",
		// 		},
		// 	],
		// },
		// {
		// 	name: "Twitter",
		// 	problems: [
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"The character counter is not prominently visible when composing a tweet, reducing visibility of system status.",
		// 			answer: "visibility",
		// 		},
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"User options for muting or blocking accounts are buried in submenus, reducing flexibility and efficiency.",
		// 			answer: "flexibility",
		// 		},
		// 		{
		// 			image: "https://via.placeholder.com/150",
		// 			description:
		// 				"Error messages during login do not guide users clearly to resolve the issue.",
		// 			answer: "help",
		// 		},
		// 	],
		// },
	]);

	const randomSite = ref<Site | null>();
	const randomProblem = ref<Problem | null>(null);
	const selectedProblems = new Set<Problem>(); // to avoid repeating problems

	function selectRandomProblem() {
		console.log("Selecting random problem");

		// Check if all problems have been used
		const totalProblems = sites.value.flatMap((site) => site.problems);
		if (selectedProblems.size === totalProblems.length) {
			selectedProblems.clear(); // Reset tracker
			router.push("/result");
			return;
		}

		// Randomly pick a site
		randomSite.value =
			sites.value[Math.floor(Math.random() * sites.value.length)];
		console.log(`Selected site: ${randomSite.value?.name}`);

		// Filter available problems across the chosen site
		const availableProblems = randomSite.value.problems.filter(
			(problem) => !selectedProblems.has(problem),
		);

		if (availableProblems.length === 0) {
			// Retry if this site has no available problems
			return selectRandomProblem();
		}

		// Randomly pick a problem from the available ones
		randomProblem.value =
			availableProblems[Math.floor(Math.random() * availableProblems.length)];

		console.log(`Selected problem: ${randomProblem.value?.description}`);
		console.log(`Selected problems count: ${selectedProblems.size}`);
	}

	function answer(answer: string) {
		if (!randomProblem.value) return;

		if (randomProblem.value.answer === answer) {
			increment();

			alert("Correct!");
		} else {
			alert(`Incorrect! The answer is ${randomProblem.value.answer}`);
		}

		// Mark the problem as selected
		selectedProblems.add(randomProblem.value);
		randomSite.value = null;
		randomProblem.value = null;
	}

	const points = ref(0);

	function increment() {
		points.value++;
	}

	return {
		points,
		increment,
		sites,
		selectRandomProblem,
		randomSite,
		randomProblem,
		answer,
		heuristics,
	};
});
