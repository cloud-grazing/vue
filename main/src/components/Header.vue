<template>
    <v-system-bar app height="60" class="header">
        <v-app-bar-nav-icon v-if="login" @click="controlDrawer" />
        <img src="@/assets/logo.png" alt="" width="50" />
        <div class="company">
            <span class="first">S P A C E</span>
            <span v-if="handelHeaderHide" class="second">LEDA Technology | AIoT Platform</span>
        </div>
        <template v-if="login">
            <v-breadcrumbs v-if="handelHeaderHide" :items="breadcrumbs" class="bread" activeClass="bread-active">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <v-spacer />
            <div class="user">
                <v-icon v-if="handelHeaderHide" large color="while">
                    mdi-account
                </v-icon>
                {{ user }}
            </div>
        </template>
    </v-system-bar>
</template>

<script>

export default {
    name: 'Home',
    components: {
    },
    props: {
        login: {
            type: Boolean,
            require: false,
            default: () => false
        },
        drawer: {
            type: Boolean,
            require: false,
            default: () => true
        },
        user: {
            type: String,
            require: false,
            default: ''
        }
    },
    data() {
        return {
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
        handelHeaderHide() {
            return this.headelHide(this.$vuetify.breakpoint.name);
        }
    },
    watch: {
        $route(route) {
            this.routerBread(route);
        },
        $vuetify: {
            breakpoint: {
                handler(breakpoint) {
                    this.handelHeaderHide = this.headelHide(breakpoint);
                },
                deep: true,
                immediate: true
            }

        }
    },
    created() {
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
        },
        headelHide(breakpointName) {
            let show = true;
            // switch (breakpointName) {
            //     case 'xs': return 220;
            //     case 'sm': return 400;
            //     case 'md': return 500;
            //     case 'lg': return 600;
            //     case 'xl': return 800;
            // }
            switch (breakpointName) {
                case 'lg':
                    show = true;
                    break;
                case 'xl':
                    show = true;
                    break;
                default:
                    show = false;
                    break;
            }
            return show;
        },
        controlDrawer() {
            this.$emit('controlDrawer', !this.drawer);
        }
    }
};
</script>

<style scoped lang="scss">
.header {
    padding: 0 20px;
    background: #4A71B2;
    color: #FFF;
    .company {
        max-width: 250px;
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
