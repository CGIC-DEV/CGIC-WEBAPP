<template>
  <el-header class="header">
    <div class="title">
      <span>CGIC后端管理平台</span>
    </div>
  </el-header>
</template>
<script>
  import ElHeader from "../../../node_modules/element-ui/packages/header/src/main.vue";

  export default {
    name: "VHeader",
    components: {
      ElHeader
    }
  }
</script>

<style>


  /* 头 */
  .header {
    color: rgba(255, 255, 255, 0.75);
    line-height: 60px;
    background-color: #0a77ab;
    text-align: center;
    font-size: 24px;
    width: 100%;
  }

  .header div {
    display: inline;
  }
  .title {
    float: left;
  }

  .author {
    float: right;
  }

  .author-img {
    width: 20px;
    height: 20px;
  }

  .author-github {
    cursor: pointer;
  }

</style>
