<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';


const projects = [
    {
        num: "01",
        title: "Projet 1",
        category: "Fullstack",
        description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid amet",
        image: "projects/project-1.png",
        stack: [{name: "Laravel", color: "red"}, {name: "Vue.js", color: "green"}],
        github: "https://github.com"
    },
    {
        num: "02",
        title: "Projet 2",
        category: "Fullstack",
        description: "Description du projet 2",
        image: "projects/project-2.png",
        stack: [{name: "Laravel", color: "red"}, {name: "Vue.js", color: "green"}],
        github: "https://github.com"
    },
    {
        num: "03",
        title: "Projet 3",
        category: "Fullstack",
        description: "Description du projet 3",
        image: "projects/project-1.png",
        stack: [{name: "Laravel", color: "red"}, {name: "Vue.js", color: "green"}],
        github: "https://github.com"
    },
    {
        num: "04",
        title: "Projet 4",
        category: "Fullstack",
        description: "Description du projet 4",
        image: "projects/project-1.png",
        stack: [{name: "Laravel", color: "red"}, {name: "Vue.js", color: "green"}],
        github: "https://github.com"
    },
    {
        num: "05",
        title: "Projet 5",
        category: "Fullstack",
        description: "Description du projet 5",
        image: "projects/project-1.png",
        stack: [{name: "Laravel", color: "red"}, {name: "Vue.js", color: "green"}],
        github: "https://github.com"
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

</script>

<template>
    <div class="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div>
            <UContainer>
                <div class="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div class="w-full xl:w-[50%] xl;h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
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
                                <ULink class="mt-4" to="/">
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
                                <ULink class="mt-4" to="/">
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

                    <div class="w-full xl:w-[50%]">
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
                                        <NuxtImg
                                            :src="project.image"
                                            alt="project image"
                                            class="object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <WorkSliderBtns :slideNext="slideNext" :slidePrev="slidePrev"/>
                        </Swiper>
                    </div>
                </div>
            </UContainer>
        </div>
    </div>
</template>

<style scoped>

</style>
