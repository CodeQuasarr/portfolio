<script setup lang="ts">
import { CountUp } from 'countup.js';
import gsap from "gsap";

// Créer une référence pour l'élément DOM
const counterRefs = ref<(HTMLElement | null)[]>([]);

const startYear = ref<number>(2021);
// Obtenir l'année actuelle
const currentYear = ref<number>(new Date().getFullYear())
// Calculer la différence en années
const yearsOfExperience = ref<number>(currentYear.value - startYear.value);
// Formater le nombre avec un zéro devant si nécessaire
const experience = ref<string>(yearsOfExperience.value.toString().padStart(2, '0'));

const stats = ref([
    { num: 3, title: 'Années d\'expérience'},
    // { num: 15, title: 'projet Réalisés'},
    { num: 8, title: 'technologies maîtrisées'},
    { num: 501, title: 'Tasses de thé'},
])

const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
};
const statistic = ref<HTMLElement | null>(null);
const animateImageIn = () => {
    if (statistic.value) {
        gsap.fromTo(statistic.value,
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 0.5 }
        );
    }
};

const animateNumbers = () => {
    stats.value.forEach((stat, index) => {
        const el = counterRefs.value[index];
        if (el) {
            const countUp = new CountUp(el, stat.num, { duration: 2.5, formattingFn: (num) => formatNumber(num) });
            if (!countUp.error) {
                countUp.start();
            } else {
                console.error(countUp.error);
            }
        }
    });
};
onMounted( () => {
    animateImageIn();
    setTimeout(() => {
        animateNumbers();
    }, 500);

});

</script>

<template>
    <UContainer>
        <div ref="statistic" class="flex flex-wrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
            <div
                class="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                v-for="(stat, index) in stats"
                :key="'stat_'+index"
            >
                <span v-if="stat.title ==='Années d\'expérience'" class="text-3xl xl:text-5xl font-extrabold">+</span>
                <span class="text-3xl xl:text-5xl font-extrabold" :ref="el => counterRefs[index] = el"></span>
                <p :class="[stat.title.length <15? 'max-w-[100px]': 'max-w-[150px]', 'text-gray-300']">{{ stat.title }}</p>
            </div>
        </div>
    </UContainer>
</template>

<style scoped>

</style>
