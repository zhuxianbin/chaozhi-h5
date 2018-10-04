<template>
<div class="layout">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  created() {
    const [x, native] = window.navigator.userAgent.split("&&");
    const { token, wifi } = JSON.parse(native || "{}");
  }
};
</script>


<style lang="less">
.layout {
  position: relative;
  min-height: 100vh;
  overflow-y: auto;
  background: #f5f5f5;
}
</style>
