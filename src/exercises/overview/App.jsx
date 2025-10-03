// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }
import Profile from "./User.jsx";
import ShoppingList from "./List.jsx";
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
    </>

  )
}













