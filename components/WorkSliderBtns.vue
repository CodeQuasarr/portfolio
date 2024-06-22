<script setup lang="ts">

const props = defineProps<{
    slideNext: () => void,
    slidePrev: () => void
}>();


</script>

<template>
    <div class="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
        <button @click="props.slidePrev()" class="text-white bg-accent rounded-2xl p-2 mx-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
        </button>
        <button @click="props.slideNext()" class="text-white bg-accent rounded-2xl p-2 mx-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
        </button>
    </div>
</template>

<style scoped>

</style>
