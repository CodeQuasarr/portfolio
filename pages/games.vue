<!--<script lang="ts" setup>-->
<!--// Jeu de Simon-->
<!--const grid = ref<number>(9);-->
<!--const sequence = ref<number[]>([]);-->
<!--const playerSequence = ref<number[]>([]);-->
<!--const level = ref<number>(1);-->
<!--const isPlaying = ref<boolean>(false);-->
<!--const isStrict = ref<boolean>(false);-->
<!--const isWin = ref<boolean>(false);-->
<!--const isLose = ref<boolean>(false);-->

<!--const startGame = () => {-->
<!--    sequence.value = [];-->
<!--    playerSequence.value = [];-->
<!--    level.value = 1;-->
<!--    isPlaying.value = true;-->
<!--    isWin.value = false;-->
<!--    isLose.value = false;-->
<!--    generateSequence();-->
<!--    playSequence();-->
<!--};-->

<!--const generateSequence = () => {-->
<!--    for (let i = 0; i < level.value; i++) {-->
<!--        sequence.value.push(Math.floor(Math.random() * grid.value));-->
<!--    }-->
<!--};-->

<!--const playSequence = () => {-->
<!--    let i = 0;-->
<!--    const interval = setInterval(() => {-->
<!--        if (i < sequence.value.length) {-->
<!--            playSound(sequence.value[i]);-->
<!--            i++;-->
<!--        } else {-->
<!--            clearInterval(interval);-->
<!--        }-->
<!--    }, 1000);-->
<!--};-->

<!--const playSound = (index: number) => {-->
<!--    const audio = new Audio(`/sounds/simon/${index}.mp3`);-->
<!--    audio.play();-->
<!--};-->

<!--const checkSequence = (index: number) => {-->
<!--    if (sequence.value[playerSequence.value.length - 1] === index) {-->
<!--        playerSequence.value.push(index);-->
<!--        if (playerSequence.value.length === sequence.value.length) {-->
<!--            if (level.value === 20) {-->
<!--                isWin.value = true;-->
<!--                isPlaying.value = false;-->
<!--            } else {-->
<!--                level.value++;-->
<!--                playerSequence.value = [];-->
<!--                playSequence();-->
<!--            }-->
<!--        }-->
<!--    } else {-->
<!--        isLose.value = true;-->
<!--        isPlaying.value = false;-->
<!--    }-->
<!--};-->

<!--const resetGame = () => {-->
<!--    sequence.value = [];-->
<!--    playerSequence.value = [];-->
<!--    level.value = 1;-->
<!--    isPlaying.value = false;-->
<!--    isStrict.value = false;-->
<!--    isWin.value = false;-->
<!--    isLose.value = false;-->
<!--};-->

<!--onMounted(() => {-->
<!--    startGame();-->
<!--});-->


<!--</script>-->


<script lang="ts" setup>
// Import necessary Vue and TypeScript functionality

    // Game state variables
    const grid = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const sequence = ref<number[]>([]);
    const playerSequence = ref<number[]>([]);
    const level = ref<number>(1);
    const isPlaying = ref<boolean>(false);
    const isStrict = ref<boolean>(false);
    const isWin = ref<boolean>(false);
    const isLose = ref<boolean>(false);
    const activeIndex = ref<number | null>(null);

    // Function to start a new game
    const startGame = () => {
        sequence.value = [];
        playerSequence.value = [];
        level.value = 1;
        isPlaying.value = true;
        isWin.value = false;
        isLose.value = false;
        generateSequence();
        playSequence();
    };

    // Function to generate a random sequence
    const generateSequence = () => {
        for (let i = 0; i < level.value; i++) {
            sequence.value.push(Math.floor(Math.random() * grid.value.length));
        }
    };

    // Function to play the generated sequence
    const playSequence = () => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < sequence.value.length) {
                playSound(sequence.value[i]);
                activeIndex.value = sequence.value[i];
                setTimeout(() => (activeIndex.value = null), 500);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1000);
    };

    // Function to play sound based on the index
    const playSound = (index: number) => {
        const audio = new Audio(`/sounds/simon/${index}.mp3`);
        audio.play();
    };

    // Function to check the player's input sequence
    const checkSequence = (index: number) => {
        playerSequence.value.push(index);
        if (sequence.value[playerSequence.value.length - 1] === index) {
            if (playerSequence.value.length === sequence.value.length) {
                if (level.value === 20) {
                    isWin.value = true;
                    isPlaying.value = false;
                } else {
                    level.value++;
                    playerSequence.value = [];
                    generateSequence();
                    playSequence();
                }
            }
        } else {
            isLose.value = true;
            isPlaying.value = false;
        }
    };

    // Function to handle user clicks
    const handleClick = (index: number) => {
        if (!isPlaying.value || isWin.value || isLose.value) return;
        checkSequence(index);
    };

    // Function to reset the game
    const resetGame = () => {
        sequence.value = [];
        playerSequence.value = [];
        level.value = 1;
        isPlaying.value = false;
        isStrict.value = false;
        isWin.value = false;
        isLose.value = false;
    };

    // Function to determine if a cell is active
    const isActive = (index: number) => activeIndex.value === index - 1;

    // Start the game when the component is mounted
    onMounted(() => {
        startGame();
    });
</script>

<template>
    <section class="h-full pb-12 xl:pb-0">
        <div class="container mx-auto text-center">
            <div class="grid grid-cols-3 gap-4">
                <div
                    v-for="i in grid"
                    :key="i"
                    :class="['cell', { 'active': isActive(i) }]"
                    @click="handleClick(i - 1)"
                ></div>
            </div>
            <div class="controls mt-4">
                <button :disabled="isPlaying" class="btn" @click="startGame">Start Game</button>
                <button class="btn" @click="resetGame">Reset Game</button>
            </div>
            <div v-if="isWin" class="mt-4 text-green-600">You Win!</div>
            <div v-if="isLose" class="mt-4 text-red-600">You Lose!</div>
        </div>
    </section>
</template>

<style scoped>
.container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    margin-bottom: 20px;
}

.cell {
    width: 100px;
    height: 100px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
}

.cell.active {
    background-color: yellow;
}

.controls .btn {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 1rem;
}
</style>
