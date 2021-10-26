<template>
    <v-navigation-drawer
        v-model="drawerModel"
        class="main-nav"
        app
        width="150"
        top="60"
        mobileBreakpoint="960"
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
</template>

<script>
import { mapState } from 'vuex';
// import Header from '@/components/Header';

export default {
    name: 'MainNav',
    components: {
    },
    props: {
        drawer: {
            type: Boolean,
            require: false,
            default: () => true
        }
    },
    data() {
        return {
            // drawer: null
        };
    },
    computed: {
        ...mapState([
            'Data'
        ]),
        drawerModel: {
            get: function get() {
                return this.drawer;
            },
            set: function set(val) {
                this.$emit('controlDrawer', val);
            }
        }
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
.main-nav {
    box-shadow: 0px 0px 5px 0px #a0a0a0;
}
</style>
<style src="@/css/common.scss" lang="scss"></style>
