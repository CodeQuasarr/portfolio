<script lang="ts" setup>

import Photo from "~/components/Photo.vue";
import Stats from "~/components/Stats.vue";
import gsap from "gsap";
const description = ref<HTMLElement | null>(null);
const animateImageIn = () => {
    if (description.value) {
        gsap.fromTo(description.value,
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 0.3 }
        );
    }
};
onMounted(animateImageIn);
</script>

<template>
    <section class="h-full pb-12 xl:pb-0">
        <UContainer>
            <div class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                <!-- Left -->
                <div ref="description" class="text-center xl:text-left order-2 xl:order-none">
                    <p class="text-xl pb-4">Développeur Full Stack</p>
                    <h1 class="h1 mb-6">
                        Hi, Je suis <br>
                        <span class="text-accent">Daré Samuel</span>
                    </h1>
                    <p class="max-w-[500px] mb-9 text-gray-300">
                        J'excelle dans la création d'expériences numériques élégantes et je maîtrise divers langages de
                        programmation et technologies.
                    </p>

                    <div class="flex flex-col xl:flex-row items-center gap-8">
<!--                        <a :href="cv" target="_blank" icon="i-heroicons-arrow-down-tray" size="lg"-->
<!--                                 variant="outline" class="rounded-full px-6 py-4 uppercase border border-accent text-accent hover:bg-accent hover:text-black">-->
<!--                            <span>Télécharger Mon CV</span>-->
<!--                        </a>-->
<!--                        <div class="mb-8 xl:mb-0">-->
<!--                            <Socials/>-->
<!--                        </div>-->
                    </div>
                </div>
                <!-- Right -->
                <div class="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo/>
                </div>
            </div>
        </UContainer>
        <Stats/>
    </section>
</template>

<style scoped>

</style>
