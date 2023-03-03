import React from "react"
import { Outlet } from "react-router-dom"
import MyPage from "../../components/ScrollToTop/ScrollToTop"
import { Main } from "../../layouts/Main"

const Home = () => {
  return (
    <MyPage>
      <Main />
    </MyPage>
  )
}

export default Home
