<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'


const info = [
    { icon: 'material-symbols:call', title: 'Télephone', description: '123-456-789' },
    { icon: 'material-symbols:mail-rounded', title: 'Email', description: 'dsanyaronke@gmail.com'},
    { icon: 'material-symbols:location-on', title: 'Adresse', description: '1234 rue de la rue' }
];

const options = [
    { value: 'null', label: 'Sélectionner' },
    { value: 'front_back', label: 'Développeur Full Stack' },
    { value: 'back', label: 'Développeur Back-end' },
]

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
    textarea: z.string().min(10),
    select: z.string().refine(value => value === 'option-2', {
        message: 'Select Option 2'
    }),
})

type Schema = z.output<typeof schema>

const state = reactive({
    email: undefined,
    textarea: undefined,
    selectMenu: undefined,
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
    // Do something with data
    console.log(event.data)
}

const defaultColor= {
    color: {
        white: {
            outline: 'shadow-sm bg-[#26262F] text-sm text-gray-50 ring-1 ring-inset ring-white/5 focus:ring-2 focus:ring-white/20',
        },
    },
}
</script>

<template>
    <div class="py-6">
        <UContainer>
            <div class="flex flex-col xl:flex-row gap-[30px]">
                <!-- Form -->
                <div class="xl:w-[54%] order-2 xl:order-none" >
                    <div class="flex flex-col gap-6 p-10 bg-white/5 rounded-xl">
                        <h3 class="text4xl text-accent">
                            Let's work together
                        </h3>
                        <p class="text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
                            sollicitudin.
                        </p>
                        <UForm :schema="schema" :state="state"  @submit="onSubmit">

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <UFormGroup label="" name="email">
                                    <UInput
                                        :ui="defaultColor"
                                        size="xl"
                                        v-model="state.email"
                                        placeholder="Nom"
                                        inputClass="text-gray-50"
                                    />
                                </UFormGroup>
                                <UFormGroup label="" name="email">
                                    <UInput
                                        :ui="defaultColor"
                                        size="xl"
                                        v-model="state.email"
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
                                <UFormGroup label="" name="email">
                                    <UInput
                                        :ui="defaultColor"
                                        size="xl"
                                        v-model="state.email"
                                        placeholder="Numéro de téléphone (Facultatif)"
                                    />
                                </UFormGroup>
                            </div>
                            <UFormGroup class="mt-10" label="" name="selectMenu">
                                <USelectMenu
                                    :ui="defaultColor"
                                    :uiMenu="{
                                        background: 'bg-white/5',
                                        option: {
                                            color: 'text-gray-50',
                                            active: 'bg-[#26262F] dark:bg-gray-900',
                                        },
                                        ring: 'ring-1 ring-white/5 dark:ring-gray-700',
                                    }"
                                    v-model="state.selectMenu"
                                    placeholder="Select..."
                                    :options="options"
                                />
                            </UFormGroup>
                            <UFormGroup class="mt-10" label="" name="textarea">
                                <UTextarea
                                    rows="6"
                                    maxrows="6"
                                    :ui="defaultColor"
                                    v-model="state.textarea"
                                    placeholder="Message"
                                />
                            </UFormGroup>

                            <UButton class="my-2" type="submit">
                                Submit
                            </UButton>
                        </UForm>
                    </div>
                </div>
                <!-- info -->
                <div class="flex-1 flex items-center xl:justify-end order-1 mb-8 xl:order-none xl:mb-0">
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
