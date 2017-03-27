//CLASE "AGENTE"
  //FUNCIONES
    //Contructor que define la clase
    function Agent(type, status, domain, ipAddress, path) {
      this.type = type,//Physical(Físico) or Virtual(Virtual)
      this.status = status,//Idle(Inactivo) or Building(en Contrucción)
      this.domain = domain,
      this.ipAddress = ipAddress,//Llave o identificador
      this.path = path,//Ruta de acceso del Agente
      this.resources = [];//Almacena los recursos del Agente
      this.addNewResources = function (stringResources) {//Agrega uno o más nuevos recursos al Agente
        var arrayResources = stringResources.split(",");
        for (var i = 0; i < arrayResources.length; i++) {
          this.resources.push(arrayResources[i].trim());
        }
      }
      this.deleteAResource = function (resource){//Elimina un recurso del Agente
        console.log(this.resources.indexOf(resource));
        this.resources.splice(this.resources.indexOf(resource), 1);
      }
    }
