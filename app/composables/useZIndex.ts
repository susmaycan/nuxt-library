export const useZIndex = () => {
  const currentZIndex = useState<number>('z-index', () => 900)

  const getZIndex = () => {
    currentZIndex.value += 1

    return currentZIndex.value
  }

  return {
    currentZIndex,
    getZIndex
  }
}
