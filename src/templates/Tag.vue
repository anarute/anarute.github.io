<template>
  <Layout>
    <main>
      <header>
        <div>
          <h1>> {{ $page.tag.title }}</h1>
          <p>{{ $page.tag.belongsTo.totalCount }} posts in total</p>
        </div>
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
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import PostItem from "@/components/PostItem";
import Pagination from "@/components/Pagination";

export default {
  components: {
    PostItem,
    Pagination,
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
