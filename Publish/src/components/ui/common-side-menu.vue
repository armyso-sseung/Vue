<template>
  <div :class="`sideMenu-custom${className ? ' ' + className : ''}`">
    <div class="sideMenu-title">
      {{ pageTitle ? pageTitle : 'MY PAGE' }}
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
            {{ menu.uprMenuNm }}
          </button>
        </NuxtLink>
        <ul
          v-if="menu.menuDtlList"
          class="menu-depth-2"
        >
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
  import type {
    MenuInfo,
    SideMenuProps
  } from '~/types/common/component-type'
  import { onMounted, ref } from '#imports'
  import { useMenuStore } from '~/stores/common/use-menu-store'

  const { menuInfo, fetchMenuInfo } = useMenuStore()
  const { staticMenuInfo, sidebar } = withDefaults(
    defineProps<SideMenuProps>(),
    {
      sidebar: 'customer'
    }
  )

  const sideMenu = ref<MenuInfo[]>([])

  onMounted(() => {
    const setMypageMenu = async () => {
      menuInfo.length <= 0 && (await fetchMenuInfo())
      sideMenu.value = menuInfo
    }

    sidebar === 'mypage'
      ? setMypageMenu()
      : (sideMenu.value = staticMenuInfo as MenuInfo[])
  })
</script>

<style scoped></style>
