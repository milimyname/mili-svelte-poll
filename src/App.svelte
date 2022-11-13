<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";


  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  // polls

  const handleAddPoll = (e) => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:TabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else}
    <CreatePollForm on:add={handleAddPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
