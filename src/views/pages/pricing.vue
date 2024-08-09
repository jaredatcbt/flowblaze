<template>
    <navbar />
    <!-- Pricing Page Start -->
    <div class="lg:p-0 p-4">
        <div class="bg-[#FFFFFF] text-center rounded-lg mx-auto lg:py-14 lg:px-12 py-16 px-6 xl:w-10/12 lg:w-11/12 space-y-6 lg:mb-20 mb-8 lg:mt-24">
            <p class="mx-auto font-semibold md:text-4xl text-3xl leading-9 lg:w-[317px] text-custom-black">Transparent and simple pricing</p>
            <p class="font-light text-base leading-5 lg:w-[600px] mx-auto text-custom-black">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
            <div class="flex lg:flex-row flex-col gap-6 xl:px-6 w-full pt-14">
                <!-- Explorer -->
                <div  @mouseenter="btn_hover_active_function('explorer', true)" @mouseleave="btn_hover_active_function('explorer', false)" class="py-8 lg:px-8 px-6 text-left border border-gray-300 hover:bg-[#FFF3ED] hover:border-none hover:shadow-2xl rounded-lg ">
                    <p class="font-semibold text-xl leading-4 text-custom-black mb-12">Explorer</p>
                    <p class="text-xs leading-5 font-normal mb-6 text-custom-black">Distinctio et nulla eum soluta et neque labore quibusdAM. Saepe et quasi iusto modi velit ut non</p>
                    <p class="flex gap-1 items-center mb-8"><span class="text-[#FB7232] font-medium text-2xl leading-4">$0</span><span class="text-sm leading-4 tracking-tight text-custom-black">/months</span></p>
                    <div class="space-y-4 mb-16">
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta et neque labore</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta et</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">nulla eum soluta et neque labore</p>
                        </div>
                    </div>
                    <button type="button" class="text-sm leading-4 tracking-tighter text-[#FB7232] border border-[#FB7232] w-full py-3 rounded-lg" :class="{'text-[#FFFFFF] bg-[#FB7232]':btn_hover_active_explorer }">
                        Buy Now
                    </button>
                </div>
                <!-- Edge -->
                <div  @mouseenter="btn_hover_active_function('edge', true)" @mouseleave="btn_hover_active_function('edge', false)" class="py-8 lg:px-8 px-6 text-left rounded-lg  border border-gray-300 hover:bg-[#FFF3ED] hover:border-none hover:shadow-2xl">
                    <div class="mb-7 flex flex-row min-width-300 md:gap-0 gap-6 justify-between items-center">
                        <p class="font-semibold text-xl leading-4 text-custom-black">Edge</p>
                        <button type="button" class="py-2.5 px-4 text-xs leading-4 tracking-tighter text-center text-[#FFFFFF] btn-orange-color custom-border-radius">
                            Most Popular
                        </button>
                    </div>
                    <p class="text-xs leading-5 font-normal mb-6 text-custom-black">Distinctio et nulla eum soluta et neque labore quibusdAM. Saepe et quasi iusto modi velit ut non</p>
                    <p class="flex gap-1 items-center mb-8"><span class="text-[#FB7232] font-medium text-2xl leading-4">$9</span><span class="text-sm leading-4 tracking-tight text-custom-black">/months</span></p>
                    <div class="space-y-4 mb-16">
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta et neque labore</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta et</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">nulla eum soluta et neque labore</p>
                        </div>
                    </div>
                    <button type="button" class="text-sm leading-4 tracking-tighter text-[#FB7232] border border-[#FB7232] w-full py-3 rounded-lg" :class="{'text-[#FFFFFF] bg-[#FB7232]':btn_hover_active_edge }">
                        Buy Now
                    </button>
                </div>
                <!-- Excellence -->
                <div  @mouseenter="btn_hover_active_function('excellence', true)" @mouseleave="btn_hover_active_function('excellence', false)" class="py-8 lg:px-8 px-6 text-left border border-gray-300 hover:bg-[#FFF3ED] hover:border-none hover:shadow-2xl rounded-lg ">
                    <p class="font-semibold text-xl leading-4 text-custom-black mb-12">Excellence</p>
                    <p class="text-xs leading-5 font-normal mb-6 text-custom-black">Distinctio et nulla eum soluta et neque labore quibusdAM. Saepe et quasi iusto modi velit ut non</p>
                    <p class="flex gap-1 items-center mb-8"><span class="text-[#FB7232] font-medium text-2xl leading-4">$15</span><span class="text-sm leading-4 tracking-tight text-custom-black">/months</span></p>
                    <div class="space-y-4 mb-16">
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta et neque labore</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla eum soluta et</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">Distinctio et nulla</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img src="../../../public/check.png" alt="">
                            <p class="text-xs leading-4 tracking-tight text-custom-black">nulla eum soluta et neque labore</p>
                        </div>
                    </div>
                    <button type="button" class="text-sm leading-4 tracking-tighter text-[#FB7232] border border-[#FB7232] w-full py-3 rounded-lg" :class="{'text-[#FFFFFF] bg-[#FB7232]':btn_hover_active_excellence }">
                        Buy Now
                    </button>
                </div>
            </div>   
        </div>
    </div>
    <!-- Pricing Page End -->
    <footerNav />
</template>
<script>
import navbar from '../../components/layouts/navbar.vue';
import footerNav from '../../components/layouts/footer.vue';

export default {
    name:'pricing',
    components: {
        navbar,
        footerNav,
    },
    data() {
        return {
            btn_hover_active_explorer: false,
            btn_hover_active_edge: false,
            btn_hover_active_excellence: false
        }
    },
    methods:{
        btn_hover_active_function(divName, value){
            switch (divName) {
                case 'explorer':
                this.btn_hover_active_explorer = value;
                break;
                case 'edge':
                this.btn_hover_active_edge = value;
                break;
                case 'excellence':
                this.btn_hover_active_excellence = value;
                break;
            }
        }
    }
};
</script>