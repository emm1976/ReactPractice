import hero_bcg from '../../assets/images/hero-bcg.jpeg'
import TabContainer from './components/TabContainer'

export default function TabPage() {
  
  return (
    <div className='root-layout--main__div'>
      <section>
        <div className='tabs--title'>
          <h2>about</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            aperiam!
          </p>
        </div>
        <div className='tabs--about-center section-center'>
          <article className='tabs--about-img'>
            <img src={hero_bcg} alt='' />
          </article>

          <TabContainer />

        </div>
      </section>
    </div>
  )
}
