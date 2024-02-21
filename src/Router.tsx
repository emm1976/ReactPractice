import {
  Route,
  createBrowserRouter,
  createRoutesFromElements} from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout'
import ColorFlipperLayout from './layouts/ColorFlipperLayout'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SimpleColorFlipper from './pages/01-color-flipper/SimpleColorFlipper'
import HexColorFlipper from './pages/01-color-flipper/HexColorFlipper'
import CounterPage from './pages/02-counter/CounterPage'
import ReviewPage from './pages/03-reviews/ReviewPage'
import NavBarPage from './pages/04-navbar/NavBarPage'
import SideBarPage from './pages/05-sidebar/SideBarPage'
import ModalPage from './pages/06-modal/ModalPage'
import QuestionPage from './pages/07-questions/QuestionPage'
import MenuPage from './pages/08-menu/MenuPage'
import VideoPage from './pages/09-video/VideoPage'
// import Project10 from './pages/10-scroll/Project10'
import TabPage from './pages/11-tabs/TabPage'
import TimerPage, { countdownTimerLoader } from './pages/12-countdown-timer/TimerPage'
import LoremIpsumPage from './pages/13-lorem-ipsum/LoremIpsumPage'
import Project14 from './pages/14-grocery-bud/Project14'
import SliderPage from './pages/15-slider/SliderPage'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='colorflipper' element={<ColorFlipperLayout />}>
        <Route path='simple' element={<SimpleColorFlipper />} />
        <Route path='hex' element={<HexColorFlipper />} />
      </Route>
      <Route path='counter' element={<CounterPage />} />
      <Route path='reviews' element={<ReviewPage />} />
      <Route path='navbar' element={<NavBarPage />} />
      <Route path='sidebar' element={<SideBarPage />} />
      <Route path='modal' element={<ModalPage />} />
      <Route path='questions' element={<QuestionPage />} />
      <Route path='menu' element={<MenuPage />} />
      <Route path='video' element={<VideoPage />} />
      {/* <Route path='Project10' element={<Project10 />} /> */}
      <Route path='tabs' element={<TabPage />} />
      <Route path='timer' element={<TimerPage />} loader={countdownTimerLoader} />
      <Route path='loremipsum' element={<LoremIpsumPage />} />
      <Route path='Project14' element={<Project14 />} /* loader={store.dispatch(fetchGroceryBudItems())} */ />
      <Route path='slider' element={<SliderPage />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

export default Router
