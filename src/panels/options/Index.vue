<template>
    <div>
        <div class="relative m-6">
            <form
                @submit.prevent="handleSubmit"
                class="p-6 border rounded-lg shadow bg-gray-200 grid gap-2 text-gray-700"
            >
                <h2 class="text-xl">Traveler information</h2>
                <text-input
                    class="col col-span-1"
                    placeholder="Enter a display name"
                    name="local_traveler_name"
                    v-model="local_traveler_name"
                />
                <p class="text-sm">Or don't, I'm a text input not a cop</p>

                <input
                    type="submit"
                    class="inline-block ml-auto px-4 py-2 rounded-lg bg-green-500 text-white font-semibold tracking-wider cursor-pointer transition shadow-md hover:shadow-lg"
                    :value="submitText"
                    :disabled="submitting"
                />
            </form>
        </div>
        <a
            class="absolute bottom-0 right-0 mb-6 mr-6 hover:underline cursor-pointer"
            @click.prevent="showPrivacyJoke = !showPrivacyJoke"
            >Privacy policy</a
        >
        <privacy-policy-joke
            v-if="showPrivacyJoke"
            class="absolute inset-0 bg-gray-100"
            @done="showPrivacyJoke = false"
        />
    </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";

import PrivacyPolicyJoke from "@/panels/options/PrivacyPolicyJoke.vue";
import { mapActions, mapState } from "vuex";

export default {
    components: {
        TextInput,
        PrivacyPolicyJoke,
    },

    methods: {
        ...mapActions("traveler", ["updateTravelerName"]),

        async handleSubmit() {
            this.submitting = true;

            await this.updateTravelerName(this.local_traveler_name);
            this.local_traveler_name = this.traveler_name;

            this.submitting = false;
        },
    },

    computed: {
        ...mapState("traveler", ["traveler_name"]),

        submitText() {
            return this.submitting
                ? "Please wait"
                : this.traveler_name
                ? "Change"
                : "Submit";
        },
    },

    data() {
        return {
            /**
             * Name of the traveler, if blank we just use traveler {n}
             *
             * @type {String}
             */
            local_traveler_name: null,

            /**
             * @type {Boolean}
             */
            submitting: false,

            showPrivacyJoke: false,
        };
    },
};
</script>