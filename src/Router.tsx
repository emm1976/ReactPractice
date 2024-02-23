import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

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
import QuestionPage, { questionsLoader } from './pages/07-questions/QuestionPage'
import MenuPage, { menuLoader } from './pages/08-menu/MenuPage'
import VideoPage from './pages/09-video/VideoPage'
import TabPage from './pages/11-tabs/TabPage'
import TimerPage, { countdownTimerLoader } from './pages/12-countdown-timer/TimerPage'
import LoremIpsumPage from './pages/13-lorem-ipsum/LoremIpsumPage'
import GroceryBudPage from './pages/14-grocery-bud/GroceryBudPage'
import SliderPage, { slidesLoader } from './pages/15-slider/SliderPage'
import ScrollPage from 'pages/10-scroll/ScrollPage'
import { reviewsLoader } from 'pages/03-reviews/components/ReviewContainer'
import { tabsLoader } from 'pages/11-tabs/components/TabContainer'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='colorflipper' element={<ColorFlipperLayout />}>
        <Route path='simple' element={<SimpleColorFlipper />} />
        <Route path='hex' element={<HexColorFlipper />} />
      </Route>
      <Route path='counter' element={<CounterPage />} />
      <Route path='reviews' element={<ReviewPage />} loader={reviewsLoader}/>
      <Route path='navbar' element={<NavBarPage />} />
      <Route path='sidebar' element={<SideBarPage />} />
      <Route path='modal' element={<ModalPage />} />
      <Route path='questions' element={<QuestionPage />} loader={questionsLoader}/>
      <Route path='menu' element={<MenuPage />} loader={menuLoader}/>
      <Route path='video' element={<VideoPage />} />
      <Route path='scroll' element={<ScrollPage />} />
      <Route path='tabs' element={<TabPage />} loader={tabsLoader} />
      <Route path='timer' element={<TimerPage />} loader={countdownTimerLoader} />
      <Route path='loremipsum' element={<LoremIpsumPage />}  />
      <Route path='grocerybud' element={<GroceryBudPage />} />
      <Route path='slider' element={<SliderPage />}  loader={slidesLoader}/>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

export default Router
