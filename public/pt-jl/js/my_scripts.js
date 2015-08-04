$(document).ready(function () {

//_________________FUNKTSIOONID_________________________

//FUNKTSIOON, MIS KUVAB LEHEL OLEVAD KASUTAJAD
	function getUsersOnPage(){
		$.getJSON("js/usrs_on_page.json", function(users_json) {
			var output = "<ul>";
					for (var i in users_json.users) {
						output+="<li><i class='mdi-action-perm-identity'></i> " + users_json.users[i].f_name + " " + users_json.users[i].s_name + "</li>";
					}
					output+="</ul>";

					document.getElementById("users-online-placeholder").innerHTML=output;
		});
	} //end getUsersOnPage

//FUNKTSIOON, MIS HOIAB SCROLLI ALL VIIMASE SÕNUMI JUURES
	function updateScroll(){
    $("#message-list").scrollTop($("#message-list")[0].scrollHeight);
	} //end updateScroll

//FUNKTSIOON, MIS KUVAB LEHE MESSENGERI POSTITUSED
	function getMessages() {
		$.getJSON("js/messages.json", function(messages_json) {
			var output = "<ul id='message-list'>	";
					for (var j in messages_json.messages) {
						output+="<li>" +  messages_json.messages[j].name + ": " + messages_json.messages[j].message + "</li>";
					}
					output+="</ul>";

					document.getElementById("messages-display-placeholder").innerHTML=output;

					updateScroll()
		});
	} //end getMessages

//FUNKTSIOON, MIS POSTITAB UUE SÕNUMI
	function postMessage(){

     $.getJSON("js/messages.json", function(messages_json) {

			 var msgstring = $("#page-msg").val();

        messages_json.messages.push({"name": "Johann Laulik","message": msgstring});

        $.post("js/messages_json.php", {json : JSON.stringify(messages_json)});

			 $("#page-msg").val("");

			 msgstring = "";

     });

		//Seame peale delay, et php fail jõuaks tekstifaili messages.json töödelda, enne kui toimub kuva uuendus.
		setTimeout(function() {

			getMessages();

			}, 100);

	} //end postMessage

//________________SÜNDMUSED________________________________

	//KONTROLLIME LEHEL OLEVATE KASUTAJATE LISTI IGA 5 SEKUNDI TAGANT
	window.setInterval(function(){
		getUsersOnPage();
	}, 5000);
//KUVAME SAADETUD SÕNUMID
	getMessages();
//SAADAME SÕNUMI, KUI TOIMUB ENTERI VAJUTUS
	$("#page-msg").keypress(function(event){
		if(event.which == 13) {
			postMessage();
		}
	});
//SAADAME SÕNUMI KUI TOIMUB VAJUTUS SÕNUMI SAATMISE NUPULE
	$("#send-msg-btn").click(function(){
		postMessage();
		});

});
