<template>
  <section class="menu">
    <div class="">
      <nav>
        <ul class="">
          <li class="">
            <g-link to="/" class="">posts</g-link>
          </li>
          <li class="">
            <g-link to="/about/" class="">about</g-link>
          </li>
          <li class="">
            <g-link to="/setup/" class="">setup</g-link>
          </li>
          <li>
            <a href="/talks/">talks</a>
          </li>
          <li>
            <a href="/feed.xml">RSS Feed</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>
