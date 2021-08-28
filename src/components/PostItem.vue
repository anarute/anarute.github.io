<template>
  <article>
    <div class="">
      <div class="">
        <header>
          <p class="post-title">
            <time :datetime="post.datetime" class="">{{
              formatPublishDate(post.datetime)
            }}</time>
            -
            <g-link :to="`${post.path}/`" class="">{{ post.title }}</g-link>
          </p>
        </header>
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
      return moment(date).format("YYYY-MM-DD");
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
