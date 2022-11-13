<script>
  import logo from "../assets/svelte.svg";
</script>

<header>
  <h1>
    <img src={logo} alt="Svelte logo" />
  </h1>
</header>

<style>
  header {
    background: #ff3e00;
    color: #fff;
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  header img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
  }
</style>
