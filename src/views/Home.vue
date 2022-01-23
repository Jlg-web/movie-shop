
<template>
  <div class="home">
    <!-- Container Movies -->
    <div class="movies wrapper">
      <!-- One Movie -->
      <div
        class="movie display-flex align-center"
        :class="{ inBag: isInBag(movie) }"
        v-for="(movie, index) in this.movies"
        :key="index"
      >
        <div>
          <img 
          :src="movie.image" 
          :alt="movie.title" 
          :class="{opacity: isInBag(movie)}"
          />
        </div>

        <div class="content">
          <h2>{{ movie.title }}</h2>
          <em class="synopsis">{{ movie.synopsis }}</em>
          <p class="director">Crée par: {{ movie.director }}</p>
          <h3 class="price">Prix du bluray: {{ movie.price }} €</h3>
          <button
            class="button button-add"
            v-if="!isInBag(movie)"
            @click="addToBag(movie)"
          >
            Ajouter au panier
          </button>
          <button
            v-else
            class="button button-remove"
            @click="this.$store.dispatch('removeFromBag', movie._id)"
          >
            Retirer du panier
          </button>
        </div>
      </div>
      <!-- END One Movie -->
    </div>
    <!-- END Container Movies -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",

  computed: mapState(["movies", "moviesInBag"]),

  methods: {
    addToBag(movie) {
      movie.quantity = 1;
      this.$store.dispatch("addToBag", movie);
    },

    isInBag(movie) {
      return this.moviesInBag.find((item) => item._id == movie._id);
    },
  },
};
</script>

<style lang="scss">
// Helpers

body,
html {
  font-family: sans-serif;
}

.wrapper {
  width: 75%;
  margin: 0 auto;
}

.opacity {
  opacity: .2;
}

body,
h2,
h3,
p {
  margin: 0;
}

.movies {

  .movie {
    margin: 0 0 38px 0;

    img {
      width: 223px;
      height: 303px;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 62px;

      h2 {
        margin-bottom: 12px;
        font-size: 26px;
      }

      .synopsis {
        text-align: left;
        font-weight: 100;
        line-height: 1.4;
      }

      .director {
        margin: 16px 0;
        font-size: 13px;
      }

      h3.price {
        margin-bottom: 12px;
      }
    }

    .button {
      border: none;
      padding: 18px;
      color: white;
      cursor: pointer;

      &-add {
        background-color: rgb(35, 87, 201);
      }

      &-remove {
        background-color: rgb(211, 48, 48);
      }
    }
  }
}

.movies .movie.inBag {
  // background: blue;
}
</style>
