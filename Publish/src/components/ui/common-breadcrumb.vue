<template>
  <a-breadcrumb
    :class="`nav-custom${className ? ' ' + className : ''}`"
    v-bind="$attrs"
  >
    <template #separator>
      <picture>
        <img
          :src="
            getNuxtImage({ src: '/images/icons/ico_nav_arrow.svg', alt: '' })
          "
          alt=""
          loading="lazy"
        />
      </picture>
    </template>

    <a-breadcrumb-item
      v-for="(item, idx) in items"
      :key="idx"
      class="flex cursor-pointer items-center"
    >
      <NuxtLink v-slot="{ navigate }" custom :to="item.href">
        <component
          :is="item.title"
          v-if="typeof item.title === 'object'"
          @click="navigate"
        />
        <template v-else>
          <span @click="navigate" v-text="item.title"></span>
        </template>
      </NuxtLink>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
  import type { CommonBreadcrumbProps } from '~/types/common/component-type'
  import { getNuxtImage } from '~/lib/common/ui/image/image-utils'

  defineProps<CommonBreadcrumbProps>()
</script>

<style scoped></style>
