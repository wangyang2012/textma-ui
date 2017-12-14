
function getUrlVariable( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

function getServerIp() {
    host = window.location.host; // localhost:8080
    return host.split(":")[0];
}


function formatDatetime(value) {
    //2015-07-12T22:00:00.000+0000
    values = value.split("T");
    return values[0];
}

webix.ready(function () {

    serverIP = getServerIp();

    webix.ui({
        container: "menu",
        view: "menu",
        autowidth: true,
        data: [
            {id: "1", value: "TEXTMA"},
            {id: "2", value: "Accueil"},
            {
                id: "3",
                value: "Client",
                submenu: ["Clients", "Familles clients", "Clients principaux", "Contacts", "Location longue durée"]
            },
            {
                id: "4", value: "Articles", width: 500,
                submenu: ["Facebook", "Google+", "Twitter"]
            },
            {
                id: "5", value: "Vente",
                submenu: ["Commandes", "Google+ Site", "Twitter Site"]
            },
            {
                id: "6", value: "Facturation",
                submenu: ["Facebook Site - Social Network", "Google+", "Twitter"]
            },
            {
                id: "7", value: "Préparation",
                submenu: ["Facebook Site - Social Network", "Google+", "Twitter"]
            },
            {
                id: "8", value: "Confection",
                submenu: ["Facebook Site - Social Network", "Google+", "Twitter"]
            },
            {
                id: "9", value: "Logistique",
                submenu: ["Facebook Site - Social Network", "Google+", "Twitter"]
            },
            {
                id: "10", value: "Production",
                submenu: ["Facebook Site - Social Network", "Google+", "Twitter"]
            },
            {
                id: "11", value: "Stock",
                submenu: ["Facebook Site - Social Network", "Google+", "Twitter"]
            },
            {
                id: "12", value: "Statistiques",
                submenu: ["Facebook Site - Social Network", "Google+", "Twitter"]
            },
            {
                id: "13", value: "Administration",
                submenu: ["Facebook Site - Social Network", "Google+", "Twitter"]
            }
        ],
        on: {
            onMenuItemClick: function (id) {
                // webix.message("Click: " + this.getMenuItem(id).value);
                clickedPage = this.getMenuItem(id).value;
                societename = "/textma";
                pathname = "";
                switch(clickedPage) {
                    case "Client": pathname = "/client/te_client_list.html";break;
                    case "Clients": pathname = "/client/te_client_list.html";break;
                    case "Familles clients": pathname = "/client/te_famille_client_list.html";break;
                    case "Clients principaux": pathname = "/client/te_clients_principaux.html";break;
                    case "Contacts": pathname = "/client/te_contacts.html";break;
                    default: pathname = "/accueil.html";break;
                }
                document.location = window.location.origin+pathname;
            }
        },
        type: {
            subsign: false,
            height: 50
        }
    });

});