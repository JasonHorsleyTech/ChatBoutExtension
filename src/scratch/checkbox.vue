<template>
    <div>
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
            <p class="inline ml-1 pl-0.5 align-middle">
                <span :class="[use_root_url ? 'font-bold' : 'font-regular']"
                    >Mark {{ use_root_url ? `root URL` : `full URL` }}</span
                >
                <span class="mx-1"> - </span>
                <span v-if="use_root_url"
                    >Visible on all {{ rootUrl }} pages</span
                >
                <span v-else
                    >Only visible to someone visiting your exact page</span
                >
            </p>
            <p class="block ml-5 pl-0.5 text-xs mt-2">
                All URLs will be hashed before getting sent across the wire. No
                one will be able to see where you went unless they visit the
                same page.
            </p>
        </label>
    </div>
</template>