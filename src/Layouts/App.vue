<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!--  Sidebar  -->
    <MobileSidebar v-if="sidebarOpen" @close-sidebar="sidebarOpen = false" :navigation="navigation"/>
    <DesktopSidebar :navigation="navigation"/>

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <!--  Header  -->
      <Header @open-sidebar="sidebarOpen = true"/>

      <!--  Main  -->
      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <router-view></router-view>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>

    </div>
  </div>
</template>

<script>
import MobileSidebar from "./Partials/MobileSidebar";
import DesktopSidebar from "./Partials/DesktopSidebar";
import Header from "./Partials/Header";
import { ref } from 'vue'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/vue/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Team', href: '/team', icon: UsersIcon, current: false },
  { name: 'Projects', href: '/projects', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '/documents', icon: InboxIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon, current: false },
]

export default {
  components: {
    MobileSidebar,
    DesktopSidebar,
    Header,
  },
  data() {
    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
      navigation
    }
  },
}
</script>