$(document).ready(function(e) {

  var cards = [];

  var cards_Basic = [];
  var cards_Classic = [];
  var cards_JTU = [];
  var cards_KFC = [];
  var cards_MSG = [];
  var cards_ONK = [];
  var cards_WTG = [];
  var card_names = new Array();

  var data_fetch = $.ajax({
    url: "json/carddata.json",
    dataType: 'json',
    data: cards
  });

  data_fetch.done(function(cards) {
    console.log(cards);
    cards_Basic = cards['Basic'];
    cards_Classic = cards['Classic'];
    cards_JTU = cards['Journey to Un\'Goro'];
    cards_KFT = cards['Knights of the Frozen Throne'];
    cards_MSG = cards['Mean Streets of Gadgetzan'];
    cards_ONK = cards['One Night in Karazhan'];
    cards_WTG = cards['Whispers of the Old Gods'];


    for(i = 0; i<cards_Basic.length; i++){

      card_names.push(cards_Basic[i].name);
    }
    for(i = 0; i<cards_Classic.length; i++){
      card_names.push(cards_Classic[i].name);
    }
    for(i = 0; i<cards_JTU.length; i++){
      card_names.push(cards_JTU[i].name);
    }
    for(i = 0; i<cards_KFT.length; i++){
      card_names.push(cards_KFT[i].name);
    }
    for(i = 0; i<cards_MSG.length; i++){
      card_names.push(cards_MSG[i].name);
    }
    for(i = 0; i<cards_ONK.length; i++){
      card_names.push(cards_ONK[i].name);
    }
    for(i = 0; i<cards_WTG.length; i++){
      card_names.push(cards_WTG[i].name);
    }

    card_names.sort();


    var datalist = document.createElement("datalist");
    datalist.setAttribute('id','card-name-list');
    for(i=0; i<card_names.length; i++){
      var option = document.createElement('option');
      option.value = card_names[i];
      // Add the <option> element to the <datalist>.
      datalist.appendChild(option);
    }

    var parent = document.getElementById("card_inputs");
    var row_div = document.createElement("div");
    row_div.setAttribute('class', 'row bottom-buffer');
    parent.appendChild(row_div);

    for(j=0; j<10; j++){
      var col_div = document.createElement("div");
      var col_id = 'col'+j.toString();
      col_div.setAttribute('class', 'col-lg-15 side-buffer');
      col_div.setAttribute('id', col_id);
      //parent.appendChild(col_div);
      row_div.appendChild(col_div);

      var img = document.createElement("img");
      var img_id = 'img'+j.toString();
      var img_src = 'imageLink'+j.toString();

      var input = document.createElement("input");
      var input_id = 'input'+j.toString();
      input.setAttribute('type', 'text');
      input.setAttribute('id', input_id);
      input.setAttribute('v-model', "cardSelector");
      input.setAttribute('list', 'card-name-list')
      input.setAttribute('style', "margin-bottom:5px; margin-left:auto; margin-right:auto; display:block;")
      col_div.appendChild(input);
      col_div.appendChild(datalist);

      img.setAttribute('id', img_id);
      img.setAttribute('class', "img-fluid");
      img.setAttribute('style', "max-width:250px; margin-left:auto; margin-right:auto; display:block;")
      img.setAttribute(':src', img_src);
      //img.setAttribute('src', "images/card-back-default.png");
      col_div.appendChild(img);

    }



    var bindImage0 = new Vue({
      el: '#col0',
      data: {
        imageLink0: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){
          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input0").value + '")]');
            if (newImage.length == 0 || document.getElementById("input0").value==""){
              this.imageLink0 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";
              this.imageLink0 = newImagePath;
            }
          },
          100
        )
      }
    });

    var bindImage1 = new Vue({
      el: '#col1',
      data: {
        imageLink1: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){
          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input1").value + '")]');
            if (newImage.length == 0 || document.getElementById("input1").value==""){

              this.imageLink1 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";

              this.imageLink1 = newImagePath;
            }

            this.imageLink1 = newImagePath;
          },
          100
        )
      }
    });

    var bindImage2 = new Vue({
      el: '#col2',
      data: {
        imageLink2: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){

          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input2").value + '")]');
            if (newImage.length == 0 || document.getElementById("input2").value==""){

              this.imageLink2 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";

              this.imageLink2 = newImagePath;
            }

            this.imageLink2 = newImagePath;
          },
          100
        )
      }
    });

    var bindImage3 = new Vue({
      el: '#col3',
      data: {
        imageLink3: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){

          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input3").value + '")]');
            if (newImage.length == 0 || document.getElementById("input3").value==""){
              this.imageLink3 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";
              this.imageLink3 = newImagePath;
            }
            this.imageLink3 = newImagePath;
          },
          100
        )
      }
    });

    var bindImage4 = new Vue({
      el: '#col4',
      data: {
        imageLink4: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){

          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input4").value + '")]');
            if (newImage.length == 0 || document.getElementById("input4").value==""){
              this.imageLink4 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";
              this.imageLink4 = newImagePath;
            }

            this.imageLink4 = newImagePath;
          },
          100
        )
      }
    });

    var bindImage5 = new Vue({
      el: '#col5',
      data: {
        imageLink5: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){
          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input5").value + '")]');
            if (newImage.length == 0 || document.getElementById("input5").value==""){
              this.imageLink5 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";
              this.imageLink5 = newImagePath;
            }
            this.imageLink5 = newImagePath;
          },
          100
        )
      }
    });

    var bindImage6 = new Vue({
      el: '#col6',
      data: {
        imageLink6: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){
          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input6").value + '")]');
            if (newImage.length == 0 || document.getElementById("input6").value==""){
              this.imageLink6 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";
              this.imageLink6 = newImagePath;
            }
            this.imageLink6 = newImagePath;
          },
          100
        )
      }
    });

    var bindImage7 = new Vue({
      el: '#col7',
      data: {
        imageLink7: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){
          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input7").value + '")]');
            if (newImage.length == 0 || document.getElementById("input7").value==""){

              this.imageLink7 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";
              this.imageLink7 = newImagePath;
            }
            this.imageLink7 = newImagePath;
          },
          100
        )
      }
    });

    var bindImage8 = new Vue({
      el: '#col8',
      data: {
        imageLink8: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){

          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input8").value + '")]');
            if (newImage.length == 0 || document.getElementById("input8").value==""){

              this.imageLink8 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";
              this.imageLink8 = newImagePath;
            }
            this.imageLink8 = newImagePath;
          },
          100
        )
      }
    });

    var bindImage9 = new Vue({
      el: '#col9',
      data: {
        imageLink9: "images/card-back-default.png",
        cardSelector: ""
      },
      watch: {
        cardSelector: function(newCardImage){
          this.getImage()
        }
      },
      methods:{
        getImage: _.debounce(
          function(){
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input9").value + '")]');
            if (newImage.length == 0 || document.getElementById("input9").value==""){
              this.imageLink9 = "images/card-back-default.png";
            }
            else{
              var newImagePath = "images/card_images/" + newImage[0].cardId + ".png";
              this.imageLink9 = newImagePath;
            }
            this.imageLink9 = newImagePath;
          },
          100
        )
      }
    });


    var msg = {msgg: 'OUTPUT'};
    //var output = new Vue({ el: '#output_text', data: msgg

    var app = new Vue({
      el: '#output_box',
      data: {
        msg: '<div class=\"row text_block\" id=\"instruction\"><p>--Output Section--</p></div><div class=\"row text_block\" id=\"instruction\"></div>'
      }
    });


    $('form#cards_in_hands').submit(function() {
      app.msg = "Calculating damage..";
      var hand = new Array;
      var hand_test = new Array;
      hand = hand.concat(hand);
      for(i=0;i<10;i++){
        var input_id = 'input'+i.toString();
        if (document.getElementById(input_id).value != ""){
          //console.log(i + " is good");
          hand = hand.concat(JSON.search(cards, '//*[contains(name, "' + document.getElementById(input_id).value + '")]')[0]);
          //console.log(hand);

        }
      }
      // Assume void form costs 0 for now
      var output_info = calculate_damage(hand, 0);

      app.msg = print_output(output_info[0], output_info[1]);



    });
  }); // data_fetch.done()
}) // windows.ready()


// Calculate damage
function calculate_damage(hand, void_form_cost){
  // Assume 10 mana for now
  var A_total_mana = 10;
  var A_remaining_mana = A_total_mana;
  var A_void_form_cost = void_form_cost;
  var A_void_form_damage = 2;
  var A_damage_counter = 0;
  var A_remaining_hand = hand;
  var A_play_queue = new Array;
  var A_has_Velen = false;
  var A_Velen_played = false;
  var A_spell_damage_aura = 0;
  var A_spell_cost_reduction = 0;
  var A_cards_played = 0;
  var A_card_played;

  var spell_damage_minions = new Array;
  var spell_reduction_minions = new Array;
  var burn_spells = new Array;
  var general_cards = new Array;
  var velen = new Array;
  var general_cards_when_no_spells = new Array;


  var spell_damage_list = ["Bloodmage Thalnos", "Tainted Zealot", "Archmage", "Dalaran Mage", "Kobold Geomancer", "Ogre Magi", "Evolved Kobold", "Spellweaver", "Street Trickster", "Ancient Mage", "Cult Sorcerer", "Malygos"];

  var dummyCard = {
    "cardId": "-1", "name": "-1", "cost": -1, "type": "-1"
  };





  A_remaining_hand.sort(function(a, b) {
    return parseFloat(a.cost) - parseFloat(b.cost);
  });

  printHand(A_remaining_hand);


  // Divide hand into 4 types of cards
  for(i=0; i < A_remaining_hand.length; i++){
    if(A_remaining_hand[i].name == "Prophet Velen"){
      velen.push(A_remaining_hand[i]);
    }
    else if(A_remaining_hand[i].type == "Spell" && A_remaining_hand[i].text.search("damage") != -1 && A_remaining_hand[i].text.search("minion") == -1){
      burn_spells.push(A_remaining_hand[i]);
    }
    else if(A_remaining_hand[i].name == "Radiant Elemental" || A_remaining_hand[i].name == "Sorcerer's Apprentice"){
      spell_reduction_minions.push(A_remaining_hand[i]);
      general_cards_when_no_spells.push(A_remaining_hand[i]);
    }
    else if(spell_damage_list.includes(A_remaining_hand[i].name)){
      spell_damage_minions.push(A_remaining_hand[i]);
      general_cards_when_no_spells.push(A_remaining_hand[i]);
    }
    else{
      general_cards.push(A_remaining_hand[i]);
      general_cards_when_no_spells.push(A_remaining_hand[i]);
    }
  } // END for


  var burn_spells = SortBurnSpells(burn_spells);


  printDividedHand(spell_damage_minions, spell_reduction_minions, burn_spells, general_cards, velen);

  // play order would be velen -> spell_reduction_minions -> spell_damage_minions -> burn_spells -> general_cards
  // if no velen THEN spell_reduction_minions -> spell_damage_minions -> burn_spells -> general_cards
  // if no burn_spells THEN just play in order
  // if no spell_reduction_minions THEN spell_damage_minions -> burn_spells -> general_cards OR burn_spells -> other cards + spell_damage_minionss
  //
  var number_of_spell_damage_minions = spell_damage_minions.length;
  var number_of_spell_reduction_minions = spell_reduction_minions.length;
  var number_of_burn_spells = burn_spells.length;
  var number_of_general_cards = general_cards.length;
  var number_of_velen = velen.length; // most likely 1


  var playable_cards_exists = true;

  var loop_breaker = 0;
  var d, r, b, g, v = 0; // cards counter
  var spells_info; // [0] == damage, [1] == mana cost
  var spell_cost_reduction_count = 0;
  var no_spells_left = false;
  var velen_in_queue = false;

  // main loop
  var a = 0;
  while(playable_cards_exists == true){
    printDividedHand(spell_damage_minions, spell_reduction_minions, burn_spells, general_cards, velen);
    // spells_info = AvailableBurnDamage(burn_spells, 2);
    // console.log(spells_info);

    if((spell_damage_minions == "" || A_remaining_mana < spell_damage_minions[0].cost) && (spell_reduction_minions == "" || A_remaining_mana < spell_reduction_minions[0].cost) && (burn_spells == "" || A_remaining_mana < burn_spells[0].cost) && (general_cards == "" || A_remaining_mana < general_cards[0].cost) && (velen == "" || A_remaining_mana < velen[0].cost)){
      console.log("no more playable cards");
      playable_cards_exists = false;
      break;
    }


    if(burn_spells == "" && velen != ""){
      var card_played = velen.shift();
      A_remaining_mana-=card_played.cost;
      A_play_queue.push(card_played);
    }
    else if(burn_spells == "" && velen == ""){
      if(no_spells_left == false){
        general_cards = GroupGeneralCards(general_cards, general_cards_when_no_spells);
        spell_reduction_minions = [];
        spell_damage_minions = [];
        no_spells_left = true;
      };

      var card_played = general_cards.shift();
      A_remaining_mana-=card_played.cost;
      A_play_queue.push(card_played);
    }
    else if(burn_spells != "" && A_remaining_mana >= 7 && velen != ""){
      // Look ahead???
      var spell_damage_without_velen = AvailableBurnDamage(burn_spells, A_remaining_mana, 1);
      console.log("spell_damage_without_velen: ", spell_damage_without_velen);
      var spell_damage_with_velen = AvailableBurnDamage(burn_spells, A_remaining_mana - velen[0].cost, 2);
      console.log("spell_damage_with_velen: ", spell_damage_with_velen);
      if(spell_damage_without_velen[0] > spell_damage_with_velen[0]){
        var card_played = burn_spells.shift();
        A_remaining_mana-=card_played.cost;
        A_play_queue.push(card_played);
      }
      else{
        var card_played = velen.shift();
        A_remaining_mana-=card_played.cost;
        A_play_queue.push(card_played);
      }
    }
    else if(spell_damage_minions == "" && spell_reduction_minions == "" && burn_spells != ""){
       var card_played = burn_spells.shift();
       A_remaining_mana-=card_played.cost;
       A_play_queue.push(card_played);
    }
    else if(spell_damage_minions == "" && spell_reduction_minions != "" && burn_spells != ""){
      if(A_remaining_mana == burn_spells[0].cost+1  || (burn_spells.length >= 2 && burn_spells[0].cost + burn_spells[1].cost <= A_remaining_mana) || burn_spells[0].cost == 1){
        console.log("ASAS");
        var card_played = spell_reduction_minions.shift();
        // lower the cost of spells after spell reduction minion is played
        for(var ii = 0; ii < burn_spells.length; ii++){
          burn_spells[ii].cost--;
        }
        spell_cost_reduction_count++;
        A_remaining_mana-=card_played.cost;
        A_play_queue.push(card_played);
      }
      else{
        console.log("eee");
        var card_played = burn_spells.shift();
        if(card_played.type == "Spell") card_played.cost-=spell_cost_reduction_count; // lower the cost of spells after spell reduction minion is played
        A_remaining_mana-=card_played.cost;
        A_play_queue.push(card_played);
      }
    }
    else if(spell_damage_minions != "" && spell_reduction_minions == "" && burn_spells != ""){

    }
    else{

    }
    //console.log("card_played: ", card_played.name);






    // temp loop breaker
    loop_breaker++;
    if(loop_breaker==11) break;
  } // END while

  printPlayQueue(A_play_queue);

  A_void_form_damage = 2;
  A_damage_counter += A_void_form_damage;
  var velenBonus = false;
  var spellDamageBonus = 0;
  for(var i = 0; i < A_play_queue.length; i++){
    if(A_play_queue[i].name == "Prophet Velen") velenBonus = true;

    if(A_play_queue[i].type == "Spell" && A_play_queue[i].text.search("damage") != -1 && A_play_queue[i].text.search("minion") == -1){
      if(velenBonus) A_damage_counter += 2*SpellDamageCalculate(A_play_queue[i], spellDamageBonus);
      else A_damage_counter += SpellDamageCalculate(A_play_queue[i], spellDamageBonus);
      console.log("damage from spell: ", A_damage_counter);
    }

    if(spell_damage_list.includes(A_play_queue[i].name)){
      spellDamageBonus++;
    }

    if(velenBonus) A_damage_counter+=A_void_form_damage*2;
    else A_damage_counter+=A_void_form_damage;
    console.log("damage: ", A_damage_counter);
  } // END for

  console.log("Total damage: ", A_damage_counter);

  return [A_play_queue, A_damage_counter];

} // End calculate_damage()


function GroupGeneralCards(general_cards, general_cards_when_no_spells){
  general_cards.splice(0, general_cards.length);
  return general_cards_when_no_spells;
} // END GroupGeneralCards()

function AvailableBurnDamage(burn_spells, remaining_mana, velenBonus){
  if(burn_spells == "") return 0;
  else{
    var i = 0;
    var total_damage = 0;
    var remaining_mana_reversed = remaining_mana;
    while(i < burn_spells.length && remaining_mana >= burn_spells[i].cost){
      total_damage+=SpellDamageCalculate(burn_spells[i], 0)*velenBonus;
      remaining_mana = remaining_mana - burn_spells[i].cost;
      i++;
    }


    var j = burn_spells.length - 1;
    var total_damage_reversed = 0;
    while(j >= 0 && remaining_mana_reversed >= burn_spells[j].cost){
      total_damage_reversed+=SpellDamageCalculate(burn_spells[j], 0)*velenBonus;
      remaining_mana_reversed = remaining_mana_reversed - burn_spells[j].cost;
      j--;
    }
    console.log("max damage1: ", total_damage);
    console.log("max damage2: ", total_damage_reversed);

    return [Math.max(total_damage, total_damage_reversed), i];
  }
} // END AvailableBurnDamage()

function SortBurnSpells(burn_spells){
  if(burn_spells == "" || burn_spells.length == 1) return burn_spells;
  else{
    for(i=1; i < burn_spells.length; i++){
      if(burn_spells[i-1].cost == burn_spells[i].cost){
        if(SpellDamageCalculate(burn_spells[i-1], 0) < SpellDamageCalculate(burn_spells[i], 0)){
          console.log("true");
          burn_spells.swap(i-1, i);
        }
      }
    }
    return burn_spells;
  }
} // END SortBurnSpells()

function print_output(play_order, total_damage){
  var msg;
  msg = "<div class=\"row text_block\" id=\"instruction\"><p> Your hand's total damage is <strong>" + total_damage + ".</strong></p></div><div class=\"row text_block\" id=\"instruction\"><p>Play in this order:</p></div>";
  //msg+="<div id=\"cardOrderList\">";
  msg+="<div class=\"row\">";
  for(var i=0; i < play_order.length; i++){
    msg+="<div class=\"cardOrderList col-lg-1\">";
    var newImagePath = "images/card_images/" + play_order[i].cardId + ".png";
    var imgTag = "<img class=\"card img-fluid\" src = \"" +  newImagePath + "\">";
    var arrow = "<img class=\"arrow img-fluid center-block\" src = \"/images/arrow.png\" >";
    msg+= imgTag;
    msg+="</div>";
    if(i != play_order.length-1) {
      msg+="<div class=\"cardOrderList col-lg-1\" style=\"text-align: center;\">";
      msg+=arrow;
      msg+="</div>";
    }
  } // END for
  msg+="</div>";
  return msg;
} // END print_output()


// TO CALL:
//if(A_remaining_hand[0].type == "Spell" && A_remaining_hand[0].text.search("damage") != -1){
// var A_spell_damage_dealt = SpellDamageCalculate(A_remaining_hand[0], A_spell_damage_aura);
function SpellDamageCalculate(spell, spell_damage_aura){
  // If AOE spell then does not do damage to hero
  // if(spell.text.search("minions") != -1){
  //   return 0;
  // }
  // else{
    var regex = /\d+/g;
    return parseInt(spell.text.match(regex))+spell_damage_aura;
  // }
} // End SpellDamageCalculate()

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
} // End Swap()


function printHand(hand){
  var consoleLog = "";
  for(i=0; i < hand.length; i++){
    consoleLog += hand[i].name + ", ";
  }
  console.log(consoleLog);
} // END printHand()

function printDividedHand(spell_damage_minions, spell_reduction_minions, burn_spells, general_cards, velen){
  console.log("--------printDividedHand---------");
  var consoleLog = "";

  for(i=0; i < spell_damage_minions.length; i++){
    consoleLog += spell_damage_minions[i].name + ", ";
  }
  console.log("spell_damage_minions: ", consoleLog);
  consoleLog = "";
  for(i=0; i < spell_reduction_minions.length; i++){
    consoleLog += spell_reduction_minions[i].name + ", ";
  }
  console.log("spell_reduction_minions: ", consoleLog);
  consoleLog = "";
  for(i=0; i < burn_spells.length; i++){
    consoleLog += burn_spells[i].name + ", ";
  }
  console.log("burn_spells: ", consoleLog);
  consoleLog = "";
  for(i=0; i < general_cards.length; i++){
    consoleLog += general_cards[i].name + ", ";
  }
  console.log("general_cards: ", consoleLog);
  consoleLog = "";
  for(i=0; i < velen.length; i++){
    consoleLog += velen[i].name + ", ";
  }
  console.log("velen: ", consoleLog);
  console.log("--------printDividedHand---------");
} // END printDividedHand()

function printLoopHead(remaining_mana, playable_cards_exists, A_play_queue){
  console.log("---------printLoopHead--------");
  console.log("remaining Mana: ", remaining_mana);
  console.log("playable cards exists: ", playable_cards_exists);
  var consoleLog = "";
  for(i=0; i < A_play_queue.length; i++){
      consoleLog += A_play_queue[i].name + ", ";
  }
  console.log("Play Queue: ", consoleLog);
  console.log("---------printLoopHead--------");
} // END printLoopHead()

function printPlayQueue(arr){
  console.log("---------printPlayQueue--------");
  var consoleLog = "";
  for(i=0; i<arr.length; i++){
    consoleLog += arr[i].name + ", ";
  }
  console.log("Play Order: ", consoleLog);
  console.log("---------printPlayQueue--------");
} // END printPlayQueue()
