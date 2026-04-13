<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  },
  data() {
    return {
      newProduct: {
        image: "",
        name: "",
        select: null,
        price: null,
        oldPrice: null,
        badge: null
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", {
        image: this.newProduct.image,
        name: this.newProduct.name,
        price: this.newProduct.price,
      });
    },
    deleteProduct(productId) {
      this.$store.dispatch("deleteProduct", productId);
    },
  },
};
</script>

<template>
  <Header />
  <div class="products">
    <div class="product" v-for="product in $store.state.products" :key="product.id">
      <div class="product-image">
        <div></div>
        <p v-if="product.badge" class="badge" :class="product.badge">{{ product.badge }}</p>
        <img :src="product.image" alt="" />
      </div>
      <div class="product-info">
<h3 :class="{ 'selected-product': product.select === 'Yes' }">{{ product.name }}</h3>

        <div class="corzina"><button 
  @click="deleteProduct(product.id)"
  :class="{ 'selected-cart': product.select === 'Yes' }"
>Удалить</button><img 
  src="../public/Group.png" 
  alt=""
  :class="{ 'selected-cart-img': product.select === 'Yes' }"
></div>
        <div class="price-container">
          <p class="price">${{ product.price }}</p>
          <p v-if="product.oldPrice" class="old-price">${{ product.oldPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.corzina {
  display: flex;
  position: relative;
  gap: 10px;
  padding-bottom: 10px;
}

.corzina>img {
  display: flex;
  position: relative;
  left: 150px;
}

.corzina button.selected-cart {
  background-color: #007580;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.corzina>img.selected-cart-img {
  background-color: #007580;
  color: white;
}

.products {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 444px;
}

.product {
  background: white;
  border-radius: 8px;
  width: 25%;
}

.product-image {
  position: relative;
  width: 250px;
  height: 250px;
  background: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
}

.badge.New {
  background: #01AD5A;
}

.badge.Sales {
  background: #F5813F;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 10px 0;
  color: #272343;
}

.product-info h3.selected-product {
  color: #007580;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price {
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
}

.old-price {
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
}
</style>
