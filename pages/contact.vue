<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import gsap from "gsap";


const info = [
    { icon: 'material-symbols:call', title: 'Télephone', description: '+33 7 54 81 74 36' },
    { icon: 'material-symbols:mail-rounded', title: 'Email', description: 'dsanyaronke@gmail.com'},
    { icon: 'material-symbols:location-on', title: 'Adresse', description: 'Bordeaux' }
];

const options = [
    { value: 'null', label: 'Sélectionner' },
    { value: 'front_back', label: 'Développeur Full Stack' },
    { value: 'back', label: 'Développeur Back-end' },
]
const choice = ref()

const schema = z.object({
    email: z.string().nonempty('Please enter your full name').email('Le prenom doit contenir au moins 2 caractères'),
    first_name: z.string().min(3, 'Le prenom doit contenir au moins 2 caractères'),
    last_name: z.string().min(3,'Le nom doit contenir au moins 2 caractères'),
    message: z.string().min(10),
    // select: z.string().refine(value => value === 'option-2', {
    //     message: 'Select Option 2'
    // }),
})

type Schema = z.output<typeof schema>

const state = reactive({
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    number: undefined,
    object: undefined,
    message: undefined,
})

const message = ref<string | null>(null)

async function onSubmit (event: FormSubmitEvent<Schema>) {
    const fields = {
        ...event.data,
        object: choice.value.value,
    }
   const {data, error} = await useFetch('api/contact', {
        method: 'POST',
        body: JSON.stringify(fields),
        watch: false

    });

    if (data.value) {
      message.value = "Votre message a été envoyé avec succès";
    }
    if (error.value) {
        message.value = "Une erreur s'est produite lors de l'envoi de votre message";
    }
}

const defaultColor= {
    color: {
        white: {
            outline: 'shadow-sm bg-[#26262F] text-sm text-gray-50 ring-1 ring-inset ring-white/5 focus:ring-2 focus:ring-white/20',
        },
    },
}

const contactForm = ref<HTMLElement | null>(null);
const contact = ref<HTMLElement | null>(null);
const animateImageIn = () => {
    console.log(contactForm.value, contact.value)
    if (contactForm.value) {
        gsap.fromTo(
            contactForm.value,
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 0.3 }
        );

        gsap.fromTo(
            contact.value, { opacity: 0 },
            { opacity: 1, duration: 1, delay: 0.4 }
        );
    }
};
onMounted(animateImageIn)

</script>

<template>
    <div class="py-6">
        <UContainer>
            <div class="flex flex-col xl:flex-row gap-[30px]">
                <!-- Form -->
                <div ref="contactForm" class="xl:w-[54%] order-2 xl:order-none" >
                    <div class="flex flex-col gap-6 p-10 bg-white/5 rounded-xl">
                      <div v-if="message && message.trim()" class="p-5 bg-red-500">
                        Une erreur s'est produite lors de l'envoi de votre message; <br>
                        Veuillez contactez le numéro suivant: <span class="font-bold text-xl"> <br> +33 7 54 81 74 36</span>
                      </div>
                        <h3 class="text4xl text-accent">
                            Collaborons ensemble
                        </h3>
                        <p class="text-gray-300 mb-5">
                            Je suis impatient de collaborer avec vous ! N'hésitez pas à me contacter pour toute question.
                        </p>
                        <UForm :schema="schema" :state="state"  @submit="onSubmit">

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <UFormGroup label="" name="last_name">
                                    <UInput
                                        :ui="defaultColor"
                                        size="xl"
                                        v-model="state.last_name"
                                        placeholder="Nom"
                                        inputClass="text-gray-50"
                                    />
                                </UFormGroup>
                                <UFormGroup label="" name="first_name">
                                    <UInput
                                        :ui="defaultColor"
                                        size="xl"
                                        v-model="state.first_name"
                                        placeholder="Prénom"
                                    />
                                </UFormGroup>
                                <UFormGroup label="" name="email">
                                    <UInput
                                        :ui="defaultColor"
                                        size="xl"
                                        v-model="state.email"
                                        placeholder="Adresse email"
                                    />
                                </UFormGroup>
                                <UFormGroup label="" name="number">
                                    <UInput
                                        :ui="defaultColor"
                                        size="xl"
                                        v-model="state.number"
                                        placeholder="Numéro de téléphone (Facultatif)"
                                    />
                                </UFormGroup>
                            </div>
                            <UFormGroup class="mt-10" label="" name="object">
                                <USelectMenu
                                    size="xl"
                                    :ui="defaultColor"
                                    :uiMenu="{
                                        background: 'bg-white/5',
                                        option: {
                                            color: 'text-gray-50',
                                            active: 'bg-[#26262F] dark:bg-gray-900',
                                        },
                                        ring: 'ring-1 ring-white/5 dark:ring-gray-700',
                                    }"
                                    v-model="choice"
                                    placeholder="Select..."
                                    :options="options"
                                />
                            </UFormGroup>
                            <UFormGroup class="mt-10" label="" name="message">
                                <UTextarea
                                    :rows="6"
                                    :maxrows="6"
                                    :ui="defaultColor"
                                    v-model="state.message"
                                    placeholder="Message"
                                />
                            </UFormGroup>

                            <UButton  class="my-2 bg-accent-hover text-black hover:bg-accent-hover-light" type="submit">
                                Envoyer
                            </UButton>
                        </UForm>
                    </div>
                </div>
                <!-- info -->
                <div ref="contact" class="flex-1 flex items-center xl:justify-end order-1 mb-8 xl:order-none xl:mb-0">
                    <ul class="flex flex-col gap-10">
                        <li
                            v-for="item in info"
                            :key="item.title"
                            class="flex items-center gap-6"
                        >
                            <div class="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-black/5 text-accent rounded-md flex items-center justify-center">
                                <div class="text-[28px]"><Icon :name="item.icon" /></div>
                            </div>
                            <div class="flex-1">
                                <p class="text-white/60">{{ item.title }}</p>
                                <h3 class="text-xl">{{ item.description }}</h3>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<style scoped>

</style>
