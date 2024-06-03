<script setup lang="ts">

const socials = ref([
    {
        name: "linkedin",
        icon: "mdi:linkedin",
        link: "https://www.linkedin.com/in/dare-samuel/"
    },
    {
        name: "github",
        icon: "mdi:github",
        link: ""
    }
]);
</script>

<template>
    <div class="flex gap-6">
        <ULink
            class="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:transition-all duration-500"
            v-for="social in socials"
            :key="social.name"
            :href="social.link"
        >
            <Icon
                :name="social.icon"
            />
        </ULink>
    </div>
</template>

<style scoped>

</style>
