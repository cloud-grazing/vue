<template>
    <div class="edge-ia">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'EdgeIA'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .edge-ia {
        overflow-y: auto;
    }
</style>
