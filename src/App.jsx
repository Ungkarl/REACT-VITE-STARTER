import { useEffect } from "react"
import { useLocation, useRoutes } from "react-router-dom"


function App() {
  const location = useLocation()

useEffect(() => {
  window.scrollTo(0, 0)


}, [location])
  const routes = useRoutes([
    {
      path: '/',
      element: <h1>HOMESITE</h1>
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
