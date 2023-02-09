<script setup lang="ts">
import js from "../assets/js.png";
import vue from "../assets/vue.svg";
import node from "../assets/nodejs.svg";
import c from "../assets/c.svg";
import ts from "../assets/ts.png";

const tools = [
  { tool: "C# / ASP.Net Core", img: c },
  { tool: "Node JS", img: node },
  { tool: "Vue.JS/Nuxt JS", img: vue },

  { tool: "JavaScript", img: js },

  { tool: "Typescript", img: ts },
];
</script>
<template>
  <h2>Tools of the Trade</h2>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="tool in tools" class="bg-teal-600 m-4 p-4">
      <div class="flex flex-row">
        <img :src="tool.img" class="w-10 h-10" />
        <span class="p-2 mx-2"> {{ tool.tool }}</span>
      </div>
    </div>
  </div>
</template>
