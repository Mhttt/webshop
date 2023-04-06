<script lang="ts">

interface Product {
  _id: string
  name: string
  short_description: string
  long_description: string
  price: number
  image_url: string
}

export default {
  data() {
    return {
      product: {} as Product
    }
  },

  methods: {
    async getData() {
      try {
        const url = new URL(window.location.href)
        const productID = url.pathname.split('/')[2]
        await fetch('http://143.42.222.62:8000/products/' + productID).then((res) => {
          res.json().then((data) => (this.product = data))
        })
      } catch (error) {
        console.log('Error: ', error)
      }
    }
  },
  created() {
    this.getData()
  }
}


</script>

<template>
  <div v class="product">
    <div class="product-image">
      <img :src="product.image_url" alt="Product Image" />
    </div>

    <div class="product-info" v-if="product">
      <h3>{{ product.name }}</h3>
      <p>The warmest bag you will ever find.</p>

      <h2>{{ product.price }} USD</h2>
      <button class="product-item-buttons">Add to Cart</button>

      <h4>Description</h4>
      <p>
        {{ product.long_description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-top: 72px;
  margin-bottom: 56px;
  justify-content: center;
}

.product-info {
  flex-grow: 0;
  width: 350px;
}

.product-image {
  flex-grow: 0;
  width: 650px;
}

.product-info > h3 {
  font-size: 32px;
}

.product-info > h2 {
  font-size: 40px;
  font-weight: unset;
}

.product-info > h4 {
  margin-bottom: 8px;
}

.product-item-buttons {
  width: 350px;
  height: 40px;
  border: none;
  background-color: #1f1f1f;
  color: white;
  cursor: pointer;

  margin-top: 16px;
  margin-bottom: 16px;
}

.product-item-buttons:hover {
  background-color: #2f2f2f;
}
</style>
