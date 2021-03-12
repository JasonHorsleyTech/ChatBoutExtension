<template>
    <form
        @submit.prevent="handleSubmit"
        class="grid gap-1 text-gray-700"
    >
        <h2 class="text-xl my-2">
            It's public, don't say anything you wouldn't put in a bathroom
            stall.
        </h2>
        <text-area-input
            class="col col-span-1"
            placeholder="Leave your mark"
            name="local_mark"
            v-model="local_mark"
            limit="256"
            :readonly="submitting"
        />

        <div class="flex w-full">
            <div class="ml-1 pl-0.5 mr-20 block ">
                <p class="inline align-middle text-base">
                    Visible to anyone on <span class="font-bold">{{ rootUrl }}</span>
                </p>
                <p class="text-xs">
                    All URLs will be hashed before getting sent across the wire.  No one will be able to see it unless they visit the same site.
                </p>
            </div>

            <input
                type="submit"
                class="inline-block h-10 self-center ml-auto px-4 py-2 rounded-lg bg-green-500 text-white font-semibold tracking-wider cursor-pointer transition shadow-md hover:shadow-lg"
                :class="{ 'opacity-50 cursor-events-nonde': submitting }"
                :value="submitText"
                :disabled="submitting"
            />
        </div>
    </form>
</template>

<script>
import TextAreaInput from "@/components/TextAreaInput.vue";
import { mapActions, mapState } from "vuex";
import extractHostname from "@/stolen/extractHostname.js";
import delay from "@/stolen/delay.js";

export default {
    components: {
        TextAreaInput,
    },

    methods: {
        ...mapActions(["mark"]),

        async handleSubmit() {
            this.submitting = true;

            await this.mark(this.local_mark);
            await delay(500);

            this.submitting = false;
        },
    },

    computed: {
        ...mapState(["local_url"]),

        submitText() {
            return this.submitting ? "please wait" : "Submit";
        },

        rootUrl() {
            return extractHostname(this.fullUrl);
        },

        fullUrl() {
            return this.local_url;
        },
    },

    data() {
        return {
            submitting: false,

            local_mark: "",

            use_root_url: true,
        };
    },
};
</script>