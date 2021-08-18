<template>
  <footer class="">
    <div class="">
      <p>
        Based on
        <a href="https://github.com/cossssmin/gridsome-starter-bleda" class=""
          >Bleda</a
        >
        by <a href="https://twitter.com/cossssmin" class="">@cossssmin</a>
      </p>
    </div>
    <div class="">
      <nav>
        <ul class="">
          <li class="">
            <g-link to="/" class="">Home</g-link>
          </li>
          <li class="">
            <g-link to="/about/" class="">About</g-link>
          </li>
          <li class="">
            <a href="/sitemap.xml" class="">Sitemap</a>
          </li>
          <li class="">
            <a href="/feed.xml" class="">RSS Feed</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
