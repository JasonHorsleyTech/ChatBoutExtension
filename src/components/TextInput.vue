<template>
    <div class="relative bg-white block h-12">
        <div
            class="absolute flex ml-4 text-gray-880 transition"
            :class="[minimizeLabel ? 'text-xs h-4 pt-1' : 'text-sm h-full']"
            @click="handleFocus"
        >
            <p class="self-center" v-text="placeholder" />
        </div>

        <input
            ref="input"
            class="input"
            :name="name"
            @input="handleInput"
            @focus="hasFocus = true"
            @blur="hasFocus = false"
            :raw="true"
            type="text"
            autocomplete="off"
        />
    </div>
</template>

<style lang="scss" scoped>
.input {
    @apply pt-4 pb-2 px-4 outline-none border z-10 bg-transparent text-black border-gray-600 rounded w-full;
}
</style>

<script>
export default {
    name: "TextInput",

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
    },

    methods: {
        handleFocus() {
            this.$refs.input.focus();
        },

        handleInput(e) {
            this.$emit("input", e.target.value);
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