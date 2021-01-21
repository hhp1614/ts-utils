import { getType, isObject } from '../type'

type Item = string | number | Obj
type Arr = Array<Item>
type Obj = { [key: string]: any }

type ArrayOrObject = Arr | Obj

/**
 * 快速排序
 * @param arr 需要快速排序的数组
 * @param order `asc`：升序，`desc`：降序，默认 `asc`
 */
function quickSort(arr: Arr, order: 'asc' | 'desc' = 'asc') {
  // 将小于基数的数放到基数左边，大于基数的数放到右边，并返回基数的位置
  const partition = (arr: Arr, left: number, right: number) => {
    // 取第一个数为基数
    const temp = arr[left] ?? null
    while (left < right) {
      const agreeTypes = ['number', 'string']
      const leftType = getType(arr[left])
      const rightType = getType(arr[right])
      if (!agreeTypes.includes(leftType) || !agreeTypes.includes(rightType)) {
        throw new TypeError('数组的 `item` 必须是 `number` 或 `string`')
      }
      if (order !== 'desc') {
        // 升序
        while (left < right && arr[right] >= temp) {
          right--
        }
        arr[left] = arr[right]
        while (left < right && arr[left] < temp) {
          left++
        }
        arr[right] = arr[left]
      } else {
        // 降序
        while (left < right && arr[right] <= temp) {
          right--
        }
        arr[left] = arr[right]
        while (left < right && arr[left] > temp) {
          left++
        }
        arr[right] = arr[left]
      }
    }
    // 修改基数的位置
    arr[left] = temp
    return left
  }

  // 递归排序基数左右两边的序列
  const recursive = (arr: Arr, left: number, right: number) => {
    if (left >= right) {
      return arr
    }
    let index = partition(arr, left, right)
    recursive(arr, left, index - 1)
    recursive(arr, index + 1, right)
    return arr
  }

  return recursive(arr, 0, arr.length - 1)
}

/**
 * 排序
 * @description 支持排序 `item` 为 `number` 或 `string` 的数组
 * @description 支持排序对象数组
 * @description 支持排序对象
 * @param value 需要排序的数组或对象
 * @param order `asc`：升序，`desc`：降序，默认 `asc`
 * @param key 排序对象数组时，指定排序的 `key`
 */
export function sort(
  value: ArrayOrObject,
  order: 'asc' | 'desc' = 'asc',
  key?: string
): ArrayOrObject {
  // 原地排序对象数组，根据对象的 key 值排序
  if (key && Array.isArray(value)) {
    // 提取所有的 key 值
    const srcKeys = value.map((i: Obj) => i && i[key])

    // 如果 key 存在不合法的值，直接返回原数组
    if (!srcKeys.every(i => typeof i === 'number' || typeof i === 'string')) {
      return value
    }

    // 根据 key 值排序
    const keys: any[] = quickSort(srcKeys, order)
    // 存储原始数组
    const data = [...value]
    // 将原数组清空
    value.length = 0
    // 如果为倒序，就翻转原数组
    if (order === 'desc') {
      data.reverse()
    }

    keys.forEach(k => {
      // 查找排序后数据对应的下标
      const i = data.findIndex(i => i && (i as Obj)[key] === k)
      // 插入到原数组中
      value.push(data[i])
      // 删除缓存的数据，防止重复插入
      delete data[i]
    })

    // 返回排序后的原数组
    return value
  }

  // 原地排序数组
  if (Array.isArray(value)) {
    // 快速排序
    return quickSort(value, order)
  }

  // 原地排序对象
  if (isObject(value)) {
    const keys = quickSort(Object.keys(value), order)
    keys.forEach((key: string) => {
      const temp = value[key]
      delete value[key]
      value[key] = temp
    })
    return value
  }

  // 不是数组或对象时，返回原值
  return value
}
