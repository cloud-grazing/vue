<template>
    <div class="sub-nav">
        <!-- <h1>{{ msg }}</h1> -->
        <router-link v-for="route in subNav" :key="route.name" :to="route.path">
            {{ route.name }}
        </router-link>
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
        this.currentRoute = this.$router.currentRoute && this.$router.currentRoute.value.matched[1] && this.$router.currentRoute.value.matched[1].path;
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
                        subRouter.push({ name: sub.name, path: `${sub.path}` });
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
a {
    float: left;
    margin-right: 10px;
    font-weight: bold;
    color: rgb(141, 141, 141);

    &.router-link-exact-active {
      color: rgb(218, 88, 79);
    }
  }
</style>
