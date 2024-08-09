<template>
    <nav class="bg-[#FFFFFF] mb-9">
        <div class="mx-auto sm:px-6 lg:px-8">
            <div class="relative flex h-[70px] items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
                    <!-- Mobile menu button-->
                    <button
                        @click="toggleMobileMenu"
                        type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                        v-if="!mobileMenuOpen"
                        class="block h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                        <svg
                        v-if="mobileMenuOpen"
                        class="block h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-shrink-0 items-center md:ml-0 mx-auto">
                  <router-link to="/" activeClass="home" class="hover:bg-white">
                    <h2 class="uppercase text-custom-orange custom-logo">FlowBlaze</h2>
                  </router-link>
                </div>
                <div  class="md:flex flex-1 justify-between hidden ">
                    <div class="flex flex-shrink-0 items-center mx-auto">
                        <router-link to="/commingSoon" activeClass="commingsoon" class="text-custom-black rounded-md px-3 py-2 text-sm font-medium text-sm-custom hover:text-[#FC6F43] hover:bg-white">PRODUCTS</router-link>
                        <router-link to="/pricing" activeClass="pricing" class="text-custom-black rounded-md px-3 py-2 text-sm font-medium text-sm-custom hover:text-[#FC6F43] hover:bg-white">PRICING</router-link>
                        <router-link to="/commingSoon" activeClass="commingsoon" class="text-custom-black rounded-md px-3 py-2 text-sm font-medium text-sm-custom hover:text-[#FC6F43] hover:bg-white">ABOUT</router-link>
                        <router-link to="/commingSoon" activeClass="commingsoon" class="text-custom-black rounded-md px-3 py-2 text-sm font-medium text-sm-custom hover:text-[#FC6F43] hover:bg-white">SUPPORT</router-link>
                    </div>
                    <div class="right-0">
                        <router-link to="/sign-in" activeClass="pricing" class="text-custom-black px-4 py-2 mr-3 rounded-lg text-sm-custom hover:text-[#FC6F43] hover:bg-white">
                            SIGN IN
                        </router-link>
                        <button type="button" class="text-white bg-[#333333] px-4 py-2 rounded-lg text-sm-custom hover:bg-[#FC6F43]">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div v-if="mobileMenuOpen" class="sm:hidden" id="mobile-menu">
            <div class="flex flex-col space-y-3 px-2 pb-3 pt-2">
                <div class="border-b border-[#2B2B2B]">
                  <router-link to="/commingSoon" activeClass="commingsoon" class="text-custom-black rounded-md px-3 py-2 text-sm font-medium text-sm-custom" aria-current="page">PRODUCTS</router-link>
                </div>
                <div class="border-b border-[#2B2B2B]">
                  <router-link to="/pricing" activeClass="pricing" class="text-custom-black rounded-md px-3 py-2 text-sm font-medium text-sm-custom hover:text-[#FC6F43] hover:bg-white">PRICING</router-link>
                </div>
                <div class="border-b border-[#2B2B2B]">
                  <router-link to="/commingSoon" activeClass="commingsoon" class="text-custom-black rounded-md px-3 py-2 text-sm font-medium text-sm-custom">ABOUT</router-link>
                </div>
                <div class="border-b border-[#2B2B2B]">
                  <router-link to="/commingSoon" activeClass="commingsoon" class="text-custom-black rounded-md px-3 py-2 text-sm font-medium text-sm-custom">SUPPORT</router-link>
                </div>
                <div class="flex justify-center gap-3">
                  <router-link to="/sign-in" activeClass="pricing" class="text-custom-black px-4 py-2 mr-3 rounded-lg text-sm-custom hover:text-[#FC6F43] hover:bg-white">
                      SIGN IN
                  </router-link>
                  <button type="button" class="text-white bg-[#333333] px-4 py-2 rounded-lg text-sm-custom hover:bg-[#FC6F43]">
                      Get Started
                  </button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'navbar',
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
};
</script>