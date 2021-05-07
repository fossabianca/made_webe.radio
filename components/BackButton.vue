<template>
    <a title="indietro" @click="$router.go(-1)" rel="back" class="flex items-center px-4 py-2 space-x-3 max-w-max mb-6 text-gray-600 transition-colors duration-200 transform  rounded-lg dark:text-gray-200 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-900 focus:outline-none">
        <svg fill="black" xmlns="http://www.w3.org/2000/svg" id="Livello_1" data-name="Livello 1" viewBox="0 0 415.86 234.95"><path d="M426.14,391.34l-49-86.42a15.21,15.21,0,0,1,0-15.05l45.25-79.4a19.48,19.48,0,0,0-16.76-29.13l-109.14-1.07v.14l-7.57-.07a15.24,15.24,0,0,0-13.22,7.45L215.13,289.87s-4.41,7.31,0,15.05c3.64,6.44,44.65,78.5,58.33,102.54a15.2,15.2,0,0,0,13.36,7.68l3.79,0,0,.11,3.34,0v0L413,414.07A15.23,15.23,0,0,0,426.14,391.34Z" transform="translate(-213.16 -180.27)"/><path d="M627,391.34l-49-86.42a15.21,15.21,0,0,1,0-15.05l45.25-79.4a19.48,19.48,0,0,0-16.76-29.13l-109.14-1.07v.14l-7.57-.07a15.24,15.24,0,0,0-13.22,7.45L416,289.87s-4.41,7.31,0,15.05c3.64,6.44,44.65,78.5,58.33,102.54a15.2,15.2,0,0,0,13.36,7.68l3.79,0-.05.11,3.34,0v0l119.14-1.15A15.23,15.23,0,0,0,627,391.34Z" transform="translate(-213.16 -180.27)"/></svg>
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