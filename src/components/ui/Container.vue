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
  max-width: 1190px;
  height: 100%;
  margin: 0 auto;
  padding-right: 60px;
  padding-left: 60px;

  @include media(laptop) {
    max-width: 900px;
    padding-right: 40px;
    padding-left: 40px;
  }

  @include media(tablet) {
    max-width: 540px;
  }

  @include media(mobile) {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
