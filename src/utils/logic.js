const generateRandomData = (data) => {
  let randomData = []
  for (let i = 0; i < data.length; i++) {
    const randomIndex = Math.floor(Math.random() * data.length)
    let indexExists = false
    for (let j = 0; j < randomData.length; j++) {
      if (randomData[j].id === data[randomIndex].id) {
        indexExists = true
        break
      }
    }
    if (indexExists) {
      i--
      continue
    }

    randomData.push(data[randomIndex])
  }

  const rows = []
  for (let i = 0; i < randomData.length; i += 2) {
    const row = [randomData[i], randomData[i + 1]]
    rows.push(row)
  }

  return rows.slice(0, 2)
}

let idCounter = 0

function generateUniqueId(index) {
  const timestamp = new Date().getTime().toString(36)
  const random = Math.random().toString(36).substring(2, 5)
  idCounter++
  return `${timestamp}-${random}-${index ? index : ""}-${idCounter}`
}

export { generateRandomData, generateUniqueId }
