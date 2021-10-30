<template>
    <div id="app" :class="[appClass]">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        appClass() {
            return this.headelAppRWD(this.$vuetify.breakpoint.name);
        }
    },
    methods: {
        headelAppRWD(breakpointName) {
            const appClass = ['xs', 'sm', 'md', 'lg', 'xl'];
            if (appClass.includes(breakpointName)) {
                return `app-${breakpointName}`;
            }
            return '';
        }
    }
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2C3E50;
  // xs: 0, sm: 340
  &.app-xs,
  &.app-sm {
    font-size: 0.9em;
  }
  // md: 540px
  &.app-md {
    font-size: 1em;
  }
  // lg: 800px, xl: 1280px
  &.app-md,
  &.app-xl {
    font-size: 1.2em;
  }
}
</style>

<style src="@/css/common.scss" lang="scss"></style>
