<template>
    <div>
        <div id="shareMask" v-show="show" @click="show=false">
            <div class="backdrop" ></div>
            <img :src="\{{ imgUrl }}" @click="show=false"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false,
                twoWay: true
            },
            imgUrl: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    #shareMask {
        img {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
            opacity: 1;
        }
    }
</style>
