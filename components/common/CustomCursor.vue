<template>
  <div>
    <canvas ref="canvas" class="cursor-canvas"/>
    <div ref="cursor" class="cursor-dot" :class="{'cursor-dot_click': targetScale !== 1}"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const canvas = ref(null)
const cursor = ref(null)

let ctx
const trail = []
const trailLength = 5
const mouse = { x: 0, y: 0 }

let scale = 1
let targetScale = 1
const isOverLink = ref(false)

onMounted(() => {
  const cvs = canvas.value
  ctx = cvs.getContext('2d')

  cvs.width = window.innerWidth
  cvs.height = window.innerHeight

  window.addEventListener('resize', () => {
    cvs.width = window.innerWidth
    cvs.height = window.innerHeight
  })

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY

    // Проверяем, наведен ли курсор на ссылку
    const el = document.elementFromPoint(mouse.x, mouse.y)
    const isButtonOrLink = (el) =>
  el &&
  (
    el.tagName === 'A' ||
    el.tagName === 'BUTTON' ||
    el.getAttribute('role') === 'button' ||
    el.closest('a') ||
    el.closest('button') ||
    el.closest('[role="button"]')
  )

isOverLink.value = isButtonOrLink(el)

  })

  window.addEventListener('mousedown', () => {
    scale = 2
  })

  animate()
})

function animate() {
  // Плавное возвращение к нормальному размеру
  scale += (targetScale - scale) * 0.1
  if (Math.abs(targetScale - scale) < 0.01) {
    scale = 1
    targetScale = 1
  }

  trail.unshift({ x: mouse.x, y: mouse.y })
  if (trail.length > trailLength) trail.pop()

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  ctx.beginPath()
  ctx.moveTo(trail[0].x, trail[0].y)

  for (let i = 1; i < trail.length - 1; i++) {
    const xc = (trail[i].x + trail[i + 1].x) / 2
    const yc = (trail[i].y + trail[i + 1].y) / 2
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc)
  }

  const trailStart = trail[0]
  const trailEnd = trail[trail.length - 1]

  const gradient = ctx.createLinearGradient(trailEnd.x, trailEnd.y, trailStart.x, trailStart.y)
  gradient.addColorStop(0, isOverLink.value ? 'rgba(6,110,49,0)' : 'rgba(244,227,179,0)')
  gradient.addColorStop(1, isOverLink.value ? '#066E31' : '#F4E3B3')

  ctx.strokeStyle = gradient
  ctx.lineWidth = 20 * scale
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.stroke()

  cursor.value.style.transform = `translate(${mouse.x - 10}px, ${mouse.y - 10}px) scale(${scale})`

  // Меняем цвет курсора
  cursor.value.style.backgroundColor = isOverLink.value ? '#066E31' : '#F4E3B3'

  requestAnimationFrame(animate)
}
</script>


<style>

*,
a {
  cursor: none;
}

.cursor-canvas {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999;
}

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #F4E3B3;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999998999 !important;
}

.cursor-dot_click {
  transform: scale(1.5);
}
</style>
