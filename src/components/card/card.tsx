import React from 'react'
import './card.scss'
import { RoomType } from '../../data/room'

type State = {

}
type Props = {
    roomDetail: RoomType;
}

class Card extends React.Component<Props,State >{
    render() {
        return (
            <>
                <div className="card">
                <ul>
                      <li>{this.props.roomDetail.no}</li>
                      <li>{this.props.roomDetail.type}</li>
                      <li>{this.props.roomDetail.vacancy}</li>
                      <li>{this.props.roomDetail.ac}</li>
    
                </ul>
                </div>
            </>
        )
    }

}

export default Card;