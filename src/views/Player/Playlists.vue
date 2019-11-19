<template>
    <div class="playlist">
        <transition-group
            name="playlist"
            tag="div"
        >
            <div
                class="playlist-item"
                v-for="item in itemss[0]"
                :key="item.name"
            > {{item.name}}</div>
        </transition-group>
        <div style="color:#fff">sldfjdslkjfsjkdf*</div>
    </div>
</template>
<style>
    .playlist {
        flex: auto;
        display: flex;
        flex-direction: column-reverse;
        padding: 1.5em;
        height: 100%;
        width: 100%;
    }
    .playlist-item {
        color: #fff;
        text-align: right;
        line-height: 2em;
        font-size: 18px;
        font-family: "思源宋体";
        transition: all 0.3s;
    }
    .playlist-move {
        transition: transform 1s;
    }
    .playlist-enter,
    .playlist-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .playlist-leave-active {
        position: absolute;
    }
</style>
<script>
    export default {
        data() {
            return {
                itemss: []
            }
        },
        mounted() {
            setTimeout(async () => {
                this.itemss = await this.$store.state.salads.getPlaylists()
            }, 1300)
        }
    }
</script>