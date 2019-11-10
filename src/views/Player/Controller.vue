<template>
    <div
        class="controller"
        v-touch:horizontalMoves.stop="setBars"
    >
        <transition name="panel">
            <div
                class="controller-panel"
                v-if="showPanel"
            >
                <volume class="controller-volume"></volume>
            </div>
        </transition>
        <div
            class="controller-progress"
            v-touch:verticalMoves="setSeeking"
            v-touch:verticalMoveEnds="removeSeeking"
            :class="{'controller-progress-seeking': seeking}"
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
        font-size: 20px;
    }
    .controller-volume {
        background-color: currentColor;
        /* width: 12.5vw; */
        /* height: 32vw; */
        width: 52px;
        height: 135px;
        margin-top: 10px;
    }
    .controller-volume-button {
        color: #fff;
    }
    .controller-progress {
        position: relative;
        background: #fff;
        width: 6px;
        height: 100%;
        transition: all 0.3s;
        border-radius: 10px 0 0 10px;
        overflow: hidden;
    }
    .controller-progress-seeking {
        width: 20px;
        border-radius: 0;
    }
    .controller-progress-done {
        background: currentColor;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
    }
    .controller-panel {
        height: 100%;
        /* box-shadow: rgba(100, 100, 100, 0.2) -5px 0 5px 0px; */
        transition: all 0.3s;
        margin-right: 7px;
    }
</style>
<script>
    import { scan, take, throttleTime } from "rxjs/operators"
    import Volume from "../../components/VolumeButton"
    export default {
        events: {
            touching(event) {
            }
        },
        eventFlows: {
            touching(flow) { }
        },
        components: {
            volume: Volume
        },
        data() {
            return {
                seeking: false,
                showPanel: true,
                duration: 0.5
            }
        },
        methods: {
            setSeeking(event) {
                this.seeking = true
                if (event.event.event && event.event.event.touches)
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