<script>
import AuthLayout from '../../components/layouts/AuthLayout.vue';

export default {
    name: "Login",
    components: {
        AuthLayout
    },
    data() {
        return {
            password: '',
            showPassword: false,
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
    },
}
</script>

<template>
    <AuthLayout>
        <div class="flex flex-col gap-8 w-full md:w-9/12">
            <span class="text-xl md:text-2xl lg:text-2xl text-custom-black font-bold">Let’s create your account</span>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label for="email" class="text-md text-custom-black font-semibold">Email</label>
                    <input type="text" v-model="email" name="email" class="rounded-lg border border-[#8E8E8E80] px-3 py-2 active:outline-none focus-visible:outline-none">
                </div>
                <div class="flex flex-col gap-2 relative">
                    <label for="password" class="text-md text-custom-black font-semibold">Password</label>
                    <input :type="showPassword ? 'text' : 'password'" v-model="password" name="password" class="rounded-lg relative border border-[#8E8E8E80] px-3 py-2 active:outline-none focus-visible:outline-none">
                    <svg @click="togglePasswordVisibility" :class="{ 'hidden': showPassword, 'block': !showPassword }" class="absolute right-0 bottom-2.5 mt-12 mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_42_2594)">
                        <path d="M12.1083 7.89161L7.89161 12.1083C7.33245 11.5491 7.01831 10.7907 7.01831 9.99994C7.01831 9.60839 7.09543 9.22067 7.24527 8.85892C7.39512 8.49717 7.61474 8.16848 7.89161 7.89161C8.16848 7.61474 8.49717 7.39512 8.85892 7.24527C9.22067 7.09543 9.60839 7.01831 9.99994 7.01831C10.7907 7.01831 11.5491 7.33245 12.1083 7.89161Z" stroke="#1D1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.8501 4.80828C13.3918 3.70828 11.7251 3.10828 10.0001 3.10828C7.05845 3.10828 4.31678 4.84161 2.40845 7.84161C1.65845 9.01661 1.65845 10.9916 2.40845 12.1666C3.06678 13.1999 3.83345 14.0916 4.66678 14.8083M7.01678 16.2749C7.96678 16.6749 8.97511 16.8916 10.0001 16.8916C12.9418 16.8916 15.6834 15.1583 17.5918 12.1583C18.3418 10.9833 18.3418 9.00828 17.5918 7.83328C17.3168 7.39994 17.0168 6.99161 16.7084 6.60828" stroke="#1D1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9251 10.5833C12.8122 11.1646 12.5282 11.6989 12.1094 12.1176C11.6907 12.5364 11.1564 12.8204 10.5751 12.9333M7.89175 12.1083L1.66675 18.3333M18.3334 1.66663L12.1084 7.89163" stroke="#1D1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_42_2594">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <!-- show icon -->
                    <svg @click="togglePasswordVisibility" :class="{ 'block': showPassword, 'hidden': !showPassword }" class="absolute right-0 top-1 mt-9 mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.69629 10.2687C1.63872 10.0959 1.63867 9.90895 1.69614 9.73619C2.85311 6.2581 6.13399 3.75 10.0007 3.75C13.8656 3.75 17.1452 6.25577 18.3036 9.73134C18.3612 9.90406 18.3612 10.0911 18.3038 10.2638C17.1468 13.7419 13.8659 16.25 9.99922 16.25C6.13433 16.25 2.8547 13.7442 1.69629 10.2687Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="flex justify-end">
                <button class="w-fit btn-orange btn-orange-color rounded-lg text-white px-8 py-2 font-semibold tracking-widest">Next</button>
            </div>
        </div>
    </AuthLayout>
</template>