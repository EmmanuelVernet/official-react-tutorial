// export default function Button() {
  // function handleClick() {
  //   alert("clicked")
  // }

  // return (
  //   <button onClick={handleClick}>
  //     click me
  //   </button>
  // );

//   return (
//     <button onClick={() => { alert('clicked')}}>
//       click me
//     </button>
//   );
// }

// function AlertButton({ message, children }) {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">
//         Play
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload
//       </AlertButton>
//     </div>
//   );
// }

function Button({ onClick, children }) {
  console.log(children)
  return(
    <button onClick={onClick}>{children}</button>
  )
}

function PlayButton( {movieName} ) {
  
  function handlePlayClick() {
    alert(`Playing ${movieName}!`)
  }

  return(
    <Button onClick={handlePlayClick}>
      Play '{movieName}'
    </Button>
  )
}

function UploadButton() {
  return(
    <Button onClick={() => alert('Uploading')}>
      Upload image
    </Button>
  )
}

export default function Toolbar() {
  return(
    <div>
      <PlayButton movieName="Kiki's Delivery" />
      <UploadButton/>
    </div>
  )
}