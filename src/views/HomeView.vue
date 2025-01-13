<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref, watchEffect } from "vue";
import { useGameStore, type Problem, type Site } from "@/stores/game-store";

const store = useGameStore(); // Game Data

const open = ref(false);

function openProblem(site: Site) {
  if (site === store.randomSite) {
    open.value = !open.value;
  }
}

function answer(heu: string) {
  store.answer(heu)
  open.value = false;
}

watchEffect(() => {
  console.log("Random Problem", store.randomProblem);

  if (!store.randomProblem) {
    setTimeout(() => {
      store.selectRandomProblem();
    }, 2000);
  }
});
</script>

<template>
  <main>
    <div class="flex flex-col p-4">
      <h1 class="font-bold">Game</h1>

      <p>Points: {{ store.points }}</p>

      <div class="flex flex-wrap gap-4">
        <div class="my-2 border p-4" v-for="site in store.sites">
          <p @click="openProblem(site)" :class="site === store.randomSite ? 'text-red-500' : ''">{{ site.name }}</p>

          <div class="border p-4" v-if="site === store.randomSite && store.randomProblem && open">
            <div class="font-bold mb-2">What is the heuristic to this problem?</div>
            <img src="https://picsum.photos/200"></img>
            <div>{{ store.randomProblem.description }}</div>
            <div>{{ store.randomProblem.answer }}</div>

            <button v-for="heu in store.heuristics" class="py-2 px-4 border rounded" @click="answer(heu)">{{ heu
              }}</button>
          </div>
        </div>
      </div>

      <RouterView />
    </div>
  </main>
</template>
