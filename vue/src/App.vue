<template>
  <div id="app">
    <h1>Giphy search app</h1>
    <form @submit.prevent="formSubmitted()">
      <label for="searchTerm">Search Term</label>
      <div class="row">
        <input
          v-model="searchTerm"
          class="u-full-width"
          type="text"
          id="searchTerm"
          name="searchTerm"
        />
        <button type="submit">Search</button>
      </div>
    </form>
    <img
      v-if="loading"
      src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif"
      alt="loading"
    />
    <section class="images">
      <img v-for="image in images" :key="image.id" :src="image.images.downsized_large.url" />
    </section>
  </div>
</template>

<script charset="utf-8">
import API from './API';

export default {
  name: 'app',
  data() {
    return {
      searchTerm: '',
      loading: false,
      images: [],
    };
  },
  methods: {
    formSubmitted() {
      this.loading = true;
      this.images = [];
      API.search(this.searchTerm).then(images => {
        this.images = images;
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="scss">
.row {
  display: flex;
  input {
    margin-right: 1em;
  }
}
body {
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
