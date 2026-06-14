<template>
  <div class="row q-col-gutter-md q-pa-md">

    <div v-for="c in characters"
         :key="c.id"
         class="col-12 col-sm-6 col-md-4 col-lg-3">
      <CharacterCard :character="c" />
    </div>

  </div>
</template>

<script setup>
  import CharacterCard from "./CharacterCard.vue";

  defineProps({
    characters: Array
  });
</script>
