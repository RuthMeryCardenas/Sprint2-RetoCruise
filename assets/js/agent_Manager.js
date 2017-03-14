//ADMINISTRADOR DE AGENTES
  //FUNCIONES
    //Agrega uno o más recursos de un Agente
    function addResourcesToAgent(agent, resources){
      agents[agent].addNewResources(resources);
    }
    //Elimina un recurso de un Agente
    function deleteAgentResource(agent, resource){
      agents[agent].deleteAResource(resource);
    }
    //Imprime la lista de todos los "Agentes"
    function printAllAgents(){
      agents.forEach(function(agent){
        console.log(agent.printAgentData());
      });
    }
    //Imprime la lista de "Agentes" por filtro
    function printAgentsByFilter(type){
      agents.forEach(function(agent){
        if (agent.type == this){
          console.log(agent.printAgentData());
        }
      }, type);
    }
