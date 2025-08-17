<template>
  <div class="filter-bar">
    <FilterButton
      v-for="filter in filters"
      :key="filter.label"
      :label="filter.label"
      :is-active="selectedFilters.includes(filter.label)"
      @toggle="() => toggleFilter(filter.label, filter.sub.length > 0)"
    />
  </div>

  <transition name="slide-fade">
    <div
      v-if="openFilter"
      class="sub-filter-bar"
    >
      <FilterButton
        v-for="sub in filters.find(f => f.label === openFilter)?.sub"
        :key="sub"
        :label="sub"
        :is-active="selectedFilters.includes(sub)"
        @toggle="() => toggleSubFilter(sub)"
      />
    </div>
  </transition>
</template>


<script setup>
import FilterButton from './FilterButton.vue'

const filters = [
  { label: 'Очищение', sub: ['Пенка', 'Гель', 'Мицеллярка'] },
  { label: 'Сыворотки', sub: ['Витамин C', 'Гиалуронка'] },
  { label: 'Кремы/флюиды', sub: [] }, // нет подкатегорий
  { label: 'Маски', sub: ['Тканевые', 'Глиняные'] },
  { label: 'Глаза', sub: [] },
  { label: 'Губы', sub: ['Бальзамы', 'Скрабы'] }
]


const openFilter = ref(null)
const selectedFilters = ref([])

function toggleFilter(label, hasSub) {
  if (hasSub) {
    openFilter.value = openFilter.value === label ? null : label
  } else {
    if (selectedFilters.value.includes(label)) {
      selectedFilters.value = selectedFilters.value.filter(f => f !== label)
    } else {
      selectedFilters.value.push(label)
    }
  }
}

function toggleSubFilter(label) {
  if (selectedFilters.value.includes(label)) {
    selectedFilters.value = selectedFilters.value.filter(f => f !== label)
  } else {
    selectedFilters.value.push(label)
  }
}

</script>

<style scoped>
.filter-bar,
.sub-filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.sub-filter-bar {
}

/* Анимация появления подкатегорий */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 200px;
  opacity: 1;
  transform: translateY(0);
}

</style>
