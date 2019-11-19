<template>
    <div
        class="player"
        :class="{'player-in-sub': inSub}"
    >
        <div
            class="player-arrow"
            :class="{'player-arrow-hide':inSub}"
        >

        </div>
        <controller
            class="player-controller"
            ref="controller"
        ></controller>
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
        transition: transform 0.05s;
    }
    .player:not(.is-dragging) {
        transition: all 0.3s;
    }
    .player-in-sub:not(.is-dragging) {
        left: -100vw !important;
    }
    .player-nomove {
        transform: translateX(0) !important;
    }
    .player-arrow {
        border: 2px solid transparent;
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
        width: 70vw;
        z-index: 1;
    }
    .main,
    .sub {
        width: 100vw;
        height: 100%;
        position: relative;
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
    import Draggabilly from "draggabilly"
    // import { Draggable } from '@shopify/draggable';
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
                draggie: null
            }
        },
        computed: {
            inSub() { return this.$store.state.app.inSub }
        },
        components: {
            controller: controller,
            pmain: main
        },
        events: {
            controllerSwitched(state) {
            }
        },
        mounted() {
            this.initDraggie()
        },
        methods: {
            initDraggie() {
                this.draggie = new Draggabilly(this.$el, {
                    axis: "x",
                    handle: "*"
                })
                let x0 = 0, x1 = 0, noMove = false

                this.draggie.on("dragStart", (event) => {
                    x0 = event.x
                    if (event.path.includes(this.$refs.controller.$el) && this.$refs.controller.showPanel) {
                        noMove = true
                        event.stopPropagation()                        
                    }
                    else {
                        noMove = false
                    }
                })

                this.draggie.on("dragMove", (event, point, moveVector) => {
                    if (Math.abs(moveVector.x) < 50 || (this.inSub === true && moveVector.x < 0) || noMove) {
                        this.$el.classList.add("player-nomove")
                    }
                    else {
                        this.$el.classList.remove("player-nomove")
                    }
                    console.log(noMove)
                })
                this.draggie.on("dragEnd", (event) => {
                    x1 = event.x
                    let offset = x0 - x1
                    x1 = 0
                    x0 = 0
                    this.$el.style.left = 0
                    if (Math.abs(offset) < 150 || noMove) {
                        return
                    }
                    this.$store.commit("app/setSub", offset > 0)
                })
            }
        },
    }
</script>