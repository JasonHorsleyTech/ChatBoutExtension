<template>
    <div>
        <div v-if="!stateLoaded" class="h-32 w-48 bg-gray-200 flex text-2xl">
            <p class="self-center w-full text-center text-gray-600">Loading...</p>
        </div>
        <app v-else />
    </div>
</template>

<script>
import App from "@/popup/App.vue";
export default {
    mounted() {
        // todo, find more elegant solution. vuex persistant store loads AFTER app mounted() :(
        setTimeout(() => {
            this.stateLoaded = true;
        }, 1000);
    },

    components: {
        App,
    },

    data() {
        return {
            stateLoaded: false,
        };
    },
};
</script>