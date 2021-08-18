<template>
  <Layout>
    <main>
      <post-header :post="$page.post" />

      <article class="" :class="">
        <alert v-if="postIsOlderThanOneYear" class="">
          This post is over a year old, some of this information may be out of
          date.
        </alert>

        <div :class="" class="" v-html="$page.post.content" />

        <footer v-if="$page.post.author || $page.post.tags" class="">
          <div>
            <g-link
              v-for="tag in $page.post.tags"
              :key="tag.id"
              :to="`${tag.path}/`"
              class=""
            >
              <svg
                class=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                role="img"
              >
                <path
                  d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                />
              </svg>
              {{ tag.title }}
            </g-link>
          </div>
          <div v-if="$page.post.author" class="">
            <figure class="">
              <g-link :to="`${$page.post.author.path}/`">
                <img
                  :src="avatar"
                  :alt="$page.post.author.title"
                  @error="imageLoadError"
                  width="100"
                  class=""
                />
              </g-link>
            </figure>
            <div class="">
              <h4 class="">
                <g-link :to="`${$page.post.author.path}/`" class="">{{
                  $page.post.author.title
                }}</g-link>
              </h4>
              <p class="">
                <g-link :to="`${$page.post.author.path}/`" class=""
                  >See all posts by {{ $page.post.author.title }} &rarr;</g-link
                >
              </p>
            </div>
          </div>
        </footer>
        <vue-disqus shortname="anarute" :url="postUrl"></vue-disqus>
      </article>
      <site-footer class="" />
    </main>
  </Layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import Alert from "@/components/Alert";
import slugify from "@sindresorhus/slugify";
import SiteFooter from "@/components/Footer";
import PostHeader from "~/components/PostHeader";

export default {
  components: {
    Alert,
    PostHeader,
    SiteFooter,
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? "- " + this.$page.post.tag.name : ""
      }`,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description(this.$page.post),
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        {
          property: "og:description",
          content: this.description(this.$page.post),
        },
        { property: "og:url", content: this.postUrl },
        {
          property: "article:published_time",
          content: moment(this.$page.post.date).format("YYYY-MM-DD"),
        },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:description",
          content: this.description(this.$page.post),
        },
        { name: "twitter:site", content: "@ana_rute" },
        { name: "twitter:creator", content: "@ana_rute" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
  },
  mounted() {
    import("medium-zoom").then((mediumZoom) => {
      this.zoom = mediumZoom.default(".markdown p > img");
    });
  },
  methods: {
    imageLoadError(e) {
      e.target.src = `/images/authors/default.png`;
    },
    description(post, length, clamp) {
      if (post.description) {
        return post.description;
      }

      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
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
    avatar() {
      return `/images/authors/${this.$page.post.author.id}.png`;
    },
    postIsOlderThanOneYear() {
      let postDate = moment(this.$page.post.datetime);
      return moment().diff(postDate, "years") > 0 ? true : false;
    },
    postUrl() {
      let siteUrl = this.config.siteUrl;
      let postSlug = this.$page.post.slug;

      return postSlug
        ? `${siteUrl}/${postSlug}/`
        : `${siteUrl}/${slugify(this.$page.post.title)}/`;
    },
    ogImageUrl() {
      return this.$page.post.cover || `${this.config.siteUrl}/images/card.png`;
    },
  },
};
</script>

<page-query>
query Post ($path: String) {
  post (path: $path) {
    title
    slug
    datetime: date (format: "YYYY-MM-DD HH:mm:ss")
    content
    description
    timeToRead
    cover
    fullscreen
    author {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>
