<template>
    <div
        class="controller"
        v-touch:horizontalMoves="setBars"
    >
        <transition name="panel">
            <div
                class="controller-panel"
                v-if="showPanel"
            ></div>
        </transition>
        <div
            class="controller-progress"
            v-touch:verticalMoves="setSeeking"
            v-touch:verticalMoveEnds="removeSeeking"
            :style="{width: seeking?'20px':''}"
        >
            <div
                class="controller-progress-done"
                :style="{height: `${duration*100}%`}"
            ></div>
        </div>
    </div>
</template>
<style scoped>
    .panel-leave-to,
    .panel-enter {
        transform: translateX(10px);
        opacity: 0;
    }
    .controller {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .controller-progress {
        position: relative;
        background: #fff;
        width: 10px;
        height: 100%;
        transition: all 0.3s;
    }
    .controller-progress-done {
        background: #000;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
    }
    .controller-panel {
        height: 100%;
        width: 65px;
        background: rgba(0, 0, 0, 0.2);
        transition: all 0.3s;
    }
</style>
<script>
    import { scan, take, throttleTime } from "rxjs/operators"
    export default {
        events: {
            touching(event) {
            }
        },
        eventFlows: {
            touching(flow) { }
        },
        data() {
            return {
                seeking: false,
                showPanel: false,
                duration: 0.5
            }
        },
        methods: {
            setSeeking(event) {
                this.seeking = true
                if(event.event.event && event.event.event.touches)
                this.duration = event.event.event.touches[0].clientY / event.event.event.target.clientHeight
            },
            removeSeeking(event) {
                console.log(event)
                this.seeking = false
            },
            setBars(event) {
                this.showPanel = event.x < 0
            }
        }
    }
</script>