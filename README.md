# Resolución de Ejercicio (Rodolfo Alvarez)
====================================================================

El maquetado se hizo con los siguiente compnentes:

* [ExternalFrame] e [InternalFrame] para el recuadro contenedor

* [CreditFrame] el componente principal que llama al resto
  Tiene cinco props: 
  + amountMin={number}        -> Monto mínimo
  + amountMax={number}        -> Monto máximo
  + monthMin={number}         -> Cantidad mínima de meses de plazo
  + monthMax={number}         -> Cantidad máxima de meses de plazo
  + rate={number}             -> Tasa de interés

* [SliderBox] que se encarga de los sliders y llama al InputBox
  Tiene siete props:         
  + type='currency | number'  -> Valores con el signo $ o sin él
  + title={string}            -> Titulo
  + min={number}              -> Valor minimo del slider
  + max={number}              -> Valor máximo del slider
  + step={number}             -> Valor entre cada paso del slider
  + value={number}            -> Valor actual del slider
  + return={function}         -> Función que retorna el 'value' hacia el nodo padre

* [InputBox] muestra un valor recibido segun el tipo y devuelve un valor segun márgenes establecidos
  Tiene cinco props:
  + min={number}              -> Valor minimo del input
  + max={number}              -> Valor máximo del input
  + type='currency | number'  -> Valores con el signo $ o sin él
  + value={number}            -> Valor actual del input
  + return={function}         -> Función que retorna el 'value' hacia el nodo padre

* [MontlyFeeBox] calcula y muestra el valor de la cuota mensual con su título
  Tiene cuatro props:
  + title={string}            -> Titulo
  + amount={amount}           -> Monto solicitado
  + months={months}           -> Cantidad de mese de plazo
  + rate={props.rate}         -> Tasa de interés
  
  Se puede mejorar agregando complejidad al cáclulo, por ejemplo con tipo de amortización

* [Button] son 3 tipos de botones aunque solo se usan dos
  Tiene dos props:
  + title={string}                    -> Titulo
  + sizeName='big | normal | small'   -> El tamaño del botón con style asociado

### En todos los casos se puede mejorar el componente agregando styles por ejemplo pasando el backgrounColor como props

### El ejercicio se desarrolló y probó con Node v16.15.0

====================================================================

# Ejercicio React

## Ejercicio
### Diseño
![UI](/ejercicio.jpg?raw=true)
* Los valores con bordes (Monto Total y Plazo) son inputs de numeros.
* Los textos Obtené Crédito y Ver detalle de cuotas son botones.
* La font utilizada es Montserrat (agregarla al html).

### Implementación
1. Maquetar el diseño provisto creando los componentes que crea necesarios.
2. Implementar la siguiente funcionalidad:
    1. Utilizar la libreria [rc-slider](http://react-component.github.io/slider/) para dar funcionalidad a los sliders.
    2. Al mover los sliders se deberan actualizar los valores de Monto Total y Plazo al valor actual del slider.
    3. Los inputs de Monto Total y Plazo fijo deberán ser editables por el usuario y modificarl el valor del slider.
    3. Deberá actualizarse el valor de Cuota fija por mes siendo este valor el Monto total seleccionado, dividido el Plazo seleccionado.

## Codigo provisto

### Estructura de archivos

````
build/
src/
|- index.js _______________________________ # entrada de la aplicación
|- App.js _________________________________ # Componente principal
````

### Instalación

1. Descargar el codigo de Github con la opción de descarga o hacer un fork del repositorio (a gusto). 
2. `yarn` o `npm install` para instalar paquetes npm 
3. `yarn start` o `npm start` para inicializar server de desarrollo