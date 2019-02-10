<template>
  <div id="app">
    <my-header></my-header>
    <p v-if="msglen">{{ msg }}</p>
    <p v-else>no text</p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";

export default {
  components: {
    MyHeader
  },
  data() {
    return {
      msg: "Hello Vue."
    };
  },
  computed: {
    msglen() {
      return this.msg.length > 0;
    }
  },
  methods: {
    clear() {
      this.msg = "";
    }
  },
  created() {
    fetch(
      "http://www.geonames.org/postalCodeLookupJSON?postalcode=1550031&country=JP"
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.msg = `
          ${json.postalcodes[0].adminName1} 
          ${json.postalcodes[0].adminName2} 
          ${json.postalcodes[0].placeName}
        `;
      })
      .catch(() => {});
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
