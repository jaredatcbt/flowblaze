<script>
import navbar from '../../components/layouts/navbar.vue';
import footerNav from '../../components/layouts/footer.vue';
import scrollToTop from '../../components/layouts/gototopScroller.vue';

export default {
  name: "CustomHome",
  components: {
    navbar,
    footerNav,
    scrollToTop
  }
}
</script>

<template>
  <navbar />
    <!-- Start Header Section -->
    <div class="header w-full flex lg:flex-row flex-col lg:p-0 p-6">
      <div class="flex flex-col lg:px-10 lg:py-14 p-3 md:mb-0 mb-8">
        <p class="text-custom-black font-normal w-full mb-6 lg:text-5xl text-3xl">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum
        </p>
        <p class="left-paragraph text-[#1F1F1F80] font-normal mb-6 text-xl w-full">
          Lorem ipsum dolor sit amet consectetur. Morbi magna imperdiet imperdiet turpis elit sit ut nisl facilisi. Arcu
          non nunc tellus tristique adipiscing nibh.
        </p>
        <button type="button" class="btn-orange btn-orange-color tracking-widest rounded-lg text-left w-max font-semibold py-3 px-8 text-white">
          GET STARTED
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.65114 1.15466C6.58423 1.09612 6.5063 1.05156 6.42191 1.0236C6.33753 0.995631 6.24841 0.984822 6.15979 0.991807C6.07117 0.998793 5.98484 1.02343 5.90589 1.06427C5.82693 1.10511 5.75694 1.16133 5.70003 1.22962C5.64312 1.29791 5.60044 1.3769 5.57451 1.46192C5.54858 1.54695 5.53991 1.63631 5.54902 1.72473C5.55813 1.81316 5.58483 1.89887 5.62756 1.97683C5.67028 2.05478 5.72817 2.1234 5.7978 2.17866L8.75114 4.63999H1.14714C0.970324 4.63999 0.800755 4.71023 0.675731 4.83525C0.550707 4.96028 0.480469 5.12985 0.480469 5.30666C0.480469 5.48347 0.550707 5.65304 0.675731 5.77806C0.800755 5.90308 0.970324 5.97332 1.14714 5.97332H8.6298L5.7978 8.33332C5.66183 8.44648 5.57639 8.60902 5.56026 8.78518C5.54413 8.96134 5.59864 9.13669 5.7118 9.27266C5.82496 9.40862 5.9875 9.49407 6.16366 9.5102C6.33982 9.52633 6.51517 9.47182 6.65114 9.35866L10.9578 5.76799C11.0328 5.70542 11.0932 5.62713 11.1346 5.53866C11.176 5.45018 11.1975 5.35368 11.1975 5.25599C11.1975 5.1583 11.176 5.0618 11.1346 4.97332C11.0932 4.88485 11.0328 4.80656 10.9578 4.74399L6.65114 1.15466Z"
              fill="white" />
          </svg>
        </button>
      </div>
      <img src="../../../public/dashboard.png" class="lg:ml-auto lg:w-1/2 xl:w-full md:w-full md:h-[739px]" alt="">
    </div>
    <!-- End Header Section -->
    <div class="vector-image">
      <!-- Start Project Management Section -->
      <div class="project-management w-full flex lg:flex-row flex-col lg:p-0 p-6 lg:mb-16 mb-6">
        <div class="flex flex-col lg:px-10 lg:py-0 p-3">
          <p class="text-orange-color font-semibold text-base leading-5">
            Flowblaze work management
          </p>
          <p class="text-gray-color text-sm font-light leading-5 mb-8">
            #1 WORK MANAGEMENT SOFTWARE
          </p>
          <p class="font-semibold text-custom-black text-[24px] leading-9 mb-7 ">
            Manage everything from strategy to tasks to exceed your goals
          </p>
          <div class="text-custom-black h-[267px] border-t border-gray-400 border-opacity-50 md:mb-0 mb-8">
            <p class="my-6 text-base leading-8 font-light text-custom-black">
              Top features
            </p>
            <p class="my-1 flex gap-3 items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_4215)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.36416 19.1183C14.5359 19.1183 18.7283 14.9259 18.7283 9.75417C18.7283 4.5825 14.5359 0.390015 9.36416 0.390015C4.19249 0.390015 0 4.5825 0 9.75417C0 14.9259 4.19249 19.1183 9.36416 19.1183ZM14.0874 7.64201C14.4213 7.20409 14.3369 6.5784 13.899 6.24454C13.461 5.91067 12.8353 5.99504 12.5015 6.43299L8.80907 11.2764L7.0086 9.1158C6.65606 8.69276 6.02731 8.63559 5.60427 8.98813C5.18121 9.34067 5.12406 9.96941 5.4766 10.3925L8.87844 14.4747L14.0874 7.64201Z"
                    fill="#FB7232" />
                </g>
                <defs>
                  <clipPath id="clip0_6_4215">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.390015)" />
                  </clipPath>
                </defs>
              </svg>
              Project management
            </p>
            <p class="my-1 flex gap-3 items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_4215)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.36416 19.1183C14.5359 19.1183 18.7283 14.9259 18.7283 9.75417C18.7283 4.5825 14.5359 0.390015 9.36416 0.390015C4.19249 0.390015 0 4.5825 0 9.75417C0 14.9259 4.19249 19.1183 9.36416 19.1183ZM14.0874 7.64201C14.4213 7.20409 14.3369 6.5784 13.899 6.24454C13.461 5.91067 12.8353 5.99504 12.5015 6.43299L8.80907 11.2764L7.0086 9.1158C6.65606 8.69276 6.02731 8.63559 5.60427 8.98813C5.18121 9.34067 5.12406 9.96941 5.4766 10.3925L8.87844 14.4747L14.0874 7.64201Z"
                    fill="#FB7232" />
                </g>
                <defs>
                  <clipPath id="clip0_6_4215">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.390015)" />
                  </clipPath>
                </defs>
              </svg>
              Resource management
            </p>
            <p class="my-1 flex gap-3 items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_4215)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.36416 19.1183C14.5359 19.1183 18.7283 14.9259 18.7283 9.75417C18.7283 4.5825 14.5359 0.390015 9.36416 0.390015C4.19249 0.390015 0 4.5825 0 9.75417C0 14.9259 4.19249 19.1183 9.36416 19.1183ZM14.0874 7.64201C14.4213 7.20409 14.3369 6.5784 13.899 6.24454C13.461 5.91067 12.8353 5.99504 12.5015 6.43299L8.80907 11.2764L7.0086 9.1158C6.65606 8.69276 6.02731 8.63559 5.60427 8.98813C5.18121 9.34067 5.12406 9.96941 5.4766 10.3925L8.87844 14.4747L14.0874 7.64201Z"
                    fill="#FB7232" />
                </g>
                <defs>
                  <clipPath id="clip0_6_4215">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.390015)" />
                  </clipPath>
                </defs>
              </svg>
              Requests & approvals
            </p>
            <p class="my-1 flex gap-3 items-center mb-8">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_4215)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.36416 19.1183C14.5359 19.1183 18.7283 14.9259 18.7283 9.75417C18.7283 4.5825 14.5359 0.390015 9.36416 0.390015C4.19249 0.390015 0 4.5825 0 9.75417C0 14.9259 4.19249 19.1183 9.36416 19.1183ZM14.0874 7.64201C14.4213 7.20409 14.3369 6.5784 13.899 6.24454C13.461 5.91067 12.8353 5.99504 12.5015 6.43299L8.80907 11.2764L7.0086 9.1158C6.65606 8.69276 6.02731 8.63559 5.60427 8.98813C5.18121 9.34067 5.12406 9.96941 5.4766 10.3925L8.87844 14.4747L14.0874 7.64201Z"
                    fill="#FB7232" />
                </g>
                <defs>
                  <clipPath id="clip0_6_4215">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.390015)" />
                  </clipPath>
                </defs>
              </svg>
              Custom workflows
            </p>

            <button type="button" class="btn-orange btn-orange-color rounded-lg tracking-widest font-semibold py-2.5 px-8 text-white">
              TRY NOW
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.65114 1.15466C6.58423 1.09612 6.5063 1.05156 6.42191 1.0236C6.33753 0.995631 6.24841 0.984822 6.15979 0.991807C6.07117 0.998793 5.98484 1.02343 5.90589 1.06427C5.82693 1.10511 5.75694 1.16133 5.70003 1.22962C5.64312 1.29791 5.60044 1.3769 5.57451 1.46192C5.54858 1.54695 5.53991 1.63631 5.54902 1.72473C5.55813 1.81316 5.58483 1.89887 5.62756 1.97683C5.67028 2.05478 5.72817 2.1234 5.7978 2.17866L8.75114 4.63999H1.14714C0.970324 4.63999 0.800755 4.71023 0.675731 4.83525C0.550707 4.96028 0.480469 5.12985 0.480469 5.30666C0.480469 5.48347 0.550707 5.65304 0.675731 5.77806C0.800755 5.90308 0.970324 5.97332 1.14714 5.97332H8.6298L5.7978 8.33332C5.66183 8.44648 5.57639 8.60902 5.56026 8.78518C5.54413 8.96134 5.59864 9.13669 5.7118 9.27266C5.82496 9.40862 5.9875 9.49407 6.16366 9.5102C6.33982 9.52633 6.51517 9.47182 6.65114 9.35866L10.9578 5.76799C11.0328 5.70542 11.0932 5.62713 11.1346 5.53866C11.176 5.45018 11.1975 5.35368 11.1975 5.25599C11.1975 5.1583 11.176 5.0618 11.1346 4.97332C11.0932 4.88485 11.0328 4.80656 10.9578 4.74399L6.65114 1.15466Z"
                  fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <img src="../../../public/project-management.png" class="lg:ml-auto w-full md:h-[543px]" alt="">
      </div>
      <!-- End Proeject Management Section -->
      <!-- Start Automatically Updated Section -->
      <div class="automatically-update text-center md:mb-28 mb-9 lg:p-0 p-6">
        <div class="space-y-3 mb-8">
          <p class="text-custom-black font-normal md:text-4xl text-3xl line-height-35">Everybody in one place.</p>
          <p class="text-custom-orange font-normal md:text-4xl text-3xl">Automatically updated.</p>
        </div>
        <img src="../../../public/automatically-update.png" class="w-auto mx-auto md:h-[543px]" alt="">
      </div>
      <!-- End Automatically Updated Section -->
      <!-- Start Profile Members Section -->
      <div class="profile-members mb-20 lg:p-0 p-6">
        <p class="mx-auto text-center text-custom-black font-normal md:text-4xl text-3xl line-height-35 lg:w-2/5">Trusted by executives, teams and
          professionals globally</p>
        <div class="flex xl:w-10/12 lg:w-11/12 mx-auto lg:flex-row justify-center gap-6 items-center flex-col lg:p-0 p-3">
          <!-- first column -->
          <div class="first-column flex flex-col">
            <!-- start first card -->
            <div class="max-w-sm mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden shadow-custom">
              <div class="px-6 py-4">
                <div class="flex gap-3">
                  <img class="w-7 h-7 rounded-full" src="../../../public/person1.png" alt="Profile Picture">
                  <h2 class="text-xs font-semibold text-custom-black mt-1">Erin Mikail Staples</h2>
                </div>
                <div class="mt-4">
                  <p class="text-gray-600 font-normal text-sm mb-3">
                    I use <b class="text-custom-black">clay.earth</b> and it’s been doing wonders. Also incorporates email,
                    calendar and even text messages and has notes built in. For all those times that you’re like “I swear
                    I know someone in that space”
                  </p>
                </div>
              </div>
            </div>
            <!-- end first card -->
            <!-- start second card -->
            <div class="max-w-sm mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden shadow-custom">
              <div class="px-6 py-4">
                <div class="flex gap-3">
                  <img class="w-7 h-7 rounded-full" src="../../../public/person2.png" alt="Profile Picture">
                  <h2 class="text-xs font-semibold text-custom-black mt-1">Tem Nugmanov</h2>
                </div>
                <div class="mt-4">
                  <p class="text-gray-600 font-normal text-sm mb-5">
                    Clay is an incredibly thoughtfully and aesthetically built product. I’ve been on the hunt for a
                    personal CRM for a long-time before finally finding Clay. It’s just too good.
                  </p>
                  <p class="text-gray-600 font-normal text-sm mb-3">
                    My favorite thing is the “Review” dashboard that curates (re)connection prompts and enables you to
                    stay on top of your network 10/10 Product.
                  </p>
                </div>
              </div>
            </div>
            <!-- end second card -->
          </div>
          <!-- second column -->
          <div class="second-column flex flex-col">
            <!-- start third card -->
            <div class="max-w-sm mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden shadow-custom">
              <div class="px-6 py-4">
                <div class="flex gap-3">
                  <img class="w-7 h-7 rounded-full" src="../../../public/person3.png" alt="Profile Picture">
                  <h2 class="text-xs font-semibold text-custom-black mt-1">Mert Alemdar</h2>
                </div>
                <div class="mt-4">
                  <p class="text-gray-600 font-normal text-sm mb-5">
                    As a dedicated Obsidian user in the past, my encounter with Clay eliminated the need for anything
                    else. Clay offers an extremely simple, minimalist, and user-friendly interface. Now, I can activate my
                    notes directly from any application on my computer, effortlessly translating my thoughts into writing.
                  </p>
                  <p class="text-gray-600 font-normal text-sm mb-3">
                    Moreover, thanks to artificial intelligence integration, I have the freedom to intervene in my notes
                    in any desired direction, and I can receive assistance in discovering the relationships between the
                    notes afterward. This experience is truly astounding, and in my view, I no longer need anything else.
                  </p>
                </div>
              </div>
            </div>
            <!-- end third card -->
            <!-- start fourth card -->
            <div class="max-w-sm mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden shadow-custom">
              <div class="px-6 py-4">
                <div class="flex gap-3">
                  <img class="w-7 h-7 rounded-full" src="../../../public/person4.png" alt="Profile Picture">
                  <h2 class="text-xs font-semibold text-custom-black mt-1">Leila Blauner</h2>
                </div>
                <div class="mt-4">
                  <p class="text-gray-600 font-normal text-sm mb-5">
                    I love that Clay serves as a fast memory refresher. For any person in contacts in any communication
                    system or that I've had contact with before, Clay will tell me how me how many times I've spoken with
                    them and over what time period, in what formats, etc. and will show me those communications. This is
                    useful before meetings as a memory refresher or if a name just looks familiar but I can't remember how
                    I know the person.
                  </p>
                  <p class="text-gray-600 font-normal text-sm mb-3">
                    Additionally, their customer service is outstanding. They are so responsive, caring, and helpful. Riri
                    was the last person that helped me, and I suspect Riri is probably representative of the whole team.
                  </p>
                </div>
              </div>
            </div>
            <!-- end fourth card -->
          </div>
          <!-- third column -->
          <div class="third-column flex flex-col">
            <!-- start fifth card -->
            <div class="max-w-sm mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden shadow-custom">
              <div class="px-6 py-4">
                <div class="flex gap-3">
                  <img class="w-7 h-7 rounded-full" src="../../../public/person5.png" alt="Profile Picture">
                  <h2 class="text-xs font-semibold text-custom-black mt-1">Steven</h2>
                </div>
                <div class="mt-4">
                  <p class="text-gray-600 font-normal text-sm mb-5">
                    The user experience, overall sentiment, and interface design in Clay are world class. It is an
                    excellent relationship manager that helps you consolidate contacts, take notes, and remember when to
                    reach out. It has a lot of useful features, such as reminders, search, contact updates, and more.
                  </p>
                  <p class="text-gray-600 font-normal text-sm mb-3">
                    Clay is an awesome platform with huge potential, I highly recommend giving it a try.
                  </p>
                </div>
              </div>
            </div>
            <!-- end fifth card -->
            <!-- start sixth card -->
            <div class="max-w-sm mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden shadow-custom">
              <div class="px-6 py-4">
                <div class="flex gap-3">
                  <img class="w-7 h-7 rounded-full" src="../../../public/person6.png" alt="Profile Picture">
                  <h2 class="text-xs font-semibold text-custom-black mt-1">Jaclyn Siu</h2>
                </div>
                <div class="mt-4">
                  <p class="text-gray-600 font-normal text-sm mb-3">
                    Low-key the most excited about @ClayHQ since I’ve long practiced thoughtful networking, a philosophy
                    never reflected in CRM tools until now. Relationship mgmt is a delicate art and clay seems to get it
                    right. Contacts syncing as I tweet!
                  </p>
                </div>
              </div>
            </div>
            <!-- end sixth card -->
          </div>
        </div>
      </div>
      <!-- End Profile Members Section -->
      <!-- Start Subscription -->
      <div class="text-center mx-auto mb-24 lg:p-0 p-6">
        <p class="font-normal line-height-35 text-custom-black md:text-4xl text-3xl mb-4">Get started for free</p>
        <p class="lg:w-[650px] md:w-9/12 w-3/4 mb-12 mx-auto font-normal text-base leading-6 text-gray-rgba-color">Your relationships are
          fundamental to your personal and professional success. Experiencefirsthand how Clay can revolutionize your
          productivity, work and happiness.</p>
        <button type="button" class="btn-orange text-uppercase w-max mx-auto btn-orange-color tracking-widest rounded-lg py-3 px-8 font-semibold text-white">
          Get flowblaze Free
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.65114 1.15466C6.58423 1.09612 6.5063 1.05156 6.42191 1.0236C6.33753 0.995631 6.24841 0.984822 6.15979 0.991807C6.07117 0.998793 5.98484 1.02343 5.90589 1.06427C5.82693 1.10511 5.75694 1.16133 5.70003 1.22962C5.64312 1.29791 5.60044 1.3769 5.57451 1.46192C5.54858 1.54695 5.53991 1.63631 5.54902 1.72473C5.55813 1.81316 5.58483 1.89887 5.62756 1.97683C5.67028 2.05478 5.72817 2.1234 5.7978 2.17866L8.75114 4.63999H1.14714C0.970324 4.63999 0.800755 4.71023 0.675731 4.83525C0.550707 4.96028 0.480469 5.12985 0.480469 5.30666C0.480469 5.48347 0.550707 5.65304 0.675731 5.77806C0.800755 5.90308 0.970324 5.97332 1.14714 5.97332H8.6298L5.7978 8.33332C5.66183 8.44648 5.57639 8.60902 5.56026 8.78518C5.54413 8.96134 5.59864 9.13669 5.7118 9.27266C5.82496 9.40862 5.9875 9.49407 6.16366 9.5102C6.33982 9.52633 6.51517 9.47182 6.65114 9.35866L10.9578 5.76799C11.0328 5.70542 11.0932 5.62713 11.1346 5.53866C11.176 5.45018 11.1975 5.35368 11.1975 5.25599C11.1975 5.1583 11.176 5.0618 11.1346 4.97332C11.0932 4.88485 11.0328 4.80656 10.9578 4.74399L6.65114 1.15466Z"
              fill="white" />
          </svg>
        </button>
      </div>
      <!-- End Subscription -->
    <footerNav />
    <scrollToTop />
  </div>
</template>
