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

//styling for Select
const Select = styled(ReactSelect)`
  margin: 2%;
  height: 8vh;
  border: none;

  &:focus {
    outline: none;
  }

  .select__control {
    border-radius: 0px;
    border: 1px solid black;
  }

  .select__control--is-focused {
    border: none;
  }
  .select__indicator-separator {
    display: none;
  }

  .select__indicator {
    color: black;
    padding: 2px;
  }
  .select__option--is-focused {
    background-color: white !important;
  }
  .select__option--is-selected {
    background-color: white;
  }
  .select__menu {
    margin-top: 0;
  }

`


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
      () => debounce(searchSubmit, 500),
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

