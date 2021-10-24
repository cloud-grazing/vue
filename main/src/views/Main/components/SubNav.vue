<template>
    <div class="sub-nav clearfix">
        <router-link v-for="route in subNav" :key="route.text" :to="route.href">
            {{ route.text }}
        </router-link>
        <!-- <v-breadcrumbs :items="subNav">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs> -->
    </div>
</template>

<script>
export default {
    name: 'SubNav',
    data() {
        return {
            msg: 'SubNav',
            routerConfig: [],
            currentRoute: '',
            subNav: []
        };
    },
    watch: {
        $route(route) {
            this.show = false;
            this.currentRoute = route.matched[1].path;
            this.routerTab();
        }
    },
    created() {
        this.currentRoute = this.$router.currentRoute && this.$router.currentRoute.matched[1] && this.$router.currentRoute.matched[1].path;
        Object.assign(this.routerConfig, this.$router.options.routes[0]);
        this.routerTab();
    },
    methods: {
        routerTab() {
            if (!this.routerConfig) {
                return;
            }

            this.routerConfig.children.forEach((route) => {
                if (this.currentRoute === route.path && route.children && route.children.length) {
                    const subRouter = [];
                    route.children.forEach((sub) => {
                        subRouter.push({ text: sub.name, href: `${sub.path}`, disabled: false });
                    });
                    this.subNav = subRouter;
                }
                if (this.currentRoute === route.path && !route.children) {
                    this.subNav = [];
                }
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sub-nav {
    margin: 0 auto 20px;
    display: block;
    border-bottom: 1px solid rgb(90, 89, 89);
    padding: 20px;
    width: 96%;
    // height: 80px;
    a {
        float: left;
        margin-right: 20px;
        font-weight: bold;
        color: rgb(141, 141, 141);
        &.router-link-exact-active {
            color: rgb(90, 89, 89);
        }
    }
}

</style>
