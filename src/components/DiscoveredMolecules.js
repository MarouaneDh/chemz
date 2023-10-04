import React, { useEffect, useState } from 'react'

const DiscoveredMolecules = () => {
    const [discov, setDiscov] = useState([])
    const discovered = localStorage.getItem('discovered')

    useEffect(() => {
        if (discovered !== '') {
            setDiscov(discovered.split(','))
        }
    }, [discovered])

    return (
        <div>
            <strong>Discovered molecules: </strong>
            <br />
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    discov?.map((el) => {
                        return (
                            <span className='discovered-element'>{el}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DiscoveredMolecules