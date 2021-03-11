<template>
    <div class="relative m-6">
        <form
            @submit.prevent="handleSubmit"
            class="p-6 border rounded-lg shadow bg-gray-200 grid gap-2 text-gray-700"
        >
            <h2 class="text-xl mb-4">
                It's public. Don't say anything you wouldn't put in a bathroom
                stall.
            </h2>
            <text-area-input
                class="col col-span-1"
                placeholder="Leave your mark"
                name="local_mark"
                v-model="local_mark"
                limit="256"
            />

            <input
                type="checkbox"
                id="use-root-url"
                class="hidden"
                v-model="use_root_url"
            />
            <label for="use-root-url" class="cursor-pointer">
                <div
                    class="bg-gray-300 border border-2 border-gray-400 inline-flex rounded-md"
                >
                    <div
                        class="bg-green-700 w-2 h-2 m-0.5 rounded-full transition"
                        :class="{ 'opacity-0': use_root_url }"
                    />
                </div>
                <p class="inline ml-1 align-middle">
                    Use {{ use_root_url ? `root URL` : `full URL` }} ({{
                        use_root_url ? rootUrl : fullUrl
                    }})
                </p>
                <p class="block ml-6 text-sm mt-2">
                    All URLs will be hashed before getting sent across the wire.
                    No one will be able to see where you went unless they visit
                    the same page.
                </p>
            </label>

            <input
                type="submit"
                class="inline-block ml-auto px-4 py-2 rounded-lg bg-green-500 text-white font-semibold tracking-wider cursor-pointer transition shadow-md hover:shadow-lg"
                :value="submitText"
                :disabled="submitting"
            />
        </form>
    </div>
</template>

<script>
import TextAreaInput from "@/components/TextAreaInput.vue";
import { mapActions } from 'vuex';

export default {
    mounted() {
        this.travel({
            url: window.location.href,
        })
    },

    components: {
        TextAreaInput,
    },

    methods: {
        ...mapActions('traveler', ['travel'])
    },

    computed: {
        submitText() {
            return this.submitting ? "please wait" : "Submit";
        },

        rootUrl() {
            return "google.com";
        },

        fullUrl() {
            return "google.com/your porn";
        },
    },

    data() {
        return {
            submitting: false,

            local_mark: "",

            use_root_url: false,
        };
    },
};
</script>