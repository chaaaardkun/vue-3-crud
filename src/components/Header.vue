<template>
  <nav
    class="container mx-auto flex items-center justify-between flex-wrap py-6"
  >
    <div class="flex items-center flex-shrink-0">
      <span class="font-bold text-xl">Logo</span>
    </div>
    <div class="block lg:hidden">
      <button
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
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex lg:flex-grow lg:justify-center lg:gap-10">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-opacity-50"
        >
          Home
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-opacity-50"
        >
          About
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-opacity-50"
        >
          Services
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-opacity-50"
        >
          Products
        </a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-5 py-3 leading-none border rounded bg-primary text-white border-white hover:bg-opacity-50 mt-4 lg:mt-0"
          >Call to Action</a
        >
      </div>
    </div>
  </nav>
</template>
