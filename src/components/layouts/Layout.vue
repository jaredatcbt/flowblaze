<template>
    <navbar></navbar>
    <slot />
    <footerNav></footerNav>
</template>

<script>
import navbar from '../../components/layouts/navbar.vue';
import footerNav from '../../components/layouts/footer.vue';

export default {
    name: 'Layout',
    components: {
        navbar,
        footerNav
    }
};
</script>