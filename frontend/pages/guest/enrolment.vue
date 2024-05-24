<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-7/12 mx-auto pb-16">
      <h2 class="text-4xl font-bold mb-16">Free course enrolment form</h2>
      <div
        class="text-left text-2xl font-semibold text-gray-800 dark:text-white"
      >
        <p class="text-left">
          To enrol into a free online course you selected, you must first
          complete this form.
        </p>
        <br />
        <p class="italic text-left">This should take about 2 minutes.</p>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-48 mb-6 mt-16">
          <!--First name input -->
          <div>
            <label for="firstName" class="font-semibold">First name</label>
            <input
              id="firstName"
              v-model="form.firstName"
              class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :class="{
                'border-red-500 dark:border-red-500': errors.firstName,
              }"
            />
            <span class="text-red-500">{{ errors.firstName }}</span>
          </div>

          <!--Last name input -->
          <div>
            <label for="lastName" class="font-semibold">Last name</label>
            <input
              id="lastName"
              v-model="form.lastName"
              class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :class="{ 'border-red-500 dark:border-red-500': errors.lastName }"
            />
            <span class="text-red-500">{{ errors.lastName }}</span>
          </div>

          <!--Date of birth input -->
          <div>
            <label for="dob" class="font-semibold">Date of birth</label>
            <input
              id="dob"
              type="date"
              v-model="form.dob"
              class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :class="{ 'border-red-500 dark:border-red-500': errors.dob }"
            />
            <span class="text-red-500">{{ errors.dob }}</span>
          </div>

          <!-- Conditional Country input -->
          <div>
            <label for="country" class="font-semibold">Country</label>

            <div>
              <select
                v-model="form.country"
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

          <!-- Phone number input -->
          <div>
            <label for="phone" class="font-semibold">Phone number</label>
            <input
              id="phone"
              v-model="form.phone"
              class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :class="{ 'border-red-500 dark:border-red-500': errors.phone }"
            />
            <span class="text-red-500">{{ errors.phone }}</span>
          </div>

          <!-- Education input -->
          <div>
            <label for="education" class="font-semibold">Education</label>
            <input
              id="education"
              v-model="form.education"
              class="block w-full px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :class="{
                'border-red-500 dark:border-red-500': errors.education,
              }"
            />
            <span class="text-red-500">{{ errors.education }}</span>
          </div>
        </div>
        <!-- Reason for joining the course input -->
        <div class="mb-12 w-1/2 mx-auto">
          <label for="reason" class="font-semibold"
            >Reason for joining the course</label
          >
          <textarea
            id="reason"
            v-model="form.reason"
            class="block w-full min-h-48 px-4 py-2 border-2 rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{ 'border-red-500 dark:border-red-500': errors.reason }"
          ></textarea>
          <span class="text-red-500">{{ errors.reason }}</span>
        </div>
        <button
          type="submit"
          class="w-1/6 font-semibold text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 select-none"
        >
          Save my information
        </button>
        <p
          class="text-xl text-gray-700 font-semibold italic mt-12 dark:text-white"
        >
          After you complete a course, you will be able to get a certification
          for £99
        </p>
      </form>
    </main>
  </div>
</template>

<script setup>
import * as yup from "yup";
import {useLocalePath} from #imports

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ["auth", "guest"],
});

const form = ref({
  firstName: "",
  lastName: "",
  dob: "",
  country: "",
  phone: "",
  education: "",
  reason: "",
});
const localePath = useLocalePath();
const userStore = useAuthStore();

const errors = ref({});
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
const nationality = "latvian";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  dob: yup.date().required("Date of birth is required"),
  country: yup.string().required("Country is required"),
  phone: yup.string().required("Phone number is required"),
  education: yup.string().required("Education is required"),
  reason: yup.string().required("Reason for joining is required"),
});

const onSubmit = async () => {
  console.log("Submit attempt");
  try {
    await schema.validate(form.value, { abortEarly: false });
    errors.value = {};
    userStore.setUser({
      ...userStore.getUser,
      ...form.value,
      completedEnrollment: true,
    });
      console.log("Pushing to guest after submit");
    navigateTo(localePath("/guest")); // Redirect to the courses page after enrollment
  } catch (err) {
        console.log("Error Pushing to guest after submit");
    errors.value = {};
    if (err.inner) {
      err.inner.forEach((error) => {
        errors.value[error.path] = error.message;
      });
    }
  }
};
</script>

<style scoped>
input:not([type="radio"]):not([type="checkbox"]) {
  margin-bottom: 1em;
}
</style>
