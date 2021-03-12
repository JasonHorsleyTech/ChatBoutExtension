<template>
    <div class="relative m-6">
        <div
            @click="openIfClosed"
            class="w-full flex flex-row items-stretch rounded-lg shadow-lg bg-gray-200 overflow-hidden"
            :class="{ 'cursor-pointer hover:opacity-75': closed }"
        >
            <div
                @click="closeIfOpened"
                class="bg-blue-600 border border-blue-600 w-12 transition"
                :class="[closed ? '' : 'hover:bg-blue-700 cursor-pointer']"
            ></div>
            <div
                class="py-3 px-4 border rounded-tr-lg rounded-br-lg transition"
                :class="[closed ? 'border-gray-200' : 'border-blue-600']"
            >
                <h2
                    class="text-3xl tracking-wider transition"
                    :class="{ '-mt-14 mb-2': !closed }"
                >
                    Make a mark
                </h2>
                <make-mark
                    class="transition"
                    :class="[closed ? 'h-0' : 'h-72']"
                />
            </div>
        </div>
    </div>
</template>

<script>
import MakeMark from "@/panels/marks/MakeMark.vue";

export default {
    components: {
        MakeMark,
    },

    methods: {
        openIfClosed() {
            console.log("openIfClosed");
            if (this.closed) {
                this.closed = false;
            }
        },

        closeIfOpened(e) {
            console.log(e);
            console.log("closeIfOpened");
            if (!this.closed) {
                this.closed = true;
                e.stopPropagation();
            }
        },
    },

    computed: {},

    data() {
        return {
            closed: true,
        };
    },
};
</script>