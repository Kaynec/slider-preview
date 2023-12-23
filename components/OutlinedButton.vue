<template>
  <button
    v-bind="$attrs"
    class="rounded-3xl px-lg py-sm text-sm !border-1 border-primary w-full"
    style="color: var(--q-primary)"
  >
    <slot></slot>
  </button>
</template>
