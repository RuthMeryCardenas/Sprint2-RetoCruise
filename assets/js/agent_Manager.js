//ADMINISTRADOR DE AGENTES
  //FUNCIONES
    //Crea un POPUP para agregar nuevos recursos
    function createPopup(parent) {
      var span = document.createElement('span');
      var div = document.createElement('div');
      var p = document.createElement('p');
      var input = document.createElement('input');
      var button = document.createElement('button');
      var a = document.createElement('a');
      span.setAttribute('class', 'overlay');
      span.setAttribute('id', 'addResourcePopup');
      div.setAttribute('class', 'popup');
      input.setAttribute('type', 'text');
      a.setAttribute('id', 'closePopup');
      parent.appendChild(span);
      span.appendChild(div);
      div.appendChild(p);
      div.appendChild(input);
      div.appendChild(button);
      div.appendChild(a);
      p.innerHTML = '(Separate multiple resources name with commas)';
      button.innerHTML = 'Add Resources';
      a.innerHTML = '&times;';
    }
    //Agrega uno o más recursos de un Agente
    function addResourcesToAgent (agent, resources) {
      agents[agent].addNewResources(resources);
    }
    //Elimina un recurso de un Agente
    function deleteAgentResource (agent, resource){
      agents[agent].deleteAResource(resource);
    }
    //Imprime la lista de todos los "Agentes"
    function printAllAgents (parent) {
      agents.forEach(function(agent){
        agent.printAgentData(parent);
      });
    }
    //Imprime la lista de "Agentes" por filtro
    function printAgentsByFilter (parent, type) {
      agents.forEach(function(agent){
        if (agent.type == this){
          agent.printAgentData(parent);
        }
      }, type);
    }
