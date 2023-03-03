import { workData } from "./workData"
import { generateRandomData } from "./logic"

const getHomeData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateRandomData(workData.data))
    }, 1000)
  })
}

export { getHomeData }
