<template>
  <div class="basket">

    <div class="items wrapper">
      <template v-if="moviesInBag.length">

      <div v-for="(movie, index) in moviesInBag" :key="index" class="item display-flex">

          <div>
            <div class="description">{{ movie.title }}</div>
            <div class="photo"><img :src="movie.image" alt=""></div>
            <div class="remove" @click="this.$store.dispatch('removeFromBag', movie._id)">Supprimer</div>
          </div>

          <div>
            <p class="price">{{ movie.price }} €</p>
          </div>

      </div>



      </template>

      <template v-else>
          <h4>Votre panier est vide</h4>
      </template>

    </div>

    <div class="wrapper total-price">
      <p>Prix total: {{ orderTotal() }} €</p>
    </div>

  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'Basket',

  methods: {
    orderTotal() {
      let total = 0;
      this.moviesInBag.forEach(item => {
        total += item.price * item.quantity;
      });
      return total.toFixed(2);
    }
  },

  computed: mapState([
    'moviesInBag' 
  ]),
 
}
</script>


<style lang="scss">
  .basket {
    .total-price {
      padding: 28px;
      justify-content: flex-end;

      p {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .photo {
      img {
        width: 200px;
        width: 151px;
        height: 220px;
        object-fit: cover;
      }
    }

    .items {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      .item {
          border-bottom: 1px solid #e3e3e3;
          padding-bottom: 32px;
          padding-top: 32px;
          justify-content: space-between;

          .description {
              margin-bottom: 12px;
              font-size: 18px;
          }

          .remove {
                margin-top: 8px;
                cursor: pointer;
                text-decoration: underline;
                font-size: 14px;
          }

          .price {
            font-size: 18px;
            font-weight: bold;
          }
      }

      .price-total {
        padding: 22px 0;
      }

    }

  }


</style>