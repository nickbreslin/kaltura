<template>
  <div class="container my-5">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "Home",
  components: { Header, Footer }
};
</script>
