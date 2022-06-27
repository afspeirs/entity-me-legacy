<script>
  import { SvelteToast } from '@zerodevx/svelte-toast';

  import Header from '$lib/components/Header.svelte';

  const options = {
    pausable: true,
    reversed: true,
  };
</script>

<div class="root">
  <Header />

  <main>
    <slot />
  </main>

  <SvelteToast {options} />
</div>

<style>
  :root {
    --toastContainerTop: auto;
    --toastContainerRight: 1rem;
    --toastContainerBottom: 1rem;
  }

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
