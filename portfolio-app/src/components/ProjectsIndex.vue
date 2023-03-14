<script setup lang="ts">
import ermassage from "../assets/ermassage.png";
import stimmy from "../assets/stimmyio.png";
</script>
<template>
  <div class="mx-20">
    <h2 class="text-xl mb-2 bg-[#95a7b6] text-white">Projects</h2>

    <img :src="ermassage" class="h-100" />

    <div class="flex flex-row mx-10">
      <span class="bg-[#8B5B6E] text-white my-4 mx-auto p-4">
        A former small business massage establishment located in Texas. Made
        with: HTML, CSS, Javascript
      </span>
    </div>

    <img :src="stimmy" class="h-100" />

    <div class="flex flex-row mx-10">
      <span class="bg-[#8B5B6E] text-white m-4 p-4">
        <b class="text-xl"> stimmy.io</b><br /><br />
        (Coming Soon) A web application tailored and dedicated to neurodivergent
        individuals to help manage their symptoms. (More layouts and info coming
        soon)
      </span>
    </div>
  </div>
</template>
