import React from 'react'
import './index.scss'


function AuthorTags({ data = [], className }) {
    return (
        <span className={ [ 'authorTags', className ] }>
            { data.map((value, index) => {
                if (index === data.length - 1) {
                    return <span className="author" key={ value.id }>{ value.name }</span>
                } else {
                    return (<span key={ value.id }>
                        <span className="author">{ value.name }</span>
                        <strong>/</strong>
                    </span>)
                }
            }) }
        </span>
    )
}

export default AuthorTags