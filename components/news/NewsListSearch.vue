<template lang="pug">
section
  p.content
    div Selected:
    | {{ selected }}
    div Search
    | {{ search }}
  b-field(label="Search")
    b-autocomplete(
      v-model="search",
      ref="autocomplete",
      :data="filteredDataArray",
      :select-on-click-outside="selectOutside",
      open-on-focus,
      keep-first,
      placeholder="Type a name",
      icon-right="times-circle",
      :icon-right-clickable='true'
      @icon-right-click='onIconRightClick'
      @select="onSelect"
    ) 
      template(#header)
        a(@click="onSearchAsKeyword(search)", v-show="search && search.length")
          span Search "{{ search }}" as keyword
      template(#empty="") No results for {{ search }}
      template(slot-scope="props")
        .is-flex.is-justify-content-space-between
          span {{ props.option.symbol }}
          span {{ props.option.name }}
</template>

<script>
export default {
  data() {
    return {
      search: this.$route.query.search || "",
      selected: null,
      selectOutside: true
    };
  },
  computed: {
    data() {
      return this.$store.state.news.symbolNames;
    },
    filteredDataArray() {
      return this.data.filter(option => {
        const searchLowerCase = (this.search || "").toLowerCase();
        return (
          option.symbol.toLowerCase().indexOf(searchLowerCase) >= 0 ||
          option.name.toLowerCase().indexOf(searchLowerCase) >= 0
        );
      });
    }
  },
  methods: {
    onSelect(option) {
      this.selected = option;
      const url = `/news/${option.name
        .toLowerCase()
        .replace(/[\W+]/g, "-")
        .trim()}`;
      this.$router
        .push(url)
        .then(() => {
          // this.search = option.name;
          // // https://github.com/buefy/buefy/issues/577
          // this.$nextTick(() => {
          //   this.$refs.autocomplete.isActive = false;
          // });
        })
        .catch(console.error);
    },
    onSearchAsKeyword(search) {
      this.$router
        .push(`/news?search=${this.search}`)
        .then(() => {
          this.search = search;
          // https://github.com/buefy/buefy/issues/577
          this.$nextTick(() => {
            if (this.$refs.autocomplete) {
              this.$refs.autocomplete.isActive = false;
            }
          });
        })
        .catch(console.error);
    },
    onIconRightClick(event) {
      this.$router
        .push("/")
        .then(() => {
          this.search = "";
          // https://github.com/buefy/buefy/issues/577
          this.$nextTick(() => {
            this.$refs.autocomplete.isActive = false;
          });
        })
        .catch(console.error);
    }
  }
};
</script>
