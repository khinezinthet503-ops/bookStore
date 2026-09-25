<template>
  <div>
    <section class="bg-brand-4/10 py-10 px-6 mb-6 text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">
        Welcome to ArethaStore
      </h1>
      <p class="text-gray-600">Explore our collection of books today.</p>
    </section>
    <BookCard title="🔥 Bestselling Books" query="bestsellers" />
    <BookCard title="💻 Technology & Programming" query="programming" />
    <BookCard title="🚀 Science Fiction" query="science_fiction" />
  </div>
</template>

<script setup>
import BookCard from "@/components/BookCard.vue";
</script>
