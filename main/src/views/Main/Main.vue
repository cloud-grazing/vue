<template>
    <v-app id="inspire">
        <Header :login="true" :drawer="drawer" :user="data.user" @controlDrawer="controlDrawer" />
        <MainNav :drawer="drawer" @controlDrawer="controlDrawer" />
        <v-main>
            <SubNav />
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import init from '@/mock/init';

export default {
    name: 'Main',
    components: {
        Header: () => import('@/components/Header'),
        MainNav: () => import('./components/MainNav.vue'),
        SubNav: () => import('./components/SubNav.vue')
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
            'data'
        ])
    },
    watch: {
    },
    created() {
        this.getInit();
    },
    methods: {
        ...mapActions([
            'setData'
        ]),
        controlDrawer(val) {
            this.drawer = val;
        },
        getInit() {
            this.setData(init.data);
        }
    }
};
</script>

<style lang="scss">
</style>
<style src="@/css/common.scss" lang="scss"></style>
