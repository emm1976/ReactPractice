import LoremIpsumContainer from './components/LoremIpsumContainer'
import LoremIpsumForm from './components/LoremIpsumForm'

export default function LoremIpsumPage() {

  return (
    <div className='root-layout--main__div'>
      <section className='lorem-ipsum--container'>
        <h3>tired of boring lorem ipsum?</h3>

        <LoremIpsumForm />

        <LoremIpsumContainer />

      </section>
    </div>
  )
}
