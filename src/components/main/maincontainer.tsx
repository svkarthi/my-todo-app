import React from 'react'
import { isThisTypeNode } from 'typescript';
import { Home } from "./home";
import { View } from "./view";
import Insert  from "./insert";
import { roomData,RoomType } from '../../data/room'
type Props = {
    selected: string;
};
type State = {
    displayComponent:  any; // like this
};


class MainContainer extends React.Component<Props, State>{

    DisplayComponent: JSX.Element | undefined | null =null;

    render() {
        /*if (this.props.selected === "Home")
            this.setState({ displayComponent: Home })
        else 
            this.setState({ displayComponent: View }) */
            this.DisplayComponent=  ((component:string) => {
                if (component=== "Home")
                      return <Home/>
                else  if (component=== "View")
                   return <View roomDetails={roomData}/>
                else  if (component=== "Insert")
                   return <Insert/>
                return undefined
               })(this.props.selected);
       
        return (
            <div>Page
                { this.DisplayComponent && this.DisplayComponent }
               
       </div>
        )
    }
}

export default MainContainer;