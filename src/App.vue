<template>
  <div id="app" class="page-container">
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass" src="bulma"></style>

<style>
.page-container {
  perspective: 1200px;
	transform-style: preserve-3d;
}
.page-leave-active {
  transform-origin: 50% 50%;
	animation: flipOutRight 0.3s both ease-in;
}

.page-enter-active {
  transform-origin: 50% 50%;
	animation: flipInLeft 0.3s both ease-in;
}

@keyframes flipOutRight {
	from { }
	to { transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}

@keyframes flipInLeft {
	from { transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
  to { }
}
</style>
