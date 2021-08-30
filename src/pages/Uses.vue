<template>
  <Layout>
    <main>
      <header>
        <h1>Setup</h1>
      </header>
      <article>
        <p>Hardware</p>
        <ul>
          <li>MacBook Air with M1 8GB RAM and 512GB SSD</li>
          <li>Mechanical keyboard Anne Pro II with switch Gateron Brown</li>
          <li>Mouse Logitech Trackman Marble</li>
          <li>Headphone Jabra Evolve2 65</li>
        </ul>
        <p>Software</p>
        <ul>
          <li>Vscode</li>
          <li>iterm2 with Oh My Zs</li>
          <li>Firefox</li>
        </ul>
      </article>
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";

export default {
  metaInfo() {
    return {
      title: "Setup",
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
