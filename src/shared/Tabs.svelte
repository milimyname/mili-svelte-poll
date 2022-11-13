<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items;
  export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li
        class:active={item === activeItem}
        on:click={() => dispatch("TabChange", item)}
      >
        {item}
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    color: black;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tabs ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tabs li {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .tabs li.active {
    background: black;
    color: #fff;
  }
</style>
