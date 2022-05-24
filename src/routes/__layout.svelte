<script>
  import Header from '$lib/components/Header.svelte';
</script>

<div class="root">
  <Header />

  <main>
    <slot />
  </main>
</div>

<style>
  .root {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--clr-dark);
    background-color: var(--clr-background);
  }

  main {
    overflow: hidden;
    overflow-y: auto;
    flex: 1;
  }
</style>
