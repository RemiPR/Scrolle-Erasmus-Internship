<!-- components/RegisterForm.vue -->
<template>
  <div class="mx-auto mt-8">
    <form @submit.prevent="onSubmit">
      <!-- Nationality selection -->
      <div class="mb-4 flex items-center">
        <label class="font-semibold mr-4">{{
          $t("application_form_step_one.question_latvian_or_foreign")
        }}</label>
        <div class="flex space-x-4">
          <label class="flex items-center">
            <input
              type="radio"
              value="latvian"
              v-model="nationality"
              class="mr-2"
            />
            {{ $t("application_form_step_one.option_latvian") }}
          </label>
          <label class="flex items-center">
            <input
              type="radio"
              value="foreign"
              v-model="nationality"
              class="mr-2"
            />
            {{ $t("application_form_step_one.option_foreign") }}
          </label>
        </div>
      </div>

      <!-- Intake selection -->
      <div class="mb-8 flex items-center">
        <label class="font-semibold mr-4">
          {{ $t("application_form_step_one.question_intake") }}</label
        >
        <div class="flex space-x-4">
          <label class="flex items-center">
            <input type="radio" value="spring" v-model="intake" class="mr-2" />
            {{ $t("application_form_step_one.option_september") }}
          </label>
          <label class="flex items-center">
            <input type="radio" value="autumn" v-model="intake" class="mr-2" />
            {{ $t("application_form_step_one.option_february") }}
          </label>
        </div>
      </div>

      <!-- Study Programmes -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold text-gray-700 my-12">
          {{
            $t(
              "application_form_study_programme_selection.study_programme_subtitle"
            )
          }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
          <div>
            <label class="font-semibold flex items-center">
              <input
                type="checkbox"
                class="mr-2"
                v-model="selectedProgrammes"
                value="college"
              />
              {{
                $t(
                  "application_form_study_programme_selection.programme_option_college"
                )
              }}
            </label>
            <ul v-if="selectedProgrammes.includes('college')" class="ml-6 mt-2">
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="college-Computer Systems"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_college_option_computer_systems"
                      )
                    }}</span
                  >
                </label>
              </li>
            </ul>
          </div>
          <div>
            <label class="font-semibold flex items-center">
              <input
                type="checkbox"
                class="mr-2"
                v-model="selectedProgrammes"
                value="professional_bachelors"
              />
              {{
                $t(
                  "application_form_study_programme_selection.programme_option_bachelors"
                )
              }}
            </label>
            <ul
              v-if="selectedProgrammes.includes('professional_bachelors')"
              class="ml-6 mt-2"
            >
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="professional_bachelors-Business Logistics Management"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_bachelors_option_business_logistics"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="professional_bachelors-Computer Systems"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_bachelors_option_computer_systems"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="professional_bachelors-International Communication Management"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_bachelors_option_international_communication_management"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="professional_bachelors-Tourism and Hospitality Management"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_bachelors_option_tourism"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="professional_bachelors-Business Administration"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_bachelors_option_business_administration"
                      )
                    }}</span
                  >
                </label>
              </li>
            </ul>
          </div>
          <div>
            <label class="font-semibold flex items-center">
              <input
                type="checkbox"
                class="mr-2"
                v-model="selectedProgrammes"
                value="masters"
              />
              {{
                $t(
                  "application_form_study_programme_selection.programme_option_masters"
                )
              }}
            </label>
            <ul
              v-if="selectedProgrammes.includes('masters')"
              class="ml-6 mt-2 sc"
            >
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="masters-Business Psychology and Human Resource Management in Entrepreneurship"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_masters_option_business_psychology"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="masters-Strategic Communication Management"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_masters_option_communication_management"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="masters-Tourism Strategic Management"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_masters_option_tourism"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="masters-Business Administration"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_masters_option_business_administration"
                      )
                    }}</span
                  >
                </label>
              </li>
            </ul>
          </div>
          <div>
            <label class="font-semibold flex items-center">
              <input
                type="checkbox"
                class="mr-2"
                v-model="selectedProgrammes"
                value="doctoral"
              />
              {{
                $t(
                  "application_form_study_programme_selection.programme_option_doctoral"
                )
              }}
            </label>
            <ul
              v-if="selectedProgrammes.includes('doctoral')"
              class="ml-6 mt-2 sc"
            >
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="doctoral-Communication Management"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_doctoral_option_communication"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="doctoral-Law Science"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_doctoral_option_law"
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="doctoral-Business Administration"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_doctoral_option_business_administration."
                      )
                    }}</span
                  >
                </label>
              </li>
              <li>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="selectedStudyProgramme"
                    value="doctoral-Management Science, joint study programme with Daugavpils University"
                    class="mr-2"
                  />
                  <span class="truncate">
                    {{
                      $t(
                        "application_form_study_programme_selection.programme_doctoral_option_management_science"
                      )
                    }}</span
                  >
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Type of study -->
      <div class="mb-8 flex items-center">
        <label class="font-semibold mr-4">
          {{
            $t(
              "application_form_study_programme_selection.question_type_of_study"
            )
          }}</label
        >
        <div class="flex space-x-4">
          <label class="flex items-center">
            <input
              type="radio"
              value="campus"
              v-model="studyType"
              class="mr-2"
            />
            {{
              $t("application_form_study_programme_selection.option_on_campus")
            }}
          </label>
          <label class="flex items-center">
            <input
              type="radio"
              value="remote"
              v-model="studyType"
              class="mr-2"
            />
            {{
              $t(
                "application_form_study_programme_selection.option_distance_learning"
              )
            }}
          </label>
        </div>
      </div>

      <!-- Step 2: Secondary Education -->
      <h3 class="text-2xl font-semibold text-gray-700 my-12">
        {{ $t("application_form_step_two.step_two_subtitle") }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-48 mb-6">
        <!-- Conditional Country input -->
        <div>
          <label for="country" class="font-semibold">
            {{ $t("application_form_step_two.country") }}</label
          >
          <div v-if="nationality === 'latvian'">
            <input
              v-model="country"
              class="block w-full px-4 py-2 border-2 rounded mt-2 bg-gray-200 cursor-not-allowed focus:outline-none"
              disabled
            />
          </div>
          <div v-else>
            <select
              v-model="country"
              class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            >
              <option
                v-for="country in countries"
                :key="country"
                :value="country"
              >
                {{ country }}
              </option>
            </select>
          </div>
          <span class="text-red-500">{{ errors.country }}</span>
        </div>

        <!-- Name of graduated educational establishment -->
        <div>
          <label for="graduatedEstablishment" class="font-semibold">
            {{ $t("application_form_step_two.name") }}</label
          >
          <input
            v-model="graduatedEstablishment"
            v-bind="graduatedEstablishmentAttrs"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500':
                errors.graduatedEstablishment,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.graduatedEstablishment }}</span>
        </div>

        <!-- Certificate No. -->
        <div class="relative">
          <label for="certificateNo" class="font-semibold">
            {{ $t("application_form_step_two.certificate_number") }}</label
          >
          <div class="relative">
            <input
              v-model="certificateNo"
              v-bind="certificateNoAttrs"
              class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :class="{
                'border-red-500 dark:border-red-500': errors.certificateNo,
                autofilled: isAutofilled,
              }"
            />
          </div>
          <span class="text-red-500">{{ errors.certificateNo }}</span>
        </div>

        <!-- Date of issue -->
        <div class="relative">
          <label for="dateOfIssue" class="font-semibold">
            {{ $t("application_form_step_two.date_of_issue") }}</label
          >
          <div class="relative">
            <input
              v-model="dateOfIssue"
              v-bind="dateOfIssueAttrs"
              type="date"
              class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :class="{
                'border-red-500 dark:border-red-500': errors.dateOfIssue,
                autofilled: isAutofilled,
              }"
            />
          </div>
          <span class="text-red-500">{{ errors.dateOfIssue }}</span>
        </div>
        <!-- Certificate Upload -->
        <div>
          <label for="certificateUpload" class="font-semibold">
            {{ $t("application_form_step_two.certificate") }}</label
          >
          <input
            type="file"
            id="certificateUpload"
            @change="handleFileUpload($event, 'certificate')"
            accept=".pdf,.jpg,.png"
            class="block w-full px-4 py-2 border-2 rounded mt-2"
          />
          <span class="text-red-500">{{ errors.certificateFile }}</span>
        </div>

        <!-- Transcript Upload -->
        <div>
          <label for="transcriptUpload" class="font-semibold">
            {{ $t("application_form_step_two.transcript_of_records") }}</label
          >
          <input
            type="file"
            id="transcriptUpload"
            @change="handleFileUpload($event, 'transcript')"
            accept=".pdf,.jpg,.png"
            class="block w-full px-4 py-2 border-2 rounded mt-2"
          />
          <span class="text-red-500">{{ errors.transcriptFile }}</span>
        </div>
      </div>

      <!-- Step 3: Personal data part 1 -->
      <h3 class="text-2xl font-semibold text-gray-700 my-12">
        {{
          $t(
            "application_form_step_three_part_one.step_three_part_one_subtitle"
          )
        }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-48 mb-6">
        <!--  First Name input -->
        <div>
          <label for="firstName" class="font-semibold">
            {{ $t("application_form_step_three_part_one.first_name") }}</label
          >
          <input
            v-model="firstName"
            v-bind="firstNameAttrs"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.firstName,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.firstName }}</span>
        </div>

        <!-- Middle Name input -->
        <div>
          <label for="middleName" class="font-semibold">
            {{ $t("application_form_step_three_part_one.middle_name") }}</label
          >
          <input
            v-model="middleName"
            v-bind="middleNameAttrs"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.middleName,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.middleName }}</span>
        </div>

        <!--  Surname input -->
        <div>
          <label for="surname" class="font-semibold">
            {{ $t("application_form_step_three_part_one.surname") }}</label
          >
          <input
            v-model="surname"
            v-bind="surnameAttrs"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.surname,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.surname }}</span>
        </div>

        <!-- Email input field -->
        <div>
          <label for="email" class="font-semibold">
            {{ $t("application_form_step_three_part_one.email") }}</label
          >
          <input
            v-model="email"
            v-bind="emailAttrs"
            type="email"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.email,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.email }}</span>
        </div>

        <!-- Personal photo Upload -->
        <div>
          <label for="personalPhotoUpload" class="font-semibold">
            {{ $t("application_form_step_three_part_one.photo") }}</label
          >
          <input
            type="file"
            id="personalPhotoUpload"
            @change="handleFileUpload($event, 'personalPhoto')"
            accept=".pdf,.jpg,.png"
            class="block w-full px-4 py-2 border-2 rounded mt-2"
          />
          <span class="text-red-500">{{ errors.personalPhotoFile }}</span>
        </div>

        <!-- Personal code/ID code input field -->
        <div>
          <label for="personalCode" class="font-semibold">
            {{
              $t("application_form_step_three_part_one.personal_code")
            }}</label
          >
          <input
            v-model="personalCode"
            v-bind="personalCodeAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.personalCode,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.personalCode }}</span>
        </div>

        <!-- Date of birth field -->
        <div>
          <label for="dob" class="font-semibold">
            {{
              $t("application_form_step_three_part_one.date_of_birth")
            }}</label
          >
          <input
            v-model="dob"
            v-bind="dobAttrs"
            type="date"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.dob,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.dob }}</span>
        </div>

        <!-- Citizenship field -->
        <div v-if="nationality === 'foreign'">
          <label for="citizenship" class="font-semibold">
            {{ $t("application_form_step_three_part_one.citizenship") }}</label
          >
          <input
            v-model="citizenship"
            v-bind="citizenshipAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.citizenship,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.citizenship }}</span>
        </div>

        <!-- Gender selection -->
        <div class="mb-8 flex items-center">
          <label class="font-semibold mr-4">
            {{ $t("application_form_step_three_part_one.question") }}</label
          >
          <div class="flex space-x-4">
            <label class="flex items-center">
              <input type="radio" value="male" v-model="gender" class="mr-2" />
              {{ $t("application_form_step_three_part_one.option_male") }}
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                value="female"
                v-model="gender"
                class="mr-2"
              />
              {{ $t("application_form_step_three_part_one.option_female") }}
            </label>
            <label class="flex items-center">
              <input type="radio" value="other" v-model="gender" class="mr-2" />
              {{ $t("application_form_step_three_part_one.option_other") }}
            </label>
          </div>
        </div>

        <!-- Passport number field -->
        <div v-if="nationality === 'foreign'">
          <label for="passportNumber" class="font-semibold">
            {{
              $t("application_form_step_three_part_one.passport_number")
            }}</label
          >
          <input
            v-model="passportNumber"
            v-bind="passportNumberAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.passportNumber,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.passportNumber }}</span>
        </div>

        <!-- Date of issue field -->
        <div v-if="nationality === 'foreign'">
          <label for="passportDateOfIssue" class="font-semibold">
            {{
              $t("application_form_step_three_part_one.date_of_issue")
            }}</label
          >
          <input
            v-model="passportDateOfIssue"
            v-bind="passportDateOfIssueAttrs"
            type="date"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.passportDateOfIssue,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.passportDateOfIssue }}</span>
        </div>

        <!-- Date of expiry field -->
        <div v-if="nationality === 'foreign'">
          <label for="passportDateOfExpiry" class="font-semibold">
            {{
              $t("application_form_step_three_part_one.date_of_expiry")
            }}</label
          >
          <input
            v-model="passportDateOfExpiry"
            v-bind="passportDateOfExpiryAttrs"
            type="date"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.passportDateOfExpiry,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.passportDateOfExpiry }}</span>
        </div>

        <!-- Place of issue field -->
        <div v-if="nationality === 'foreign'">
          <label for="passportPlaceOfIssue" class="font-semibold">
            {{
              $t("application_form_step_three_part_one.place_of_issue")
            }}</label
          >
          <input
            v-model="passportPlaceOfIssue"
            v-bind="passportPlaceOfIssueAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.passportPlaceOfIssue,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.passportPlaceOfIssue }}</span>
        </div>

        <!-- Passport photo Upload -->
        <div v-if="nationality === 'foreign'">
          <label for="passportPhotoUpload" class="font-semibold">
            {{
              $t("application_form_step_three_part_one.passport_photo")
            }}</label
          >
          <input
            type="file"
            id="passportPhotoUpload"
            @change="handleFileUpload($event, 'passportPhoto')"
            accept=".pdf,.jpg,.png"
            class="block w-full px-4 py-2 border-2 rounded mt-2"
          />
          <span class="text-red-500">{{ errors.passportPhotoFile }}</span>
        </div>
      </div>

      <!-- Step 3: Personal data part 2 -->
      <h3 class="text-2xl font-semibold text-gray-700 my-12 text-center">
        {{
          $t(
            "application_form_step_three_part_two.step_three_part_two_subtitle"
          )
        }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-48 mb-6">
        <!-- Street, House/apartment no field -->
        <div>
          <label for="address" class="font-semibold">
            {{
              $t(
                "application_form_step_three_part_two.street_house_apartament_number"
              )
            }}</label
          >
          <input
            v-model="address"
            v-bind="addressAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.address,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.address }}</span>
        </div>

        <!-- Postal code field -->
        <div>
          <label for="postalCode" class="font-semibold">
            {{ $t("application_form_step_three_part_two.postal_code") }}</label
          >
          <input
            v-model="postalCode"
            v-bind="postalCodeAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.postalCode,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.postalCode }}</span>
        </div>

        <!-- City field -->
        <div>
          <label for="city" class="font-semibold">
            {{ $t("application_form_step_three_part_two.city") }}</label
          >
          <input
            v-model="city"
            v-bind="cityAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.city,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.city }}</span>
        </div>

        <!-- Mobile phone number field -->
        <div>
          <label for="mobilePhone" class="font-semibold">
            {{ $t("application_form_step_three_part_two.mobile_phone") }}</label
          >
          <input
            v-model="mobilePhone"
            v-bind="mobilePhoneAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.mobilePhone,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.mobilePhone }}</span>
        </div>

        <!-- Native language field -->
        <div>
          <label for="nativeLanguage" class="font-semibold">
            {{
              $t("application_form_step_three_part_two.native_language")
            }}</label
          >
          <input
            v-model="nativeLanguage"
            v-bind="nativeLanguageAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.nativeLanguage,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.nativeLanguage }}</span>
        </div>

        <!-- Employer field -->
        <div>
          <label for="employer" class="font-semibold">
            {{ $t("application_form_step_three_part_two.employer") }}</label
          >
          <input
            v-model="employer"
            v-bind="employerAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.employer,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.employer }}</span>
        </div>

        <!-- Position field -->
        <div>
          <label for="position" class="font-semibold">
            {{ $t("application_form_step_three_part_two.position") }}</label
          >
          <input
            v-model="position"
            v-bind="positionAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.position,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.position }}</span>
        </div>

        <!-- Accommodation selection -->
        <div class="mb-8 flex items-center">
          <label class="font-semibold mr-4">
            {{
              $t("application_form_step_three_part_two.question_accomodation")
            }}</label
          >
          <div class="flex space-x-4">
            <label class="flex items-center">
              <input
                type="radio"
                value="yes"
                v-model="accommodation"
                class="mr-2"
              />
              {{ $t("application_form_step_three_part_two.option_yes") }}
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                value="no"
                v-model="accommodation"
                class="mr-2"
              />
              {{ $t("application_form_step_three_part_two.option_no") }}
            </label>
          </div>
        </div>

        <!-- Language certificates Upload -->
        <div>
          <label for="languageCertificatesUpload" class="font-semibold">
            {{
              $t("application_form_step_three_part_two.language_certificates")
            }}</label
          >
          <input
            type="file"
            id="languageCertificatesUpload"
            @change="handleFileUpload($event, 'languageCertificates')"
            accept=".pdf,.jpg,.png"
            class="block w-full px-4 py-2 border-2 rounded mt-2"
          />
          <span class="text-red-500">{{
            errors.languageCertificatesFile
          }}</span>
        </div>

        <!-- CV Upload -->
        <div>
          <label for="cvUpload" class="font-semibold">
            {{ $t("application_form_step_three_part_two.cv") }}</label
          >
          <input
            type="file"
            id="cvUpload"
            @change="handleFileUpload($event, 'cv')"
            accept=".pdf,.jpg,.png"
            class="block w-full px-4 py-2 border-2 rounded mt-2"
          />
          <span class="text-red-500">{{ errors.cvFile }}</span>
        </div>
      </div>

      <!-- Step 4: Emergency contact -->
      <h3 class="text-2xl font-semibold text-gray-700 my-12 text-center">
        {{ $t("application_form_step_four.step_four_subtitle") }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-48 mb-6">
        <!-- Emergency full name field -->
        <div>
          <label for="emergencyFullName" class="font-semibold">
            {{ $t("application_form_step_four.full_name") }}</label
          >
          <input
            v-model="emergencyFullName"
            v-bind="emergencyFullNameAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.emergencyFullName,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.emergencyFullName }}</span>
        </div>

        <!-- Emergency Street, House/apartment no field -->
        <div>
          <label for="emergencyAddress" class="font-semibold">
            {{
              $t(
                "application_form_step_four.part_four_street_house_apartment_number"
              )
            }}</label
          >
          <input
            v-model="emergencyAddress"
            v-bind="emergencyAddressAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.emergencyAddress,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.emergencyAddress }}</span>
        </div>

        <!-- Emergency Postal code field -->
        <div>
          <label for="emergencyPostalCode" class="font-semibold">
            {{ $t("application_form_step_four.part_four_postal_code") }}</label
          >
          <input
            v-model="emergencyPostalCode"
            v-bind="emergencyPostalCodeAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.emergencyPostalCode,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.emergencyPostalCode }}</span>
        </div>

        <!-- Emergency Country field -->
        <div>
          <label for="emergencyCountry" class="font-semibold">
            {{ $t("application_form_step_four.part_four_country") }}</label
          >
          <input
            v-model="emergencyCountry"
            v-bind="emergencyCountryAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.emergencyCountry,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.emergencyCountry }}</span>
        </div>

        <!-- Emergency City field -->
        <div>
          <label for="emergencyCity" class="font-semibold">
            {{ $t("application_form_step_four.part_four_city") }}</label
          >
          <input
            v-model="emergencyCity"
            v-bind="emergencyCityAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.emergencyCity,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.emergencyCity }}</span>
        </div>

        <!-- Emergency Telephone number field -->
        <div>
          <label for="emergencyPhone" class="font-semibold">
            {{ $t("application_form_step_four.part_four_phone_number") }}</label
          >
          <input
            v-model="emergencyPhone"
            v-bind="emergencyPhoneAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.emergencyPhone,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.emergencyPhone }}</span>
        </div>

        <!-- Emergency E-mail field -->
        <div>
          <label for="emergencyEmail" class="font-semibold">
            {{ $t("application_form_step_four.part_four_email") }}</label
          >
          <input
            v-model="emergencyEmail"
            v-bind="emergencyEmailAttrs"
            type="email"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': errors.emergencyEmail,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.emergencyEmail }}</span>
        </div>

        <!-- Emergency Relationship field -->
        <div>
          <label for="emergencyRelationship" class="font-semibold">
            {{ $t("application_form_step_four.relationship") }}</label
          >
          <input
            v-model="emergencyRelationship"
            v-bind="emergencyRelationshipAttrs"
            type="text"
            class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500':
                errors.emergencyRelationship,
              autofilled: isAutofilled,
            }"
          />
          <span class="text-red-500">{{ errors.emergencyRelationship }}</span>
        </div>
      </div>

      <!-- Final Step -->
      <h3 class="text-2xl font-semibold text-gray-700 my-12 text-center">
        {{ $t("application_form_final_step.final_step_subtitle") }}
      </h3>

      <!-- How did you hear about us field -->
      <div class="mb-12 w-1/2 mx-auto">
        <label for="referralSource" class="font-semibold">
          {{
            $t("application_form_final_step.final_step_input_subtitle")
          }}</label
        >
        <textarea
          v-model="referralSource"
          v-bind="referralSourceAttrs"
          class="block w-full min-h-48 px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :class="{
            'border-red-500 dark:border-red-500': errors.referralSource,
            autofilled: isAutofilled,
          }"
        ></textarea>
        <span class="text-red-500">{{ errors.referralSource }}</span>
      </div>

      <!-- Register button -->
      <button
        type="submit"
        class="w-1/6 font-semibold text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 select-none"
      >
        {{ $t("register_button") }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useLocalePath, useI18n } from "#imports";
import { navigateTo, useRuntimeConfig } from "#app";

const localePath = useLocalePath();
const config = useRuntimeConfig();
const { t } = useI18n();

const props = defineProps({
  prefilledEmail: {
    type: String,
    default: "",
  },
});

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required(t("validations.firstNameRequired"))
    .min(2, t("validations.firstNameMin")),
  middleName: yup.string().nullable(),
  surname: yup
    .string()
    .required(t("validations.surnameRequired"))
    .min(2, t("validations.surnameMin")),
  email: yup
    .string()
    .email(t("validations.emailInvalid"))
    .required(t("validations.emailRequired")),
  country: yup.string().required(t("validations.countryRequired")),
  graduatedEstablishment: yup
    .string()
    .required(t("validations.graduatedEstablishmentRequired")),
  certificateNo: yup.string().required(t("validations.certificateNoRequired")),
  dateOfIssue: yup.date().required(t("validations.dateOfIssueRequired")),
  certificateFile: yup
    .mixed()
    .required(t("validations.certificateFileRequired"))
    .test("fileType", t("validations.certificateFileType"), (value) => {
      return (
        value &&
        ["application/pdf", "image/jpeg", "image/png"].includes(value.type)
      );
    }),
  transcriptFile: yup
    .mixed()
    .required(t("validations.transcriptFileRequired"))
    .test("fileType", t("validations.transcriptFileType"), (value) => {
      return (
        value &&
        ["application/pdf", "image/jpeg", "image/png"].includes(value.type)
      );
    }),
  personalCode: yup.string().required(t("validations.personalCodeRequired")),
  dob: yup.date().required(t("validations.dobRequired")),
  citizenship: yup.string().required(t("validations.citizenshipRequired")),
  passportNumber: yup
    .string()
    .required(t("validations.passportNumberRequired")),
  passportDateOfIssue: yup
    .date()
    .required(t("validations.passportDateOfIssueRequired")),
  passportDateOfExpiry: yup
    .date()
    .required(t("validations.passportDateOfExpiryRequired")),
  passportPlaceOfIssue: yup
    .string()
    .required(t("validations.passportPlaceOfIssueRequired")),
  address: yup.string().required(t("validations.addressRequired")),
  postalCode: yup.string().required(t("validations.postalCodeRequired")),
  city: yup.string().required(t("validations.cityRequired")),
  mobilePhone: yup.string().required(t("validations.mobilePhoneRequired")),
  nativeLanguage: yup
    .string()
    .required(t("validations.nativeLanguageRequired")),
  employer: yup.string().nullable(),
  position: yup.string().nullable(),
  accommodation: yup.string().required(t("validations.accommodationRequired")),
  languageCertificatesFile: yup
    .mixed()
    .test(
      "fileType",
      t("validations.languageCertificatesFileType"),
      (value) => {
        return (
          !value ||
          ["application/pdf", "image/jpeg", "image/png"].includes(value.type)
        );
      }
    ),
  cvFile: yup.mixed().test("fileType", t("validations.cvFileType"), (value) => {
    return (
      !value ||
      ["application/pdf", "image/jpeg", "image/png"].includes(value.type)
    );
  }),
  emergencyFullName: yup
    .string()
    .required(t("validations.emergencyFullNameRequired")),
  emergencyAddress: yup
    .string()
    .required(t("validations.emergencyAddressRequired")),
  emergencyPostalCode: yup
    .string()
    .required(t("validations.emergencyPostalCodeRequired")),
  emergencyCountry: yup
    .string()
    .required(t("validations.emergencyCountryRequired")),
  emergencyCity: yup.string().required(t("validations.emergencyCityRequired")),
  emergencyPhone: yup
    .string()
    .required(t("validations.emergencyPhoneRequired")),
  emergencyEmail: yup
    .string()
    .email(t("validations.emailInvalid"))
    .required(t("validations.emergencyEmailRequired")),
  emergencyRelationship: yup
    .string()
    .required(t("validations.emergencyRelationshipRequired")),
  referralSource: yup
    .string()
    .required(t("validations.referralSourceRequired")),
});

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const nationality = ref("latvian");
const intake = ref("spring");
const studyType = ref("campus");
const country = ref("Latvia");
const certificateFile = ref(null);
const transcriptFile = ref(null);
const personalPhotoFile = ref(null);
const passportPhotoFile = ref(null);
const languageCertificatesFile = ref(null);
const cvFile = ref(null);

const selectedProgrammes = ref([]);
const selectedStudyProgramme = ref(null);

const gender = ref("male");
const countries = ref([
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan (Province of China)",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
]);

watch(nationality, (newValue) => {
  if (newValue === "latvian") {
    country.value = "Latvia";
  } else if (newValue === "foreign" && country.value === "Latvia") {
    country.value = "";
  }
});

const [firstName, firstNameAttrs] = defineField("firstName");
const [middleName, middleNameAttrs] = defineField("middleName");
const [surname, surnameAttrs] = defineField("surname");
const [email, emailAttrs] = defineField("email");
email.value = props.prefilledEmail;
const [countryField, countryAttrs] = defineField("country");
const [graduatedEstablishment, graduatedEstablishmentAttrs] = defineField(
  "graduatedEstablishment"
);
const [certificateNo, certificateNoAttrs] = defineField("certificateNo");
const [dateOfIssue, dateOfIssueAttrs] = defineField("dateOfIssue");
const [personalCode, personalCodeAttrs] = defineField("personalCode");
const [dob, dobAttrs] = defineField("dob");
const [citizenship, citizenshipAttrs] = defineField("citizenship");
const [passportNumber, passportNumberAttrs] = defineField("passportNumber");
const [passportDateOfIssue, passportDateOfIssueAttrs] = defineField(
  "passportDateOfIssue"
);
const [passportDateOfExpiry, passportDateOfExpiryAttrs] = defineField(
  "passportDateOfExpiry"
);
const [passportPlaceOfIssue, passportPlaceOfIssueAttrs] = defineField(
  "passportPlaceOfIssue"
);
const [address, addressAttrs] = defineField("address");
const [postalCode, postalCodeAttrs] = defineField("postalCode");
const [city, cityAttrs] = defineField("city");
const [mobilePhone, mobilePhoneAttrs] = defineField("mobilePhone");
const [nativeLanguage, nativeLanguageAttrs] = defineField("nativeLanguage");
const [employer, employerAttrs] = defineField("employer");
const [position, positionAttrs] = defineField("position");
const [accommodation, accommodationAttrs] = defineField("accommodation");
const [emergencyFullName, emergencyFullNameAttrs] =
  defineField("emergencyFullName");
const [emergencyAddress, emergencyAddressAttrs] =
  defineField("emergencyAddress");
const [emergencyPostalCode, emergencyPostalCodeAttrs] = defineField(
  "emergencyPostalCode"
);
const [emergencyCountry, emergencyCountryAttrs] =
  defineField("emergencyCountry");
const [emergencyCity, emergencyCityAttrs] = defineField("emergencyCity");
const [emergencyPhone, emergencyPhoneAttrs] = defineField("emergencyPhone");
const [emergencyEmail, emergencyEmailAttrs] = defineField("emergencyEmail");
const [emergencyRelationship, emergencyRelationshipAttrs] = defineField(
  "emergencyRelationship"
);
const [referralSource, referralSourceAttrs] = defineField("referralSource");

const isAutofilled = ref(false);

const handleFileUpload = (event, type) => {
  const file = event.target.files[0];
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

  if (file && !allowedTypes.includes(file.type)) {
    alert("Only PDF, JPG, and PNG files are allowed");
    return;
  }

  if (type === "certificate") {
    certificateFile.value = file;
  } else if (type === "transcript") {
    transcriptFile.value = file;
  } else if (type === "personalPhoto") {
    personalPhotoFile.value = file;
  } else if (type === "passportPhoto") {
    passportPhotoFile.value = file;
  } else if (type === "languageCertificates") {
    languageCertificatesFile.value = file;
  } else if (type === "cv") {
    cvFile.value = file;
  }
};

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await $fetch(
      `${config.public.authBaseUrl}/api/auth/guest/registerUser`,
      {
        method: "POST",
        body: {
          firstName: values.firstName,
          middleName: values.middleName,
          surname: values.surname,
          email: values.email,
          country: values.country,
          graduatedEstablishment: values.graduatedEstablishment,
          certificateNo: values.certificateNo,
          dateOfIssue: values.dateOfIssue,
          certificateFile: values.certificateFile,
          transcriptFile: values.transcriptFile,
          personalCode: values.personalCode,
          dob: values.dob,
          citizenship: values.citizenship,
          passportNumber: values.passportNumber,
          passportDateOfIssue: values.passportDateOfIssue,
          passportDateOfExpiry: values.passportDateOfExpiry,
          passportPlaceOfIssue: values.passportPlaceOfIssue,
          address: values.address,
          postalCode: values.postalCode,
          city: values.city,
          mobilePhone: values.mobilePhone,
          nativeLanguage: values.nativeLanguage,
          employer: values.employer,
          position: values.position,
          accommodation: values.accommodation,
          languageCertificatesFile: values.languageCertificatesFile,
          cvFile: values.cvFile,
          emergencyFullName: values.emergencyFullName,
          emergencyAddress: values.emergencyAddress,
          emergencyPostalCode: values.emergencyPostalCode,
          emergencyCountry: values.emergencyCountry,
          emergencyCity: values.emergencyCity,
          emergencyPhone: values.emergencyPhone,
          emergencyEmail: values.emergencyEmail,
          emergencyRelationship: values.emergencyRelationship,
          referralSource: values.referralSource,
        },
        credentials: "include",
      }
    );
    navigateTo(localePath("/guest"));
  } catch (error) {
    if (error.data && error.status == 409) {
      console.log("Registration failed:", error.data.message);
    } else {
      console.error(error);
    }
  }
});
</script>

<style scoped>
input:not([type="radio"]):not([type="checkbox"]) {
  margin-bottom: 1em;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px rgb(134 239 172) inset !important; /* Change the background color here */
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
