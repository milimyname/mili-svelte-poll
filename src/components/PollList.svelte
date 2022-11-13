<script>
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  //   import { onMount, onDestroy } from "svelte";
  import PollStore from "../store/PollStore";
  import Poll from "./Poll.svelte";

  //   export let polls = [];

  // Subscribe polls to the store
  //   const unsub = PollStore.subscribe((data) => {
  //     polls = data;
  //   });

  // On mount, fetch polls from the store
  //   onMount(() => {
  //     // PollStore.fetchPolls();
  //     console.log("Polls", polls);
  //   });

  // On destroy, unsubscribe from the store
  //   onDestroy(() => {
  //     unsub();
  //   });
</script>

<div class="polls">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:slide|local animate:flip={{ duration: 500 }}>
      <Poll {poll} />
    </div>
  {/each}
</div>

<style>
  .polls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
</style>
