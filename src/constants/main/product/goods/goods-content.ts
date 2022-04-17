/*
 * @Author: smx
 * @Date: 2022-03-30 15:55:41
 * @LastEditTime: 2022-04-02 17:05:49
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\main\product\goods\goods-content.ts
 */
import { ItableContent } from '@/base-ui/table'
export const goodsContent: ItableContent = {
  title: '商品',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'address', label: '地点', minWidth: '80' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '80', slotName: 'newPrice' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { prop: 'handler', label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
