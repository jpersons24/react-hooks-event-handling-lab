function Keypad() {
   function handleOnChange() {
      console.log('Entering password...')
   }

   return (
      <div>
         <h3>Keypad Component</h3>
         <input type="password" onChange={handleOnChange}></input>
      </div>
   )
}

export default Keypad;
