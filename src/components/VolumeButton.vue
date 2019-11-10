<template>
    <div class="volume">
        <div class="volume-container">
            <!-- :class="{'volume-button-disable':$store.state.playing.off}" -->
            <div
                class="volume-button"
                :style="{backgroundImage: 'url(../../img/res/minus.svg)'}"
                @click="setVolume(-1)"
            ></div>
            <transition
                :name="left?'fade-left':'fade-right'"
                mode="out-in"
            >
                <!-- v-if="!$store.state.playing.off"
                    @click="$store.commit('playing/setMute',!$store.state.playing.mute)"
                    :key="$store.state.playing.volume"
                    :class="{'volume-button-mute':$store.state.playing.mute}" -->
                <div>
                    <!-- {{$store.state.playing.volume}} -->15
                    <div class="volume-line"></div>
                    <!-- :class="{'volume-line-mute':!$store.state.playing.mute}" -->
                </div>
                <!-- v-if="$store.state.playing.off" -->
                <!-- <div key="off">Off</div> -->
            </transition>
            <!-- :class="{'volume-button-disable':$store.state.playing.volume>=20}" -->
            <div
                @click="setVolume(1)"
                class="volume-button"
                :style="{backgroundImage: 'url(../../img/res/plus.svg)'}"
            ></div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            setVolume(vol) {
                // this.$store.commit('playing/setVolume', $store.state.playing.volume + vol)
            }
        },
        data() {
            return {
                left: true
            }
        },
        computed: {
            volume() {
                // return this.$store.state.playing.volume
            }
        },
        watch: {
            volume(pre, curr) {
                this.left = pre > curr
            }
        }
    }
</script>
<style>
    .fade-left-enter-active,
    .fade-left-leave-active {
    }
    .fade-left-enter,
    .fade-right-leave-to {
        opacity: 0;
        transform: translateX(-10px);
    }
    .fade-right-enter,
    .fade-left-leave-to {
        opacity: 0;
        transform: translateX(10px);
    }
    .volume {
        font-family: "Armata";
        flex-shrink: 0;
        width: 52px;
        height: 135px;
        -webkit-app-region: no-drag;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: visible;
        user-select: none;
        cursor: default;
        text-shadow: rgba(0, 0, 0, 0.2) 0 0 5px;
    }
    .volume-container {
        display: flex;
        width: 135px;
        flex-shrink: 0;
        height: 52px;
        align-items: center;
        transform: rotateZ(90deg);
        justify-content: center;
    }
    .volume-container > div {
        text-align: center;
        width: 1.8em;
        transition: all 0.2s;
        position: relative;
        color: #fff;
    }
    .volume-button {
        width: 2.2em!important;
        height: 100%;
        background-size: 21px;
        background-position: center;
        background-repeat: no-repeat;
    }
    .volume-container > div:hover {
        text-shadow: rgba(100, 100, 100, 1) 0 0 3px;
        /* filter: drop-shadow(rgba(100, 100, 100, 1) 0 0 3px) */
    }
    .volume-line {
        position: absolute;
        width: 1.8em;
        height: 1px;
        background: currentColor;
        border-radius: 1px;
        top: 5px;
        left: 0.15em;
        transform: rotateZ(20deg) scaleX(1);
        transition: transform 0.2s;
        transform-origin: 0 center;
    }
    .volume-container > div:hover > .volume-line {
        box-shadow: rgba(100, 100, 100, 1) 0 0 3px 0;
    }
    .volume-line-mute {
        opacity: 0;
        transform: rotateZ(20deg) scaleX(0);
    }
    .volume-button-mute {
        color: #ccc;
    }
    .volume-button-disable {
        opacity: 0.3;
        pointer-events: none;
    }
</style>
