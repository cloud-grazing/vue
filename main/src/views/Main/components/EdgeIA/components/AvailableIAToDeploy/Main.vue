<template>
    <div class="available-ia-to-deploy">
        <ModelLists />
        <div class="deploy-to">
            <div>DEPLOY TO</div>
            <v-icon xLarge color="blue darken-2">mdi-play</v-icon>
        </div>
        <DeviceLists />
        <div>
            <v-btn
                color="primary"
                elevation="2"
                xLarge
            >
                DEPLOYMENT
            </v-btn>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AvailableIAToDeploy',
    components: {
        ModelLists: () => import('./ModelLists.vue'),
        DeviceLists: () => import('./DeviceLists.vue')
    },
    data() {
        return {
            msg: 'AvailableIAToDeploy'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .available-ia-to-deploy {
        margin: 0 auto;
        min-width: 1300px;
        overflow-x: auto;
        .deploy-to {
            display: inline-block;
            margin: 0 1%;
            width: 7%;
        }
    }
</style>
