<template>
    <div class="auto-ml">
        <h1>{{ msg }}</h1>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'Training',
    data() {
        return {
            msg: 'Training'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
