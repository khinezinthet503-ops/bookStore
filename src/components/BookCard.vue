<template>
  <div class="m-6">
    <div
      class="flex items-center justify-between mb-6 border-b border-gray-300 pb-2"
    >
      <div
        class="bg-brand-2 text-white px-6 py-2 font-bold uppercase text-sm relative rounded"
      >
        {{ title }}
      </div>
    </div>

    <div v-if="loading" class="text-gray-500 font-medium">Loading books...</div>
    <div v-if="error" class="text-red-500 font-medium">{{ error }}</div>

    <div
      v-if="!loading && !error"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
    >
      <div
        v-for="book in books"
        :key="book.key"
        class="bg-white border border-brand-2 rounded-lg shadow-xl hover:shadow-md transition-shadow p-4 flex flex-col justify-between"
      >
        <div>
          <div
            class="h-48 bg-gray-100 mb-4 rounded flex items-center justify-center overflow-hidden"
          >
            <img
              v-if="book.cover_i"
              :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
              :alt="book.title"
              class="h-full object-cover"
            />
            <span v-else class="text-xs text-gray-400">No Cover Available</span>
          </div>

          <h3 class="font-semibold text-gray-800 text-sm line-clamp-2 mb-1">
            {{ book.title }}
          </h3>
          <!-- author -->
          <p class="text-xs text-gray-500">
            {{
              book.author_name ? book.author_name.join(", ") : "Unknown Author"
            }}
          </p>
        </div>

        <!-- Publish Year & Action -->
        <div
          class="mt-4 flex items-center justify-between text-xs text-gray-400 border-t pt-3"
        >
          <span>{{ book.first_publish_year || "N/A" }}</span>
          <button
            class="bg-brand-4 text-white px-3 py-1 rounded hover:bg-opacity-90 font-medium"
          >
            View
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useBooks from "@/composable/useBooks";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

let { books, loading, error, usebook } = useBooks();

onMounted(async () => {
  await usebook(props.query);
});
</script>

<style></style>
