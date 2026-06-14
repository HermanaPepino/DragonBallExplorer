<template>
  <q-page class="q-pa-md bg-grey-2">

    <div class="text-center q-mb-lg">
      <h2 class="text-primary">🐉 Dragon Ball Explorer</h2>
      <p class="text-grey">Search your favorite fighters</p>
    </div>

    <div class="row q-mb-md">
      <div class="col">
        <SearchBar @search="searchCharacters" />
      </div>
    </div>

    <q-spinner v-if="loading" size="50px" />

    <CharacterList :characters="characters" />

  </q-page>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { getCharacters } from "@/services/dragonball.js";

  import SearchBar from "@/components/SearchBar.vue";
  import CharacterList from "@/components/CharacterList.vue";

  const characters = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const loadCharacters = async () => {
    try {
      loading.value = true;
      error.value = null;

      characters.value = await getCharacters();

    } catch (e) {
      console.log(e);
      error.value = "Error cargando personajes";
    } finally {
      loading.value = false;
    }
  };

  const searchCharacters = async (name) => {
    try {
      loading.value = true;
      characters.value = await getCharacters(name);
    } catch (e) {
      console.log(e);
      error.value = "Error en búsqueda";
    } finally {
      loading.value = false;
    }
  };

  onMounted(loadCharacters);
</script>
