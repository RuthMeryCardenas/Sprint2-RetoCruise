//ADMINISTRADOR DE AGENTES
  //FUNCIONES
    //Crea un POPUP para agregar nuevos recursos
    function createPopup(parent) {
      var div = document.createElement('div');
      var p = document.createElement('p');
      var input = document.createElement('input');
      var button = document.createElement('button');
      var jump = document.createElement('br');
      var close = document.createElement('button');
      div.setAttribute('class', 'popup');
      div.setAttribute('style', 'display: none');
      div.setAttribute('id', 'addResourcePopup');
      input.setAttribute('type', 'text');
      input.setAttribute('id', 'addResources');
      close.setAttribute('id', 'closePopup');
      button.setAttribute('id','add');
      parent.appendChild(div);
      div.appendChild(p);
      div.appendChild(input);
      div.appendChild(jump);
      div.appendChild(button);
      div.appendChild(close);
      p.innerHTML = '(Separate multiple resources name with commas)';
      button.innerHTML = 'Add Resources';
      close.innerHTML = 'Close';
      close.addEventListener('click',function(e){
        e.preventDefault();
        this.parentNode.style.display ='none';
      });
      button.addEventListener('click', function (e) {
        addResourcesToAgent (this.getAttribute('value'), document.getElementById('addResources').value);
        var parent = document.getElementById('agent' + this.getAttribute('value'));
        var agent = agents[this.getAttribute('value')];
        var idAgent = this.getAttribute('value');
        parent.innerHTML = '';
        createResourcesSpan (parent, agent, idAgent);
      });
    }
    //Crea un document fragmet "SPAN" para mostrar los recursos de un "Agente"
    function createResourcesSpan (parent, agent, idAgent) {
      agent.resources.forEach(function(resource){
        var resourceSpan = document.createElement('span');
        var resourceLabel = document.createTextNode(resource + ' ');
        var deleteButton = document.createElement('button');

        deleteButton.setAttribute('class', 'delete');
        deleteButton.setAttribute('value', resource);
        parent.appendChild(resourceSpan);
        resourceSpan.appendChild(resourceLabel);
        resourceSpan.appendChild(deleteButton);
        resourceSpan.appendChild(document.createTextNode('  '));
        deleteButton.appendChild(document.createTextNode('x'));
        deleteButton.addEventListener('click', function (e) {
          deleteAgentResource (parent.getAttribute('id'), deleteButton.getAttribute('value'));
          parent.removeChild(e.target.parentNode);
        });
      });
    }
    //Crea un document fragmet "DIV" para los mostrar los datos de un "Agente"
    function createAgentDiv (parent , agent, indexAgent) {
      var agentDiv = document.createElement('div');
      var circleSpan = document.createElement('span');
      var dataP = document.createElement('p');
      var popupA = document.createElement('a');
      var listResourcesSpan = document.createElement('span');

      circleSpan.setAttribute('class', 'circleBase');
      agent.status == 'idle' ? agentDiv.setAttribute('style', 'background-color: #9FF781') : agentDiv.setAttribute('style', 'background-color: #F3F781');
      popupA.setAttribute('class', 'link');
      listResourcesSpan.setAttribute('id', 'agent' + indexAgent);

      parent.appendChild(agentDiv);
      agentDiv.appendChild(circleSpan);
      agentDiv.appendChild(dataP);
      dataP.appendChild(document.createTextNode(agent.domain + ' | ' + agent.status + ' | ' + agent.ipAddress + ' | ' + agent.path));
      dataP.appendChild(document.createElement('br'));
      dataP.appendChild(popupA);
      dataP.appendChild(document.createTextNode(' | Resources: '));
      dataP.appendChild(listResourcesSpan);
      popupA.appendChild(document.createTextNode("specify sources"));
      popupA.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('addResourcePopup').style.display = 'block';
        document.getElementById('add').setAttribute('value', indexAgent);
      });
      createResourcesSpan (listResourcesSpan, agent, indexAgent);
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
    function addResourcesToAgent (idAgent, resources) {
      agents[idAgent].addNewResources(resources);
    }
    //Elimina un recurso de un Agente
    function deleteAgentResource (idAgent, resource){
      agents[idAgent.substring(5, idAgent.length)].deleteAResource(resource);
    }
