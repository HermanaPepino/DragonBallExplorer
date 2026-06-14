<template>
  <q-card class="my-card shadow-5">

    <!-- IMAGE -->
    <q-img :src="character?.image || character?.img || 'https://via.placeholder.com/300x220'"
           height="220px"
           fit="cover"
           style="cursor: pointer"
           @click="show = true" />

    <!-- INFO -->
    <q-card-section>
      <div class="text-h6">
        {{ character?.name || 'Unknown' }}
      </div>

      <div class="text-caption text-grey">
        Ki: {{ character?.ki ?? 'N/A' }}
      </div>

      <div class="text-caption text-grey">
        Race: {{ character?.race || 'Unknown' }}
      </div>
    </q-card-section>

    <!-- FAVORITE -->
    <q-card-actions align="right">
      <q-btn icon="favorite"
             flat
             color="red"
             @click.stop="toggleFavorite" />
    </q-card-actions>

    <!-- IMAGE MODAL -->
    <q-dialog v-model="show">
      <q-card style="min-width: 400px">
        <q-img :src="character?.image || character?.img"
               style="max-width: 500px" />
      </q-card>
    </q-dialog>

  </q-card>
</template>

<script setup>
  import { ref } from "vue";

  const props = defineProps({
    character: Object
  });

  const show = ref(false);

  /* FAVORITES */
  const toggleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem("fav") || "[]");

    const exists = favs.find(f => f.id === props.character?.id);

    if (!exists) {
      favs.push(props.character);
    } else {
      favs = favs.filter(f => f.id !== props.character.id);
    }

    localStorage.setItem("fav", JSON.stringify(favs));
  };
</script>

<style>
  .my-card {
    transition: 0.3s;
  }

    .my-card:hover {
      transform: scale(1.03);
    }
</style>
