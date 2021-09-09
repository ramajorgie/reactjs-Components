import React from 'react';

class ListItem extends React.Component{


    state ={
        // dataArr : [
        //     nama = 'BUKU MUDA MENIKAH',
        //     penulis = 'Ramma'
        // ]
        dataArr : [
         'MENIKAH DIUSIA MUDA MERUPAKAN HAL YANG SANGAT WENAK'
        ]
    }
    render(){
        return(
            <div>
                <h1>INI List ItEM</h1>
                {this.state.dataArr.map(item =>
                    <div>
                        <h3>{item}</h3>
                    </div>
                )}
            </div>
        )
    }
}

export default ListItem;