<script setup lang="ts">
import { useGameStore } from '@/stores/game-store';

const store = useGameStore()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <h1 class="font-bold text-xl">Result</h1>
    <p>Points scored: {{ store.points }}</p>

    <router-link to="/" class="mt-4 rounded border py-2 px-4">Play again</router-link>
  </div>
</template>
