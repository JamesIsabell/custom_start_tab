// The groups of links are generated from this object. Edit it to edit the page's contents.
// shortcutKey must hold an all-lowercase single button. Theoretically should work with values like `esc` and `f1`,
// but intended to be used with just regular latin letters.
const MASTER_MAP = [
    
    {
        "groupName": "Brand",
        "subGroups": [
            {
                "groupName": "",
                "items":[
                    {"name": "Shopify", "url": "https://partners.shopify.com/801562/stores"},
                    {"name": "Infor Desktop", "url": "https://mingle-portal.inforcloudsuite.com/v2/X9K98RYL2D6P5AD4_PRD/87a130c6-35e8-4961-8aa0-3f4891ae549a"},
                    {"name": "Media Requests", "url": "https://form.asana.com/?k=1E8U4gDZmzJ2D0bHzptrug&d=1155700125982772"},
                    {"name": "Amazon", "url": "https://www.amazon.com/"},
                    {"name": "Amazon SC", "url": "https://sellercentral.amazon.com/gp/homepage.html/ref=xx_home_logo_xx"},
                    {"name": "OEC Group", "url": "https://portal.oecgroup.com/dashboard"},
                    {"name": "Gorgias", "url": "https://barraairguns.gorgias.com/app/views"},
                ]
            },
        ]
    },
    {
        "groupName": "Systems",
        "subGroups": [
            {
                "groupName": "",
                "items":[
                    {"name": "Terra Rose", "url": "https://6751627.app.netsuite.com/app/center/card.nl?sc=-29&whence="},
                    {"name": "Microsoft 365", "url": "https://www.microsoft365.com/?auth=2"},
                    {"name": "OneDrive", "url": "https://terrarose-my.sharepoint.com/personal/james_choosenile_com//_layouts/15/onedrive.aspx?login_hint=james%40choosenile%2Ecom&view=1"},
                    {"name": "Azure", "url": "https://portal.azure.com/#home"},
                    {"name": "Admin", "url": "https://admin.microsoft.com/?auth_upn=james%40choosenile.com&source=applauncher#/homepage"},
                    {"name": "Retail Link", "url": "https://retaillink.login.wal-mart.com/login"},
                    {"name": "Link Vault", "url": "https://app.merchantlabs.io/"},
                    
                ]
            },
        ]
    },
    {
        "groupName": "Tools",
        "subGroups": [
            {
                "groupName": "",
                "items":[
                    {"name": "GitHub", "url": "https://github.com/orgs/nilecommerce/repositories"},
                    {"name": "Bill Dashboard", "url": "https://app.divvy.co/companies/Q29tcGFueTozNzM3NA==/home/dashboard?timePeriod=last_12_months"},
                    {"name": "Rippling", "url": "https://app.rippling.com/dashboard"},
                    {"name": "UniFy Portal", "url": "https://unifi.ui.com/consoles"},
                    {"name": "Brightwheel", "url": "https://schools.mybrightwheel.com/org"},
                    {"name": "Adobe Admin", "url": "https://adminconsole.adobe.com/2A7B4586619E9ADB0A495F85@AdobeOrg/overview"},
                    {"name": "Verkada", "url": "https://command.verkada.com/devices"},
                    
                    
                ]
            }
        ]
    }
]

let $container = document.getElementById("content");
let getUrl = {};

function setupGroups(){
    for (let i = 0; i < MASTER_MAP.length; i++){
        let curGroupData = MASTER_MAP[i];

        let group = document.createElement("div");
        group.className = "group";
        $container.appendChild(group);

        let header = document.createElement("h1");
        header.innerHTML = curGroupData.groupName;
        group.appendChild(header);

        for (let j = 0; j < curGroupData.subGroups.length; j++){
            let curSubGroupData = curGroupData.subGroups[j];

            let subGroup = document.createElement("div");
            subGroup.className = "subgroup";
            group.appendChild(subGroup);

            let header = document.createElement("h2");
            header.innerHTML = curSubGroupData.groupName;
            subGroup.appendChild(header);

            for (let j = 0; j < curSubGroupData.items.length; j++){
                let curItemData = curSubGroupData.items[j];
    
                let pContainer = document.createElement("p");
                subGroup.appendChild(pContainer);
    
                let link = document.createElement("a");
                link.innerHTML = curItemData.name;
                link.setAttribute("href", curItemData.url);
                pContainer.appendChild(link);
    
                getUrl[curItemData.shortcutKey] = curItemData.url
            }
        }
    }
}

function main(){

    setupGroups();
}

main()
