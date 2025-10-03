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

import { useState } from "react"

export default function Button() {
  const [count, setCount] = useState(0);
    function handleClick() {
      // alert ("Clicked!")
      setCount(count + 1)
    }

    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    )
  }