// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function Button() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }
export default function Button() {
    function handleClick() {
      alert ("Clicked!")
    }

    return (
      <button onClick={handleClick}>
        Click me!
      </button>
    )
  }