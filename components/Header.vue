<template>
  <header>
    <div class="container bigger">
      <img src="/imgs/ams-logo.png" alt="#" width="100" id="logo">
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
/* Header */
header {
	position: fixed;
	top: 0;
	z-index: 1;
	width: 100vw;
	padding: 1em 0;
}

#logo {
	filter: drop-shadow(2px 2px 5px rgba(0,0,0,.8));
	width: 100px;
}
</style>