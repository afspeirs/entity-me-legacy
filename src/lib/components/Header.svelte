<script>
  import SearchBar from '$lib/components/SearchBar.svelte';

  const title = 'EntityMe';
  const packageVersion = import.meta.env.PACKAGE_VERSION;
</script>

<header class="theme-background">
  <h1>
    {title}<sup><code>{packageVersion}</code></sup>
  </h1>

  <SearchBar />
</header>

<style>
  header {
    position: relative;
    left: env(titlebar-area-x, 0);
    top: env(titlebar-area-y, 0);
    width: env(titlebar-area-width, 100%);

    display: flex;
    gap: 1rem;
    color: var(--clr-light);
    background-color: var(--clr-theme);
    padding: 0.5rem 1rem;
    isolation: isolate;

    --webkit-app-region: drag;
    app-region: drag;
  }
  header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background-color: var(--clr-theme);
    z-index: -1;
  }

  h1 {
    flex: 1;
    margin: 0;
    font-size: 1.6em;
  }
  h1 sup {
    font-size: 0.65em;
    opacity: 0.9;
  }

  @media (max-width: 700px) {
    header {
      flex-direction: column;
      width: 100%;
    }

    h1 {
      position: relative;
      left: env(titlebar-area-x, 0);
      width: env(titlebar-area-width, 100%);
    }
  }
</style>
