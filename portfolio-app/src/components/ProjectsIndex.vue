<script setup lang="ts">
import ermassage from "../assets/ermassage.png";
</script>
<template>
  <div class="mx-20">
    <h2 class="text-xl mb-2 bg-[#95a7b6] text-white">
      Current Complete Projects
    </h2>

    <span class="text-sm"> Note: More to be added soon.</span>

    <div class="mx-20">
      <a href="https://www.ermassagetx.com/" target="_blank">
        <img :src="ermassage" class="h-96"
      /></a>

      <div class="flex flex-row mx-10">
        <span class="bg-[#8B5B6E] text-white m-4 p-4">
          A small business massage establishment located in Texas. Made with:
          HTML, CSS, Javascript</span
        >
      </div>
    </div>
  </div>
</template>
