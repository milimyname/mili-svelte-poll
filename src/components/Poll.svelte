<script>
  import Button from "../shared/Button.svelte";
  import PollStore from "../store/PollStore";
  import Card from "./Card.svelte";
  import { tweened } from "svelte/motion";

  export let poll;

  $: totalVotes = poll.votesA + poll.votesB;

  $: percentageA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
  $: percentageB = Math.floor((100 / totalVotes) * poll.votesB) || 0;
  // tweened percentages
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentageA);
  $: tweenedB.set(percentageB);

  const handleVote = (option, id) => {
    PollStore.update((currentPolls) => {
      let copyPolls = [...currentPolls];
      let upvotedPoll = copyPolls.find((poll) => poll.id === id);

      // update votes
      if (option === "a") upvotedPoll.votesA++;
      else upvotedPoll.votesB++;

      // update polls
      return copyPolls;
    });
  };

  // Delete poll
  const handleDelete = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id !== id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p class="total">Total Votes: {totalVotes}</p>
    <div class="answers">
      <s class="answer" on:click={() => handleVote("a", poll.id)}>
        <div class="percent percent-a" style="width: {$tweenedA}%" />
        <span>{poll.answerA} ({poll.votesA})</span>
      </s>
      <div class="answer" on:click={() => handleVote("b", poll.id)}>
        <div class="percent percent-b" style="width: {$tweenedB}%" />
        <span>{poll.answerB} ({poll.votesB})</span>
      </div>
    </div>
    <div class="delete">
      <Button flat={true} on:click={() => handleDelete(poll.id)}>X</Button>
    </div>
  </div>
</Card>

<style>
  .poll {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  .total {
    color: #999;
    font-size: 0.8rem;
  }

  .answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .answer {
    background-color: #eeeeee;
    border-radius: 0.5rem;
    display: flex;
    cursor: pointer;
    position: relative;
  }

  .answer:hover {
    opacity: 0.8;
  }

  .answer span {
    z-index: 1;
    display: inline-block;
    padding: 10px 20px;
  }

  .percent {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.5rem;
    height: 100%;
    box-sizing: border-box;
  }

  .percent-a {
    border-left: 4px solid rgb(84, 0, 180);
    background-color: rgb(175, 105, 255);
  }

  .percent-b {
    border-left: 4px solid rgb(126, 67, 0);
    background-color: rgb(251, 192, 124);
  }

  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>
