function btn_press( action='d' ) {
    const subj_card = document.querySelector(".subject-card");
    // if like
    if( action == 'l') {
        console.log("Liked Card #" + deck[deckIndex]);
        // get index of Likelist to increment
        let type1_index = color_types[info[deck[deckIndex]-1].Type1].index;
        // increment Likelist for type1
        ++likeList[type1_index]; 
        // increment Likelist for type2
        if( info[deck[deckIndex]-1].Type2 != " " ) {
            let type2_index = color_types[info[deck[deckIndex]-1].Type2].index;
            ++likeList[type2_index]; 
        }
        // add to likeIDs
        likeIDs.push(deck[deckIndex]);
        // animate
        subj_card.style.animation = "swipe-right 600ms forwards";
    // if dislike
    } else {
        console.log("Disliked Card #" + deck[deckIndex]);
        // animate
        subj_card.style.animation = "swipe-left 600ms forwards";
    }
    
    // if out of cards
    if( deckIndex>=deck_size-1) {
        console.log("Completed Deck")
        console.log(likeList);
        console.log(likeIDs);
        // make modal stuff
        make_chart();
        make_list();
        // post swipe phase
        deck_completion();
    // if more cards remaining
    } else {
        ++deckIndex;
        console.log("Creating Card #" + deck[deckIndex]);
        create_card(deck[deckIndex]);
    }
}

function create_card( id ) {
    // create elements
    // card
    let newCard = document.createElement("div");
    newCard.classList.add("subject-card");
    newCard.style.animation = "pop-in 400ms forwards";
    newCard.style.backgroundImage = "linear-gradient(320deg,#" +  color_types[info[id-1].Type1].color + ",white,#" + color_types[info[id-1].Type1].color + ")";
    // title
    let newTitle = document.createElement("h1");
    newTitle.classList.add("subject-title");
    newTitle.innerHTML = "#" + id + " - " + info[id-1].Name;
    // image
    let newImg = document.createElement("img");
    newImg.src = "Pokédex _ Pokemon.com_files/img/" + pad_img_number(id) + ".png";
    newImg.classList.add("subject-image");
    // types
    let newTypeBox = document.createElement("div");
    newTypeBox.classList.add("subject-types");
    // type 1
    let type1 = document.createElement("h2");
    type1.classList.add("type")
    type1_str = info[id-1].Type1;
    type1.innerHTML = type1_str;
    type1.style.backgroundColor = "#" + color_types[type1_str].color;
    type1.style.padding = "1rem";
    newTypeBox.appendChild(type1);
    // type 2
    if( info[id-1].Type2 != " " ) {
        let type2 = document.createElement("h2");
        type2.classList.add("type")
        type2_str = info[id-1].Type2;
        type2.innerHTML = type2_str;
        type2.style.backgroundColor = "#" + color_types[type2_str].color;
        type2.style.padding = "1rem";
        newTypeBox.appendChild(type2);
    }

    // insert into html
    const master = document.querySelector(".master");
    master.prepend(newCard);
    newCard.appendChild(newTitle);
    newCard.appendChild(newImg);
    newCard.appendChild(newTypeBox);
}

function pad_img_number( id ) {
    // logic for numeric padding on images e.g (1 == 001, 15 = 015, 523 = 523)
    if( id < 10 ) {
        id_str = "00" + id;
    } else if( id >= 10 && id < 100 ) {
        id_str = "0" + id;
    } else {
        id_str = id.toString();
    }
    return id_str;
}

function randomize_deck( cardCount ) {
    var deck = [];
    while( cardCount > 0 ) {
        let num = Math.floor(Math.random()*899);
        // if the card is a repeat
        if( deck.includes(num) ) {
            continue;
        }
        // add to deck
        deck.push(num);
        --cardCount;
    }
    return deck;
}

function deck_completion() {
    // turn off buttons
    document.querySelector(".btn-container").style.display = "none";
    document.querySelector(".modal-bg").style.display = "flex";
}

function reset_deck() {
    // turn on buttons
    document.querySelector(".btn-container").style.display = "flex";
}

function make_chart() {
    const labels = ['Normal','Fire','Water','Electric','Grass','Ice','Fighting','Poison','Ground','Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark','Steel','Fairy',
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Liked Pokemon',
        backgroundColor: ['#A8A77A','#EE8130','#6390F0','#F7D02C','#7AC74C','#96D9D6','#C22E28','#A33EA1','#E2BF65','#A98FF3','#F95587','#A6B91A','#B6A136','#735797','#6F35FC','#705746','#B7B7CE','#D685AD'],
        data: likeList,
      }]
    };
  
    const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive:true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "left",
          labels: {
            color: "#fff",
            filter: function(legendItem, data) {
                return data.datasets[0].data[legendItem.index] > 0
            }
          }
        }
      }
    }
    };

    const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

function make_list() {
    let list = document.querySelector(".list");
    for(let i = 0; i < likeIDs.length; ++i ) {
        let pokemon = info[likeIDs[i]-1];
        let list_item = document.createElement("div");
        list_item.classList.add("list-item");
        let newImg = document.createElement("img");
        newImg.src = "Pokédex _ Pokemon.com_files/img/" + pad_img_number(likeIDs[i]) + ".png";
        newImg.classList.add("list-item-img");
        let pokemon_title = document.createElement("h2");
        pokemon_title.innerText = info[likeIDs[i]-1].Name;
        pokemon_title.classList.add("list-item-title");
        let pokemon_number = document.createElement("h2");
        pokemon_number.innerText = "#" + likeIDs[i];
        pokemon_number.classList.add("list-item-title");
        
        // types
        let newTypeBox = document.createElement("div");
        newTypeBox.classList.add("subject-types");
        // type 1
        let type1 = document.createElement("h2");
        type1.classList.add("type")
        type1_str = info[likeIDs[i]-1].Type1;
        type1.innerHTML = type1_str;
        type1.style.backgroundColor = "#" + color_types[type1_str].color;
        type1.style.padding = "1rem";
        newTypeBox.appendChild(type1);
        // type 2
        if( info[likeIDs[i]-1].Type2 != " " ) {
            let type2 = document.createElement("h2");
            type2.classList.add("type")
            type2_str = info[likeIDs[i]-1].Type2;
            type2.innerHTML = type2_str;
            type2.style.backgroundColor = "#" + color_types[type2_str].color;
            type2.style.padding = "1rem";
            newTypeBox.appendChild(type2);
        }

        list_item.appendChild(newImg);
        list_item.appendChild(pokemon_title);
        list_item.appendChild(pokemon_number);
        list_item.appendChild(newTypeBox);
        list.appendChild(list_item);
    }
}

// initialize page
var deck_size = 20;
var deck = randomize_deck(deck_size);
var deckIndex = 0;
create_card(deck[deckIndex]);
var likeList = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var likeIDs = [];

// set binds
// bind arrow keys
document.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    switch (event.key) {
        case "ArrowLeft":
            // Left pressed
            btn_press('d');
            break;
        case "ArrowRight":
            // Right pressed
            btn_press('l');
            break;
    }
});
// bind modal buttons
let list =  document.querySelector(".list");
let list_tab = document.querySelector(".list-tab");
let list_header = document.querySelector(".list-header");
let chart = document.querySelector(".chart");
let chart_tab = document.querySelector(".chart-tab");
list_tab.addEventListener("click", function() {
    console.log("Clicked list-tab")
    chart.style.display = "none";
    list.style.display = "grid";
    list_header.style.display = "grid"
    list_tab.style.backgroundColor = "#fff";
    list_tab.style.color = "#000";
    chart_tab.style.backgroundColor = "#333";
    chart_tab.style.color = "#fff"
})
chart_tab.addEventListener("click", function() {
    console.log("Clicked chart-tab")
    chart.style.display = "flex";
    list.style.display = "none";
    list_header.style.display = "none"
    list_tab.style.backgroundColor = "#333";
    list_tab.style.color = "#fff";
    chart_tab.style.backgroundColor = "#fff";
    chart_tab.style.color = "#000"
})