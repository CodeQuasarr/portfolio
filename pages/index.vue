<script lang="ts" setup>

import Socials from "~/components/Socials.vue";
import Photo from "~/components/Photo.vue";
</script>

<template>
    <section class="h-full">
        <UContainer>
            <div class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                <!-- Left -->
                <div class="text-center xl:text-left order-2 xl:order-none">
                    <span class="text-xl">Software Developer</span>
                    <h1 class="h1 mb-6">
                        Hi, Je suis <br>
                        <span class="text-accent">Daré Samuel</span>
                    </h1>
                    <p class="max-w-[500px] mb-9 text-gray-300">
                        J'excelle dans la création d'expériences numériques élégantes et je maîtrise divers langages de
                        programmation et technologies.
                    </p>

                    <div class="flex flex-col xl:flex-row items-center gap-8">
                        <UButton icon="i-heroicons-arrow-down-tray" size="lg"
                                 variant="outline" class="rounded-full px-6 py-4 uppercase border border-accent text-accent hover:bg-accent hover:text-black">
                            <span>Télécharger le CV</span>
                        </UButton>
                        <div class="mb-8 xl:mb-0">
                            <Socials/>
                        </div>
                    </div>
                </div>
                <!-- Right -->
                <div class="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo/>
                </div>
            </div>
        </UContainer>
    </section>
</template>

<style scoped>

</style>
