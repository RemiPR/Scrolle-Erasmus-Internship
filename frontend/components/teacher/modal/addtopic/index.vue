<template>
    <div 
    class="modal fixed z-50 flex items-center w-8/12 justify-center overflow-y-hidden pt-4 mt-6 outline-none" 
    v-if="modalActive"> 
    <div class="fixed inset-0 bg-black opacity-50" @click="closeModal"></div>
        <div v-show="modalActive" class="modal-inner bg-white rounded-xl shadow-lg w-4/12 relative z-10 overflow-y-auto">
            <div class="modal-content my-2 mx-2">
                <label>
                    <span class="block text-gray-700 font-bold mb-2">Enter a new topic name</span>
                    <input
                    type="text"
                    v-model="newTopicName"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div class="flex justify-between">
                        <button 
                        class="bg-green-500 hover:bg-green-600 text-white font-bold mt-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                        @click="submitValue" 
                        >Done</button>
                        <button 
                        class="bg-red-500 hover:bg-red-600 text-white font-bold mt-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                        @click="closeModal" 
                        >Cancel</button>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        modalActive: Boolean
    })
    const newTopicName = ref("");

    const emit = defineEmits(["close", "submit"]);

    const submitValue = () => {
        emit("submit", newTopicName.value)
        newTopicName.value = "";
        emit("close");
    }
    const closeModal = () => {
        newTopicName.value = "";
        emit("close")
    }

</script>
