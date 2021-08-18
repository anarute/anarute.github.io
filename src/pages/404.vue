<template>
  <Layout class="">
    <main class="">
      <div class="">
        <span class="">🧐</span>
        <section class="">
          <h1 class="">Page Not Found</h1>
          <p class="">
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <g-link to="/" class="">&larr; Back to our site</g-link>
        </section>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: `Page Not Found (404)`,
    };
  },
};
</script>

