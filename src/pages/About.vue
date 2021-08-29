<template>
  <Layout>
    <main>
      <header class="">
        <h1 class="">About</h1>
      </header>
      <nav class="">
        <g-link to="/" class="">&larr; Home</g-link>
      </nav>
      <article class="">
        <div class="">
          <p>
            Software engineer with entrepreneurial background, based in São
            Paulo and currently working at Collabora. Fully engaged on creating
            products to impact society positively or just for fun. Fights for
            more diversity in tech and equal opportunities for everyone.
          </p>
        </div>
      </article>
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";

export default {
  metaInfo() {
    return {
      title: "About",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Ana Root's random thoughts about life and code.",
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: "About" },
        { property: "og:description", content: "About me and this blog." },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: "/images/card.png" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "About" },
        { name: "twitter:description", content: "About me and this blog." },
        { name: "twitter:site", content: "@ana_rute" },
        { name: "twitter:creator", content: "@ana_rute" },
        { name: "twitter:image", content: "/images/card.png" },
      ],
    };
  },
  computed: {
    config() {
      return config;
    },
  },
};
</script>
