<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import Header from '../components/Header.vue';
</script>

<template>
  <Header />
  <section class="grid lg:grid-cols-2 container mx-auto mt-32">
    <div class="lg:max-w-md text-center lg:text-start">
      <h1>Lorem ipsum dolor sit amet, consectetur</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div class="flex gap-4 mt-4 justify-center lg:justify-start">
        <button>Call to Action</button>
        <button
          class="bg-white border-primary text-primary hover:border-opacity-50"
        >
          See Workspace
        </button>
      </div>
    </div>
    <div class="relative w-full mt-32 lg:mt-0">
      <img
        alt=""
        src="/"
        class="bg-gray-300 relative mx-auto lg:mr-[5.625rem] w-[25rem] h-[25rem]"
      />
      <img
        alt=""
        src="/"
        class="bg-gray absolute right-7 lg:right-0 -top-16 w-[12.5rem] h-[12.5rem]"
      />
    </div>
  </section>

  <section class="grid lg:grid-cols-3 container mx-auto lg:gap-16">
    <div class="lg:max-w-xs text-center lg:text-start">
      <h6>Header Text</h6>
      <p class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="relative w-full my-16 lg:my-0">
      <img
        src="/"
        alt=""
        class="bg-gray-300 relative mx-auto lg:mr-[5.625rem] w-[25rem] h-[25rem]"
      />
    </div>
    <div
      class="flex flex-col justify-end lg:max-w-md text-center lg:text-start"
    >
      <h6 ckas>Header Text</h6>
      <p class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </section>

  <section class="bg-gray-100 my-0 mt-32">
    <div class="grid lg:grid-cols-2 py-32 lg:gap-16 container mx-auto">
      <div class="relative w-full my-16 mx-auto lg:my-0 lg:-top-52">
        <img
          src="/"
          alt=""
          class="bg-gray-300 mx-auto relative lg:absolute w-[35rem] h-[35rem]"
        />
      </div>
      <div class="lg:max-w-md text-center lg:text-start">
        <h1>Lorem ipsum dolor sit amet, consectetur</h1>
        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button class="mx-auto lg:mx-0 mt-4">Call to Action</button>
      </div>
    </div>
  </section>
</template>
