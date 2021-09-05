<template lang='pug'>
.news__container
  template(v-if="isMobile")
    .left
      nuxt-child
  template(v-else="")
    .left
      news-list-container
    .right
      news-detail-container(
        :tag="$route.params.tag",
        :id="$route.params.id",
        :title="$route.params.title"
      )
</template>

<script>
import NewsListContainer from "~/components/news/NewsListContainer";
import NewsDetailContainer from "~/components/news/NewsDetailContainer";
export default {
  name: "root",

  components: { NewsListContainer, NewsDetailContainer },

  data: () => ({
    isMobile: false,
  }),

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>

<style lang="scss" scoped>
.news__container {
  display: flex;
}
.left {
  flex: 1;
}
.right {
  flex: 1;
}
</style>