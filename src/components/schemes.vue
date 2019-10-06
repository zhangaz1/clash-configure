<template>
  <div class="wrapper">
    <el-card class="data-card">
      <div class="title">从文本数据解析</div>
      <el-input
        type="textarea"
        resize="none"
        placeholder="来粘贴一些东西吧~"
        v-model="data"
        :autosize="{ minRows: 9, maxRows: 9 }"
      ></el-input>
      <div class="prompt">支持输入 SS/SSR/VMESS 链接以及对应的 BASE64 数据</div>
    </el-card>
    <div class="trans-wrapper">
      <el-divider>
        <el-button type="text" :disabled="false" @click="debase64"
          >BASE64 解码</el-button
        >
      </el-divider>
      <el-divider>
        <el-button type="text" :disabled="false">生成节点片段</el-button>
      </el-divider>
      <el-divider>
        <el-button type="text" :disabled="false">生成完整配置</el-button>
      </el-divider>
    </div>
    <el-drawer
      :title="drawerTitle"
      :visible.sync="drawer"
      :direction="direction"
      close-on-press-escape
      size="100%"
      custom-class="text-drawer"
    >
      <el-card shadow="never" class="result-text">
        <div class="de-text">{{ decodeData }}</div>
      </el-card>
    </el-drawer>
  </div>
</template>

<script>
let Base64 = require("js-base64").Base64;
export default {
  data() {
    return {
      data: "",
      decodeData: "",
      drawer: false,
      direction: "rtl",
      drawerTitle: ""
    };
  },
  methods: {
    debase64: function() {
      if (this.data.trim().length === 0) {
        this.$notify.error({
          title: "错误",
          message: "请键入有效内容！"
        });
        return;
      } else {
        try {
          this.drawerTitle = "BASE64 解码";
          this.decodeData = Base64.decode(this.data)
            .replace(/vmess:\/\//g, "\nvmess://")
            .trim();
          this.drawer = true;
        } catch (e) {
          console.log(e);
          this.$notify.error({
            title: "错误",
            message: "请键入有效内容！"
          });
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  .data-card {
    .title {
      font-size: 16px;
      color: #409EFF;
      font-weight: 600;
      margin-left: 4px;
    }

    .el-textarea {
      margin-top: 12px;
    }

    .prompt {
      font-size: 12px;
      font-weight: 600;
      margin-top: 16px;
      margin-left: 4px;
      color: #409EFF;
      float: right;
      margin-bottom: 16px;
    }
  }

  .trans-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.text-drawer {
  .result-text {
    margin: 0 36px;
    height: calc(100vh - 100px);
    overflow: auto;

    .de-text {
      word-break: break-all;
      white-space: pre-wrap;
      font-size: 13px;
      color: #797979;
      font-weight: 400;
    }
  }
}
</style>
