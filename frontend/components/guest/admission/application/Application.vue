<!-- components/StartOnlineApplication.vue -->
<template>
  <div>
    <div>
      <div class="text-left text-xl text-gray-800 mt-12">
        <p>
          <span class="font-bold">Check if you qualify.</span> If you haven't
          done so, check the entrance requirements first.
        </p>
        <p class="my-6">
          <span class="font-bold">Choose your intake.</span> This university has
          2 intakes: <span class="font-semibold">Spring</span> and
          <span class="font-semibold">Autumn</span>.*<br /><br />
          Spring intake usually starts in November and runs until December with
          studies starting in February. <br /><br />Autumn intake usually starts
          in March and is open until July or August with studies starting in
          September. <br /><br />
          <span class="italic">
            *Be aware that intake deadlines may be set earlier depending on your
            citizenship.</span
          >
        </p>
        <p>
          <span class="font-bold">Ask if you have questions. </span> Contact
          international office of the chosen university or Study in Latvia if
          you have additional questions.
        </p>
      </div>
      <div class="mt-12">
        <h5 class="text-2xl font-semibold mb-4 text-gray-800">
          Before starting the online application procedure, please, prepare the
          following documents:
        </h5>
        <ul
          class="list-disc list-inside space-y-4 text-left text-xl text-gray-800"
        >
          <li>
            A copy of the secondary education certificate(s)* with a transcript
            in the original language and an official translation to English or
            Russian;
          </li>
          <li>
            A copy of the Bachelor’s degree certificate* with a transcript in
            the original language and an official translation to English or
            Russian (if applying for Master’s studies);
          </li>
          <li>
            A copy of the Master’s degree certificate* with a transcript in the
            original language and an official translation to English or Russian
            (if applying for Doctoral studies);
          </li>
          <li>
            PhD work proposal (approx. 10 pages; if applying for Doctoral
            studies);
          </li>
          <li>
            English language certificate** - if you have such certificate
            (please see below on the Accepted ones);
          </li>
          <li>Curriculum Vitae;</li>
          <li>A copy of the passport;</li>
          <li>One photo;</li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-4xl font-bold mb-12 text-gray-700">
          Online Admission Form
        </h2>
        <!-- Step 2: Secondary Education -->
        <h3 class="text-2xl font-semibold text-gray-700 my-12">
          Step 1: Study selection
        </h3>
        <GuestAdmissionApplicationForm />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles can go here */
</style>
