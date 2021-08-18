<template>
  <header>
    <div v-if="post.cover" class="" :class="">
      <div class="" :class="">
        <div class="">
          <p class="">{{ post.timeToRead }} min read</p>
          <h1 class="">{{ post.title }}</h1>
          <p class="">
            <span v-if="post.author">
              <g-link :to="`${post.author.path}/`" class="">{{
                post.author.title
              }}</g-link>
              &bull;
            </span>
            <time :datetime="post.datetime" class="">{{
              formattedPublishDate
            }}</time>
          </p>
        </div>
      </div>
      <ClientOnly>
        <parallax :speed-factor="speedFactor" :sectionHeight="80">
          <img :src="post.cover" :alt="post.title" />
        </parallax>
      </ClientOnly>
    </div>
    <div v-else class="">
      <div class="">
        <p class="">{{ post.timeToRead }} min read</p>
        <h1 class="">{{ post.title }}</h1>
        <p class="">
          <span v-if="post.author">
            <g-link :to="`${post.author.path}/`" class="">{{
              post.author.title
            }}</g-link>
            &bull;
          </span>
          <time :datetime="post.datetime" class="">{{
            formattedPublishDate
          }}</time>
        </p>
      </div>
    </div>
    <nav class="">
      <g-link to="/" :class="" class="">&larr; Home</g-link>
    </nav>
  </header>
</template>

<script>
import moment from "moment";
import Parallax from "vue-parallaxy";

export default {
  props: ["post"],
  components: {
    Parallax,
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
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    },
    speedFactor() {
      return this.post.fullscreen ? 0.21 : 0.37;
    },
  },
};
</script>
