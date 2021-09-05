<template lang='pug'>
.container
  div
    h1
      | Hello from
      span.name {{ name }}
      | .
    p
      nlink.button--grey(to="/") Back home
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.server ? "server" : "client",
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #00C48D;
}
p {
  margin-top: 20px;
}
</style>
