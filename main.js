menu_list_array = [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"];


function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(i=0;i<menu_list_array.length;i++){
        htmldata += "<li>" +menu_list_array[i] + "</li>";
        console.log(htmldata);
    }
    htmldata=htmldata+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata ;
}
function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata= '<section class="cards">'
    for(j=0;j<menu_list_array.length;j++){
        htmldata+= '<div class="card">' + '<img src="images/pizzaImg.png">' + menu_list_array[j] + '<div>'
    }
    htmldata=htmldata+ "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata ;
}