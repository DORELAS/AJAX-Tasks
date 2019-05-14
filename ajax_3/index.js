var xml = create();

function create() {

    var xmlHttp;

    if(window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}

function process() {

    if(xmlHttp) {
        try {
            xmlHttp.open();
        } catch(e) {

            alert(e.toString());
        }
    }
}