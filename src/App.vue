<template>
  <div>
    <Navbar @openAuth="isAuth = true"></Navbar>
    <div v-if="isAuth">
      <div v-if="isSignUp">
        <SignIn @close="isAuth = false" @switchToLogIn="isSignUp = false" />
      </div>
      <div v-else>
        <LogIn @close="isAuth = false" @switchToLogIn="isSignUp = true" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import SignIn from "./components/SignIn.vue";
import Navbar from "./components/Navbar.vue";
import { ref } from "vue";
import LogIn from "@/components/LogIn.vue";

export default {
  components: {
    SignIn,
    Navbar,
    LogIn,
  },
  setup() {
    let isSignUp = ref(true);

    let isAuth = ref(false);
    return { isSignUp, isAuth };
  },
};
</script>

<style></style>
