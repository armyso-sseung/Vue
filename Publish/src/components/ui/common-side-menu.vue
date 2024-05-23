<template>
  <div :class="`sideMenu-custom${className ? ' ' + className : ''}`">
    <div class="sideMenu-title">
      {{ isCustomer ? $t('customerSidebarMenu.menuTitle') : 'MY PAGE' }}
    </div>
    <ul class="menu-depth-1">
      <li
        v-for="menu in sideMenu"
        :key="menu.uprMenuId"
        class="menu-item-depth1"
      >
        <NuxtLink
          v-slot="{ navigate }"
          custom
          :to="menu.menuDtlList[0].callUrl"
        >
          <button
            class="menu-btn-depth1"
            @click="() => sidebar === 'customer' && navigate()"
          >
            {{
              isCustomer
                ? $t(`customerSidebarMenu.${menu.menuDtlList[0].menuDtlNm}`)
                : menu.uprMenuNm
            }}
          </button>
        </NuxtLink>
        <ul v-if="!isCustomer && menu.menuDtlList" class="menu-depth-2">
          <li
            v-for="menuDtl in menu.menuDtlList"
            :key="menuDtl.menuDtlId"
            class="menu-item-depth2"
          >
            <NuxtLink v-slot="{ navigate }" custom :to="menuDtl.callUrl">
              <button class="menu-btn-depth2" @lick="() => navigate()">
                {{ menuDtl.menuDtlNm }}
              </button>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import '@/assets/styles/common/side-menu.css'
  import type { SideMenuProps } from '~/types/common/component-type'
  import { computed, IsEmptyArrayCheck, storeToRefs } from '#imports'
  import { useMenuStore } from '~/stores/common/use-menu-store'
  import { CUSTOMER_SIDE_MENU } from '~/constants/common-constants'

  const menuStore = useMenuStore()
  const { menuInfo } = storeToRefs(menuStore)
  const { fetchMenuInfo } = menuStore
  const { sidebar } = withDefaults(defineProps<SideMenuProps>(), {
    sidebar: 'customer'
  })

  const isCustomer = computed(() => sidebar === 'customer')
  const sideMenu = computed(() =>
    !isCustomer.value ? menuInfo.value : CUSTOMER_SIDE_MENU
  )

  if (!isCustomer.value && IsEmptyArrayCheck(menuInfo.value)) {
    await fetchMenuInfo()
  }
</script>

<style scoped></style>
