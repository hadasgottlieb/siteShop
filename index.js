var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    console.log("function ran");
    if (this.readyState == 4 && this.status == 200) {

    let response = JSON.parse(xhttp.responseText);
    let merchandise = response.merchandise;
    // let output = ``;
    $(".classic").on("click", function() {
        console.log("classic ran");
        let output = ``;
        $(".merch-title").html("Classic");
        for (let i = 0; i < merchandise.length; i++) {
            if (merchandise[i].classic === true) {
            
            output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-lightbox">View Details</button></li> `
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
            
            output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-lightbox">View Details</button></li> `
            }
        }
        $(".item-list").empty();
        $(".item-list").html(output);
    });
    $(".halo").on("click", function() {
        console.log("halo ran");
        let output = ``;
        $(".merch-title").html("Halo");
        for (let i = 0; i < merchandise.length; i++) {
            
            if (merchandise[i].halo === true) {
                
                output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-lightbox">View Details</button></li> `
            }
        }
        $(".item-list").empty();
        $(".item-list").html(output);
    });
    $(".curlique").on("click", function() {
        console.log("curlique ran");
        let output = ``;
        $(".merch-title").html("Curlique");
        for (let i = 0; i < merchandise.length; i++) {
            $(".item-list").html("");
            if (merchandise[i].curlique === true) {
                
                output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-lightbox">View Details</button></li> `
            }
        }
        $(".item-list").empty();
        $(".item-list").html(output);
    });
    $(".custom").on("click", function() {
        console.log("custom ran");
        let output = ``;
        $(".merch-title").html("Custom");
        for (let i = 0; i < merchandise.length; i++) {
            if (merchandise[i].custom === true) {
                $(".item-list").empty();
                output += `<li data-item-id = "${merchandise[i].code}" class = "item"><img src="${merchandise[i].photo}" alt="${merchandise[i].name} photo" height=250 width=auto><br><span class = "item-text1 item-text">${merchandise[i].name}</span><br><span class = "item-text2 item-text"> ${merchandise[i].name2}</span><br><button data-item-id = "${merchandise[i].code}" class = "button-lightbox">View Details</button></li> `
            }
        }
        $(".item-list").empty();
        $(".item-list").html(output);
    });

           $(".button-lightbox").on("click", function() {
            console.log(`lightbox ran`);
            let ident = $(this).data("item-id");
            console.log(ident);
            const lightboxRing = merchandise.find(lightboxRing => lightboxRing.code === ident);
            $(".lightbox").html(`<img src = "${lightboxRing.photo}" height = 300 width = auto><span>${lightboxRing.name}</span><span>${lightboxRing.name2}</span><span>${lightboxRing.code}</span><span>${lightboxRing.price}</span>`);
    
        });
    
    
    
    }
};
xhttp.open("GET", "test.json", true);
xhttp.send();



