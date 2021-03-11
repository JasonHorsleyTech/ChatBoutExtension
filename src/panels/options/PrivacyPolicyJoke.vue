<template>
    <div class="py-4">
        <div class="w-full">
            <close-button class="absolute w-14 h-14 top-0" @click="$emit('close')" />
            <h2 class="text-2xl text-center mb-10">
                HOWDY fellow
                <a
                    class="underline cursor-pointer"
                    href="#"
                    @click.prevent="isNerd = true"
                    >nerds</a
                >
                and or
                <a
                    class="underline cursor-pointer"
                    href="#"
                    @click.prevent="isNerd = false"
                    >patriots</a
                >.
            </h2>
        </div>

        <div class="text-lg px-8">
            <template v-if="isNerd">
                <p class="mb-4">
                    When you launch, I create a new "traveler" on my API.
                    Randomly generated UUID and secret.
                </p>
                <p class="mb-4">
                    The secret is sent back via secure cookie and I'll have SSL
                    up in production chill dude chill
                </p>
                <p class="mb-4">
                    That secret is on a 3 hour expiration. It refreshes every
                    time you make a "mark" but will only give you another three
                    hours. So if you plan on going to sleep for any extended
                    period of time, you'll lose your identity. but that's always
                    been the case. maaaan.
                </p>
                <p class="mb-4">
                    Marks are public. You can set a traveler name in the
                    options, but it's only tied to some random UUID in some
                    random database. Still, ANYTHING SAID is as public as
                    anonymously scrawling it on a bathroom stall, so don't post
                    your mother's maiden social security card number or
                    anything.
                </p>
                <p class="mb-4">
                    If offered buckets of cash, I'd probably sell to the highest
                    bidder, so if you really care, regularly check your network
                    tab and make damn sure I'm only collecting the things you
                    think I'm collecting.
                </p>
            </template>
            <template v-else>
                <p class="mb-3">
                    Well tan my butter and toast my hide, it's good to meet
                    another red blooded AMERICAN who cares about the AMENDMENTS
                    like the SECOND one and the FOURTH one and all those other
                    super cool and interesting ones that we totally also know
                    and care about all the time really. I see you've taken an
                    interested in your privacy and for that I SALUTE YOU
                </p>
                <p class="mb-3">
                    Unlike the wussy media and the facebooks and all those other
                    LARB TARDS in silicon valley what with their SCOOTERS and
                    AVOCADO, I have a business plan that doesn't involve selling
                    your personal data to communist countries.
                </p>
                <p class="mb-3">
                    Its the BEST business plan. All my friends, I tell them my
                    plans all the time, and they say "Man, you are SMART and
                    BUSINESS and what a much great PLAN that was that you just
                    told me, FANTASTIC". And man, my friends are really SMART
                    people, really high IQ smart people who know smart ideas
                    when they hear them.
                </p>
                <p class="mb-3 text-xs">
                    I will be selling pictures of my feet on onlyfans to finance
                    the backend server until I'm able to nail down exactly how
                    to monitize a browser extension that collects no relevant
                    data.
                </p>
                <p class="mb-3">
                    God bless, and stop doing business with wells fargo because
                    they laundered money for the cinaloa cartel.
                </p>
            </template>
        </div>
    </div>
</template>

<script>
import CloseButton from "@/components/CloseButton.vue";
export default {
    components: {
        CloseButton,
    },
    
    data() {
        return {
            /**
             * inform language
             *
             * @type {Boolean}
             */
            isNerd: true,
        };
    },
};
</script>