import ReviewContainer from "./components/ReviewContainer";

export default function ReviewPage() {

  return (
    <div className='root-layout--main__div'>
      <section className='reviews--container section-grid-center'>
        <div className='reviews--title'>
          <h2>our reviews</h2>
          <div className='underline' />
        </div>

        <ReviewContainer />

      </section>
    </div>
  )
}
