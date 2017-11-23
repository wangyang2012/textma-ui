
function getUrlVariable( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

function formatDatetime(value) {
    //2015-07-12T22:00:00.000+0000
    values = value.split("T");
    return values[0];
}

webix.ready(function () {

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
                submenu: ["Clients", "Fournisseurs", "Familles clients", "Clients principaux", "Contacts", "Location longue durée"]
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
                webix.message("Click: " + this.getMenuItem(id).value);
            }
        },
        type: {
            subsign: false,
            height: 50
        }
    });

});