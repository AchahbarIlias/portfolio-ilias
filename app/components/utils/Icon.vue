<template>
  <span class="icon" :class="[`icon-${size}`, `icon-${variant}`]">
    <NuxtImg
      v-if="name"
      :src="`/images/${name}`"
      :alt="name"
      class="icon-img"
      sizes="sm:600px md:800px lg:1600px xl:6000px"
      densities="x1 x2"
    />
  </span>
</template>

<script setup>

defineProps({
  size: {
    type: String,
    default: "md",
    validator: (value) =>
      ["sm", "md", "lg", "xl", "xxl", "xxxl"].includes(value),
  },
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "accent", "accent"].includes(value),
  },
  name: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Image inherits size */
.icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: var(--icon-filter);
}

/* Size variants */
.icon-sm {
  width: 1rem;
  height: 1rem;
}

.icon-md {
  width: 1.5rem;
  height: 1.5rem;
}

.icon-lg {
  width: 2rem;
  height: 2rem;
}

.icon-xl {
  width: 2.5rem;
  height: 2.5rem;
}

.icon-xxl {
  width: 3rem;
  height: 3rem;
}

.icon-xxxl {
  width: 8rem;
  height: 8rem;
}

/* Variants */
.icon-default {
  --icon-filter: none;
}

.icon-accent {
  --icon-filter: brightness(0) saturate(100%) invert(74%) sepia(41%)
    saturate(1447%) hue-rotate(4deg) brightness(104%) contrast(101%);
}

.icon-accent {
  --icon-filter: brightness(0) saturate(100%) invert(42%) sepia(82%)
    saturate(1086%) hue-rotate(223deg) brightness(95%) contrast(102%);
}
</style>
