<template lang='pug'>
virtual-list(
  :style="style",
  scrollable="",
  :data-key="'uid'",
  :data-sources="items",
  :data-component="itemComponent",
  :footer-class="'loader-wrapper'",
  v-on:tobottom="onScrollToBottom"
)
  .loader(slot="footer")
</template>

<script>
import NewsListItem from "@/components/news/NewsListItem";
import titles from "~/static/titles.json";
import VirtualList from "vue-virtual-scroll-list";

function getRandomString(length) {
  var randomChars = "ABCDEFabcdef0123456789";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

export default {
  name: "NewsList",
  components: { "virtual-list": VirtualList },
  data() {
    return {
      index: 0,
      isLoading: false,
      itemComponent: NewsListItem,
      items: [],
      style: {
        height: 100 + "%",
        "overflow-y": "auto",
        "overflow-x": "hidden",
      },
    };
  },
  created() {
    this.items = this.items.concat(this.buildNewsItems());
  },
  methods: {
    buildNewsItems() {
      const items = [];
      for (let i = 0; i < 30; i++) {
        items.push({
          uid: getRandomString(32),
          pubdate: titles[this.index].pubdate,
          text: titles[this.index].title,
          link: titles[this.index].link,
        });
        this.index = (this.index + 1) % titles.length;
      }
      return items;
    },
    onScrollToBottom() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.items = this.items.concat(this.buildNewsItems());
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  padding: 1em;
}
.loader {
  font-size: 10px;
  margin: 0px auto;
  text-indent: -9999em;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  background: linear-gradient(
    to right,
    #9b4dca 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: load3 1.4s infinite linear;
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #9b4dca;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.loader:after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>