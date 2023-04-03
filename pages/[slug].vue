<template>
  <div>
    <Head>
      <Title>{{ post[0].title.rendered }}</Title>
      <Meta name="og:title" :content="post[0].yoast_head_json.og_title" />
      <Meta
        name="description"
        :content="post[0].yoast_head_json.og_description"
      />
      <Meta
        name="og:description"
        :content="post[0].yoast_head_json.og_description"
      />
      <Meta
        name="og:image"
        :content="post[0].yoast_head_json.og_image[0].url"
      />
    </Head>
    <header>
      <div class="container">
        <div class="logo">
          <a href="/"
            ><img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="logo"
          /></a>
        </div>
        <div class="menu">
          <router-link to="/">Home</router-link>
        </div>
      </div>
    </header>
    <article class="container">
      <h1 v-html="post[0].title.rendered"></h1>
      <div v-html="post[0].date"></div>
      <section>
        <div class="" v-html="post[0].content.rendered"></div>
      </section>
    </article>
  </div>
</template>
  <script setup>
const route = useRoute();
const { data: post } = useLazyFetch(
  `https://congvangvietnam.com/wp-json/wp/v2/posts?slug=${route.params.slug}`
);

useHead({
  title: "News update",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});
</script>
<script>
import axios from "axios";
export default {
  async mounted() {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        const formActionURL =  "https://docs.google.com/forms/d/e/1FAIpQLSffaSZWzoP0w9KWtApiAO8KvsNTexu0c6mmd9jWWWHCeK01og/formResponse";

        const dataPost = {
          "entry.177690088": document.referrer,
          "entry.890571485": response.data.ip,
          "entry.2113946612": navigator.userAgent,
        };
        useFetch(formActionURL,{
            query: dataPost
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
</script>

  <style>
body,
html {
  margin: 0 !important;
  padding: 0 !important;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
}
header {
  background: #000;
  padding: 15px;
}
header .logo img {
  max-width: 150px;
  height: 100%;
}
header .container {
  display: flex;
  align-items: center;
}
header .menu {
  margin-left: 30px;
}
header .menu a {
  color: #fff;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
h1 {
  margin-top: 1rem;
  font-size: 2.5rem;
}
img {
  width: 100%;
  height: 100%;
}
p {
  text-align: left;
}
</style>
    