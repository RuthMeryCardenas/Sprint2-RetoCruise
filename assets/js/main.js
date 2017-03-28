//PRINCIPAL
  window.addEventListener('load', function (){
    //BOTONES DEL MENÚ PRINCIPAL
      var mainMenuTabs = document.getElementsByClassName('tab_Button');
      var content = document.getElementById('content');
      var secondaryContainer = document.getElementById('secondaryContainer');
      //PESTAÑA "DAHSBOARDS"
      mainMenuTabs[0].addEventListener('click', function () {
        
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
            content.innerHTML="";
            accountants[0].innerHTML="";
            accountants[1].innerHTML="";
            printAllAgents(content);
            printSummary(accountants, 'all');
          });
          agentsFilterButton[1].addEventListener('click', function () {
            content.innerHTML="";
            accountants[0].innerHTML="";
            accountants[1].innerHTML="";
            printAgentsByFilter(content, 'physical');
            printSummary(accountants, 'physical');
          });
          agentsFilterButton[2].addEventListener('click', function () {
            content.innerHTML="";
            accountants[0].innerHTML="";
            accountants[1].innerHTML="";
            
            printAgentsByFilter(content, 'virtual');
            printSummary(accountants, 'virtual');
          });
      });
      //PESTAÑA "HELP"
      mainMenuTabs[3].addEventListener('click', function () {
        //Lo que muestra esta pestaña
      });


  });
