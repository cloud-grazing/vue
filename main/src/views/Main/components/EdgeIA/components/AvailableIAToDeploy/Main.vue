<template>
    <div class="auto-ml">
        <h1>{{ msg }}</h1>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'AvailableIAToDeploy',
    data() {
        return {
            msg: 'AvailableIAToDeploy'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
