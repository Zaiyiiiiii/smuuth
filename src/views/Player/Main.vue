<template>
    <div class="player-main">
        <div class="main-navi">
            <div
                @touchend="$router.push({name:item[1]})"
                @click="$router.push({name:item[1]})"
                v-for="item in naviItems"
                :key="item[1]"
                class="main-navi-item"
                :class="{'main-navi-current':$route.name===item[1]}"
            >{{item[0]}}</div>
        </div>
        <div class="main-view">
            <transition
                name="main"
                mode="out-in"
            >
                <router-view class="main-view-tab"></router-view>
            </transition>
        </div>
    </div>
</template>
<style scoped>
    .player-main {
        display: flex;
    }

    .main-enter,
    .main-leave-to {
        opacity: 0;
        transform: translateY(80%);
    }
    .main-leave-active,
    .main-enter-active {
        transition: all 0.3s;
    }
    .main-view {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .main-view-tab {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .main-navi {
        color: #fff;
        display: flex;
        width: 55px;
        height: 100%;
        box-sizing: border-box;
        line-height: 55px;
        /* justify-content: flex-end; */
        transform: rotateZ(180deg);
        writing-mode: vertical-rl;
        text-orientation: sideways-right;
        padding-top: 1em;
    }
    .main-navi-item {
        font-family: "方正颜宋简体_准";
        opacity: 0.5;
        font-size: 14px;
        margin: 0.6em 0;
        transition: all 0.3s;
    }
    .main-navi-current {
        font-size: 26px;
        opacity: 1;
    }
</style>
<script>
    export default {
        name: "pmain",
        mounted() {
            console.log(this.$route.name, this.currentNavi)
        },
        data() {
            return {
                naviItems: new Map([
                    ["电台", "fm"],
                    ["歌单", "playlists"],
                    ["设置", "settings"]
                ])
            }
        },
    }
</script>