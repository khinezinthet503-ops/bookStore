<template>
  <div class="flex justify-center items-center inset-0 fixed bg-black/50">
    <div class="bg-white p-8 rounded-md shadow-lg relative w-96">
      <button
        class="absolute top-3 right-3 hover:text-black font-bold"
        @click="$emit('close')"
      >
        X
      </button>
      <form @submit.prevent="signIn" class="flex flex-col gap-4">
        <h2 class="uppercase text-center mb-2 text-xl">Sign Up</h2>
        <p
          v-if="error"
          class="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200"
        >
          {{ error }}
        </p>
        <label>
          <span
            class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']"
            >UserName</span
          >
          <input
            v-model="userName"
            type="text"
            class="w-full border px-3 py-2 rounded-md"
            placeholder="userName"
          />
        </label>
        <label>
          <span
            class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']"
            >Email</span
          >
          <input
            v-model="email"
            type="email"
            class="w-full border px-3 py-2 rounded-md"
            placeholder="you@example.com"
          />
        </label>
        <label>
          <span
            class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']"
            >Password</span
          >
          <input
            v-model="password"
            type="password"
            class="w-full border px-3 py-2 rounded-md"
            placeholder="password"
          />
        </label>

        <button class="btn-brand">Sign Up</button>
      </form>
      <p class="text-center mt-4">
        Already have an account?
        <span
          class="text-brand-1 cursor-pointer font-semibold underline"
          @click="$emit('switchToLogIn')"
        >
          Log in
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import useSignUp from "@/composable/UseSignup";

import { ref } from "vue";
export default {
  emits: ["close", "switchToLogIn"],
  setup(props, { emit }) {
    let userName = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createUser } = useSignUp();

    let signIn = async () => {
      console.log("Sign up button clicked!");
      let res = await createUser(email.value, password.value, userName.value);
      console.log("Response from Firebase:", res);
      if (res) {
        console.log(res.user.displayName);
        emit("close");
      } else {
        console.log("Registration failed, error is:", error.value);
      }
    };
    return { userName, email, password, signIn, error };
  },
};
</script>
