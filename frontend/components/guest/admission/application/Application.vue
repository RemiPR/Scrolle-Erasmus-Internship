<!-- components/StartOnlineApplication.vue -->
<template>
  <div>
    <div>
      <div class="text-left text-xl text-gray-800 mt-12">
        <p>
          <span class="font-bold">{{
            $t("application_first_paragraph.first_text_line_span")
          }}</span>
          {{ $t("application_first_paragraph.first_text_line_paragraph") }}
        </p>
        <br />
        <p>
          <span class="font-bold">{{
            $t("application_first_paragraph.second_text_line_first_span")
          }}</span>
          {{
            $t("application_first_paragraph.second_text_line_first_paragraph")
          }}
          <span class="font-bold">{{
            $t("application_first_paragraph.second_text_line_second_span")
          }}</span>
          {{
            $t("application_first_paragraph.second_text_line_second_paragraph")
          }}
          <span class="font-bold"
            >{{
              $t("application_first_paragraph.second_text_line_third_span")
            }}.</span
          >
        </p>
        <br />
        <p>{{ $t("application_first_paragraph.third_text_line_paragraph") }}</p>
        <br />
        <p>
          {{ $t("application_first_paragraph.fourth_text_line_paragraph") }}
        </p>
        <br />
        <p class="font-bold">
          {{ $t("application_first_paragraph.fifth_text_line_span") }}
        </p>
        <br />
        <p>
          <span class="font-bold">{{
            $t("application_first_paragraph.sixth_text_line_span")
          }}</span>
          {{ $t("application_first_paragraph.sixth_text_line_paragraph") }}
        </p>
      </div>
      <div class="text-left text-xl text-gray-800 mt-12">
        <p class="font-bold">{{ $t("application_first_subtitle") }}</p>
        <ul class="list-disc mt-6 ml-12">
          <li class="font-normal mt-2">
            {{ $t("application_list.first_application_list_element") }}
          </li>
          <li class="font-normal mt-2">
            {{ $t("application_list.second_application_list_element") }}
          </li>
          <li class="font-normal mt-2">
            {{ $t("application_list.third_application_list_element") }}
          </li>
          <li class="font-normal mt-2">
            {{ $t("application_list.fourth_application_list_element") }}
          </li>
          <li class="font-normal mt-2">
            {{ $t("application_list.fifth_application_list_element") }}
          </li>
          <li class="font-normal mt-2">
            {{ $t("application_list.sixth_application_list_element") }}
          </li>
          <li class="font-normal mt-2">
            {{ $t("application_list.seventh_application_list_element") }}
          </li>
          <li class="font-normal mt-2">
            {{ $t("application_list.eighth_application_list_element") }}
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-4xl font-bold mb-12 text-gray-700">
          {{ $t("application_admission_form_subtitle") }}
        </h2>
        <h3 class="text-2xl font-semibold text-gray-700 my-12">
          {{ $t("application_step_one_subtitle") }}
        </h3>
        <GuestAdmissionApplicationForm />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Additional custom styles can go here */
</style>
