<template>
  <div class="nav" id="nav">
    <div class="wrapper display-flex space-between">
      <router-link to="/">Produits</router-link>
      <router-link to="/basket">Panier<strong>({{this.moviesInBag.length}})</strong></router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("loadmovies");
    this.$store.dispatch("loadBag");
  },

  computed: mapState(["moviesInBag"]),
};
</script>


<style lang="scss">
.space-between {
  justify-content: space-between;
}

.display-flex {
  display: flex;
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.flex-align-start {
  align-items: flex-start;
}

.align-center {
  align-items: center;
}

.nav {
  display: flex;
  background-color: #efefef;
  justify-content: space-between;
  padding: 18px 0;
  margin-bottom: 28px;

  a {
    text-decoration: none;
    color: black;
    font-size: 14px;
  }
}
</style>
