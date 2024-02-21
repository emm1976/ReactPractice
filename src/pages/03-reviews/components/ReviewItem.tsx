import { FC, Fragment } from "react"
import { IReviewItem } from "Types/types"

const ReviewItem: FC<IReviewItem> = ({ img, name, job, text }) => {
    return (
        <Fragment>
            <div className='img-container'>
                <img src={img} className='person-img' alt='' />
            </div>
            <h4 style={{ marginBottom: '0.25rem' }}>
                {name}
            </h4>
            <p className='reviewJob'>{job}</p>
            <p style={{ marginBottom: '0.75rem' }}>{text}</p>
        </Fragment>
    )
}

export default ReviewItem
