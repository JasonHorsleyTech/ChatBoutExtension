<template>
    <div
        class="flex relative cursor-pointer w-14 group"
        @click.prevent="$emit('click', $event)"
    >
        <div class="transition absolute flex inset-0 group-hover:px-0.5">
            <div
                class="transition transform justify-self-center self-center bg-gray-500 group-hover:bg-gray-400 block h-1 w-4/5 mx-auto"
                :class="[isClose ? 'rotate-45' : 'rotate-0 mt-4']"
            />
        </div>
        <div class="transition absolute flex inset-0 group-hover:px-0.5">
            <div
                class="transition transform justify-self-center self-center bg-gray-500 group-hover:bg-gray-400 block h-1 w-4/5 mx-auto"
                :class="[isClose ? '-rotate-45' : 'rotate-0 -mt-4']"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isClose: {
            type: Boolean, 
            required: false,
            default: true,
        }
    }
}
</script>