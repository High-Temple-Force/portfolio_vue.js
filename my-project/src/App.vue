<template>
  <div>
    <myheader></myheader>
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
      no text
    <button @click="clear()">clear</button>
    <a href="https://vuejs.org" target="_blank"
    class="btn btn-primary">Core Docs
    </a>
  </div>

  
</template>

<script>
  import myheader from './components/myheader'
  export default {
    components: {
      myheader,
    },
    data () {
      return {
        msg: 'Hello mes'
      }
    },
    methods: {
      clear () {
        this.msg = ''
      }
    },
    created() {
      $.getJSON('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US&callback=?',
       function (json) {
      console.log(json)
      this.msg = json.postalcodes[0].adminName1
    })
  }
}
</script>
