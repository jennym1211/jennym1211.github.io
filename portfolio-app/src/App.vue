<script setup lang="ts">
import logo from "./assets/logo.png";
</script>

<template>
  <div class="relative">
    <div class="h-[50px] bg-gray-900 fixed top-0 left-0 right-0">
      <div class="fixed right-0">
        <button><router-link to="/about">About Me</router-link></button>
        <button><router-link to="/projects">Projects</router-link></button>
        <!-- <button>Resume</button> -->
      </div>
      <div class="fixed left-0">
        <router-link to="/"><img :src="logo" class="h-16" /></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
