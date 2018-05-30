<template>
    <div>
        {{code}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      code: ""
    };
  },
  mounted() {
    const { code } = this.$router.query;
    this.code = code;
    alert(`code=${code}`);
  }
};
</script>

<style>
</style>
