<template>
  <section id="pricing" class="relative z-10 py-16 md:py-20 lg:py-28">
    <div class="container">
      <SectionTitle
        title="Simple and Affordable Pricing"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        center
        width="665px"
      />

      <div class="w-full">
        <div
          class="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
          data-wow-delay=".1s"
        >
          <span
            @click.prevent="isMonthly = true"
            :class="{
              'pointer-events-none text-primary': isMonthly,
              'text-dark dark:text-white': !isMonthly,
            }"
            class="mr-4 cursor-pointer text-base font-semibold"
          >
            Monthly
          </span>
          <div
            @click.prevent="isMonthly = !isMonthly"
            class="flex cursor-pointer items-center"
          >
            <div class="relative">
              <div
                class="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"
              ></div>
              <div
                :class="{
                  'translate-x-full': !isMonthly,
                }"
                class="shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition"
              >
                <span class="active h-4 w-4 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
          <span
            @click.prevent="isMonthly = false"
            :class="{
              'text-dark dark:text-white': isMonthly,
              'pointer-events-none text-primary': !isMonthly,
            }"
            class="ml-4 cursor-pointer text-base font-semibold"
          >
            Yearly
          </span>
        </div>
      </div>

      <div
        class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
      >
        <PricingBox
          packageName="Lite"
          :price="isMonthly ? '40' : '120'"
          :duration="isMonthly ? 'mo' : 'yr'"
          subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
        >
          <OfferList text="All UI Components" status="active" />
          <OfferList text="Use with Unlimited Projects" status="active" />
          <OfferList text="Commercial Use" status="active" />
          <OfferList text="Email Support" status="active" />
          <OfferList text="Lifetime Access" status="inactive" />
          <OfferList text="Free Lifetime Updates" status="inactive" />
        </PricingBox>
        <PricingBox
          packageName="Basic"
          :price="isMonthly ? '399' : '789'"
          :duration="isMonthly ? 'mo' : 'yr'"
          subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
        >
          <OfferList text="All UI Components" status="active" />
          <OfferList text="Use with Unlimited Projects" status="active" />
          <OfferList text="Commercial Use" status="active" />
          <OfferList text="Email Support" status="active" />
          <OfferList text="Lifetime Access" status="active" />
          <OfferList text="Free Lifetime Updates" status="inactive" />
        </PricingBox>
        <PricingBox
          packageName="Plus"
          :price="isMonthly ? '589' : '999'"
          :duration="isMonthly ? 'mo' : 'yr'"
          subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
        >
          <OfferList text="All UI Components" status="active" />
          <OfferList text="Use with Unlimited Projects" status="active" />
          <OfferList text="Commercial Use" status="active" />
          <OfferList text="Email Support" status="active" />
          <OfferList text="Lifetime Access" status="active" />
          <OfferList text="Free Lifetime Updates" status="active" />
        </PricingBox>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 z-[-1]">
      <svg
        width="239"
        height="601"
        viewBox="0 0 239 601"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.3"
          x="-184.451"
          y="600.973"
          width="196"
          height="541.607"
          rx="2"
          transform="rotate(-128.7 -184.451 600.973)"
          fill="url(#paint0_linear_93:235)"
        />
        <rect
          opacity="0.3"
          x="-188.201"
          y="385.272"
          width="59.7544"
          height="541.607"
          rx="2"
          transform="rotate(-128.7 -188.201 385.272)"
          fill="url(#paint1_linear_93:235)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_93:235"
            x1="-90.1184"
            y1="420.414"
            x2="-90.1184"
            y2="1131.65"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_93:235"
            x1="-159.441"
            y1="204.714"
            x2="-159.441"
            y2="915.952"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>

<script setup>
const isMonthly = ref(true);
</script>

<style>
</style>
