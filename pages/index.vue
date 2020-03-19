<template>
  <div class="container">
    <div class="my-5">
      <button v-on:click="removeCookie">Clear Cookie('kpc_jwt')</button>
    </div>
    <h3 class="title">
      Cookie (Please send kpc_jwt in header for testing)
    </h3>
    <ul>
      <li v-for="(cookie, index) in cookies" :key="index">
        Cookie Name: <span style="color: red;">{{ cookie.key }}</span> Value:
        <span style="color: red;">{{ cookie.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cookies: []
    };
  },
  created() {
    this.cookies.push({ key: "kpc_jwt", value: this.$cookies.get("kpc_jwt") });
  },
  methods: {
    removeCookie: function(event) {
      this.$cookies.remove("kpc_jwt");
      console.log("kpc_jwt has been removed.");
      location.reload();
    }
  }
};
</script>
