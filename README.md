## proyectPalcort
_En la siguinte aplicacion encontrara un banckend realizado en node con el framework express, el cual realiza un funcionamiento similar al de un microservicio, aqui se podran realizar las siguientes transacciones:_ <br/>
(GET) listar productos  (1pt) <br/>
(GET) ver detalle de un producto en especifico (1pt)<br/>
(POST) crear un bono (1pt)<br/>
(GET) ver lista de bonos disponibles (2pt)<br/>
GET) ver detalle de 1 bono (1pt)<br/>
(POST) validar bono por id (2pt)<br/>
Para subir el proyecto de manera local se deben seguir los siguientes pasos:<br/>

Git clone<br/>
npm install<br/>
npm start<br/>
<br/>

Para acceder a los servicios es necesario utilizar un cliente como postman ya que se debe agregar el header auth para tener acceso a los servicios.<br/>
(podra encontrar las colecciones de postman en el archivo Prueba Palcort.postman_collection.json)<br/>

todos los servicios tendran acceso con el endpoint iniciando de la siguiente manera http://localhost:3000/api/v1/<br/>

Respecto a la data de productos para evidenciar mejor los detalles opte por agregar un campo mas al json donde esten estos datos de detalle, asi no devolver el mismo valor al listar todos los productos o el producto con sus detalles
