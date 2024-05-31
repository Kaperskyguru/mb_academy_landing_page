<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      showAnswer: {}, // Initialize showAnswer as an empty object
      faqs: [
        {
          id: 1,
          question: 'What are the Advanced Bootcamp and the Free Bootcamp',
          answer:
            'The advanced bootcamp is a paid bootcamp the trains you to become a great and highly paid backend engineer while the free bootcamp introduces you to backend engineering foundaments.'
        },

        {
          id: 2,
          question: 'How much coding experience do I need?',
          answer:
            "While having some programming experience will help you complete the material faster, it is not required. I recommend jumping straight in and learning Backend engineering, and using other supplementary resources like our free Backend Bootcamp after you've mastered the Backend Engineering fundamentals."
        },

        {
          id: 3,
          question: 'Do I need to learn other languages before I can start learning backend?',
          answer:
            'No. While having some programming experience will help you complete the material faster, it is not required. I recommend jumping that you at least finish our free Backend Bootcamp to gain foundemental knowledge of backend engineering.'
        },

        {
          id: 4,
          question: 'How long does it take to complete the Bootcamp?',
          answer:
            'It depends upon how much time you can devote per week, but most students can complete the material in 1-6 months.'
        },

        {
          id: 5,
          question: 'What happens after I buy?',
          answer:
            "You'll receive an email with a registration link to instantly join the program, and start taking advantage of all the on-demand content. If you opt in for the bonuses, you'll get emails about those, too."
        },

        {
          id: 6,
          question: "What if I'm not satisfied with the bootcamp after I buy?",
          answer:
            "We offer a no-questions-asked 30-day money back guarantee. If you're not satisfied with your purchase, please email info@masteringbackend.com."
        },

        {
          id: 7,
          question: "What if I don't see my question answered here?",
          answer: 'Please email info@masteringbackend.com if you have any further questions.'
        }
        // Add more FAQs as needed
      ]
    }
  },
  methods: {
    toggleAnswer(id) {
      this.showAnswer[id] = !this.showAnswer[id] // Toggle the visibility of the answer
    }
  }
}
</script>

<template>
  <section class="py-10 flex flex-col items-center gap-10 pb-32">
    <div class="w-full lg:w-[600px] flex flex-col gap-6 items-center">
      <h2 class="font-bold text-2xl lg:text-4xl">FAQ</h2>
      <p class="lg:text-xl text-center">
        Here are some commonly asked questions about the Advanced Backend Bootcamp
      </p>
    </div>
    <main class="flex flex-col gap-4 lg:w-[900px]">
      <div v-for="faq in faqs" :key="faq.id" class="flex flex-col gap-3 w-full">
        <button
          @click="toggleAnswer(faq.id)"
          class="bg-white shadow-md border rounded-2xl lg:p-5 p-2 flex lg:px-10 justify-between w-full items-center"
        >
          <p class="lg:text-xl text-xs font-medium">{{ faq.question }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="lg:w-6 lg:h-6 w-4 h-4"
            :class="{ 'transform rotate-180': showAnswer[faq.id] }"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <p v-show="showAnswer[faq.id]" class="text-xs p-5 lg:text-base">{{ faq.answer }}</p>
      </div>
    </main>
  </section>
</template>
