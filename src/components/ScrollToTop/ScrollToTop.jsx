import { useEffect } from "react"

function MyPage({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <>{children}</>
}

export default MyPage
