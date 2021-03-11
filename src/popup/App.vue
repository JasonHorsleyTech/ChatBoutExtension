<template>
    <div
        style="height: 600px; width: 700px"
        class="flex flex-col bg-gray-100"
        :class="{
            'absolute top-0 right-0 border border-black mr-16': !isExtension,
        }"
    >
        <div v-if="siteInfoCurrent" class=""></div>

        <template v-else>
            <div class="flex flex-nowrap align-center shadow">
                <menu-toggle
                    @click="setPanel('options')"
                    :is-close="panel === 'options'"
                />
                <div
                    class="flex-grow flex flex-nowrap align-center transition relative"
                >
                    <div
                        class="absolute inset-0 text-center bg-gray-100 text-xl py-4 overflow-hidden transition"
                        :class="[panel === 'options' ? 'w-full' : 'w-0']"
                    >
                        <h2>Options</h2>
                    </div>

                    <h2
                        class="text-center bg-gray-300 text-xl py-4 transition cursor-pointer text-gray-700 hover:text-gray-900"
                        :class="[panel == 'marks' ? 'flex-grow' : 'px-8']"
                        @click.prevent="setPanel('marks')"
                    >
                        Marks
                    </h2>
                    <div class="w-px" />
                    <h2
                        class="text-center bg-gray-300 text-xl py-4 transition cursor-pointer text-gray-700 hover:text-gray-900"
                        :class="[panel == 'travelers' ? 'flex-grow' : 'px-8']"
                        @click.prevent="setPanel('travelers')"
                    >
                        Travelers
                    </h2>
                </div>
            </div>

            <component class="flex-grow bg-gray-100" :is="selectedPanel" />
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import MenuToggle from "@/components/MenuToggle.vue";

import OptionsPanel from "@/panels/options/Index.vue";
import MarksPanel from "@/panels/marks/Index.vue";
import TravelersPanel from "@/panels/travelers/Index.vue";

export default {
    components: {
        MenuToggle,
    },

    mounted() {
        console.clear();
        if (!this.isRegistered) {
            this.registerTraveler();
        }
    },

    computed: {
        ...mapState("traveler", ["traveler_uuid"]),
        ...mapGetters("traveler", ["isRegistered"]),

        /**
         * Are we previewing from npm run popup (browser based so we get HMR)
         *  (window.browser only exists from an extension context)
         *
         * @return {Bool}
         */
        isExtension() {
            return typeof browser === "undefined";
        },

        selectedPanel() {
            return {
                options: OptionsPanel,
                marks: MarksPanel,
                travelers: TravelersPanel,
            }[this.panel];
        },
    },

    methods: {
        ...mapActions("traveler", ["registerTraveler"]),

        async patch() {
            await this.updateLocation({ url: "google.com" });
        },

        setPanel(newPanel) {
            // Toggling options panel takes you back to whatever was previously selected
            if (newPanel === "options") {
                if (this.panel === "options") {
                    this.panel = localStorage.getItem(
                        "popup_app_previous_panel"
                    );
                    return localStorage.removeItem("popup_app_previous_panel");
                } else {
                    localStorage.setItem(
                        "popup_app_previous_panel",
                        this.panel
                    );
                }
            }

            if (this.panel === newPanel) {
                return;
            }

            this.panel = newPanel;
        },
    },

    data() {
        return {
            /**
             * Active panel
             *
             * @type {String} ['marks', 'travelers']
             */
            panel: "marks",

            siteInfoCurrent: false,
        };
    },
};
</script>