<template>
  <div class="row q-gutter-sm">
    <q-input class="col"
             filled
             v-model="text"
             label="Buscar personaje"
             debounce="500"
             @update:model-value="emitSearch" />

    <q-btn color="negative" label="Limpiar" @click="clear" />
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const emit = defineEmits(["search"]);
  const text = ref("");

  const emitSearch = () => {
    emit("search", text.value);
  };

  const clear = () => {
    text.value = "";
    emit("search", "");
  };
</script>
