import { useState } from "react"
import ReviewItem from "./ReviewItem"
import { generateRandomInteger } from "common/utils"
import { apiAxios } from "service/api-axios"
import { IReviewItem } from "Types/types"
import { useLoaderData } from "react-router-dom"

const ReviewContainer = () => {

    const dataReviewItems: IReviewItem[] = useLoaderData() as IReviewItem[]

    const reviewCount = dataReviewItems.length

    const [currentItem, setCurrentItem] = useState(0)

    const onClickPrevBtn = () => setCurrentItem(old => old === 0 ? reviewCount - 1 : old - 1)
    const onClickNextBtn = () => setCurrentItem(old => (old === reviewCount - 1) ? 0 : old + 1)
    const onClickRandomBtn = () => setCurrentItem(generateRandomInteger(0, reviewCount - 1))

    return (
        <article className='review'>
            <ReviewItem {...dataReviewItems[currentItem]} />

            <div className='button-container'>
                <button className='btnReview' onClick={onClickPrevBtn}>
                    <i className='fas fa-chevron-left'></i>
                </button>
                <button className='btnReview' onClick={onClickNextBtn}>
                    <i className='fas fa-chevron-right'></i>
                </button>
            </div>
            <button className='random-btnReview' onClick={onClickRandomBtn}>
                surprise me
            </button>
        </article>
    );
}

export default ReviewContainer

// data loader
export const reviewsLoader = () => {
    return apiAxios
        .get(`reviews`)
        .then((response) => {
            return response.data as IReviewItem[]
        })
        .catch(() => {
            return []
        })
}
