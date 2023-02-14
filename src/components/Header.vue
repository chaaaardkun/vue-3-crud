<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const collapse = ref(false);

const navigate = (route: string) => {
  router.push(route);
};
</script>

<template>
  <nav
    class="container mx-auto flex items-center justify-between flex-wrap py-6 px-4 sm:px-0"
  >
    <div class="flex items-center flex-shrink-0" @click="navigate('/')">
      <span class="font-bold text-xl cursor-pointer">Logo</span>
    </div>
    <div class="block lg:hidden">
      <button
        @click="collapse = !collapse"
        class="flex items-center px-3 py-2 border rounded hover:text-opacity-50 hover:border-opacity-50"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :style="collapse ? { maxHeight: '200px' } : {}"
      class="w-full block flex-grow overflow-hidden max-h-0 duration-200 transition ease-in-out bg-white absolute z-50 top-20 lg:max-h-none lg:static lg:bg-transparent lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex lg:flex-grow lg:justify-center lg:gap-10">
        <a
          href="#"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-opacity-50"
        >
          Home
        </a>
        <a
          href="#"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-opacity-50"
        >
          About
        </a>
        <a
          href="#"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-opacity-50"
        >
          Services
        </a>
        <button
          @click="navigate('/products')"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-opacity-50 bg-transparent text-primary font-normal p-0"
        >
          Products
        </button>
      </div>
      <div>
        <button>Call to Action</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#state:checked ~ .content {
  max-height: 200px;
}
</style>
