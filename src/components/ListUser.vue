<template>
    <div class="contail">
        <div v-for="user in listUsrer" :key="user.id">
            <div class="item">
                <div>Id: {{ user.id }}</div>
                <div>UserName: {{ user.name }}</div>
                <div>Email: {{ user.email }}</div>
                <div>Address: {{ user.address }}</div>
                <button @click="goToDetail(user.id)">Xem chi tiết</button>
        </div>
    </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const listUsrer = [
    {
        id:1,
        name:"Nguyễn Văn A",
        email: "nva@gmail.com",
        address: "Hà Nội"
    },
    {
        id:2,
        name:"Nguyễn Văn B",
        email: "nvb@gmail.com",
        address: "Hải Phòng"
    },
    {
        id:3,
        name:"Nguyễn Văn C",
        email: "nvc@gmail.com",
        address: "Hải Dương"
    },
]
const router = useRouter();
const goToDetail=(id)=>{
    router.push(`/userDetail/${id}`)
}
</script>

<style scope>
.contail{
    display: flex;
    gap: 20px;
    padding: 10px;
}
.item{
    border:1px solid black;
    width: 230px;
    padding: 15px;
}
</style>