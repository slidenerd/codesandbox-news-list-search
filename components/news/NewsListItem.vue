<template lang='pug'>
  .news__item
    div {{ extraProps }}
    .pubdate {{ this.timeSince(source.pubdate) }}
    n-link.content(:to="\
    '/news/tag/' +\
    source.uid +\
    '/' +\
    source.text.replace(/\W+/g, '_').toLowerCase()\
    ") {{ source.text }}
    .tags News
</template>

<script>
export default {
  name: "NewsListItem",
  props: {
    index: {
      // index of current item
      type: Number,
    },
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default: () => {},
    },
    extraProps: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    timeSince(date) {
      if (typeof date !== "object") {
        date = new Date(date);
      }

      var seconds = Math.floor((new Date() - date) / 1000);
      var intervalType;

      var interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        intervalType = "Y";
      } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
          intervalType = "M";
        } else {
          interval = Math.floor(seconds / 86400);
          if (interval >= 1) {
            intervalType = "D";
          } else {
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
              intervalType = "h";
            } else {
              interval = Math.floor(seconds / 60);
              if (interval >= 1) {
                intervalType = "m";
              } else {
                interval = seconds;
                intervalType = "s";
              }
            }
          }
        }
      }
      return interval + " " + intervalType;
    },
  },
};
</script>

<style scoped>
.news__item {
  display: flex;
  border-bottom: 1px solid #eee;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>