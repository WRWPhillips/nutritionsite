import React from 'react';
import {Select} from 'react-select';
import mockData from '../MockData/MockData';

const searchListMapped = mockData.foods
    .map(
        ({ lowercaseDescription }) => {
            return{
                value: lowercaseDescription,
                label: lowercaseDescription
            }
        }
    )
    
const searchList = searchListMapped
    .reduce((l, r) => ({ [r.label]: r, ...l}), {})

    


export default function SearchBar(props) {
    const { queryWord, searchFunction } = props;

    return(
        <div>
            <button onClick={searchFunction(queryWord), console.log(searchList, searchListMapped)}>Search Button</button>
        </div>
    )
}

// class SearchBar extends React.Component{
//     state = {
//         selectedOption: null,
//     }

//     handleChange = selectedOption => {
//         this.setState({ selectedOption })
//     }

//     render(){

//     }
// }