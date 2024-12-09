<template>
  <span class="relative">
    <span
      v-for="(word, index) in words"
      :key="index"
      :class="[
        'word',
        { 'text-black': visibleWords.includes(index), 'text-gray-500': !visibleWords.includes(index) }
      ]"
      ref="wordRefs"
    >
      {{ word }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      words: this.text.split(" "), // Divide el texto en palabras
      visibleWords: [] // Mantiene el índice de las palabras visibles
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.observeWords();
    });
  },
  methods: {
    observeWords() {
      // Configura IntersectionObserver con margen para activar antes
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Array.from(this.$refs.wordRefs).indexOf(entry.target);
            if (entry.isIntersecting) {
              if (!this.visibleWords.includes(index)) {
                this.visibleWords.push(index);
              }
            }
          });
        },
        {
          rootMargin: "0px 0px -50px 0px", // Inicia el efecto antes de que esté completamente en vista
          threshold: 0.1 // Visibilidad mínima para activar la animación
        }
      );

      // Observa cada palabra
      this.$refs.wordRefs.forEach((word) => {
        observer.observe(word);
      });
    }
  }
};
</script>

<style scoped>
.word {
  display: inline-block;
  transition: color 0.6s ease; /* Ajuste de velocidad de transición */
  margin-right: 0.3rem;
}
</style>
