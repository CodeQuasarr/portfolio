<script setup lang="ts">

</script>

<template>
    <transition name="fade" mode="out-in">
        <slot />
    </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
