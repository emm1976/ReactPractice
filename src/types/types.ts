export interface IMenuItem {
    id: number,
    title: string,
    category: string,
    price: number,
    img: string,
    desc: string
}

export interface IQuestionItem {
    id: number,
    questionTitle: string,
    questionText: string,
    show: boolean
}

export interface IReviewItem {
    id: number,
    name: string,
    job: string,
    img: string,
    text: string
}

export interface ITabItem {
    id: number,
    title: string,
    text: string,
    active: boolean
}

export interface ISlideItem {
    id: number,
    img: string
}