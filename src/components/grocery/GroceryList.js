import Grocery from './Grocery';

const GroceryList = ({ groceries, listName, groceryClick}) => {
  return (
    <>
      <h1>{listName} List</h1>
      <ul>
        {
          groceries.map( grocery =>

            <Grocery key={grocery.id} {...grocery} groceryClick={groceryClick} />
          )
        }
      </ul>
    </>
  )
}


export default GroceryList;