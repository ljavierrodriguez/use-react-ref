## Mantener una variable mutable

Tanto en los componentes de clase como en los componentes funcionales que utilizan Hooks, tenemos dos formas de mantener los datos entre los renders:
### Componentes en clase
- En el estado del componente : cada vez que el estado cambia, el componente se volverá a representar.
- En una variable de instancia : la variable persistirá durante toda la vida útil del componente. Los cambios en una variable de instancia no generarán una nueva representación.
### En componentes funcionales
Las formas equivalentes en componentes funcionales que utilizan ganchos:
- En una variable de estado : useStateo useReducer. Las actualizaciones en las variables de estado provocarán una nueva representación del componente.
- En una referencia: Equivalente a variables de instancia en componentes de clase. La mutación de la .currentpropiedad no causará una nueva representación.