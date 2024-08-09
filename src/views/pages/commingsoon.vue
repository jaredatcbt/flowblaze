<template>
    <navbar class="z-10 relative" />
    <div class="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
        <h1 class="text-center font-bold text-custom-black text-6xl">
            <span class="text-[#FC6F43]">Coming</span> Soon...
        </h1>
    </div>
    <footerVue class="fixed bottom-0" />
</template>
<script>
import navbar from '../../components/layouts/navbar.vue';
import footerVue from '../../components/layouts/footer.vue';
export default {
    name: 'commingsoon',
    components: {
        navbar,
        footerVue
    }
};
</script>