<script setup lang="ts">
import { NCard } from "naive-ui";
import me from "../assets/me.jpg";
import js from "../assets/js.png";
import vue from "../assets/vue.svg";
import node from "../assets/nodejs.svg";
import c from "../assets/c.svg";
import ts from "../assets/ts.png";
import AboutMe from "./AboutMe.vue";
import ProjectsIndex from "./ProjectsIndex.vue";

const tools = [
  { tool: "C# / ASP.Net Core", img: c },
  { tool: "Node JS", img: node },
  { tool: "Vue.JS/Nuxt JS", img: vue },

  { tool: "JavaScript", img: js },

  { tool: "Typescript", img: ts },
];
</script>

<template>
  <div class="mt-10">
    <h1 class="mb-10">Hi! My name is Jennifer Mackey.</h1>
    <div class="bg-[#8B5B6E] p-10 rounded-lg">
      <div class="flex flex-row">
        <img
          class="animated rollIn rounded-[50%] overflow-auto mb-[2em] h-full max-h-96 round-shadow"
          :src="me"
        />

        <div class="h-fit p-4 ml-5 my-2 text-right text-white">
          I am a software engineer with a strong design background, with
          experience in full stack development for web applications.
          <br />
          <br />

          I started off wanting to pursue illustration, ever being creative and
          making imagination become a reality. With a combinimation of a love
          for technology, this mindset turned into me pursuing software
          development.

          <br />
          <br />
          I am a quick learner of various coding stacks and eager to develop and
          deliver robust solutions and software.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.round-shadow {
  box-shadow: 15px -10px #95a7b6;
}

.animated {
  background-image: url(../assets/me.jpg);
  background-repeat: no-repeat;
  background-position: left top;

  margin-bottom: 60px;
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
  }
}

@keyframes rollIn {
  0% {
    opacity: 0;
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
}
.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}
</style>
