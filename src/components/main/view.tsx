import React from 'react'
import { RoomType } from '../../data/room'
import Card from '../card/card'
import './view.scss'

type Props = {
    roomDetails: RoomType[];
}
export const View = (props: Props) => {

    return (
        <div className="cardContainer">{
            props.roomDetails.map(x =>
                <Card roomDetail={x}/>
            )
        }
        </div>
    )
}