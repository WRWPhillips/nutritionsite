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
      <Th>Nutrient</Th>
      <Th>Amount</Th>
      </Tr>
        {
          currentFood.foodNutrients.map((nutrient) => (<Tr key={nutrient.nutrientId}>
            <Td>{nutrient.nutrientName}</Td>
            <Td>{nutrient.nutrientNumber}{nutrient.unitName}</Td>
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
