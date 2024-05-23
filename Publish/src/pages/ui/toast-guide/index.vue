<template>
  <CommonTitle title="Toast Guide" />
  <section>
    <h2 class="guide-sub-title">openToast(delay, text, isDark)</h2>
    <div class="mb-5 flex gap-2">
      <CommonButton
        variant="bgcolor"
        size="base"
        @click="() => toast.openToast(3, '텍스트를\n입력해주세요.')"
      >
        TOAST-WHITE
      </CommonButton>
      <CommonButton
        variant="bgcolor"
        size="base"
        @click="() => toast.openToast(3, '텍스트를\n입력해주세요.', true)"
      >
        TOAST-BLACK
      </CommonButton>
    </div>

    <CommonCodeBlock :language="language" :value="toastWhiteCode" />
  </section>

  <client-only>
    <component :is="toast.contextHolder()" />
  </client-only>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import { useToast } from '#imports'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const toast = useToast()

  const language = 'javascript'
  const toastWhiteCode = `
import { useToast } from '#imports'

const toast = useToast()

<CommonButton
  variant="bgcolor"
  size="base"
  @click="() => toast.openToast(3, '텍스트를\\n입력해주세요.')"
>
  TOAST-WHITE
</CommonButton>
<CommonButton
  variant="bgcolor"
  size="base"
  @click="() => toast.openToast(3, '텍스트를\\n입력해주세요.', true)"
>
  TOAST-BLACK
</CommonButton>

/* contextHolder - 토스트 메시지가 렌더링 될 위치에 추가 */
<client-only>
  <component :is="toast.contextHolder()" />
</client-only>`
</script>

<style scoped></style>
