<template>
    <div class="player-main">
        <div class="main-navi">
            <div
                v-for="item in naviItems"
                :key="item[1]"
            >{{item[0]}}</div>
        </div>
    </div>
</template>
<style scoped>
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
    .main-navi > div {
        font-family: "方正颜宋简体_准";
        opacity: 0.5;
        font-size: 14px;
        margin-top: 1em;
    }
</style>
<script>
    export default {
        name: "pmain",
        data() {
            return {
                naviItems: new Map([
                    ["电台", "fm"],
                    ["歌单", "songlists"],
                    ["设置", "settings"]
                ])
            }
        },
    }
</script>