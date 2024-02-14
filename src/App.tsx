import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout'
import Project01Layout from './layouts/Project01Layout'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Project01Simple from './pages/01-color-flipper/Project01Simple'
import Project01Hex from './pages/01-color-flipper/Project01Hex'
import Project02 from './pages/02-counter/Project02'
import Project03 from './pages/03-reviews/Project03'
import Project04 from './pages/04-navbar/Project04'
import Project05 from './pages/05-sidebar/Project05'
import Project06 from './pages/06-modal/Project06'
import Project07 from './pages/07-questions/Project07'
import Project08 from './pages/08-menu/Project08'
import Project09 from './pages/09-video/Project09'
// import Project10 from './pages/10-scroll/Project10'
import Project11 from './pages/11-tabs/Project11'
import Project12, { countdownTimerLoader } from './pages/12-countdown-timer/Project12'
import Project13 from './pages/13-lorem-ipsum/Project13'
import Project14 from './pages/14-grocery-bud/Project14'
import Project15 from './pages/15-slider/Project15'

// =============================================================================================

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='Project01' element={<Project01Layout />}>
        <Route path='simple' element={<Project01Simple />} />
        <Route path='hex' element={<Project01Hex />} />
      </Route>
      <Route path='Project02' element={<Project02 />} />
      <Route path='Project03' element={<Project03 />} />
      <Route path='Project04' element={<Project04 />} />
      <Route path='Project05' element={<Project05 />} />
      <Route path='Project06' element={<Project06 />} />
      <Route path='Project07' element={<Project07 />} />
      <Route path='Project08' element={<Project08 />} />
      <Route path='Project09' element={<Project09 />} />
      {/* <Route path='Project10' element={<Project10 />} /> */}
      <Route path='Project11' element={<Project11 />} />
      <Route path='Project12' element={<Project12 />} loader={countdownTimerLoader} />
      <Route path='Project13' element={<Project13 />} />
      <Route path='Project14' element={<Project14 />} />
      <Route path='Project15' element={<Project15 />} />
      
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
