<template lang='pug'>
div
  div {{ tag }} {{ id }}
  a(@click="$router.go(-1)") back
</template>

<script>
export default {
  name: "NewsDetail",
  props: {
    tag: { type: String, required: true, default: "" },
    id: { type: String, required: true, default: "" },
    title: { type: String, required: true, default: "" },
  },
};
</script>