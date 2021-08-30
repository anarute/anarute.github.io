<template>
  <Layout>
    <main>
      <header>
        <h1>Talks</h1>
      </header>
      <article>
        <p>
          Sometimes I also present in events or meetups. Most of them are in
          pt-br. Nowadays I tend to prefer to join informal conversations such
          as podcasts or round tables instead of giving a talk about a specific
          subject. Find below a few that were recorded.
        </p>
        <div>
          <h3>
            Jul/2021 - [pt-br] Interview at "Talk Like a BOSS" -
            <a href="https://www.youtube.com/watch?v=f8tfzPJqGuo"
              >watch on Youtube</a
            >
          </h3>
          <h3>Nov/2020 - [pt-br] Interview at "Stack Talk"</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/968Ed1M01As?start=300"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3>Jul/2019 - [pt-br] "Git without conflicts" at linuxdev-br</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mkok1Zi5CoE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          If you want me to speak at your event or podcast, send me a DM on
          twitter or an email to hello at anarute dot com
        </p>
      </article>
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";

export default {
  metaInfo() {
    return {
      title: "Talks",
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
