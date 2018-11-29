new Vue({
    el: '#app',
    data: {
        list: []
    },
    created: function() {
        axios.get('list.json').then(function(responce) {
            this.list = responce.data

        }.bind(this)).catch(function(e) {
            console.error(e)
        })
}})