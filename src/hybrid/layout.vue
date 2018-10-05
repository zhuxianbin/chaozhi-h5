<template>
<div class="layout">
  <router-view></router-view>
</div>
</template>

<script>
import { setToken, Cookies } from "@/utils/auth";
export default {
  created() {
    const [x, native] = window.navigator.userAgent.split("&&");
    const { token, wifi } = JSON.parse(native || "{}");
    if (token) {
      setToken(token);
      Cookies.set("chaozhi-wifi", wifi);
      Cookies.set("chaozhi-native", 1);
    }
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
