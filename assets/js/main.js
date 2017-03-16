//PRINCIPAL
  window.addEventListener('load', function (){
    //MENÚ PRINCIPAL
      var mainMenuTabs = document.getElementsByClassName('tab-e');
      //var contentTabDiv = document.getElementById('viewContainer');
      //PESTAÑA "DAHSBOARDS"
      mainMenuTabs[0].addEventListener('click', function () {
        //Lo que muestra esta pestaña
      });
      //PESTAÑA "MY CRUISE"
      mainMenuTabs[1].addEventListener('click', function () {
        //Lo que muestra esta pestaña
      });
      //PESTAÑA "AGENTES"
      mainMenuTabs[2].addEventListener('click', function () {
        //CARGAR AGENTES DESDE LA BASE DE DATOS
          loadAgents();
        //CARGAR RECURSOS PARA CADA AGENTE
          loadResourcesForAgents();
          var contentAgentsDiv = document.getElementById('contentResources');
          var agentsFilterButton = document.getElementsByClassName('agentsFilter');
          agentsFilterButton[0].addEventListener('click', function () {
            printAllAgents(contentAgentsDiv);
          });
          agentsFilterButton[1].addEventListener('click', function () {
            printAgentsByFilter(contentAgentsDiv, "physical");
          });
          agentsFilterButton[2].addEventListener('click', function () {
            printAgentsByFilter(contentAgentsDiv, "virtual")
          });
      });
      //PESTAÑA "HELP"
      mainMenuTabs[3].addEventListener('click', function () {
        //Lo que muestra esta pestaña
      });
  });
