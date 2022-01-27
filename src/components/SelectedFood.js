import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Table = styled.table`
  border: 2px solid black;
  border-collapse: collapse; 
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 20vh;
`
const Tr = styled.tr`
  border: 2px solid black;
`

const Td = styled.td`
  border: 2px solid black;
  text-align: left;
`
const Th = styled.th`
  border: 2px solid black;
`

const SelectedFood = ({
  currentFood
}) => { 
  return <div>
    {currentFood && 
    <Table>
      <tbody>
      <Tr>
      <Th>Nutrient{currentFood.foodMeasures[0] ? 's per ' + currentFood.foodMeasures[0].disseminationText : 's per unit (unspecified, measured by USDA)'}</Th>
      <Th>Amount</Th>
      </Tr>
        {
          currentFood.foodNutrients.filter((nutrient) => nutrient.value).map((nutrient) => (<Tr key={nutrient.nutrientId}>
            <Td>{nutrient.nutrientName}</Td>
            <Td>{nutrient.value}{nutrient.unitName}</Td>
          </Tr>))
        }
      </tbody>
    </Table>
    }
  </div>
}

const mapStateToProps = state => ({
  currentFood: state.foods.currentFood
});

export default connect( mapStateToProps )(SelectedFood);
