<template>
    <div id="app">
        <transition
            name="route"
            mode="out-in"
        >
            <router-view />
        </transition>
    </div>
</template>

<style>
    @keyframes appin {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    html,
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        animation: appin 0.5s;
    }
    .route-enter-active,
    .route-leave-active {
        transition: opacity 0.3s;
    }
    .route-leave-to,
    .route-enter {
        opacity: 0;
    }
</style>
