<script lang="ts" setup>


const items = [
    {
        key: 'about-me',
        label: 'A Propos de Moi',
        icon: 'heroicons-outline:user-circle',
        description: 'Découvrez qui je suis',
    },
    {
        key: 'experience',
        label: 'Mon Expérience',
        icon: 'heroicons-outline:academic-cap',
        description: 'Découvrez mon parcours professionnel',
        data: [
            {
                company: 'Sayaris',
                position: 'Développeur Fullstack',
                duration: '2021 - Aujourd\'hui',
            },
            {
                company: 'Particulier (Réseau PH)',
                position: 'Développeur Freelance',
                duration: 'Eté 2023',

            }
        ]
    },
    {
        key: 'formation',
        label: 'Mes formations',
        icon: 'heroicons-outline:academic-cap',
        description: 'Découvrez mes formations',
        data: [
            {
                title: 'Master 2 Informatique',
                school: 'Ynov Campus Bordeaux',
                duration: '2023 - 2024',
            },
            {
                title: 'Master 1 Informatique',
                school: 'Ynov Campus Bordeaux',
                duration: '2022 - 2023',
            },
            {
                title: 'Licence Pro Informatique',
                school: 'IUT Bordeaux Gradignan',
                duration: '2021 - 2022',
            },
            {
                title: 'Licence 2 Informatique',
                school: 'Université de Bordeaux',
                duration: '2019 - 2021',
            },
        ]
    },
    {
        key: 'skills',
        label: 'Mes Compétences',
        icon: 'heroicons-outline:academic-cap',
        description: 'Découvrez mes compétences',
        data: [
            {
                title: 'Développement web',
                allIcons: [
                    {name: 'Vue.js', icon: 'teenyicons:vue-outline'},
                    {name: 'Nuxt.js', icon: 'mdi:nuxt'},
                    {name: 'Nest.js', icon: 'simple-icons:nestjs'},
                    {name: 'Angular', icon: 'mdi:angularjs'},
                    {name: 'Golang', icon: 'fa6-brands:golang'},
                    {name: 'PHP', icon: 'fa6-brands:php'},
                    {name: 'Laravel', icon: 'teenyicons:laravel-outline'},
                    {name: 'HTML5', icon: 'iconoir:html5'},
                    {name: 'CSS3', icon: 'tdesign:css3'},
                ],
            },
            {
                title: 'Développement collaboratif',
                allIcons: [
                    {name: 'Github', icon: 'ph:github-logo-bold'},
                    {name: 'Jira', icon: 'arcticons:jira'},
                    {name: 'Trello', icon: 'fa:trello'},
                ],
            },
            {
                title: 'Développement mobile',
                allIcons: [
                    {name: 'Flutter', icon: 'simple-icons:flutter'},
                ],
            },
            {
                title: 'Développement logiciel',
                allIcons: [
                    {name: 'Java', icon: 'fa6-brands:java'},
                    {name: 'C#', icon: 'fa6-brands:c-sharp'},
                    {name: 'Python', icon: 'fa6-brands:python'},
                ],
            },
        ]
    },
];

</script>

<template>
    <UContainer>
        <UTabs
            :defaultIndex="1"
            orientation="vertical"
            :items="items"
            class="w-full"
            :ui="{
                wrapper: 'flex flex-wrap xl:flex-nowrap gap-10',
                list: {
                    width: 'w-full xl:w-2/5',
                    background: 'bg-transparent',
                    tab: {
                        base: 'my-3 relative inline-flex items-center justify-center flex-shrink-0 w-full  disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
                        background: '',
                            active: 'text-gray-900 bg-accent dark:text-white',
                            inactive: 'text-gray-500 bg-[#23232b] ',
                            height: 'h-14',
                            padding: 'px-3',
                            size: 'text-sm',
                            font: 'font-medium',
                            rounded: 'rounded-md',
                            shadow: '',
                    }
                }
            }"
        >
            <template #item="{ item }">
                <UCard
                    class="border-none"
                    :ui="{
                        background: 'bg-transparent border-none dark:bg-gray-900',
                        ring: '',
                    }"
                >
                    <div v-if="item.key === 'about-me'" class="border-none space-y-3">
                        A propos de moi
                    </div>

                    <div v-if="item.key === 'experience'" class="border-none space-y-3">
                        <div class="flex flex-col gap-[30px] text-center xl:text-start">
                            <h3 class="text-4xl font-bold">{{item.label}}</h3>
                            <p class="max-w-[600px] text-gray-300 mx-auto xl:mx-0">{{item.description}}</p>

                            <div class="h-[400px]">
                                <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <li v-for="(exp, index) in item.data" :key="item.key" class="bg-[#23232b] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span class="text-accent">{{exp.duration}}</span>
                                        <h3 class="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{{exp.position}}</h3>
                                        <div class="flex items-center gap-3">
                                            <span class="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p class="text-gray-300">{{exp.company}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div v-if="item.key === 'formation'" class="border-none space-y-3">
                        <div class="flex flex-col gap-[30px] text-center xl:text-start">
                            <h3 class="text-4xl font-bold">{{item.label}}</h3>
                            <p class="max-w-[600px] text-gray-300 mx-auto xl:mx-0">{{item.description}}</p>

                            <div class="h-[400px] overflow-hidden">
                                <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <li v-for="(formation, index) in item.data" :key="item.key" class="bg-[#23232b] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span class="text-accent">{{formation.duration}}</span>
                                        <h3 class="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{{formation.title}}</h3>
                                        <div class="flex items-center gap-3">
                                            <span class="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p class="text-gray-300">{{formation.school}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div v-if="item.key === 'skills'" class="border-none space-y-3">
                        <div>
                            
                        </div>
                    </div>
                </UCard>
            </template>
        </UTabs>
    </UContainer>
</template>

<style scoped>

</style>
