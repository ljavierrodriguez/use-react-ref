import React, { Component, createRef, useRef } from "react";

// createRef componentes de clases
// useRef componentes funcionales

/* class CustomTextInput extends Component {
  textInput = createRef();

  focusTextInput = () => this.textInput.current.focus();

  handleChange = (e) => console.log(this.textInput.current.value);

  render() {
    return (
      <>
        <input type="text" ref={this.textInput} onChange={this.handleChange} />
        <button onClick={this.focusTextInput}>Focus the text input</button>
      </>
    );
  }
} */


const CustomTextInput = () => {
    const textInput = useRef();

    const focusTextInput = () => textInput.current.focus();

    const handleChange = (e) => console.log(textInput);

    return (
        <>
            <input type="text" ref={textInput} onChange={handleChange} />
            <button onClick={focusTextInput}>Focus the text input</button>
        </>
    );
}


export default CustomTextInput;



/*

Mantener una variable mutable

Tanto en los componentes de clase como en los componentes funcionales que utilizan Hooks, 
tenemos dos formas de mantener los datos entre los renders:

Componentes en clase
    - En el estado del componente : cada vez que el estado cambia, el componente se volverá a representar.
    - En una variable de instancia : la variable persistirá durante toda la vida útil del componente. Los cambios 
    en una variable de instancia no generarán una nueva representación.
    
En componentes funcionales
    Las formas equivalentes en componentes funcionales que utilizan hooks:
    - En una variable de estado : useState o useReducer. Las actualizaciones en las variables de estado provocarán una 
    nueva representación del componente.
    - En una referencia: Equivalente a variables de instancia en componentes de clase. La mutación de la propiedad .current
     no causará una nueva representación.

*/