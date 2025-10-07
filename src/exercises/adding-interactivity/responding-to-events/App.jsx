export default function Button() {
  // function handleClick() {
  //   alert("clicked")
  // }

  // return (
  //   <button onClick={handleClick}>
  //     click me
  //   </button>
  // );

  return (
    <button onClick={() => { alert('clicked')}}>
      click me
    </button>
  );
}