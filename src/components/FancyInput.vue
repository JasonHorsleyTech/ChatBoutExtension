<template>
    <div class="relative block h-auto">
        <div
            class="absolute flex ml-4 text-gray-880 transition"
            @click="handleFocus"
            :class="[minimizeLabel ? 'text-2xs pt-1' : 'pt-4 text-sm']"
        >
            <p class="self-center" v-text="placeholder" />
        </div>

        <component
            :is="element"
            ref="input"
            class="the-input-element resize-none"
            :name="name"
            @input="handleInput"
            @focus="hasFocus = true"
            @blur="hasFocus = false"
            :raw="true"
            :value="value"
            type="text"
            autocomplete="off"
            rows="6"
        />

        <p
            v-if="limit !== false"
            class="absolute right-0 bottom-0 mr-1 mb-1 pr-0.5 pb-1 text-sm text-gray-500"
            :class="{ 'text-red-800': limitLeft === 0 }"
        >
            ({{ limitLeft }})
        </p>
    </div>
</template>

<style lang="scss" scoped>
.the-input-element {
    @apply pt-4 pb-2 px-4 outline-none border bg-white text-black border-gray-600 rounded w-full;
}
</style>

<script>
export default {
    name: "FancyInput",

    props: {
        /**
         * Value of field
         *
         * @type {Any}
         */
        value: {
            required: true,
        },

        /**
         * Human label
         *
         * @type {String}
         */
        placeholder: {
            type: String,
            required: true,
        },

        /**
         * Form input name
         *
         * @type {String}
         */
        name: {
            type: String,
            required: true,
        },

        /**
         * What type of input is this?
         *
         * @type {String}
         *      ['input', 'textarea', ...ect maybe]
         */
        inputType: {
            type: String,
            required: true,
        },

        /**
         * Character limit
         *
         * @type {Number|Boolean}
         */
        limit: {
            required: false,
            default: false,
        },
    },

    methods: {
        /**
         * Focus on input
         */
        handleFocus() {
            this.$refs.input.focus();
        },

        /**
         * Trap and bubble input
         */
        handleInput(e) {
            let hasLimit = this.limit !== false;
            let willHitLimit = e.target.value.toString().length > this.limit;

            if (hasLimit && willHitLimit) {
                this.$refs.input.value = this.value;
            } else {
                this.$emit("input", e.target.value);
            }
        },
    },

    computed: {
        /**
         * Should we minimize the input label
         *
         * @return {Boolean}
         */
        minimizeLabel() {
            return this.hasFocus || (this.value !== "" && this.value !== null);
        },

        /**
         * Component to slot in
         *
         * @type {String} of vanilla html component
         */
        element() {
            return ["input", "textarea"].includes(this.inputType)
                ? this.inputType
                : "input";
        },

        /**
         * Characters left before hitting limit
         *
         * @type {Number|Boolean}
         */
        limitLeft() {
            return this.limit === false
                ? ""
                : this.limit - this.value.toString().length;
        },
    },

    data() {
        return {
            /**
             *
             * @type {Boolean}
             */
            hasFocus: false,
        };
    },
};
</script>