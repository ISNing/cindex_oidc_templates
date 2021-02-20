<template>
    <v-app id="app">
        <GlobalDrawer/>
        <OurAppBar/>
        <v-row id="page">
            <v-container class="main-box">
                <v-row no-gutters>
                    <v-col :cols="10"
                           :md="4"
                           :lg="4"
                           :sm="10"
                           style="margin: auto"
                           align-self="center">
                        <v-card class="box-card" outlined>
                            <slot/>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
        <OurFooter/>
    </v-app>
</template>

<script>
    import GlobalDrawer from "@/components/GlobalDrawer";
    import OurFooter from "./OurFooter";
    import OurAppBar from "@/components/OurAppBar";

    export default {
        name: "AuthPage",
        components: {
            GlobalDrawer,
            OurAppBar,
            OurFooter
        }
    };
</script>

<style scoped>
    #page {
        text-align: center;
      background: url('https://api.paugram.com/bing/');
    }

    .main-box {
        min-height: 100%;
        min-width: 100%;
    }

    .box-card {
        width: 100%;
        margin: 5% auto;
    }
</style>