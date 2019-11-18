<template>
    <div
        class="player"
        v-touch:horizontalMoves.throttleTime(300)="mainSwipe"
        :class="{'player-in-sub': inSub}"
    >
        <div
            class="player-arrow"
            :class="{'player-arrow-hide':inSub}"
        >

        </div>
        <controller class="player-controller"></controller>
        <pmain class="main">
        </pmain>
        <div class="sub"></div>

    </div>
</template>
<style scoped>
    .player {
        position: relative;
        width: 200vw;
        height: 100%;
        pointer-events: all;
        display: flex;
        transition: all 0.3s;
    }
    .player-arrow {
        border: 20px solid transparent;
        border-width: 20px 20px 20px 0;
        border-right: 20px solid #fff;
        width: 0;
        height: 0;
        position: absolute;
        right: 100vw;
        top: 50%;
        transition: all 0.15s;
        z-index: 1;
    }
    .player-arrow-hide {
        border-right-width: 0;
    }
    .player-controller {
        position: absolute;
        top: 0;
        right: 0;
        width: 80vw;
        z-index: 1;
    }
    .main,
    .sub {
        width: 100vw;
        height: 100%;
        position: relative;
    }
    .player-in-sub {
        transform: translateX(-100vw);
    }
    .main {
        background: currentColor;
    }
    .sub {
        background: #fff;
    }
</style>
<script>
    import controller from "./Controller"
    import main from "./Main"
    class API {
        constructor(base, url, methods) {
            this.base = base
            this.url = url
            this.methods = methods
        }
        fetch() {
            return "oo"
        }
    }


    export default {
        data() {
            return {
            }
        },
        computed: {
            inSub() { return this.$store.state.app.inSub }
        },
        mounted() {
            setTimeout(() => {
                console.log(this.$store.state.salads.getPlaylists())
            }, 1000)
        },
        components: {
            controller: controller,
            pmain: main
        },
        methods: {
            mainSwipe(event) {
                this.$store.commit("app/setSub", event.x < 0)
            }
        },
    }
</script>