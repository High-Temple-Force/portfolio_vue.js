<template>
    <div class="edit-form">
        <h3>バインドとイベントを使った場合</h3>
        <input ref="input" :value="message" @input="doUpdate">
        <h3>V-modelを使った場合</h3>
        <input v-model="message2">
    </div>
</template>


<script>
    import store from '../store.js'
    export default {
        name: 'EditForm',
        computed: {
            message() {
                return store.getters.message
            },
            message2: {
                get() {return store.getters.message},
                set(value) {store.dispatch('doUpdate', value)}
            }
        },
        methods: {
            doUpdate(event) {
                // dispatch with value of input
                store.dispatch('doUpdate', event.target.value)
            }
        }
    }
</script>
