<template>
  <div id="app">
    <el-container
      class="main-container"
      :style="{height:windows.height,display:windows.display}">
      <el-header height="40px">

      </el-header>
      <el-container>
        <el-aside width="250px">
          <slidemenu-view></slidemenu-view>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
    import SlidemenuView from './components/app/slidemenu'

    export default {
        name: 'HelloWorld',
        components: {SlidemenuView},
        data() {
            return {
                windows: {
                    width: '100%',
                    height: '0px'
                }
            }
        },
        created() {
            console.log(this)
            this.windows.height = window.innerHeight + 'px';
        }
    }

</script>
<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        .main-container {
            .el-aside {
                background-color: #545c64;
            }
            .el-header {
                background: #FFFFFF;
                border-bottom: 1px solid #eeeeee;
            }
        }
    }
    .ivu-loading-bar{
        top: 40px !important;
        left: 250px !important;
    }
</style>
