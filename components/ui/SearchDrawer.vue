<template>
  <Teleport to="body">
    <div class="search-wrapper" :class="{'search-wrapper_hidden': !isOpen}">
    <transition name="slide">

        <div class="search-drawer" v-if="isOpen">
          <button class="close-btn" @click="$emit('close')">✕</button>

          <h2 class="search-title">ПОИСК</h2>
          <input
              v-model="query"
              type="text"
              placeholder="хочу купить"
              class="search-input"
          />

          <ul class="product-list">
            <li v-for="item in filteredList" :key="item">{{ item }}</li>
          </ul>

          <hr class="divider"/>

          <div
              v-for="product in matchedProducts"
              :key="product.name"
              class="product-card"
          >
            <img :src="product.image" alt="" class="product-image"/>
            <div class="product-info">
              <div class="product-name">{{ product.name }}</div>
              <div class="product-description">{{ product.description }}</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({isOpen: Boolean})

const query = ref('')

const productList = [
  'LORD CARE CREAM',
  'ANTI-ACNE SERUM',
  'THE FOAM',
  'INTENSIVE TREATMENT LIP BALM',
  'SUNSCREEN URBAN CREAM',
  'NIGHT-TIME LIFTING SERUM',
  'THE TONER',
  'CALMING CARE SERUM',
]

const productData = [
  {
    name: 'NIGHT-CARE SERUM',
    description: 'Лифтинг-средство для выраженного ночного омоложения',
    image: '/assets/images/night-time.png',
  },
  {
    name: 'CALMING CARE SERUM',
    description: 'Сыворотка для чувствительной кожи: мягкость и комфорт.',
    image: '/assets/images/calming-care.png',
  },
]

const filteredList = computed(() =>
    query.value
        ? productList.filter(p =>
            p.toLowerCase().includes(query.value.toLowerCase())
        )
        : productList
)

const matchedProducts = computed(() =>
    productData.filter(p =>
        p.name.toLowerCase().includes(query.value.toLowerCase())
    )
)
</script>

<style scoped>

.search-wrapper {
  position: fixed;
  inset: 0;
  left: -300%;
  z-index: 99999;
  background: rgba(0, 0, 0, .7);
  transition: opacity .2s;
  font-weight: 300;
}

.search-wrapper_hidden {
  pointer-events: none;
  opacity: 0;
}

.search-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 48%;
  height: 100%;
  background-color: #EEDEC7;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
  padding-left: 32px;
  z-index: 99999;
  overflow-y: auto;
}

.search-title {
  text-align: center;
  font-weight: normal;
  color: #7c6c5f;
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: 300;

}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #7c6c5f;
  cursor: pointer;
}

.search-input {
  width: 100%;
  padding: 24px 16px;
  border-radius: 18px;
  border: none;
  font-size: 22px;
  margin-top: 12px;
  margin-bottom: 32px;
  font-weight: 200;
  background-color: #ffffff;
  outline: none;
}

.search-input::placeholder {
  color: #B6B6B6;
  font-weight: 100;
}

.product-list {
  list-style: none;
  padding: 12px;
  margin: 0 0 24px 0;
}

.product-list li {
  margin-bottom: 32px;
  color: #333;
  font-size: 24px;
}

.divider {
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, #eee, transparent);
  margin: 24px 0;
}

.product-card {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
  align-items: center;
}

.product-image {
  height: 150px;
  width: 150px;
  object-fit: contain;
}

.product-info {
  flex: 1;
}

.product-name {
  margin-bottom: 8px;
  color: #2C2C2C;
  font-size: 24px;
}

.product-description {
  font-size: 16px;
  color: #757575;
}

/* Анимация появления */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-from {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
