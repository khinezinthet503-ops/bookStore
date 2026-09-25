<script setup>
import getuser from "@/composable/getUser";
import useLogOut from "@/composable/useLogout";
import router from "@/router";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const emit = defineEmits(["openAuth"]);
let { user } = getuser();
let { error, logOut } = useLogOut();
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
        <li>
          <router-link to="/" class="hover:text-brand-1 cursor-pointer"
            >Home</router-link
          >
        </li>
        <li>
          <router-link to="/category" class="hover:text-brand-1 cursor-pointer"
            >Category</router-link
          >
        </li>

        <li class="cursor-pointer hover:text-brand-1">
          <Icon icon="lineicons:search" class="w-6 h-6" />
        </li>
        <li class="cursor-pointer hover:text-brand-1">
          <Icon icon="lineicons:cart" class="w-6 h-6" />
        </li>
        <li class="cursor-pointer" @click="$emit('openAuth')">
          <div v-if="user" class="flex items-center gap-3">
            <span class="text-white text-sm">
              {{ user.displayName || user.email }}
            </span>
            <button
              @click="logOut"
              class="button border rounded-md px-1 hover:text-brand-1 transition-colors"
            >
              LogOut
            </button>
          </div>
          <Icon
            v-else
            icon="lineicons:user"
            class="w-6 h-6 hover:text-brand-1 transition-colors"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>
