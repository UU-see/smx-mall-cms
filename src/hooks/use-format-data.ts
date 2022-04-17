/*
 * @Author: smx
 * @Date: 2022-03-28 23:26:27
 * @LastEditTime: 2022-04-07 14:01:08
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\hooks\use-format-data.ts
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export function formatUtcString(
  utcString: string,
  format: string = DATA_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
