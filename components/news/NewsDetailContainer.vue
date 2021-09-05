<template lang='pug'>
news-detail(:tag="tag", :id="id", :title="title")
</template>

<script>
import NewsDetail from "~/components/news/NewsDetail";

export default {
  name: "NewsDetailContainer",
  components: { NewsDetail },
  props: {
    tag: { type: String, required: true, default: "" },
    id: { type: String, required: true, default: "" },
    title: { type: String, required: true, default: "" },
  },
};
</script>