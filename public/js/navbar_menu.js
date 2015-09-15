/*jshint -W117 */
$(function(){

		/*var data = "<ul><div class=li level1'> Põhiline</div> <ul> <li class='level2'><div class='li'> TTÜ põhikiri</div> </li> <li class='level2'><div class='li'> TTÜ arengukava 2011−2015</div> </li> <li class='level2'><div class='li'> TTÜ kollektiivleping</div> </li> <li class='level2'><div class='li'> TTÜ juhtimissüsteemi käsiraamat</div> </li> <li class='level2'><div class='li'> TTÜ seadus (Riigi Teataja)</div> </li> <li class='level2'><div class='li'> Ülikooliseadus (Riigi Teataja)</div> </li> <li class='level2'><div class='li'> Teadus- ja arendustegevuse korralduse seadus (Riigi Teataja)</div> </li> <li class='level2'><div class='li'> Kõrgharidusstandard (Riigi Teataja) </div> </li> </ul>  <div class='li level1'> Õigusaktid</div> <ul> <li class='level2'><div class='li'> Kuratooriumi määrused</div> </li> <li class='level2'><div class='li'> Kuratooriumi otsused</div> </li> <li class='level2'><div class='li'> Nõukogu määrused</div> </li> <li class='level2'><div class='li'> Nõukogu otsused</div> </li> <li class='level2'><div class='li'> Üldkäskkirjad</div> </li> <li class='level2'><div class='li'> Personalikäskkirjad</div> </li> <li class='level2'><div class='li'> Korraldused</div> </li> <li class='level2'><div class='li'> Korraldused asendaja määramiseks</div> </li> <li class='level2'><div class='li'> Riigihangete korraldused</div> </li> <li class='level2'><div class='li'> Dekaani korraldused</div> </li> </ul> <div class='li level1'> Terviktekstid, vormid</div> <ul> <li class='level2'><div class='li'> Õppetöö</div> </li> <li class='level2'><div class='li'> Teadus- ja arendustöö</div> </li> <li class='level2'><div class='li'> Täiendusõpe</div> </li> <li class='level2'><div class='li'> Personalitöö</div> </li> <li class='level2'><div class='li'> Dokumendihaldus</div> </li> <li class='level2'><div class='li'> Lepingud ja volikirjad</div> </li> <li class='level2'><div class='li'> Finantstegevus</div> </li> <li class='level2'><div class='li'> Haldus-majandustegevus</div> </li> <li class='level2'><div class='li'> Statuudid</div> </li> <li class='level2'><div class='li'> Hinnakirjad</div> </li> <li class='level2'><div class='li'> Arengukavad ja strateegiad</div> </li> <li class='level2'><div class='li'> Asutuste põhikirjad</div> </li> <li class='level2'><div class='li'> Akadeemiliste struktuuriüksuste põhimäärused</div> </li> <li class='level2'><div class='li'> Haldus-tugistruktuuriüksuste põhimäärused</div> </li> <li class='level2'><div class='li'> Otsustuskogude töö</div> </li> <li class='level2'><div class='li'> TTÜ struktuur ja üldandmed  </div> </li> </ul> <div class='li level1'> Kirjaregister</div> <ul> <li class='level2'><div class='li'> Volikirjade register</div> </li> <li class='level2'><div class='li'> Lepingute register</div> </li> <li class='level2'><div class='li'> Lähetuste register</div> </li> <li class='level2'><div class='li'> TTÜga seotud juriidiliste isikute register  	</div> </li> <li class='level2'><div class='li'> Õigusaktide audit</div> </li> <li class='level2'><div class='li'> Õigusaktide tõlked (regulations and documents)</div> </li> <li class='level2'><div class='li'> Ingliskeelne terminoloogia</div> </li> </ul> <div class='li level1'> Mallid</div> <ul> <li class='level2'><div class='li'> Dokumendimallid</div> </li> <li class='level2'><div class='li'> Näidisdokumendid</div> </li> <li class='level2'><div class='li'> Slaidimallid</div> </li> </ul> <div class='li level1'> Turundusmaterjalid</div> <ul> <li class='level2'><div class='li'> TTÜ brändi ja tunnusgraafika kogumik</div> </li> <li class='level2'><div class='li'> Logod</div> </li> <li class='level2'><div class='li'> Rahvusvahelise turunduse käsiraamat</div> </li> </ul> <div class='li level1'> Infotund, avakoosolekud</div> <ul> <li class='level2'><div class='li'> Üleülikooliline infotund</div> </li> <li class='level2'><div class='li'> Rektori kõned õppeaasta avakoosolekul</div> </li> </ul> </ul>";
		//COUNT MENU TITLES
		var level1Count = $(".level1").length;
		//COUNT MENU ITEMS
		var level2Count = $(".level2").length;

		console.log(level2Count);
		console.log(level1Count);

		//STORE TITLES AND ITEMS IN ARRAYS
		var menuTitles = [];
		var menuItems = [];

		$(".level1").each(function(){
				menuTitles.push($(this).html());
		});
		//console.log(menuTitles);

		//CREATE MENU ITEM BLOCKS AND STORE IN OBJECT
		var level2Items = $(".level1").nextUntil(".level1");
		//console.log($(level2Items[6]).html());


		var colNum = 3;
		var counter = 0;
		var i = 0;
		//BUILD THE MENU
		var html = "<a aria-expanded='false' role='button' href='#' class='dropdown-toggle' data-toggle='dropdown'> Töökorraldus <span class='caret'></span></a><ul class='dropdown-menu dropdown-menu-large row'>";

		if (colNum === 3) {
				//BUILD THE MENU IF 3 COLUMNS
				counter = 3;
				for (var j = 0; j < colNum; j++){
						html += "<li class='col-sm-" + 4 + "'>";
						for (i ; i < counter; i++) {
								html += "<ul><li class='level1'>" + menuTitles[i] + "</li>" + $(level2Items[i]).html() + "</ul>";
						}
						html += "</li>";
						counter = counter + colNum;

				}
				html += "</ul></li>";
				$("#too").append(html);
		}
		else {
				//BUILD THE MENU IF 4 COLUMNS
				html = "<li class='dropdown dropdown-large'><a aria-expanded='false' role='button' href='#' class='dropdown-toggle' data-toggle='dropdown'> Töökorraldus <span class='caret'></span></a><ul class='dropdown-menu dropdown-menu-large row'><li class='col-sm-" + colNum + "'>";

				for (var k = 0; k < level1Count; k++) {
						html += "<ul><li class='level1'>" + menuTitles[k] + "</li>" + $(level2Items[k]).html() + "</ul>";
				}

				html += "</li></ul>";
				$("#too").append(html);
		}*/
		//SHOW LEVEL 3 ELEMENTS ON LEVEL 2 HOVER
		$(".l3").hide();
		$(".level-2 a").mouseenter(function(){
				//get height and width of lvl 2 elem. and position lvl 3 elem
				var height = ($(this).position()).top - 16;
				var width = $(this).width() + 32;
				$(this).parent().nextUntil('.level-2').css("left",width).css("top",height).show();

		});
		//HIDE LEVEL 3 ELEMENT
		// hide on lvl 3 element box mouse out
		$(".l3").mouseleave(function(){
				$(this).hide();
			});
		// hide on another lvl 2 element mouse in
		$(".level-2").mouseenter(function(){
				$(".l3").hide();
		});

});
