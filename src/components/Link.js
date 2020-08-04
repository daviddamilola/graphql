import React from 'react'

function Link({link}) {
    const  { description, url } = link;
    return (
        <div>
            <div>{description} ({url})</div>
        </div>
    )
}

export default Link
