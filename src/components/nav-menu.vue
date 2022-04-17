<!--
 * @Author: smx
 * @Date: 2022-03-22 17:25:04
 * @LastEditTime: 2022-04-08 15:04:09
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\components\nav-menu.vue
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/bilibili.svg" alt="logo" />
      <span v-if="!isCollapse" class="title">BMS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      :collapse="props.isCollapse"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon" :class="item.icon"></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { useStore } from '@/store/index'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/hooks/use-map-menus'
//props and emits
const props = defineProps({
  isCollapse: Boolean
})

//store
const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)

//router
const router = useRouter()
const route = useRoute()
const currentPath = route.path

//data
const menu = pathMapToMenu(userMenus.value, currentPath)
const defaultValue = ref<string>(menu.id + '')

//method
const handleMenuItemClick = (subitem: any) => {
  router.push({
    path: subitem.url ?? '/not-found'
  })
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 3px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      margin: 0 40px 0 5px;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    :deep(.el-sub-menu__title) {
      background-color: #001529 !important;
    }
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
