<script setup lang="ts">
import { NCard } from "naive-ui";
import me from "../assets/me.jpg";
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
  <h1 class="mb-10">Hello! My name is Jennifer Mackey.</h1>
  <div class="bg-teal-500 p-10 rounded-lg">
    <div class="flex flex-row">
      <img class="animated rollIn" id="me" :src="me" />

      <div class="w-[300px] h-fit p-4 mt-20 ml-20">
        I am a software engineer with a strong design background, with
        experience in full stack development for web applications. I am a quick
        learner of various coding stacks and eager to develop and deliver robust
        solutions and software.
      </div>
    </div>

    <div class="mb-10">
      <router-link to="/about" class="text-teal-300 underline"
        >Click to learn more about me!</router-link
      >
    </div>
  </div>
  <h2>
    Note: Pardon the mess, this is currently getting reworked with love with
    Vue! ❤️
  </h2>
</template>

<style scoped>
#me {
  height: auto;

  margin-bottom: 2em;
  border-radius: 50%;

  box-shadow: 15px -10px #66fcf1;

  max-width: 100%;
  overflow: auto;
  max-width: 300px;
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
