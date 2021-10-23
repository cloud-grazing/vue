<template>
    <div class="main">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <div id="nav">
                        <router-link to="/kanban">
                            <div><img src="null" alt="" width="100" height="100" /></div>
                            KANBAN
                        </router-link>
                        <router-link to="/autoML">
                            <div><img src="null" alt="" width="100" height="100" /></div>
                            AutoML
                        </router-link>
                        <router-link to="/edgeia">
                            <div><img src="null" alt="" width="100" height="100" /></div>
                            Edge IA
                        </router-link>
                    </div>
                </el-aside>
                <el-main>
                    <SubNav />
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import SubNav from './components/SubNav.vue';

export default {
    name: 'Main',
    components: {
        SubNav
    },
    data() {
        return {
            msg2: 'Login'
        };
    },
    created() {
        // this.$router.push('/kanban');
    }
};
</script>

<style lang="scss">
#nav {
  a {
    display: block;
    font-weight: bold;
    color: rgb(141, 141, 141);

    &.router-link-exact-active {
      color: rgb(218, 88, 79);
    }
  }
}

.main .el-header {
  background-color: #B3C0D1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  height: 100px;
  overflow: hidden;
}
.main .el-container {
  height: calc(100vh - 100px);
}
.main .el-aside {
  background-color: #d3dce6;
  text-align: center;
  overflow-y: auto;
}

.el-main {
  background-color: #E9EEF3;
  text-align: center;
  overflow-y: auto;
}

</style>
<style src="@/css/index.scss" lang="scss"></style>
