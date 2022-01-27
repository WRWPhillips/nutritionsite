import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import ReactSelect from 'react-select';
import styled from 'styled-components';
import {
  searchSubmit,
  updateQuery,
  setCurrentFood
} from '../actions';
import { debounce } from 'lodash'
//import Async, {useAsync} from 'react-select';

//styling for Select
const Select = styled(ReactSelect)`
  margin: 2%;
  height: 8vh;
  border: 3px solid black;
`

const selectStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '2px solid black',
    padding: 5,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  }
}


const SearchBar = ({
  query,
  foods,
  foodNames,
  isFetching,
  error,
  searchSubmit,
  updateQuery,
  setCurrentFood
}) => {
    const debouncedSearch = useMemo(
      () => debounce(searchSubmit, 1000),
      [searchSubmit]
    )
    const updateAndSearch = (newQuery) => {
      if (newQuery === query) {
        return
      }

      updateQuery(newQuery)
      debouncedSearch(newQuery)

      return newQuery
    }

    if(error) {
        return <h2>error</h2>
    }

    if(isFetching) {
        return <h2>search</h2>
    }

    return (
      <Select
        isLoading={isFetching}
        styles={selectStyles}
        options={foodNames}
        onInputChange={updateAndSearch}
        onChange={item => setCurrentFood(item, foods)}
        />
    );
}

const mapStateToProps = state => ({
  query: state.query.query,
  foods: state.foods.foods,
  foodNames: state.foods.foods.map(x => ({
    value: x.fdcId,
    label: `${x.lowercaseDescription} ${x.brandName ? '(' + x.brandName + ')' : ''}`
  })),
  searchSubmit: state.searchSubmit,
  isFetching: state.isFetching,
  error: state.error,
})

const mapDispatchToProps = (dispatch) => ({
  searchSubmit: (query) => searchSubmit(dispatch)(query),
  updateQuery: (query) => dispatch(updateQuery(query)),
  setCurrentFood: (item, foods) => {
    const newFood = foods.filter(x => x.fdcId === item.value)[0]
    dispatch(setCurrentFood(newFood))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

