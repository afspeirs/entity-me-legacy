<script>
  import { toast } from '@zerodevx/svelte-toast';

  import searchText from '$lib/stores/search';

  export let entities = [];

  let filteredEntities;

  $: {
    filteredEntities = Promise.all(entities.filter((entity) => entity.info
      .find((info) => info.text.toLowerCase().includes($searchText.toLowerCase()))));
  }

  const handleEntityClick = (text) => {
    const arrayOfEntities = text.split(' ');
    // console.log(arrayOfEntities);

    if (!arrayOfEntities[0]) return;

    navigator.clipboard.writeText(arrayOfEntities[0])
      .then(() => {
        toast.push(`Copied "${arrayOfEntities[0]}" to the clipboard`);
        // eslint-disable-next-line no-console
        console.log(`Copied "${arrayOfEntities[0]}" to the clipboard`);
      })
      .catch((error) => {
        console.error(`Could not copy text: ${error}`); // eslint-disable-line no-console
      });
  };
</script>

<div class="container">
  {#await filteredEntities}
    <div class="card">
      <div class="placeholder">
        Loading entities...
        <br />
        <br />
        Please wait
      </div>
    </div>
  {:then resolvedEntities}
    {#each resolvedEntities as entity}
      <div
        key={entity.title}
        class="card"
        title={entity.title}
        data-block={entity.data_block}
        data-category={entity.data_category}
        data-set={entity.data_set}
      >
        <ul>
          {#each entity.info as info}
            <li
              key={info.text}
              class={info.class}
            >
              <button
                type="button"
                on:click={() => handleEntityClick(info.text)}
              >
                <code>
                  {info.text}
                </code>
              </button>
            </li>
          {/each}
        </ul>
      </div>
    {:else}
      <div class="card">
        <div class="placeholder">
          No results found for:
          <br />
          {`"${$searchText}"`}
        </div>
      </div>
    {/each}
  {:catch error}
    <div class="card">
      <div class="placeholder">
        {error.message}
      </div>
    </div>
  {/await}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3em;
  }

  .card {
    width: 12em;
    height: 12em;
    margin: 0.9em;
    border-radius: 5px;
    background-color: var(--clr-light);
    overflow: hidden;
    box-shadow: 6px 8px 8px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.1s ease-in-out;
  }
  .card:hover {
    box-shadow: 6px 16px 16px rgba(0, 0, 0, 0.25);
  }

  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  ul {
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    list-style: none;
    flex: 1;
  }
  li.character {
    font-size: 2em;
  }
  li.desc {
    display: none !important;
  }

  button {
    all: unset;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:focus,
  button:focus-visible {
    background-color: rgba(0, 0, 0, 0.2);
  }
  button:focus:not(:focus-visible) {
    background-color: transparent;
  }
  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  code {
    width: 100%;
    text-align: center;
  }
</style>
