<template>
    <div>
        <div v-if="show" transition>
            <div id="toast">
                <p class="toast-content">\{{ text }}</p>
            </div>
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
            text: {
                type: String,
                required: true,
                default: ''
            },
            duration: {
                type: Number,
                default: 3000
            }
        },
        watch: {
            show(val) {
                if (val && !!this.duration) {
                    this._timeout = setTimeout(() => this.show = false, this.duration)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #toast {
        position: fixed;
        top: 45%;
        left: 50%;
        text-align: center;
        font-size: .8rem;
        line-height: 2;
        background: rgba(40,40,40, .75);
        color: #fff;
        border-radius: .3rem;
        z-index: 999;
        width: 6rem;
        min-height: 1.5rem;
        padding: .5rem;
        margin-left: -3rem;
    }
</style>
