<template>
    <v-app id="inspire">
        <Header :login="true" :drawer="drawer" @controlDrawer="controlDrawer" />
        <MainNav :drawer="drawer" @controlDrawer="controlDrawer" />
        <v-main>
            <SubNav />
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Main',
    components: {
        SubNav: () => import('./components/SubNav.vue'),
        Header: () => import('@/components/Header'),
        MainNav: () => import('./components/MainNav.vue')
    },
    data() {
        return {
            drawer: true,
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
        controlDrawer(val) {
            this.drawer = val;
        }
    }
};
</script>

<style lang="scss">
</style>
<style src="@/css/common.scss" lang="scss"></style>
