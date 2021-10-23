<template>
    <v-app id="inspire">
        <v-system-bar app height="60">
            <!-- <v-spacer />
            <v-icon>mdi-square</v-icon>
            <v-icon>mdi-circle</v-icon>
            <v-icon>mdi-triangle</v-icon> -->
            <img src="@/assets/logo.png" alt="" width="50" />
            tedt
        </v-system-bar>
        <v-navigation-drawer
            v-model="drawer"
            app
            width="150"
            top="60"
        >
            <v-list
                class="pl-5"
                shaped
            >
                <v-list-item>
                    <v-list-item-content>
                        <router-link to="/kanban">
                            <div><img src="@/assets/KANBAN-300X300.png" alt="" width="50" /></div>
                            KANBAN
                        </router-link>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <router-link to="/autoML">
                            <div><img src="@/assets/autoML-300X300.png" alt="" width="50" /></div>
                            AutoML
                        </router-link>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <router-link to="/edgeia">
                            <div><img src="@/assets/edge-IA-300X300.png" alt="" width="50" /></div>
                            Edge IA
                        </router-link>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <SubNav />
            <router-view />
        </v-main>
    </v-app>
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
            drawer: null
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
<style src="@/css/common.scss" lang="scss"></style>
