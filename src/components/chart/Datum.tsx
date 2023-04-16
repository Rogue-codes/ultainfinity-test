import React from 'react';
import "./datum.scss"

interface CompProps {
    data: {
        name: string,
        percentage: number | null | undefined,
        colour: string
    }[]
}
export default function Datum({ data }: CompProps) {
    return <div className='datum'>
        <div className='status'>
            {
                data.map((datum, index) =>
                    <div style={{ width: `${datum.percentage}%`, backgroundColor: datum.colour }}></div>)
            }
        </div>


        <div className='datum__details'>
            {
                data.map((datum, index) =>
                    <p><div className='box' style={{backgroundColor : datum.colour, height:"10px", width:"10px", display:"inline-block", marginRight:"10px"}}></div>{datum.name} - {datum.percentage}%</p>)
            }
        </div>

    </div>
}
