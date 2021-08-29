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
            <a href="https://twitter.com/ana_rute">twitter</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/anarute">linkedin</a>
          </li>
          <li>
            <a href="https://github.com/anarute">github</a>
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
