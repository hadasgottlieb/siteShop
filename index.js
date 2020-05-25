var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    console.log("function ran");
    if (this.readyState == 4 && this.status == 200) {

    let response = JSON.parse(xhttp.responseText);
    let merchandise = response.merchandise;



    function collectClassic() {
        console.log("classic ran");
            let output = ``;
            $(".merch-title").html("Classic Collection");
            for (let i = 0; i < merchandise.length; i++) {
                if (merchandise[i].classic === true) {
                
                output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-ltbox">View Details</button></li> `
                }
            }
            $(".item-list").empty();
            $(".item-list").html(output);
    };
        $(".classic").on("click", function() {
            console.log("classic ran");
            let output = ``;
            $(".merch-title").html("Classic Collection");
            for (let i = 0; i < merchandise.length; i++) {
                if (merchandise[i].classic === true) {
                
                output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-ltbox">View Details</button></li> `
                }
            }
            $(".item-list").empty();
            $(".item-list").html(output);
        });
    
    $(".bands").on("click", function() {
        console.log("bands ran");
        let output = ``;
        $(".merch-title").html("Bands");
        for (let i = 0; i < merchandise.length; i++) {
            if (merchandise[i].bands === true) {
            
            output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-ltbox">View Details</button></li> `
            }
        }
        $(".item-list").empty();
        $(".item-list").html(output);
    });
    $(".halo").on("click", function() {
        console.log("halo ran");
        let output = ``;
        $(".merch-title").html("Halo Rings");
        for (let i = 0; i < merchandise.length; i++) {
            
            if (merchandise[i].halo === true) {
                
                output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-ltbox">View Details</button></li> `
            }
        }
        $(".item-list").empty();
        $(".item-list").html(output);
    });
    $(".curlique").on("click", function() {
        console.log("curlique ran");
        let output = ``;
        $(".merch-title").html("Curlique Collection");
        for (let i = 0; i < merchandise.length; i++) {
            $(".item-list").html("");
            if (merchandise[i].curlique === true) {
                
                output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-ltbox">View Details</button></li> `
            }
        }
        $(".item-list").empty();
        $(".item-list").html(output);
    });
    $(".custom").on("click", function() {
        console.log("custom ran");
        let output = ``;
        $(".merch-title").html("Custom-made");
        for (let i = 0; i < merchandise.length; i++) {
            if (merchandise[i].custom === true) {
                $(".item-list").empty();
                output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-ltbox">View Details</button></li> `
            }
        }
        $(".item-list").empty();
        $(".item-list").html(output);
    });

    function ltbox() {
        //on click view details, ltbox is emptied, and ltbox container toggles to display: block, and clicked item info is displayed in ltbox. 
        $(".item-list").on("click", ".item .button-ltbox", function() {
            console.log("ltbox click function ran");
            $(".ltbox-content").empty(); //should delete previously displayed item info
            $(".ltbox-container").toggleClass("display-off"); //should turn on lightbox

            let ident = $(this).data("item-id"); //that's the id of the li element
            console.log(ident);
            const item = merchandise.find(item => item.code === ident);
            $(".ltbox-content").append(`<img src="${item.photo}" alt="${item.name}" height=300 width=300>`);
            $(".ltbox-content").append(`<div><span class = "item-text3">${item.name}</span><br><span class = "item-text4">${item.name2}</span><br><br><span>${item.code}</span><br><span>${item.price}</span></div>`);

        });
    };     

    function ltboxClose() {
        console.log("ltboxClose ran");
        //on click X, ltbox container toggles to display: none;
        $(".ltbox-close").on("click", function() {
            $(".ltbox-container").toggleClass("display-off"); //should turn off lightbox
        });
    }
    
    
    
    }
    $(collectClassic);
    $(ltbox);
    $(ltboxClose);
};
xhttp.open("GET", "test.json", true);
xhttp.send();



