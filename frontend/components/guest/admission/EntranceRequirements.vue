<!-- components/EntranceRequirements.vue -->
<template>
  <div class="pb-24">
    <h4 class="text-3xl text-gray-700 mb-4">All the details you might need</h4>
    <h3 class="text-2xl my-8 font-semibold text-gray-800">
      {{ currentContent.title }}
    </h3>
    <div>
      <p
        v-for="(line, index) in formattedText"
        :key="index"
        class="text-left text-gray-800 text-xl tracking-wide"
      >
        <span v-if="line !== ''">{{ line }}</span>
        <br v-else />
      </p>
    </div>
    <div
      class="sticky bottom-0 bg-white py-4 flex justify-around text-lg font-bold"
    >
      <button
        @click="prevStep"
        :disabled="currentStep === 1"
        class="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 select-none flex items-center"
      >
        <span class="flex items-center">
          <Icon name="material-symbols:chevron-left" class="mr-1" /> Previous
        </span>
      </button>
      <button
        @click="nextStep"
        :disabled="currentStep === 4"
        class="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white select-none flex items-center"
      >
        <span class="flex items-center">
          Next <Icon name="material-symbols:chevron-right" class="ml-1" />
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currentStep = ref(1);

const content = [
  {
    title: "Part 1: Attested certificate or qualification",
    text: `For an admission to a university, there are some general requirements binding on all higher education institutions in Latvia.\n\nAll applicants applying for a definite level of studies (bachelor, master or doctoral studies) must have an attested certificate or qualification allowing to pursue the desired studies. Usually it is secondary level diploma or high school diploma and academic transcript for college or Bachelor level (undergraduate) study programmes or higher education degree diploma and academic transcript for Master level (postgraduate) study programmes or Doctoral studies.\n\nApplicant’s secondary education certificate must correspond to the Latvian standard - it should be at least 12 years at secondary level education institution.\n\nFor an admission to a university, there are some general requirements binding on all higher education institutions in Latvia.\n\nAll applicants applying for a definite level of studies (bachelor, master or doctoral studies) must have an attested certificate or qualification allowing to pursue the desired studies. Usually it is secondary level diploma or high school diploma and academic transcript for college or Bachelor level (undergraduate) study programmes or higher education degree diploma and academic transcript for Master level (postgraduate) study programmes or Doctoral studies.\n\nApplicant’s secondary education certificate must correspond to the Latvian standard - it should be at least 12 years at secondary level education institution.`,
  },
  {
    title: "Part 2: Recognition of Diploma",
    text: `Students should be aware that before proceeding with signing the study agreement and applying for the residence permit or visa, the admission office of the chosen university will send education documents for recognition of diploma.\n\n Based on the data provided by the European diploma recognition network ENIC/NARIC, the Academic Information Centre of Latvia determines whether a certificate or diploma or an academic degree awarded in a foreign country can be equated to a similar qualification in Latvia. In cases when the document being assessed does not satisfy the standards of the certificates or diplomas or academic degrees awarded in Latvia, the assessment report states what additional requirements must be met to achieve the required compliance. \n\n The time necessary for a recognition conclusion is approximately 1 month, but sometimes it may take longer because the process depends on the country where educational documents are issued. \n\n Based on the assessment report, the institution of higher education to which the student has applied can take a decision about enrolment. To find more about the recognition of foreign diplomas and qualifications, please visit website of Academic Information Centre of Latvia. The overall procedure of evaluation and recognition of foreign credentials is stated in the Law on Education, Article 11.`,
  },
  {
    title: "Part 3: Sufficient study language",
    text: `All students applying for studies in Latvia need to demonstrate sufficient study language proficiency (mostly English language). The level of knowledge must be equal or higher than standard B2 according to Common European Framework of Reference for Languages (CEFRL).
`,
  },
  {
    title: "Part 4: Specific requirements",
    text: `Requirements for secondary education graduates from the EU, EEA or Switzerland: \n The applicants, who have obtained secondary education in the EU, EEA or Switzerland and if the issued diploma includes the assessment of the study language proficiency, which is equivalent to B2 level or higher, are not required to provide an internationally recognized language proficiency certificate and can apply for studies without additional proof of the study language knowledge.\n\n If the previous diploma does not include the assessment of the study language proficiency, which is equivalent to B2 level or higher, the assessment of this language will be organized remotely by each Latvian higher education institutions, using online tools.\n\n Requirements for the secondary education graduates from other countries:\n In the academic year 2020/2021, the level of the study language proficiency of the applicants from other countries except the EU, EEA or Switzerland, could either be proven by an internationally recognized language proficiency certificate or assessed by each Latvian higher education institution.\n\nInternationally recognized language proficiency certificate:\n If the applicant can provide an internationally recognized language proficiency certificate issued in the last five years, the score should be equal or higher than standard B2.The knowledge usually should correspond IELTS 5.5-6.5, TOEFL (PBT) 500-550 or TOEFL (IBT) 70-90. The specific score depends on the university and study level. \n\n Assessment by Latvian higher education institutions:\n If the applicant cannot provide an internationally recognized language proficiency certificate issued in the last five years, the assessment by each Latvian higher education institutions will be provided by applying a unified methodology based on the Common European Framework of Reference for Languages. The assessment is organized remotely, using online tools.\n\n Requirements for graduates obtained previous education in study language:\nIn the case, when an applicant has previously acquired the secondary or higher education in English or other study language, which is mentioned in the certificate or in an official document issued by the higher education institution, no internationally recognized language proficiency certificate is required to be provided. Be aware that some universities may set additional study language online exam in this case.\n\n Institution-specific requirements:\n Higher education institution sets other entry regulations accordingly to the chosen study programme.These institution-specific requirements can include assesment of previous marks in academic transcripts, exams and tests in specific subjects, as well as online interviews. \n\n Additional requirements on what other documents need to be submitted are determined by each individual education institution according to the entrance regulations, therefore check these regulations on the websites of universites.\n\n Requirements for graduate students:\nApplicants, who wish to purse master level studies, must have completed bachelor-level studies, for doctoral-level studies completed master level studies.\n\n Requirements for exchange students:\n Student exchange is based on bilateral agreements between partner institutions or different exchange programs, for example Erasmus+, facilitating higher education students to study and train abroad during the course of the programme. Further information on application conditions and procedures is available on the respective university's webpage.`,
  },
];

const currentContent = computed(() => content[currentStep.value - 1]);

const formattedText = computed(() => {
  // Split text by \n\n for paragraphs and \n for line breaks
  return currentContent.value.text.split("\n").map((line) => line.trim());
});

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++;
  }
};
</script>

<style scoped>
button:disabled {
  background-color: #e2e8f0; /* Tailwind CSS bg-gray-200 */
  color: #a0aec0; /* Tailwind CSS text-gray-400 */
  cursor: not-allowed;
}
</style>
