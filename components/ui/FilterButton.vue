<template>
  <button
    class="filter-button"
    :class="{ active: isActive }"
    @click="$emit('toggle', label)"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
  isActive: Boolean
})
</script>

<style scoped>
.filter-button {
  padding: 1rem 1.5rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1rem;
  white-space: nowrap;
}

.filter-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.filter-button.active {
  background: rgba(255, 255, 255, 0.4);
  color: white;
}
</style>
