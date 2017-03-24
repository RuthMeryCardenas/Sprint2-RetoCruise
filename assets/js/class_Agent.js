//CLASE "AGENTE"
  //FUNCIONES
    //Contructor que define la clase
    function Agent(type, status, domain, ipAddress, path) {
      this.type = type,//Physical(Físico) or Virtual(Virtual)
      this.status = status,//Idle(Inactivo) or Building(en Contrucción)
      this.domain = domain,
      this.ipAddress = ipAddress,
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
      this.printResources = function (parent) {//Imprime los recursos del Agente
        var resourcesSpan = document.createElement('span');
        var deleteButton;
        parent.appendChild(resourcesSpan);
        resourcesSpan.appendChild(document.createTextNode(' | Resources: '));
        this.resources.forEach(function(resource){
          deleteButton = document.createElement('button');
          deleteButton.setAttribute('class', 'delete');
          resourcesSpan.appendChild(document.createTextNode(resource + ' '));
          resourcesSpan.appendChild(deleteButton);
          deleteButton.appendChild(document.createTextNode('x'));
          resourcesSpan.appendChild(document.createTextNode('  '));
        });
      }
      this.printAgentData = function (parent) {//Imprime los datos del Agente
        var agentDiv = document.createElement('div');
        var circleSpan = document.createElement('span');
        var dataP = document.createElement('p');
        var popupA = document.createElement('a');

        circleSpan.setAttribute('class', 'circleBase');
        this.status == 'idle' ? agentDiv.setAttribute('style', 'background-color: #9FF781') : agentDiv.setAttribute('style', 'background-color: #F3F781');
        popupA.setAttribute('class', 'link');
        popupA.setAttribute('href', '#addResourcePopup');

        parent.appendChild(agentDiv);
        agentDiv.appendChild(circleSpan);
        agentDiv.appendChild(dataP);
        dataP.appendChild(document.createTextNode(this.domain + ' | ' + this.status + ' | ' + this.ipAddress + ' | ' + this.path));
        dataP.appendChild(document.createElement('br'));
        dataP.appendChild(popupA);
        popupA.appendChild(document.createTextNode("specify sources"));
        this.printResources(dataP);
      }

    }
