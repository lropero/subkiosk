export default function formatData (data, numColumns) {
  const rows = Math.floor(data.length / numColumns)
  let elementsInLastRow = data.length - rows * numColumns
  while (elementsInLastRow !== numColumns && elementsInLastRow !== 0) {
    data.push({ key: `blank-${elementsInLastRow}`, empty: true })
    elementsInLastRow++
  }
  return data
}
