<template>
  <section class="">
    <nav role="navigation" aria-label="pagination">
      <ul class="">
        <li class="">
          <g-link
            :to="previousPage(info.currentPage)"
            :class=""
            class=""
            :rel="info.currentPage == 1 ? 'nofollow' : 'prev'"
          >
            &larr; Previous
          </g-link>
        </li>
        <li class="">Page {{ info.currentPage }} of {{ info.totalPages }}</li>
        <li class="">
          <g-link
            :to="nextPage(info.currentPage, info.totalPages)"
            :class=""
            class=""
            :rel="info.currentPage == info.totalPages ? 'nofollow' : 'next'"
          >
            Next &rarr;
          </g-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  props: ["base", "info"],
  methods: {
    previousPage(currentPage) {
      return [0, 1].includes(currentPage - 1)
        ? `${this.basePath}/`
        : `${this.basePath}/${currentPage - 1}/`;
    },
    nextPage(currentPage, totalPages) {
      return totalPages > currentPage
        ? `${this.basePath}/${currentPage + 1}/`
        : `${this.basePath}/${currentPage}/`;
    },
  },
  computed: {
    basePath() {
      return this.base || "";
    },
  },
};
</script>
