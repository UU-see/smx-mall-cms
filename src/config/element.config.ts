/*
 * @Author: smx
 * @Date: 2022-03-16 18:20:19
 * @LastEditTime: 2022-04-04 17:21:48
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\config\element.config.ts
 */
import type { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  Edit,
  Avatar,
  Iphone,
  Expand,
  Fold,
  Search,
  Refresh,
  Delete
} from '@element-plus/icons-vue'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElForm,
  ElFormItem,
  ElInput,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard
} from 'element-plus'

const components = [
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  Avatar,
  Edit,
  Iphone,
  Expand,
  Fold,
  Search,
  Refresh,
  Delete
]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
