<template>
    <div id="app">
        <el-container
                class="main-container"
                :style="{height:windows.height,display:windows.display}">
            <el-header class="window-tools" v-if="!appNavConfig.navigationHide" height="40px"
                       :style="{backgroundColor:appNavConfig.navigationBarBackgroundColor,color:appNavConfig.navigationBarTextStyle}">
                <el-container>
                    <el-aside width="250px">
                        <div v-if="appNavConfig.navigationBarIcon === ''" class="window-icon">
                            <i class="window-font-icon el-icon-menu"></i>
                            {{appNavConfig.navigationBarTitleText}}
                        </div>
                        <div v-else class="window-icon">
                            <img class="window-icon-img" :src="appNavConfig.navigationBarIcon"/>
                            {{appNavConfig.navigationBarTitleText}}
                        </div>
                    </el-aside>
                    <el-main>

                    </el-main>
                    <el-aside width="150px" class="window-tools-button">
                        <i class="iconfont icon-question" @click="chattalk = true"></i>
                        <i class="el-icon-minus"></i>
                        <i class="iconfont icon-window-restore-s-o"></i>
                        <i class="el-icon-close"></i>
                    </el-aside>
                </el-container>
            </el-header>
            <el-container class="body-container">
                <el-aside width="250px" class="mainslider">
                    <slidemenu-view></slidemenu-view>
                </el-aside>
                <el-container :style="{backgroundColor: appNavConfig.backgroundColor}">
                    <router-view/>
                    <el-footer class="window-footer" height="40px">
                        @ Copy right XinyiSoft.cn & 芯易科技（北京）有限公司
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
        <Drawer v-model="chattalk" width="450px" :mask-closable="false">
            <div slot="header"><i class="iconfont icon-ccedit"></i> 需求与建议</div>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </div>
</template>
<script>
    import SlidemenuView from './components/app/slidemenu'
    import {mapState} from 'vuex'

    export default {
        name: 'HelloWorld',
        components: {SlidemenuView},
        data() {
            return {
                chattalk: false,
                windows: {
                    width: '100%',
                    height: '0px'
                }
            }
        },
        created() {
            this.windows.height = window.innerHeight + 'px';
        },
        computed: {
            ...mapState({
                appNavConfig: state => state.appNavConfig
            })
        }
    }

</script>
<style lang="less">
    @import "assets/app";
</style>
