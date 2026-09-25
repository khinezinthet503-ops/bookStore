import { ref } from "vue";

const useBooks = () => {
  const books = ref([]); // now created per BookCard
  const loading = ref(false);
  const error = ref(null);

  const usebook = async (query = "bestsellers") => {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`,
      );
      if (!res.ok) throw new Error("Failed to fetch data from the server");
      const data = await res.json();
      books.value = data.docs;
    } catch (err) {
      error.value = err.message || "Could not load books. Please try again.";
    } finally {
      loading.value = false;
    }
  };

  return { books, loading, error, usebook };
};

export default useBooks;
