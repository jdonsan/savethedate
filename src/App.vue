<template>
  <div id="app">
    <div class="my-content">
      <my-cover />
    </div>
  </div>
</template>

<script>
import MyCover from './components/MyCover/MyCover'

export default {
  name: 'App',

  components: {
    MyCover
  }
}
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  background: $color-5;

  div,
  section,
  article {
    box-sizing: border-box;
  }
}

h2 {
  font-family: $font-1;
  font-weight: $weight-font-bold;
  color: $color-1;
  width: 100%;
  font-size: 45px;
  line-height: 45px;
  padding: 0 15px;
  margin-bottom: 0;
  text-align: center;
  width: 100%;
}

p {
  font-family: $font-2;
  font-weight: $weight-font-regular;
  color: $color-1;
  width: 100%;
  font-size: 20px;
  line-height: 1.3;
  margin: 1rem 0;
}

h3 {
  font-family: $font-2;
  text-align: center;
  font-size: 20px;
  color: $color-2;
}

img {
  width: 100%;
  margin: 1rem 0;
}

b {
  color: $color-1;
  font-weight: bold;
}

#app {
  max-width: 768px;
  margin: 0 auto;
}
</style>
