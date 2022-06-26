<script>
  import searchText from '$lib/stores/search';

  let localText = '';
  let inputRef;

  const handleTextClear = () => {
    searchText.set('');
    localText = '';
  };

  const handleTextSubmit = (event) => {
    event.preventDefault();
    searchText.set(localText);
  };

  // CTRL + F = Show Search bar
  const handleWindowKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'f') {
      event.preventDefault();
      inputRef.focus();
    }
  };

  // Escape = Hide search bar
  const handleFormKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      inputRef.blur();
    }
  };
</script>

<svelte:window on:keydown={handleWindowKeyDown}/>

<form class="form" on:submit={handleTextSubmit}>
  <div class="root">
    <input
      type="text"
      class="search"
      placeholder="Search for an entity..."
      bind:value={localText}
      bind:this={inputRef}
      on:keydown={handleFormKeyDown}
    />
    <button
      type="button"
      class="clear"
      on:click={handleTextClear}
      disabled={localText.length === 0}
    >
      x
    </button>
  </div>
  <button
    type="submit"
    aria-label="Clear Search"
    class="submit"
    on:click={handleTextSubmit}
    disabled={localText.length === 0 && localText === $searchText}
  >
    {#if localText.length === 0 && localText !== $searchText}
      Clear
    {:else}
      Search
    {/if}
  </button>
</form>

<style>
  .form {
    position: relative;
    display: flex;
    height: 32px;

    --webkit-app-region: no-drag;
    app-region: no-drag;
  }

  .root {
    position: relative;
    width: 100%;
    height: inherit;
  }
  .root:focus-within {
    outline: 2px solid black;
  }

  .search {
    height: inherit;
    width: 100%;
    border: none;
    border-radius: 0;
    padding: 10px;
    padding-right: 30px;
    box-shadow: none;
  }
  .search:focus {
    outline: unset;
  }

  button {
    all: unset;
    height: 100%;
    cursor: pointer;
    color: black;
    text-align: center;
    transition-property: background-color, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }

  .clear {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
  }
  .clear:focus,
  .clear:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .clear[disabled] {
    display: none;
  }

  .submit {
    min-width: 3.5rem;
    padding: 0 1rem;
    height: inherit;
    background-color: var(--clr-light);
    color: var(--clr-theme);
  }
  .submit:focus,
  .submit:hover {
    background-color: var(--clr-background);
  }
  .submit[disabled] {
    opacity: 0.4;
  }
</style>
