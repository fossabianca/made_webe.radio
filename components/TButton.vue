<template>
  <button class="btn btn-grey">
    <slot>Button</slot>
  </button>
</template>

<style  lang="postcss" >
.btn {
  @apply font-bold py-2 px-4 rounded;
  &.btn-blue {
    @apply bg-blue-500 text-white;
    &:hover {
      @apply bg-blue-700;
    }
  }
  &.btn-grey {
    @apply bg-gray-500 text-white;
    &:hover {
      @apply bg-gray-800;
    }
  }
}
</style>