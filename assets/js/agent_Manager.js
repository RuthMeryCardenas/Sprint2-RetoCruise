//ADMINISTRADOR DE AGENTES
  //FUNCIONES
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
