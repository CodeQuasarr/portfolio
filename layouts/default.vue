<script setup lang="ts">

useSeoMeta({
    title: 'Portfolio de Anyaronke Samuel',
    ogTitle: 'Portfolio de Anyaronke Samuel',
    description: 'Portfolio de Anyaronke Samuel, développeur web fullstack',
    ogDescription: 'Portfolio de Anyaronke Samuel, développeur web fullstack',
    ogImage: '/images/og-image.jpg',
    ogUrl: 'https://anyaronke-samuel.com',
})

</script>

<template>
    <div class="source-code-pro bg-[#111B31] min-h-screen text-gray-50">
        <FrontHeader />
        <slot />
    </div>
</template>

<style scoped>
.fira-code {
    font-family: "Fira Code", monospace;
    font-optical-sizing: auto;
    font-style: normal;
}
.source-code-pro {
    font-family: "Source Code Pro", monospace;
    font-optical-sizing: auto;
    font-style: normal;
}
</style>
