<template>
  <Layout>
    <main>
      <header>
        <div class="home-header">
          <h1 class="">Hi, I'm Ana</h1>
          <p class="lead">
            This is my personal blog where you will find random thoughts about
            life and code.
          </p>
          <p>Sometimes I write in pt-br.</p>
        </div>
      </header>
      <section>
        <post-item
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
      <pagination
        :info="$page.posts.pageInfo"
        v-if="$page.posts.pageInfo.totalPages > 1"
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
      title: this.config.siteName,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.config.siteName },
        { property: "og:description", content: this.config.siteDescription },
        { property: "og:url", content: this.config.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.config.siteName },
        { name: "twitter:description", content: this.config.siteDescription },
        { name: "twitter:site", content: "@ana_rute" },
        { name: "twitter:creator", content: "@ana_rute" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
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
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 20) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          cover
          tags {
            id
            title
            path
          }
          author {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

