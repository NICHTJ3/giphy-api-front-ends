<script>
  import API from "./API";
  let myImages = [];
  let loading = false;
  let searchTerm;

  const submit = () => {
    loading = true;
    myImages = [];
    API.search(searchTerm).then(images => {
      myImages = images;
      loading = false;
    });
  };
</script>

<style type="text/scss">
  .row {
    display: flex;
    input {
      margin-right: 1em;
    }
  }
  :global(body) {
    width: 80%;
    margin: 2em auto 0 auto;
    background: #191f26;
    color: white;
  }
  button {
    color: white;
  }
  .images {
    column-count: 3;
  }
  img {
    width: 100%;
  }
</style>

<div id="app">
  <h1>Giphy search app</h1>
  <form on:submit|preventDefault={submit}>
    <label for="searchTerm">Search Term</label>
    <div class="row">
      <input
        bind:value={searchTerm}
        class="u-full-width"
        type="text"
        id="searchTerm"
        name="searchTerm" />
      <button type="submit">Search</button>
    </div>
  </form>
  {#if loading}
    <img
      v-if="loading"
      src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif"
      alt="loading" />
  {/if}
  <section class="images">
    {#each myImages as image (image.id)}
      <img src={image.images.downsized_large.url} alt={image.name} />
    {/each}
  </section>
</div>
