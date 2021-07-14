<template>
  <div class="min-h-screen bg-gray-100">
    <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
    <Header />

    <div class="py-10">
      <div class="w-full mx-auto sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <!-- Sidebar -->
        <Sidebar />
        <!-- Main -->
        <main class="lg:col-span-9 xl:col-span-10">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Partials/Header"
import Sidebar from "./Partials/Sidebar";
export default {
  components: {
    Header,
    Sidebar,
  },
}
</script>