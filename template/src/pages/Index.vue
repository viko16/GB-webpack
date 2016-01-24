<template>
    <div>
        <toast :show.sync='toast.show'
               :text='toast.text'
               :duration="3000"></toast>
    </div>
</template>

<script>
    import API from '../api/index.js'
    import { router } from '../main.js'

    import Toast from '../components/Toast.vue'

    import wx from '../api/wx.js'

    export default {
        name: 'index',
        components: {
            Toast
        },
        data () {
            return {
                toast: {
                    show: false,
                    text: ''
                }
            }
        },
        events: {
            // TODO
        },
        methods: {
            /**
             * 弹出 Toast 提示
             *
             * @param  {String} text 提示语
             */
            alert(text) {
                this.toast = {
                    show: true,
                    text
                }
            }
        },
        route: {
            data(transition) {
                // 页面切换后马上初始化获取数据
                return this.$http.post(API.API_SITE_INIT, {
                    url: window.location.href
                }).then(({data}) => {
                    // 初始化微信分享 JSSDK
                    new wx(data.data.signPackage, data.data.shareInfo);

                    return {
                        // TODO
                    };
                }, () => { this.alert('出错了，请联系客服'); })
            }
        }
    }
</script>
