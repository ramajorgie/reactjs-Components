import React from 'react';
import ListItem from './ListItem'

class List extends React.Component{
    render(){
        return (
          <div>
            <h1>ini list </h1>
            <ListItem />
            <i>{this.props.name}</i> <br></br>
            <i>{this.props.name2}</i>
          </div>
        );
    }
}
export default List;