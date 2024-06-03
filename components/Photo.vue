<script setup lang="ts">
import gsap from "gsap";


const myPicture = ref<HTMLElement | null>(null);

const animateImageIn = () => {
    if (myPicture.value) {
        gsap.fromTo(myPicture.value,
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 0.5 }
        );
    }
};

onMounted(animateImageIn);
</script>

<template>
    <div class="relative w-full h-full">
        <div ref="myPicture" class="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
            <NuxtImg
                src="profile/profile.webp"
                class="object-contain w-full rounded-full"

            />
        </div>
    </div>
</template>

<style scoped>

</style>
