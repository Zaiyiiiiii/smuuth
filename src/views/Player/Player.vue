<template>
    <div class="player">
        <controller class="player-controller"></controller>
    </div>
</template>
<style scoped>
    .player {
        position: relative;
        width: 100%;
        height: 100%;
        background: rgba(255, 27, 27, 0)
    }
</style>
<script>
    import controller from "./Controller"
    export default {
        components: {
            controller: controller
        },
        methods: {
            a: () => console.log('a')
        },
    }
</script>