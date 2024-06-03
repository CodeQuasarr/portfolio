<script lang="ts" setup>

import gsap from "gsap";

useSeoMeta({
    title: 'Portfolio de Anyaronke Samuel',
    ogTitle: 'Portfolio de Anyaronke Samuel',
    description: 'Portfolio de Anyaronke Samuel, développeur web fullstack',
    ogDescription: 'Portfolio de Anyaronke Samuel, développeur web fullstack',
    ogImage: '/images/og-image.jpg',
    ogUrl: 'https://anyaronke-samuel.com',
})

const banner1 = ref<HTMLElement | null>(null)
const banner2 = ref<HTMLElement | null>(null)
const banner3 = ref<HTMLElement | null>(null)
const banner4 = ref<HTMLElement | null>(null)
const banner5 = ref<HTMLElement | null>(null)
const banner6 = ref<HTMLElement | null>(null)

const route = useRouter()
const pathName = ref('')

// Fonction d'animation
const animatePageIn = () => {
    if (banner1.value && banner2.value && banner3.value && banner4.value && banner5.value && banner6.value) {
        const tl = gsap.timeline();

        tl.set([banner1.value, banner2.value, banner3.value, banner4.value, banner5.value, banner6.value], {
            yPercent: 0,
        })
            .to([banner1.value, banner2.value, banner3.value, banner4.value, banner5.value, banner6.value], {
                yPercent: 100,
                stagger: 0.1,
            });
    }
};

const animatePageOut = (href: string) => {
    if (banner1.value && banner2.value && banner3.value && banner4.value && banner5.value && banner6.value) {
        const tl = gsap.timeline();

        tl
            .set([banner1.value, banner2.value, banner3.value, banner4.value, banner5.value, banner6.value], {
                yPercent: -100,
            })
            .to([banner1.value, banner2.value, banner3.value, banner4.value, banner5.value, banner6.value], {
                yPercent: 0,
                stagger: 0.1,
                onComplete: () => {
                    route.push(href)
                }
            });
    }
};

// Exécuter l'animation à chaque montage et mise à jour
onMounted(animatePageIn);
onUpdated(animatePageIn);

</script>

<template>
    <div class="min-h-screen text-gray-50">
        <FrontHeader :animatePageOut="animatePageOut"/>
        <div>
            <div ref="banner1" class="min-h-screen bg-[#4B4B5F] z-10 fixed top-0 left-0 w-1/6" />
            <div ref="banner2" class="min-h-screen bg-[#4B4B5F] z-10 fixed top-0 left-[16.6667%] w-1/6" />
            <div ref="banner3" class="min-h-screen bg-[#4B4B5F] z-10 fixed top-0 left-[33.3333%] w-1/6" />
            <div ref="banner4" class="min-h-screen bg-[#4B4B5F] z-10 fixed top-0 left-[50%] w-1/6" />
            <div ref="banner5" class="min-h-screen bg-[#4B4B5F] z-10 fixed top-0 left-[66.6667%] w-1/6" />
            <div ref="banner6" class="min-h-screen bg-[#4B4B5F] z-10 fixed top-0 left-[83.3333%] w-1/6" />
        </div>
        <slot/>
    </div>
</template>

<style>
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
.h1 {
    @apply text-[48px] xl:text-[80px] leading-[1.1]  font-semibold;
}
</style>
