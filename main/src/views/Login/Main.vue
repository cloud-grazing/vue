<template>
    <v-app id="inspire">
        <Header :login="false" />
        <v-main>
            <div class="login-wrap clearfix">
                <div class="login-left-bg">
                    <div class="sohw-text">
                        <div class="login-title">
                            Discover all your possibilities
                        </div>
                        <div>
                            The most powerful tool for platform orchestration
                        </div>
                    </div>
                </div>
                <div class="login-from">
                    <div class="login-from-wrap">
                        <img src="@/assets/LEDALogo.png" alt="" srcset="" width="320" />
                        <p>SPACE Log In</p>
                        <div>
                            <v-btn
                                color="primary"
                                elevation="2"
                                xLarge
                            >
                                Login
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Main',
    components: {
        Header: () => import('@/components/Header')
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
            'data'
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

<style scoped lang="scss">
.login-wrap {
    width: 100%;
    height: 100%;
    .login-from {
        height: 100%;
        &::before {
            display: inline-block;
            vertical-align: middle;
            content: "";
            width: 0px;
            height: 100%;
        }
        .login-from-wrap {
            display: inline-block;
            vertical-align: center;
            margin: 0 auto;
            width: 320px;
        }
    }

}
    .login-left-bg {
        float: left;
        width: calc(100% - 520px);
        height: 100%;
        background: url("../../assets/space-and-new-star-1370X996.png") 50% 50% no-repeat;
        &::before {
            display: inline-block;
            vertical-align: middle;
            content: "";
            width: 0px;
            height: 100%;
        }
    }

    .sohw-text {
        display: inline-block;
        vertical-align: middle;
        color: #FFF;
        .login-title {
            font-size: 48px;
        }
    }

    .login-from {
        float: left;
        width: 520px;
    }
</style>
<style src="@/css/common.scss" lang="scss"></style>
