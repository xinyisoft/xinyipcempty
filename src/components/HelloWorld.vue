<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>卡片名称</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text">操作按钮</el-button>
      </div>
      <div>
        <Rate v-model="value"/>
        <div style="height: 1000px; background: red"></div>
      </div>
    </el-card>

  </div>
</template>

<script>
    import {Rate} from 'iview'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                value: 1
            }
        },
        props: {
            msg: String
        },
        components: {
            Rate
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
