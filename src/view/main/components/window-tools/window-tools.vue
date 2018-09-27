<template>
  <div class="window-tools-btn-con">
    <Tooltip content="最小化" placement="bottom">
      <Icon @click.native="handleChange" type="ios-remove" :size="23"></Icon>
    </Tooltip>
    <Tooltip :content="maxwindow ? '还原窗口' : '最大化'" placement="bottom">
      <Icon @click.native="handleChange" :type="maxwindow ? 'ios-browsers-outline' : 'ios-expand'" :size="23"></Icon>
    </Tooltip>
    <Tooltip content="关闭" placement="bottom" class="close">
      <Icon type="ios-close-circle-outline" :size="23"/>
    </Tooltip>
  </div>
</template>

<script>
  export default {
    name: 'WindowTools',
    props: {
      maxwindow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleFullscreen() {
      },
      handleChange() {
        this.handleFullscreen()
      }
    }
  }
</script>

<style lang="less">
  .window-tools-btn-con {
    .ivu-tooltip-rel {
      height: 48px;
      line-height: 48px;
      padding-left: 8px;
      padding-right: 8px;
      cursor: pointer;
      &:hover {
        background: #eeeeee;
      }

    }
    .close .ivu-tooltip-rel:hover{
      color: red;
    }
  }
</style>
