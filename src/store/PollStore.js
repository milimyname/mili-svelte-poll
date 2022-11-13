import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "What is your favorite color?",
    answerA: "Red",
    answerB: "Blue",
    votesA: 9,
    votesB: 10,
  },
]);

export default PollStore;
