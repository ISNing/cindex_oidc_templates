<template>
    <v-navigation-drawer app
                         v-model="$root.$data.state.drawer">
        <v-system-bar/>
        <v-list>
            <v-list-item link href="http://exthmui.cn">
                <v-img alt="exTHmUI Logo"
                       src='logo-l.svg' min-height="36px" max-width="200px" style="margin: 8px" contain/>
            </v-list-item>
        </v-list>
        <v-list
                nav
                dense
                shaped
        >
            <v-list-item
                    v-for="navItem in mainNavItems"
                    :key="navItem.name"
                    :href="navItem.url"
                    link
            >
                <v-list-item-icon>
                    <v-icon>mdi-{{navItem.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{navItem.name}}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'GlobalDrawer',
        data() {
            return {
                mainNavItems: [
                    {
                        name: "Home",
                        icon: "home-variant-outline",
                        url: "http://exthmui.cn"
                    },
                    {
                        name: "Downloads",
                        icon: "download-outline",
                        url: "http://downloads.exthmui.cn"
                    }
                ]
            };
        }
    }
</script>

<style>
    li.el-menu-item.device {
        height: 35px;
        line-height: 35px;
        padding-left: 10px !important;
        padding-right: 10px;
        margin: 0;
    }

    .drawer-list-item {
        border-radius: 0 100px 100px 0;
        overflow: hidden;
    }

    .mu-item-wrapper {
        margin-right: 8px;
        border-radius: 0 100px 100px 0;
        text-decoration: none !important;
        overflow: hidden;
    }
</style>
