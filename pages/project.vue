<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import gsap from "gsap";
import project1Img from '~/assets/images/projects/project.png';
import project2Img from '~/assets/images/projects/project2.png';
const projects = [
    {
        num: "02",
        title: "Projet shop",
        category: "Fullstack",
        description: "Cette application est une plateforme de commerce électronique construite avec Vue.js et TypeScript. Elle permet aux utilisateurs de parcourir les produits, d'ajouter des articles à leur panier, de passer des commandes et de gérer leurs factures.",
        image: project2Img,
        stack: [{name: "Laravel 11", color: "red"}, {name: "Vue Js", color: "green"}, {name: "MySQL", color: "white"}, {name: "Tailwind CSS", color: "blue"}],
        github: "https://github.com/CodeQuasarr/barber_shop",
        url: "https://main--barbershopperruque.netlify.app/"
    },
    {
        num: "01",
        title: "Projet Netflixus",
        category: "Web",
        description: "Netflixus est une application de streaming vidéo qui permet de regarder des films et des séries en ligne.",
        image: project1Img,
        stack: [{name: "Vue 3", color: "red"}, {name: "Vue.js", color: "green"}, {name: "Tailwind Css", color: "green"}],
        github: "https://github.com/CodeQuasarr/netflixus_app",
        url: "https://main--stramview.netlify.app/"
    },
];

const project = ref(projects[0]);

const handleSlideChange = (swiper: any) => {
    project.value = projects[swiper.activeIndex];
}

const theSwiper = ref<any>(null);

const onSwiper = (swiper: any) => {
    theSwiper.value = swiper;
}
const slideNext = () => {
    theSwiper.value.slideNext();
}
const slidePrev = () => {
    theSwiper.value.slidePrev();
}

const projectDescription = ref<HTMLElement | null>(null);
const projectImage = ref<HTMLElement | null>(null);
const animateImageIn = () => {
    if (projectDescription.value) {
        gsap.fromTo(
            projectDescription.value,
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 0.3 }
        );

        gsap.fromTo(
            projectImage.value, { opacity: 0 },
            { opacity: 1, duration: 1, delay: 0.4 }
        );
    }
};
onMounted(animateImageIn)

</script>

<template>
    <div class="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div>
            <UContainer>
                <div class="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div ref="projectDescription" class="w-full xl:w-1/2 xl;h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div class="flex flex-col gap-8 h-[50%]">
                            <!-- outline num-->
                            <div class="text-8xl leading-none font-extrabold text-outline">
                                {{ project.num }}
                            </div>
                            <!-- Category -->
                            <h2 class="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                projet {{ project.category }}
                            </h2>
                            <p class="text-gray-300">
                                {{ project.description }}
                            </p>
                            <ul class="flex gap-4">
                                <li v-for="(stack, index) in project.stack" class="text-xl text-accent">
                                    {{ stack.name }}
                                    {{ index !== project.stack.length - 1 ? '-' : '' }}
                                </li>
                            </ul>
                            <div class="border border-white/5"></div>

                            <div class="flex items-center gap-4">
                                <!-- live -->
                                <ULink class="mt-4" :to="project.url" target="_blank">
                                    <UTooltip
                                        :popper="{ placement: 'top' }"
                                        :text="project.title"
                                        class="group w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center"
                                    >
                                        <Icon class="group-hover:text-accent text-4xl"
                                              name="material-symbols-light:arrow-outward-rounded"/>
                                    </UTooltip>
                                </ULink>
                                <!-- github -->
                                <ULink class="mt-4" :to="project.github" target="_blank">
                                    <UTooltip
                                        :popper="{ placement: 'top' }"
                                        :text="project.title"
                                        class="group w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center"
                                    >
                                        <Icon class="group-hover:text-accent text-4xl" name="carbon:logo-github"/>
                                    </UTooltip>
                                </ULink>
                            </div>
                        </div>
                    </div>

                    <div ref="projectImage" class="w-full xl:w-1/2">
                        <Swiper
                            @swiper="onSwiper"
                            @slideChange="handleSlideChange"
                            :slides-per-view="1"
                            :space-between="30"
                            class="xl:h-[520px] mb-12"
                        >
                            <SwiperSlide
                                v-for="(project, index) in projects"
                                :key="index"
                                class="w-full"
                            >
                                <div class="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    <!-- overlay -->
                                    <div class="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    <!-- image -->
                                    <div class="relative w-full h-full">
<!--                                        <NuxtImg-->
<!--                                            :src="project.image"-->
<!--                                            alt="project image"-->
<!--                                            class="object-cover w-full h-full"-->
<!--                                        />-->
                                        <img :src="project.image" alt="project image" class="object-cover w-full h-full">
                                    </div>
                                </div>
                            </SwiperSlide>
                            <WorkSliderBtns v-if="projects && projects.length > 1" :slideNext="slideNext" :slidePrev="slidePrev"/>
                        </Swiper>
                    </div>
                </div>
            </UContainer>
        </div>
    </div>
</template>

<style scoped>

</style>
