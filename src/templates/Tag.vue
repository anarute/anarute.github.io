<template>
  <Layout>
    <main>
      <header>
        <div class="">
          <p class="">{{ $page.tag.belongsTo.totalCount }} posts in total</p>
          <h1 class="">{{ $page.tag.title }}</h1>
          <svg
            class=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            role="img"
            aria-labelledby="tagIcon"
          >
            <title id="tagIcon">Posts tagged</title>
            <path
              d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            />
          </svg>
        </div>
        <nav class="">
          <g-link to="/" class="">&larr; Home</g-link>
        </nav>
      </header>
      <section>
        <post-item
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
      <pagination
        :base="`${$page.tag.path}`"
        :info="$page.tag.belongsTo.pageInfo"
        v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
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
      title: `Posts tagged "${this.$page.tag.title}"`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `Browse posts tagged "${this.$page.tag.title}"`,
        },

        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: `Posts tagged "${this.$page.tag.title}"`,
        },
        {
          property: "og:description",
          content: `Browse posts tagged "${this.$page.tag.title}"`,
        },
        {
          property: "og:url",
          content: `${this.config.siteUrl}/${this.$page.tag.path}/`,
        },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: `Posts tagged "${this.$page.tag.title}"`,
        },
        {
          name: "twitter:description",
          content: `Browse posts tagged "${this.$page.tag.title}"`,
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
query Tag ($path: String!, $page: Int) {
  tag (path: $path) {
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
            author {
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
