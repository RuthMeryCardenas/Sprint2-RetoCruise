//BASE DE DATOS LOCAL "AGENTES"
  //VARIABLES GLOBALES
    var agents = [];//Almacena los Agentes
  //FUNCIONES
    //Crea un(os) nuevo(s) "Agente(s)" y lo(s) agrega a la lista de "Agentes"
    function loadAgents() {
      agents.push(new Agent("virtual", "idle", "djstdmngbgr01.thoughtworks.com", "192.168.1.1", "/var/lib/cruise-agent"));
      agents.push(new Agent("physical", "idle", "djstdmngbgr02.thoughtworks.com", "192.168.1.2", "/var/lib/cruise-agent"));
      agents.push(new Agent("physical", "building", "djstdmngbgr03.thoughtworks.com", "192.168.1.3", "/var/lib/cruise-agent"));
      agents.push(new Agent("physical", "building", "djstdmngbgr04.thoughtworks.com", "192.168.1.4", "/var/lib/cruise-agent"));
      agents.push(new Agent("physical", "idle", "djstdmngbgr05.thoughtworks.com", "192.168.1.5", "/var/lib/cruise-agent"));
      agents.push(new Agent("virtual", "building", "djstdmngbgr06.thoughtworks.com", "192.168.1.6", "/var/lib/cruise-agent"));
      agents.push(new Agent("virtual", "idle", "djstdmngbgr07.thoughtworks.com", "192.168.1.7", "/var/lib/cruise-agent"));

    }
    function loadResourcesForAgents() {
      agents[0].addNewResources("ubuntu,firefox3,core-duo");
      agents[1].addNewResources("ubuntu,firefox3,core-duo");
      agents[2].addNewResources("ubuntu,firefox3,mySQL,core-duo");
      agents[3].addNewResources("ubuntu,firefox3,mySQL,core-duo");
      agents[4].addNewResources("ubuntu");
      agents[5].addNewResources("ubuntu,core-duo");
      agents[6].addNewResources("ubuntu,firefox3,mySQL");
    }
