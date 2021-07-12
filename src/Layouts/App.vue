<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
export default {
  name: "App",
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>