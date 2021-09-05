<template lang='pug'>
news-detail-container(:tag="tag", :id="id", :title="title")
</template>

<script>
import NewsDetailContainer from "~/components/news/NewsDetailContainer";
export default {
  name: "NewsDetail",
  components: { NewsDetailContainer },
  props: {
    tag: { type: String, required: true, default: "" },
    id: { type: String, required: true, default: "" },
    title: { type: String, required: true, default: "" },
  },
};
</script>