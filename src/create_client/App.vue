<template>
    <AuthPage>
      <CreateClientContent/>
    </AuthPage>
</template>

<script>
import AuthPage from "@/components/AuthPage";
import CreateClientContent from "@/components/CreateClientContent";

export default {
  name: 'App',
  components: {
      AuthPage,
      CreateClientContent
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
