var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    console.log("function ran");
    if (this.readyState == 4 && this.status == 200) {

    let response = JSON.parse(xhttp.responseText);
    let merchandise = response.merchandise;
    let output = ``;
    for (let i = 0; i < merchandise.length; i++) {
        if (merchandise[i].curlique === true) {
        output += `<li class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button>View Details</button></li> `
        }
    }
    $(".item-list").html(output);
    
    }
};
xhttp.open("GET", "test.json", true);
xhttp.send();