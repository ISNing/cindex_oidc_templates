<template>
    <AuthPage>
      <LoginContent/>
    </AuthPage>
</template>

<script>
import AuthPage from "@/components/AuthPage";
import LoginContent from "@/components/LoginContent";

export default {
  name: 'App',
  components: {
      AuthPage,
      LoginContent
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
