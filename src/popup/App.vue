<template>
    <div class="h-32 w-full bg-gray-900" @click.prevent="patch">Timer: {{ this.timer }}</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    mounted() {
      console.clear()
        this.patch();
    },

    data() {
        return {};
    },

    computed: mapState(["timer"]),

    methods: {
        ...mapActions(["updateLocation"]),

        async patch() {
            await this.updateLocation({ url: "google.com" });
        },
    },
};
</script>