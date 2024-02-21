import { Fragment, ReactNode } from "react";

interface ListProps<T> {
    items: T[]
    renderItem: (item: T) => ReactNode
}

export default function List<T>({ items, renderItem }: ListProps<T>) {
    return (
        <Fragment>
            {items.map(renderItem)}
        </Fragment>
    )
}
