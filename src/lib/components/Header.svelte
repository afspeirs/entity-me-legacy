<script>
  import SearchBar from '$lib/components/SearchBar.svelte';

  const title = 'EntityMe';
  const packageVersion = import.meta.env.PACKAGE_VERSION;
</script>

<header class="theme-background">
  <div class="root">
    <h1>
      {title}
      <sup><code>{packageVersion}</code></sup>
    </h1>

    <SearchBar />
  </div>
</header>

<style>
  header {
    color: var(--clr-light);
    background-color: var(--clr-theme);
  }

  .root {
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    padding: 1.2rem 1rem;
  }
  .root h1 {
    margin: 0;
    font-size: 1.6em;
    margin-right: auto;
  }
  .root h1 sup {
    font-size: 0.65em;
    opacity: 0.9;
  }

  @media (max-width: 540px) {
    .root {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
