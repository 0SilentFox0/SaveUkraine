<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @include media(laptop) {
    max-width: 900px;
  }

  @include media(tablet) {
    max-width: 540px;
  }
}
</style>
