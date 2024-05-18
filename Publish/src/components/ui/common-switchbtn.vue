<template>
  <input
    id="toggleBtn"
    v-model="checked"
    type="checkbox"
    class="btn-toggle"
    @click="$dialog?.openDialog"
  />
  <CommonDialog ref="$dialog" class-name="pop-alert">
    {{ message }}
    <CommonButtonArea class-name="mt-7" type="column" size="full">
      <CommonButton variant="border" size="xl" @click="handleCancel">
        취소
      </CommonButton>
      <CommonButton variant="bgcolor" size="xl" @click="handleOk">
        확인
      </CommonButton>
    </CommonButtonArea>
  </CommonDialog>
</template>

<script setup lang="ts">
  import { computed, ref } from '#imports'
  import CommonDialog from '#components/ui/common-dialog.vue'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import type {
    SwitchBtnEmits,
    SwitchBtnProps
  } from '~/types/common/component-type'

  const $dialog = ref<InstanceType<typeof CommonDialog> | null>(null)
  const state = defineModel('state', { default: false })
  const { offMsg, onMsg } = defineProps<SwitchBtnProps>()
  const emits = defineEmits<SwitchBtnEmits>()
  const checked = ref<boolean>(false)

  const handleOk = (event: Event) => {
    state.value = !state.value
    $dialog.value?.closeDialog()
    emits('onOk', event as MouseEvent)
  }

  const handleCancel = (event: Event) => {
    checked.value = !checked.value
    $dialog.value?.closeDialog()
    emits('onCancel', event as MouseEvent)
  }

  const message = computed(() => {
    return state.value ? offMsg : onMsg
  })
</script>

<style scoped></style>
