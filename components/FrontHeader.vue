<script setup lang="ts">

const links = [
    {
        label: 'Accueil',
        icon: 'i-heroicons-home',
        to: '/',
    },
    {
        label: 'Mes projets',
        icon: 'i-heroicons-photograph',
        to: '/project',
    },
    {
        label: 'Résumé',
        icon: 'i-heroicons-document',
        to: '/resume',
    },
    {
        label: 'Contact',
        icon: 'i-heroicons-chat',
        to: '/project',
    },
]

const props = defineProps<{
    animatePageOut: (href: string) => void
}>()

const pathName = ref('')
// Watch for route changes
watch(() => useRoute().path, (newPath, oldPath) => {
    console.log('Route changed from', oldPath, 'to', newPath);
    pathName.value = newPath;
});
const activeAnimation = (href: string) => {
    if (pathName.value === href) return
    props.animatePageOut(href)
}

const isOpen = ref(false)
onMounted(() => {
    pathName.value = useRoute().path
})

</script>

<template>
    <header class="py-8 xl:py-12">
        <UContainer class="flex justify-between items-center">
            <NuxtLink to="/">
                <h1 class="text-4xl font-semibold">
                    Daré<span class="text-accent">.</span>
                </h1>
            </NuxtLink>

            <div class="hidden xl:flex items-center gap-10">
                <nav class="flex gap-10">
                    <ULink
                        v-for="link in links"
                        :key="link.to"
                        @click="activeAnimation(link.to)"
                        active-class="border-b border-red-300 text-red-300"
                        inactive-class="capitalize font-medium hover:text-red-300 transition-colors duration-300"
                    >
                        {{ link.label }}
                    </ULink>
                </nav>
                <UButton to="/contact" class="bg-cyan-700 hover:bg-red-600">Me recruter</UButton>
            </div>

            <div class="xl:hidden">
                <UButton class="text-accent" variant="none" label="Open" @click="isOpen = true" >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </UButton>

                <USlideover v-model="isOpen">
                    <div class="p-4 flex-1">
                        <UButton
                            color="gray"
                            variant="ghost"
                            size="sm"
                            icon="i-heroicons-x-mark-20-solid"
                            class="flex sm:hidden absolute end-5 top-5 z-10"
                            square
                            padded
                            @click="isOpen = false"
                        />
                        <Placeholder class="h-full" />
                    </div>
                </USlideover>
            </div>
        </UContainer>
    </header>
</template>

<style scoped>

</style>
