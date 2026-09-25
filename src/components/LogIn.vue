<template>
  <div class="flex justify-center items-center inset-0 fixed bg-black/50">
    <div class="bg-white p-8 rounded-md shadow-lg relative w-96">
      <button
        class="absolute top-3 right-3 hover:text-black font-bold"
        @click="$emit('close')"
      >
        X
      </button>
      <form @submit.prevent="logIn" class="flex flex-col gap-4">
        <h2 class="uppercase text-center mb-2 text-xl">Log in</h2>

        <p
          v-if="error"
          class="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200"
        >
          {{ error }}
        </p>
        <label>
          <span
            class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']"
            >Email</span
          >
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            class="w-full px-3 py-2 border rounded-md my-2"
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
            name="password"
            placeholder="password"
            class="w-full px-3 py-2 border rounded-md my-2"
          />
        </label>
        <button class="btn-brand">Log in</button>
      </form>
      <p class="text-center mt-4">
        Not a member?
        <span
          class="text-brand-1 cursor-pointer font-semibold underline *"
          @click="$emit('switchToLogIn')"
        >
          Create an account
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import useLogIn from "@/composable/useLogIn";
import { ref } from "vue";

export default {
  emits: ["close", "switchToLogIn"],
  setup(props, { emit }) {
    let email = ref("");
    let password = ref("");
    let { error, signIn } = useLogIn();
    let logIn = async () => {
      let res = await signIn(email.value, password.value);

      if (res) {
        console.log("Successfullly", res.user);
        emit("close");
      }
    };
    return { email, password, logIn, error };
  },
};
</script>

<style></style>
