<template>
        <nav class=" text-center text-3xl space-x-5 p-5">
            <button @click="getCharacter" class="bg-inherit text-green p-2 text-green font-bold focus:outline-none hover:text-white transition duration-500 ease-in-out transform hover:scale-105">Character</button>
            <button @click="getLocations" class="bg-inherit text-green p-2 text-green font-bold focus:outline-none hover:text-white transition duration-500 ease-in-out transform hover:scale-105">Locations</button>
        </nav>
        <hr class="border-1 border-green m-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-5">
            <section v-for="value in character " class="col-span-1">
                <div v-if="value.species" class="content-center border-2 border-green p-2 rounded-lg">
                    <div class="flex justify-center">
                        <img class="w-30 h-auto shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]" :src=" `${value.image }`" alt=" {{ value.name }} ">
                    </div>
                    <hr  class="border-1 border-green m-2">
                    <h2 class="text-center text-green text-xl">{{ value.name }}</h2>
                </div>
                <div v-else class="content-center border-2 border-green p-2 rounded-lg">
                    <h1 class="text-center text-green text-xl font-bold">{{ value.name }}</h1>
                    <hr  class="border-1 border-green m-2">
                    <p class="text-green text-sm"> <b>Type:</b> {{ value.type }}</p>
                    <p class="text-green text-sm"> <b>Dimension:</b> {{ value.dimension }}</p>    
                </div>
            </section>
        </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
    getCharacter()
})

const character = ref(null)

const getCharacter = async()=>{
    await axios.get('https://rickandmortyapi.com/api/character')
        .then((resolve)=>{
            console.log(resolve.data.results)
            character.value = resolve.data.results
        }).catch((eror)=>{
            console.log(eror);
        })
}

const getLocations = async()=>{
    await axios.get('https://rickandmortyapi.com/api/location')
        .then((resolve)=>{
            console.log(resolve.data.results)
            character.value = resolve.data.results
        }).catch((eror)=>{
            console.log(eror);
        })
}

</script>