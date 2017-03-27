//PRINCIPAL
  window.addEventListener('load', function (){
    //BOTONES DEL MENÚ PRINCIPAL
      var mainMenuTabs = document.getElementsByClassName('tab_Button');
      var content = document.getElementById('content');
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
        //CONTADORES DEL TOTAL DE AGENTES "IDLE" O "BUILDING"
          var accountants = document.getElementsByClassName('accountant');
        //BOTONES DEL FILTRO AGENTES
          var agentsFilterButton = document.getElementsByClassName('agentsFilter');
          agentsFilterButton[0].addEventListener('click', function () {
            printAllAgents(content);
            printSummary(accountants, 'all');
          });
          agentsFilterButton[1].addEventListener('click', function () {
            printAgentsByFilter(content, 'physical');
            printSummary(accountants, 'physical');
          });
          agentsFilterButton[2].addEventListener('click', function () {
            printAgentsByFilter(content, 'virtual');
            printSummary(accountants, 'virtual');
          });
      });
      //PESTAÑA "HELP"
      mainMenuTabs[3].addEventListener('click', function () {
        //Lo que muestra esta pestaña
      });
  });
