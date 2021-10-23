<template>
    <div class="kanban">
        <h1>{{ msg }}</h1>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'Kanban',
    data() {
        return {
            msg: 'Kanban'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
