<template>
    <fancy-input
        :value="value"
        :placeholder="placeholder"
        :name="name"
        :limit="limit"
        input-type="textarea"
        @input="proxyInput"
    />
</template>

<script>
/**
 * Short hand for fancy "text" input
 */
import FancyInput from "@/components/FancyInput.vue";

export default {
    name: "TextInput",

    components: { FancyInput },

    props: {
        value: { required: true },
        placeholder: { required: true },
        name: { required: true },
        limit: { required: false, default: false },
    },

    methods: {
        proxyInput(value) {
            this.$emit("input", value);
        },
    },
};
</script>