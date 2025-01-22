import { useEffect } from "react"
import { useLocation, useRoutes } from "react-router-dom"
import Carousel from "./pages/carouselPage"
function App() {
  const location = useLocation()

useEffect(() => {
  window.scrollTo(0, 0)


}, [location])
  const routes = useRoutes([
    {
      path: '/',
      element: <Carousel />
    }


  ])

  return (
    <div className='center-page'>
      <div className={'page'}>
          {routes}
      </div>
    </div>
  )
}

export default App
