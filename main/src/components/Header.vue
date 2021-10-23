<template>
    <v-system-bar app height="60" class="header">
        <img src="@/assets/logo.png" alt="" width="50" />
        <div class="company">
            <span class="first">S P A C E</span>
            <span class="second">LEDA Technology | AIoT Platform</span>
        </div>
        <v-breadcrumbs :items="breadcrumbs" class="bread" activeClass="bread-active">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
        <v-spacer />
        <div class="user">
            <v-icon large color="while">
                mdi-account
            </v-icon>
            haix.yeh@gmail.com
        </div>
    </v-system-bar>
</template>

<script>

export default {
    name: 'Home',
    components: {

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
    watch: {
        $route(route) {
            console.log(route.matched, 'onWatch');
            this.routerBread(route);
        }
    },
    created() {
        // console.log(this.$route.matched, 'fished router');
        this.routerBread(this.$route);
    },
    methods: {
        routerBread(route) {
            this.breadcrumbs = [];
            if (route && route.matched) {
                const maxLength = route.matched.length;
                if (!maxLength) {
                    return;
                }
                route.matched.forEach((page, index) => {
                    if (!index) {
                        return;
                    }
                    this.breadcrumbs.push({
                        text: page.name,
                        disabled: true,
                        href: page.path
                    });
                });
            }
        }
    }
};
</script>

<style scoped lang="scss">
.header {
    padding: 0 20px;
    background: #1d5ba2;
    color: #FFF;
    .company {
        width: 250px;
        .first,
        .second {
            display: inline-block;
        }
        .first {
            font-size: 23px;
            font-weight: bold;
            line-height: 25px;
        }
        .second {
            line-height: 12px;
        }
    }
}

</style>
<style lang="scss">
    .v-breadcrumbs {
        &.bread {
            .v-breadcrumbs__item--disabled {
                color: #FFF;
                font-size: 16px;
            }
        }
    }
    .theme--light.v-system-bar .v-icon {
        font-size: 20px;
            color: #FFF;
    }
</style>
