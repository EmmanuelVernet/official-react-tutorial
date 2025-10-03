import Profile from "./User.jsx";
import ShoppingList from "./List.jsx";
import Button from "./Button.jsx";
import './index.css';


export default function App() {
  return (
    <>
      <div>
        <Profile />
      </div>
      <div>
        <h1>My shopping list</h1>
        <ShoppingList />
      </div>
      <div>
        <Button />
        <Button />
      </div>
    </>

  )
}













