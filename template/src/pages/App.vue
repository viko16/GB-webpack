<template>
    <div class="container">
        <router-view class="view"
                     keep-alive
                     transition
                     transition-mode="out-in">
        </router-view>
    </div>
</template>

<style lang="less">
    .v-transition {
        transition: opacity .3s ease;
    }

    .v-enter, .v-leave {
        opacity: 0;
    }

    * {
        margin: 0;
        padding: 0;
    }

    img {
        width: 100%;
        vertical-align: middle;
        user-select: none;
        -webkit-user-drag: none;
    }

    .container {
        margin: 0 auto;
        max-width: 16rem;
    }

    .backdrop {
        width: 100%;
        height: 160%;
        background: #000;
        opacity: .8;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 40;
    }
</style>
