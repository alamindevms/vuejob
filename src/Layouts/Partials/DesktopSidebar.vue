<template>
  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
        </div>
        <div class="mt-5 flex-grow flex flex-col">
          <nav class="flex-1 px-2 bg-white space-y-1">
            <ul class="list-none">
              <router-link
                  v-slot="{ href, navigate, isActive }"
                  custom
                  v-for="item in navigation" :key="item.name" :to="item.href"
              >
                <li
                    :class="[isActive && 'bg-gray-100 text-gray-900']"
                    class="flex items-center group px-2 rounded-md hover:bg-gray-50 hover:text-gray-900 "
                >
                  <component :is="item.icon" :class="[isActive && 'text-gray-500' , 'text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                  <a :href="href" @click="navigate" class="text-gray-600 text-sm font-medium w-full py-4">{{ item.name }}</a>
                </li>
              </router-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopSidebar",
  props:{
    navigation:{
      type: Array
    }
  },
}
</script>