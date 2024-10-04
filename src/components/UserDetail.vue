<template>
  <div>
    <h1>Chi tiết User</h1>
    <div v-for="user in listUsrers" :key="user.id">
      <div v-if="user.id == id">
        <div>Id: {{ user.id }}</div>
        <div>UserName: {{ user.name }}</div>
        <div>Email: {{ user.email }}</div>
        <div>Address: {{ user.address }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const listUsrers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nva@gmail.com",
    address: "Hà Nội",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    email: "nvb@gmail.com",
    address: "Hải Phòng",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    email: "nvc@gmail.com",
    address: "Hải Dương",
  },
];
const route = useRoute();
const { id } = route.params;
console.log(listUsrers);
</script>   

<style>
</style>