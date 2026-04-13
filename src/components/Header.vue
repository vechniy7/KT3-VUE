<script>

</script>

<template>
  <div class="header">
    <h1 class="title">Our Products</h1>
    <nav class="nav">
      <p class="nav-item active">ALL</p>
      <p class="nav-item">NEWEST</p>
      <p class="nav-item selected">TRENDING</p>
      <p class="nav-item">BEST SELLERS</p>
      <p class="nav-item">FEATURED</p>
    </nav>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  padding-bottom: 10px;
  padding-top: 40px;
}

.title {
  margin-bottom: 15px;
  color: #272343;
font-weight: 600;
font-size: 32px;
line-height: 110.00000000000001%;
letter-spacing: 0%;
text-transform: capitalize;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.nav-item {
width: 84;
height: 18;
angle: 0 deg;
opacity: 1;

}

.nav-item.active {
  color: #4CAF50;
  border-bottom: 2px solid #4CAF50;
}

.nav-item.selected {
  color: #333;
}
</style>