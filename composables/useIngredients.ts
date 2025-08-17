import { ref, computed, readonly } from 'vue'
import type { Ingredient } from '~/types'

export const useIngredients = () => {
  const ingredients = ref<Ingredient[]>([
    {
      id: 1,
      name: 'БЕТУЛИН',
      image: '/assets/images/chemical/maslo.png',
      alt: 'Бетулин',
      description: 'природный компонент из берёсты, который восстанавливает, защищает и омолаживает кожу.'
    },
    {
      id: 2,
      name: 'МАСЛО МИНДАЛЯ',
      image: '/assets/images/chemical/betulin.png',
      alt: 'Масло миндаля',
      description: 'богатый источник нутриентов для здоровья кожи'
    },
    {
      id: 3,
      name: 'ЭКСТРАКТ ЯГОД',
      image: '/assets/images/chemical/yagoda.png',
      alt: 'Экстракт ягод',
      description: 'натуральный антиоксидант для сияния и молодости кожи'
    },
    {

      id: 4,
      name: 'ЭКСТРАКТ ЯГОД',
      image: '/assets/images/chemical/yagoda.png',
      alt: 'Экстракт ягод',
      description: 'натуральный антиоксидант для сияния и молодости кожи'
    }
  ])

  const groupedIngredients = computed(() => {
    const chunks: Ingredient[][] = []
    for (let i = 0; i < ingredients.value.length; i += 2) {
      chunks.push(ingredients.value.slice(i, i + 2))
    }
    return chunks
  })

  const totalSlides = computed(() => Math.ceil(ingredients.value.length / 2))

  const addIngredient = (ingredient: Ingredient) => {
    ingredients.value.push(ingredient)
  }

  const removeIngredient = (id: number) => {
    const index = ingredients.value.findIndex(ing => ing.id === id)
    if (index > -1) {
      ingredients.value.splice(index, 1)
    }
  }

  const updateIngredient = (id: number, updates: Partial<Ingredient>) => {
    const index = ingredients.value.findIndex(ing => ing.id === id)
    if (index > -1) {
      ingredients.value[index] = { ...ingredients.value[index], ...updates }
    }
  }

  return {
    ingredients: readonly(ingredients),
    groupedIngredients,
    totalSlides,
    addIngredient,
    removeIngredient,
    updateIngredient
  }
}

