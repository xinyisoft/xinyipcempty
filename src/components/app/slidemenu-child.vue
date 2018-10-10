<template>
  <div v-if="slider.children">
    <el-submenu :index="slider.index">
      <template slot="title"><i
        v-if="slider.icon"
        :class="slider.icon"></i>{{ slider.title }}</template>
      <slidemenu-child-view
        v-for="(item,index) in slider.children"
        :key="index"
        :slider="item"></slidemenu-child-view>
    </el-submenu>
  </div>
  <div v-else>
    <el-menu-item :index="slider.index"><i
      v-if="slider.icon"
      :class="slider.icon"></i> {{ slider.title }}
    </el-menu-item>
  </div>
</template>

<script>
    import SlidemenuChildView from './slidemenu-child'

    export default {
        name: 'SlidemenuChildView',
        props: {
            slider: Object
        },
        components: {
            SlidemenuChildView
        }
    }
</script>

<style lang="less" scoped>

</style>
