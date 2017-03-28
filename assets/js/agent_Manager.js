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
    //Crea un document fragmet "SPAN" para mostrar los recursos de un "Agente"
    function createResourcesSpan (parent, agent, idAgent) {
      var listResourcesSpan = document.createElement('span');
      listResourcesSpan.setAttribute('id', 'agent' + idAgent);
      parent.appendChild(listResourcesSpan);
      agent.resources.forEach(function(resource){
        var resourceSpan = document.createElement('span');
        var resourceLabel = document.createTextNode(resource + ' ');
        var deleteButton = document.createElement('button');

        deleteButton.setAttribute('class', 'delete');
        deleteButton.setAttribute('value', resource);
        listResourcesSpan.appendChild(resourceSpan);
        resourceSpan.appendChild(resourceLabel);
        resourceSpan.appendChild(deleteButton);
        resourceSpan.appendChild(document.createTextNode('  '));
        deleteButton.appendChild(document.createTextNode('x'));
        deleteButton.addEventListener('click', function (e) {
          deleteAgentResource (listResourcesSpan.getAttribute('id'), deleteButton.getAttribute('value'));
          listResourcesSpan.removeChild(e.target.parentNode);
        });
      });
    }
    //Crea un document fragmet "DIV" para los mostrar los datos de un "Agente"
    function createAgentDiv (parent , agent, indexAgent) {
      var agentDiv = document.createElement('div');
      var circleSpan = document.createElement('span');
      var dataP = document.createElement('p');
      var popupA = document.createElement('a');

      circleSpan.setAttribute('class', 'circleBase');
      agent.status == 'idle' ? agentDiv.setAttribute('style', 'background-color: #9FF781') : agentDiv.setAttribute('style', 'background-color: #F3F781');
      popupA.setAttribute('class', 'link');
      // popupA.setAttribute('href', '#addResourcePopup');

      parent.appendChild(agentDiv);
      agentDiv.appendChild(circleSpan);
      agentDiv.appendChild(dataP);
      dataP.appendChild(document.createTextNode(agent.domain + ' | ' + agent.status + ' | ' + agent.ipAddress + ' | ' + agent.path));
      dataP.appendChild(document.createElement('br'));
      dataP.appendChild(popupA);
      dataP.appendChild(document.createTextNode(' | Resources: '));
      popupA.appendChild(document.createTextNode("specify sources"));
      popupA.addEventListener('click', function (e) {
      //   document.getElementById('addResourcePopup').style.display = 'block';
      //   console.log('hola te estoy llamando');
      // });
      createResourcesSpan (dataP, agent, indexAgent);
    }
    //Imprime todos los "Agentes"
    function printAllAgents (parent) {
      agents.forEach(function(agent, index){
        createAgentDiv (parent, agent, index);
      });
      createPopup(parent);
    }
    //Imprime los "Agentes" por filtro
    function printAgentsByFilter (parent, type) {
      agents.forEach(function(agent, index){
        if (agent.type == this){
          createAgentDiv (parent, agent, index);
        }
      }, type);
      createPopup(parent);
    }
    //Imprime el total de "Agentes" con estado "idle" y "building"
    function printSummary(accountants, type) {
      var buildingCounter, idleCounter;
      buildingCounter = agents.filter(function (agent) {
        if (this == 'all') {
          return agent.status == 'building';
        }else {
          return agent.status == 'building' && agent.type == this;
        }
      }, type);
      idleCounter = agents.filter(function (agent) {
        if (this == 'all') {
          return agent.status == 'idle';
        }else {
          return agent.status == 'idle' && agent.type == this;
        }
      }, type);
      accountants[0].appendChild(document.createTextNode(buildingCounter.length));
      accountants[1].appendChild(document.createTextNode(idleCounter.length));
    }
    //Agrega uno o más recursos de un Agente
    function addResourcesToAgent (agent, resources) {
      agents[agent].addNewResources(resources);
    }
    //Elimina un recurso de un Agente
    function deleteAgentResource (idAgent, resource){
      agents[idAgent.substring(5, idAgent.length)].deleteAResource(resource);
    }
