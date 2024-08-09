<template>
    <section class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-8/12">
        <div class="bg-white rounded-2xl grid grid-cols-1 lg:grid-cols-2 mx-auto mt-0 md:mt-12 mb-0 md:mb-12 shadow-xl">
            <div class="relative flex flex-col justify-center md:w-12/12 lg:w-full px-8 py-10 md:pt-20">
                <div class="md:absolute md:top-10 mb-10 md:mb-0 xs:mb-10 flex flex-shrink-0">
                  <router-link to="/" activeClass="home" class="hover:bg-white">
                    <h2 class="uppercase text-custom-orange custom-logo">FlowBlaze</h2>
                  </router-link>
                </div>
                <slot />
            </div>
            <div class="hidden lg:block bg-gradient-to-b from-gray-100 to-white pt-20 relative rounded-r-2xl">
                <img src="../../../public/background/login-bg-icon.png" alt="login-bg-icon" class="absolute top-10 right-10">
                <div class="flex justify-end ml-20">
                    <img src="../../../public/background/login_background.png" alt="login_background" class="right-0 max-h-[70vh]">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AuthLayout',
};
</script>