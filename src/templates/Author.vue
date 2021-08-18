<template>
  <Layout>
    <main>
      <header>
        <div class="">
          <h1 class="">{{ $page.author.title }}</h1>
          <svg
            class=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            role="img"
            aria-labelledby="authorIcon"
          >
            <title id="authorIcon">Author posts</title>
            <path
              d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"
            />
          </svg>
        </div>
        <nav class="">
          <g-link to="/" class="">&larr; Home</g-link>
        </nav>
      </header>
      <section>
        <post-item
          v-for="edge in $page.author.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
      <pagination
        :base="`${$page.author.path}`"
        :info="$page.author.belongsTo.pageInfo"
        v-if="$page.author.belongsTo.pageInfo.totalPages > 1"
      />
      <site-footer class="" />
    </main>
  </Layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import PostItem from "@/components/PostItem";
import SiteFooter from "@/components/Footer";
import Pagination from "@/components/Pagination";

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter,
  },
  metaInfo() {
    return {
      title: `Posts written by ${this.$page.author.title}`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `Browse posts written by ${this.$page.author.title}`,
        },

        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: `Posts written by ${this.$page.author.title}`,
        },
        {
          property: "og:description",
          content: `Browse posts written by ${this.$page.author.title}`,
        },
        {
          property: "og:url",
          content: `${this.config.siteUrl}/${this.$page.author.path}/`,
        },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: `Posts written by ${this.$page.author.title}`,
        },
        {
          name: "twitter:description",
          content: `Browse posts written by ${this.$page.author.title}`,
        },
        { name: "twitter:site", content: "@ana_rute" },
        { name: "twitter:creator", content: "@ana_rute" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
  },
  methods: {
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    },
  },
  computed: {
    config() {
      return config;
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/card.png`;
    },
  },
};
</script>

<page-query>
query Author ($path: String!, $page: Int) {
  author (path: $path) {
    id
    title
    path
    belongsTo (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            datetime: date (format: "YYYY-MM-DD HH:mm:ss")
            path
            content
            excerpt
            description
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>
