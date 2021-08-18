<template>
  <article>
    <div class="">
      <div class="">
        <header class="">
          <time :datetime="post.datetime" class="">{{
            formatPublishDate(post.datetime)
          }}</time>
          <h2 class="">
            <g-link :to="`${post.path}/`" class="">{{ post.title }}</g-link>
          </h2>
          <p class="">
            <span v-if="post.author"
              >by
              <g-link
                :to="`${post.author.path}/`"
                class=""
                v-if="post.author"
                >{{ post.author.title }}</g-link
              ></span
            >
            <span v-if="post.tags && post.tags.length > 0">
              in
              <g-link :to="`${post.tags[0].path}/`" class="">{{
                post.tags[0].title
              }}</g-link></span
            >
          </p>
        </header>
        <p class="" v-html="excerpt(post, 280, ' ...')"></p>
      </div>
    </div>
  </article>
</template>

<script>
import moment from "moment";

export default {
  props: ["post"],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    },
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format("DD MMMM, YYYY");
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt;
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
};
</script>
