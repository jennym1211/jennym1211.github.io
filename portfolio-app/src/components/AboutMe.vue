<script setup lang="ts">
import { NTooltip, NButton, NCollapse, NCollapseItem } from "naive-ui";
import js from "../assets/js.png";
import vue from "../assets/vue.svg";
import node from "../assets/nodejs.svg";
import resume from "../assets/resume.png";
import c from "../assets/c.svg";
import prisma from "../assets/prisma.svg";
import ts from "../assets/ts.png";
import nest from "../assets/NestJS.png";
import core from "../assets/netcore.png";
import jquery from "../assets/jquery.png";
import nuxt from "../assets/nuxt.svg";
const nodeTools = [
  { tool: "Prisma", img: prisma },
  { tool: "NestJS", img: nest },
  { tool: "NuxtJS", img: nuxt },
];

const cTools = [{ tool: "ASP.NET Core", img: core }];

const tools = [
  { tool: "C#", img: c, subtools: cTools },
  { tool: "Node JS", img: node, subtools: nodeTools },
  { tool: "Vue.JS", img: vue },
  { tool: "JavaScript", img: js },
  { tool: "Typescript", img: ts },
  { tool: "jQuery", img: jquery },
];
</script>
<template>
  <div class="mx-20">
    <h2 class="bg-[#95a7b6] text-white text-lg underline ml-6">
      Tools of the Trade
    </h2>
    <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
      <div v-for="tool in tools" class="bg-[#8B5B6E] m-4 p-4 w-full">
        <img :src="tool.img" class="w-10 h-10" />
        <div v-if="!tool.subtools">
          <span class="p-2 mx-2"> {{ tool.tool }}</span>
        </div>

        <div v-if="tool.subtools">
          <n-tooltip :style="{ maxWidth: '600px' }" trigger="hover">
            <template #trigger>
              <span class="p-2 mx-2"> {{ tool.tool }}</span>
            </template>
            <div
              v-for="sub in tool?.subtools"
              class="bg-[#8B5B6E] m-4 p-4 w-40"
            >
              {{ sub.tool }}
              <img :src="sub.img" class="w-10 h-10 mx-2" />
            </div>
          </n-tooltip>
        </div>
      </div>
    </div>
    <div class="m-4">
      <h2 class="bg-[#95a7b6] text-white text-lg p-2 ml-6">Resume</h2>
      <n-collapse class="p-5" :default-expanded-names="['resume']">
        <n-collapse-item name="resume">
          <img :src="resume" class="mx-20 pt-2" />
        </n-collapse-item>
      </n-collapse>
    </div>
  </div>
</template>
c
