<template>
    <v-app id="inspire">
        <Header />
        <MainNav />
        <v-main>
            <SubNav />
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
// import Header from '@/components/Header';
import SubNav from './components/SubNav.vue';

export default {
    name: 'Main',
    components: {
        SubNav,
        Header: () => import('@/components/Header'),
        MainNav: () => import('./components/MainNav.vue')
    },
    data() {
        return {
            drawer: null,
            breadcrumbs: [
                {
                    text: 'test',
                    disabled: false,
                    href: 'test'
                }
            ]
        };
    },
    computed: {
        ...mapState([
            'Data'
        ])
    },
    watch: {
    },
    created() {
    },
    methods: {
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
