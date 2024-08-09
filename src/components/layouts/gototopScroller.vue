<template>
    <div v-if="showScrollButton" class="fixed w-10 h-10 flex items-center rounded-full bottom-12 right-5 btn-orange-color" @click="scrollToTop">
       <div class="mx-auto">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.55057 0.500002L13 6.94945L12.0326 7.91687L7.24158 3.12585L7.24158 17L5.85956 17L5.85955 3.12585L1.06855 7.91688L0.101132 6.94946L6.55057 0.500002Z" fill="white"/>
            </svg>
       </div>
    </div>
</template>
<script>
export default {
    name: "gototopScroller",
    data() {
        return {
            showScrollButton: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Show the scroll button when scrolled down 100px or more
            this.showScrollButton = window.scrollY > 100;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional smooth scrolling behavior
            });
        }
    }
}
</script>