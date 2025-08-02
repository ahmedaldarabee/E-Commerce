import React, { memo } from 'react'

const Heading = memo(({ title,children }: { title: string; children?: React.ReactNode }) => {
    return(
        <>
            <h2 className="mb-3 text-capitalize" style={{ fontSize: "26px" }}
            >{title}</h2>
        </>
    )
})

export default Heading