//Arreglo que almacena la lista de Agentes
var agents = [];
//Constructor de la clase Agente
function Agent(type, status, domain, ipAdress, library) {
  this.type = type,//Physical(Físico) or Virtual(Virtual)
  this.status = status,//Idle(Inactivo) or Building(en Contrucción)
  this.domain = domain,
  this.ipAdress = ipAdress,
  this.library = library,
  this.resources = [];
  this.addNewResources = function (resource) {
    this.resources.push(resource);
  }
  this.deleteAResource = function (resource){
    this.resources.splice(resource, 1);
  }
}
//Adición de elementos al arreglo "Agents"
agents.push(new Agent("virtual", "idle", "djstdmngbgr01.thoughtworks.com", "192.168.1.1", "/var/lib/cruise-agent"));
agents.push(new Agent("physical", "idle", "djstdmngbgr02.thoughtworks.com", "192.168.1.2", "/var/lib/cruise-agent"));
agents.push(new Agent("physical", "building", "djstdmngbgr03.thoughtworks.com", "192.168.1.3", "/var/lib/cruise-agent"));
agents.push(new Agent("physical", "building", "djstdmngbgr04.thoughtworks.com", "192.168.1.4", "/var/lib/cruise-agent"));
agents.push(new Agent("physical", "idle", "djstdmngbgr05.thoughtworks.com", "192.168.1.5", "/var/lib/cruise-agent"));
//FUNCIONES
  //Función que agrega un(os) nuevo(s) recurso(s) para un agente
  function addNewAgentResources(agent, resources){
    for(var i = 0; i < resources.length; i++) {
        agents[agent].addNewResources(resources[i]);
    }
  }
  //Función que elimina un recurso de un agente
  function deleteAgentResource(agent, resource){
    agents[agent].deleteAResource(resource);
  }
  //Probando funciones
  //addNewAgentResources(0, ["ubuntu","mySQL"]);
  //addNewAgentResources(0, ["firefox3", "php"]);
  //console.log(agents[0].resources.length);
  //console.log(agents[0].resources);

  //deleteAgentResource(0, 1);
  //console.log(agents[0].resources);
  //console.log(agents[0].resources.length);
