<template>
    <div id="app" class="fillcontain">
		    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            beforeRouteEnter (to, from, next) {
                console.log('object :>> ', to, from, next);
                next(vm => {
                    // 通过 `vm` 访问组件实例
                })
            },
    }
}
</script>

<style lang="less">
	@import './style/common';
</style>
