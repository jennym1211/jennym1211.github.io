<script setup lang="ts">
import logo from "./assets/logo.png";
import github from "./assets/github.svg";

import linkedin from "./assets/linkedin.png";
import AboutMe from "./components/AboutMe.vue";
import HomePage from "./components/HomePage.vue";

import ProjectsIndex from "./components/ProjectsIndex.vue";
const scrollToElement = (id: any) => {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div class="relative">
    <div class="min-h-[56px] bg-[#8B5B6E] fixed top-0 left-0 right-0">
      <div class="h-[100%] w-[100px] fixed top-[50px] left-0 my-3 mt-[20%]">
        <a href="https://github.com/jennym1211" target="_blank">
          <img :src="github" class="w-10 h-10 mx-2 my-6" />
        </a>
        <a href="https://www.linkedin.com/in/jennym1211/" target="_blank">
          <img :src="linkedin" class="w-10 h-10 mx-2" />
        </a>
      </div>

      <div class="fixed right-0">
        <button
          class="bg-transparent outline-none hover:outline-none focus:outline-none text-white"
          @click="scrollToElement('about')"
        >
          About Me
        </button>
        <button
          class="bg-transparent outline-none hover:outline-none focus:outline-none text-white"
          @click="scrollToElement('projects')"
        >
          Projects
        </button>
        <!-- <button>Resume</button> -->
      </div>
      <div class="fixed left-0">
        <a @click="scrollToElement('home')">
          <img :src="logo" class="h-16" />
        </a>
      </div>
    </div>

    <div class="h-[100vh] scroll-mt-12" id="home">
      <HomePage />

      <h2 class="text-lg mt-4">
        Please excuse the mess, portfolio currently being remade!
      </h2>
    </div>
    <div class="h-full my-2 scroll-mt-12" id="about">
      <AboutMe />
    </div>

    <div class="h-[100vh] scroll-mt-12" id="projects">
      <ProjectsIndex />
    </div>
  </div>
</template>
