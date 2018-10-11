<template>
    <el-container class="table-container">
        <el-header height="55px">
            <el-container class="table-header-title">
                <el-aside width="250px" class="table-tools-title">
                    {{title}}
                </el-aside>
                <el-main class="table-tools-button">
                    <el-button size="small" icon="el-icon-search" circle></el-button>
                    <el-button size="small" type="success" icon="el-icon-plus" circle></el-button>
                    <el-button size="small" type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button size="small" type="danger" icon="el-icon-delete" circle></el-button>
                    <el-button size="small" type="warning" icon="el-icon-star-off" circle></el-button>
                </el-main>
            </el-container>
        </el-header>
        <el-main>
            <el-table
                    :data="data"
                    border
                    :height="tableHeight"
                    style="width: 100%">
                <el-table-column
                        type="index"
                        width="50"
                        :index="indexMethod">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-main>
        <el-footer v-if="page">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="pageSizes"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </el-footer>
    </el-container>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: '表格插件'
            },
            page: {
                type: Boolean,
                default: true
            },
            pageSize: {
                type: Number,
                default: 30
            },
            pageSizes: {
                default: function () {
                    return [30, 50, 100, 200];
                }
            },
            total: {
                type: Number,
                default: 1
            },
            currentPage: {
                type: Number,
                default: 1
            },
            data: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            url: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                tableHeight: '0px'

            }
        },
        created() {
            if (this.page) {
                this.tableHeight = (window.innerHeight - 242) + 'px';
            } else {
                this.tableHeight = (window.innerHeight - 182) + 'px';
            }
        },
        methods: {
            indexMethod(index) {
                return index * this.currentPage
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>
