<template>
  <div id="app">
    <el-container>
      <el-header>
        <s-header></s-header>
      </el-header>
      <el-main>
        <s-schemes></s-schemes>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import sHeader from "./components/header.vue";
import sSchemes from "./components/schemes.vue";
export default {
  name: "app",
  components: { sHeader, sSchemes },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
body {
  margin: 0px;
  padding-left: 24px;
  padding-right: 24px;
  height: 100%;
}

#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
  -webkit-font-smoothing: antialiased;
  height: 100%;
}

.el-container {
  height: 100%;

  .el-header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 999;
  }

  .el-main {
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 56px;

    .result-wrapper {
      .title {
        font-size: 16px;
        color: #409EFF;
        font-weight: 600;
        margin-left: 4px;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
