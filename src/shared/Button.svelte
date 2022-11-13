<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  button.primary {
    background: black;
    color: #fff;
  }

  button.secondary {
    background: #6c757d;
    color: #fff;
  }

  button.flat {
    background: red;
    color: #fff;
  }

  button.inverse {
    background: #fff;
    color: #007bff;
  }
</style>
