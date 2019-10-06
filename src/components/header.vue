<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="logo">
        <img src="../assets/clash.svg" class="logo" />
        <div class="logo-text">Clash 配置工具</div>
      </div>
      <div class="icons">
        <img src="../assets/github.svg" />
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.header-wrapper {
  background-color: #fff;

  .header {
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div.logo {
      display: flex;
      flex-direction: row;

      img.logo {
        width: 64px;
      }

      div.logo-text {
        line-height: 64px;
        margin-left: 14px;
        font-weight: 700;
        color: #409EFF;
      }
    }

    div.icons {
      height: 64px;
      display: none;
      flex-direction: row;
      justify-content: center;
    }
  }

  .el-divider {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>
