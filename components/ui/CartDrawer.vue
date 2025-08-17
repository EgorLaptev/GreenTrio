<template>
  <Teleport to="body">
    <div class="cart-wrapper" :class="{ 'cart-wrapper_hidden': !isOpen }">
      <transition name="slide">
        <div class="cart-drawer" v-if="isOpen">
          <button class="close-btn" @click="$emit('close')">✕</button>

          <div class="cart-header">
            <div class="cart-count">1 товар</div>
            <div class="cart-div"></div>
            <div class="cart-tip">добавь ещё XXX ₽ для бесплатной доставки</div>
          </div>

          <hr class="cart-divider" />

          <div class="cart-items">
            <div class="cart-item">
              <img src="/assets/images/goods/night-time.png" alt="" class="cart-image" />
              <div class="cart-details">
                <div class="top">
                  <div class="cart-title">NIGHT-CARE SERUM</div>
                  <div class="cart-price">1600</div>
                </div>
                <div class="cart-quantity">
                  <button class="qty-btn">−</button>
                  <span>1</span>
                  <button class="qty-btn">+</button>
                </div>
              </div>
            </div>
            <div class="cart-item">
              <img src="/assets/images/goods/night-time.png" alt="" class="cart-image" />
              <div class="cart-details">
                <div class="top">
                  <div class="cart-title">NIGHT-CARE SERUM</div>
                  <div class="cart-price">1600</div>
                </div>
                <div class="cart-quantity">
                  <button class="qty-btn">−</button>
                  <span>1</span>
                  <button class="qty-btn">+</button>
                </div>
              </div>
            </div>
          </div>

          <hr class="cart-divider" />

          <button class="checkout-btn">перейти к оплате</button>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({ isOpen: Boolean })
</script>

<style scoped>
.cart-wrapper {
  position: fixed;
  inset: 0;
  left: -300%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99999;
  transition: opacity 0.3s;
}

.cart-wrapper_hidden {
  pointer-events: none;
  opacity: 0;
}

.cart-div {
  width: 89%;
  margin: 12px auto;
  background: #8C7D66;
  height: 1px;
}

.top {
  display: flex;
  flex-direction: row;
  gap: 100px;
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 38%;
  height: 100%;
  background-color: #EEDEC7;
  padding: 24px 56px 56px;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  z-index: 100000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 24px;
  font-size: 24px;
  background: none;
  border: none;
  color: #2c2c2c;
  cursor: pointer;
}

.cart-header {
  text-align: center;
  margin-top: 24px;
  font-size: 16px;
  color: #2c2c2c;
}

.cart-count {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
}

.cart-tip {
  font-size: 18px;
  color: #000000;
}

.cart-divider {
  height: 2px;
  background: #f0e0c0;
  border: none;
  width: 5%;
  margin: 24px auto;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 56px;
  flex-grow: 1;

}

.cart-item {
  display: flex;
  align-items: start;
  gap: 30px;
  position: relative;
}

.cart-item:nth-child(1)::before {
  content: '';
  position: absolute;
  top: -25px;
  left: 50px;
  right: 50px;
  height: 5px;
  background: rgba(246, 237, 223, 0.76);
}

.cart-item::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50px;
  right: 50px;
  height: 5px;
  background: rgba(246, 237, 223, 0.76);
}

.cart-image {
  height: 220px;
  object-fit: contain;
  padding-left: 40px;
}

.cart-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;
  padding: 12px 0;
}

.cart-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
}

.cart-price {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.cart-quantity {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #2c2c2c;
  border-radius: 20px;
  padding: 4px 12px;
  width: fit-content;
  margin-bottom: 24px;
}

.qty-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #2c2c2c;
}

.checkout-btn {
  width: 100%;
  padding: 16px;
  background: transparent;
  border: 1px solid #2c2c2c;
  border-radius: 32px;
  font-size: 18px;
  font-weight: 400;
  color: #2c2c2c;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
