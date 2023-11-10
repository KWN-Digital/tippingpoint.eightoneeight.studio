export function truncate(str: string, max: number) {
  const array = str.trim().split(' ')
  const ellipsis = array.length > max ? '...' : ''

  return array.slice(0, max).join(' ') + ellipsis
}
