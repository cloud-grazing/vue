<template>
    <v-app id="inspire">
        <Header :login="false" />
        <v-main>
            <router-view />
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

<style lang="scss">
</style>
<style src="@/css/common.scss" lang="scss"></style>
