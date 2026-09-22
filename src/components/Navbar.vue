<script setup>
import { Icon } from "@iconify/vue";
const emit = defineEmits(["openAuth"]);
</script>

<template>
  <nav
    class="bg-brand-4 text-white px-6 py-4 flex items-center justify-between shadow-md"
  >
    <div class="flex items-center space-x-2 text-xl font-bold">
      <Icon icon="lineicons:book" class="w-7 h-7" />
      <span>ArethaStore</span>
    </div>

    <div>
      <ul class="flex items-center space-x-6 font-medium">
        <li class="hover:text-brand-1 cursor-pointer">Home</li>
        <li class="hover:text-brand-1 cursor-pointer">Category</li>
        <li class="cursor-pointer hover:text-brand-1">
          <Icon icon="lineicons:search" class="w-6 h-6" />
        </li>
        <li class="cursor-pointer hover:text-brand-1">
          <Icon icon="lineicons:cart" class="w-6 h-6" />
        </li>
        <li
          class="cursor-pointer hover:text-brand-1"
          @click="$emit('openAuth')"
        >
          <Icon icon="lineicons:user" class="w-6 h-6" />
        </li>
      </ul>
    </div>
  </nav>
</template>
