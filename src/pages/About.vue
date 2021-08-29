<template>
  <Layout>
    <main>
      <header>
        <h1>About</h1>
      </header>
      <article>
        <p>
          I’m a web developer with an entrepreneurial background, passionate
          about solving problems and using technology to positively impact
          society. I love spending my free time with friends and family,
          watching TV series, and playing video games. Currently learning how to
          play the piano.
        </p>
        <p>
          At the moment, I work at
          <a href="https://www.igalia.com/">Igalia</a> as a software developer
          at the internal tools. I'm a generalist and normally present myself as
          a full stack developer but recently I've been turning into a legacy
          code specialist (or may I say restorer?). Yes, believe it or not I'm
          actually enjoying it!
        </p>
        <p>
          You can find me on
          <a href="https://www.twitter.com/ana_rute">Twitter</a> where I'm most
          active or if you want to dig more about my professional background you
          can check my
          <a href="https://www.linkedin.com/in/anarute">Linkedin</a>
          profile. Some part of my work is open and you can check it on my
          <a href="https://github.com/anarute">Github</a> profile.
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
