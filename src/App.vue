<template>

    <Header></Header>
    <!-- Другой код вашего компонента -->

  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  },
  // Остальной код компонента
}
</script>

