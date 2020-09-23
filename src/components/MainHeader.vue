<template>
    <div>
        <main-top></main-top>
        <top-nav></top-nav>
    </div>
</template>

<script>
import MainTop from './header/MainTop.vue'
import TopNav from './header/TopNav.vue'

export default {
    components: {
        'MainTop' : MainTop,
        'TopNav' : TopNav
    }
}
</script>

<style>

</style>