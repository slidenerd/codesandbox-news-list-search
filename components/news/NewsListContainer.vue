<template lang='pug'>
.is-flex.is-flex-direction-column
  news-list-search
  news-list
</template>

<script>
import NewsList from "~/components/news/NewsList";
import NewsListSearch from "~/components/news/NewsListSearch";

export default {
  name: "NewsListContainer",
  components: { NewsList, NewsListSearch },
};
</script>