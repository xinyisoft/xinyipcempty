<template>
    <el-menu
            :default-active="menuSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true">
        <slidemenu-child-view v-for="(item,index) in slidemenu"
                              :key="index"
                              :slider="item"></slidemenu-child-view>
    </el-menu>
</template>

<script>
    import SlidemenuChildView from './slidemenu-child';
    import {mapState} from 'vuex'

    export default {
        name: 'SlidemenuView',
        components: {SlidemenuChildView},
        data() {
            return {
                slidemenu: require('../../config/menu.json')
            }
        },
        computed: {
            ...mapState({
                menuSelect: state => state.menuSelect
            })
        }
    }
</script>

<style lang="less" scoped>
    .el-menu {
        border-right: 0px;
    }
</style>
