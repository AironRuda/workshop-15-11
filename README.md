# workshop-15-11

<ul>En el repositorio se encuentran los siguientes documentos:
<li>Carpeta “images” en donde se almacenan las imágenes utilizadas</li>
<li>Carpeta “styles” en donde se almacenan los estilos implementados</li>
<li>Documento “index.html” que contiene las etiquetas usadas y es el archivo que se debe correr en el navegador para observar el funcionamiento del proyecto. </li>
<li>Documento “main.js” que contiene la lógica de programación implementada en el proyecto</li>
<li>Documento “db.json” que contiene la información almacenada e implementada correspondiente al JSON server requerido </li>
<li>Documento “READ.md” que contiene la descripción del contenido del repositorio y descripción del funcionamiento del proyecto</li>
<hr>

# Presentado por:

Andres Ospina

Airon Ruda

# Funcionamiento

El proyecto consiste en una página de películas en la que se presentan diferentes títulos en los que varía su nombre, calificación y categoría. Es posible usar el buscador disponible para filtrar las películas, por nombre, categoría o calificación.
Para que la información pueda desplegarse correctamente se debe contar con el JSON-SERVER usando en una consola, el siguiente código:
npm install -g json-server
para la instalación del servicio en general.
Además, en una consola de tipo cmd, se debe ingresar el siguiente código:
json-server –watch db.json
