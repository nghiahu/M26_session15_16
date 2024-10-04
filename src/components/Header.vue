<template>
  <div>
    <nav>
        <router-link active-class="active" to="/">Home</router-link>
        <router-link active-class="active" to="/product">Product</router-link>
        <router-link active-class="active" to="/detail">Detail</router-link>  
    </nav>
  </div>
</template>

<script setup>

</script>

<style>
.active{
    padding: 5px;
    background-color: rgb(77, 77, 220);
    color: white;
    border-radius: 10%;
}
</style>