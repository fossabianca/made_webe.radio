<template>
        <!-- // Link to go back to the previous page -->
    <a title=" « Indietro" @click="$router.go(-1)" rel="back" class="flex items-center px-4 py-2 space-x-3 max-w-max mb-6 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-900 focus:outline-none">
        <slot>« Indietro</slot>
    </a>
</template>


<style  lang="postcss" >
.btn {
  @apply flex items-center px-4 py-2 space-x-3 max-w-max mb-6 font-bold transition-colors duration-200 transform border rounded-lg focus:outline-none cursor-pointer;
  &.btn-grey {
    @apply bg-gray-50 text-gray-600 dark:bg-gray-600 dark:text-gray-50 dark:border-gray-200;
    &:hover {
      @apply bg-gray-400 dark:hover:bg-gray-900;
    }
  }
}
</style>