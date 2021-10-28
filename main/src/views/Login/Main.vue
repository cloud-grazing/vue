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
                        <v-form>
                            <v-container>
                                <v-text-field
                                    outlined
                                    label="Account"
                                    prependInnerIcon="mdi-account"
                                />
                                <v-text-field
                                    outlined
                                    label="Password"
                                    :type="passwordType"
                                    prependInnerIcon="mdi-lock-outline"
                                    :appendIcon="eyeIcon"
                                    @click:append="togglePasswordType"
                                />
                                <v-btn
                                    class="login-btn"
                                    color="primary"
                                    elevation="2"
                                    @click="login"
                                >
                                    Login
                                </v-btn>
                            </v-container>
                        </v-form>
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
            hidePassword: true,
            passwordType: 'password',
            eyeIcon: 'mdi-eye-off',
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
        login() {
            this.$router.push({ path: 'kanban' });
        },
        togglePasswordType(val) {
            console.log(val);
            this.hidePassword = !this.hidePassword;
            this.passwordType = this.hidePassword ? 'password' : 'text';
            this.eyeIcon = this.hidePassword ? 'mdi-eye-off' : 'mdi-eye';
        }
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
            vertical-align: middle;
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
        .login-btn {
            width: 100%;
        }
    }
</style>
<style src="@/css/common.scss" lang="scss"></style>
