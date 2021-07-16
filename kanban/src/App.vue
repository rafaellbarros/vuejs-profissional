<template>
  <div id="app">
      {{ message }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Olá Mundo!'
        }
    }
}
</script>

<style>
    #app {
        font-size: 18px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: blue;
    }
</style>