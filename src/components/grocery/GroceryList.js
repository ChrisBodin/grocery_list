import Grocery from './Grocery';

const GroceryList = ({ groceries, listName}) => {
  return (
    <>
      <h1>{listName} List</h1>
      <ul>
        {
          groceries.map( grocery =>

            <Grocery {...grocery} />
          )
        }
      </ul>
    </>
  )
}


export default GroceryList;