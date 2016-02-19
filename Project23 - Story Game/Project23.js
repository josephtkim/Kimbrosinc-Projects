/* By Joseph Kim, 2016 */

$(document).ready(function(){
	// Set the variables shown in the game
	var stats = [];
	var level = 1;
	var curhealth = 100;
	var totalhealth = 100;
	var exp = 0;
	var str = 1;
	var def = 1;
	var item1 = "sword";
	var item2 = "shield";
	
	var begin = 1;
	var turn = 0;
	var battle1turn = 0;
	var battle2turn = 0;
	
	var slimeball = "../Project23 - RPG/slimeball.png";
	var cube = "../Project23 - RPG/cube.png"
	var prism = "../Project23 - RPG/prism.png";
	
	// update the player stats
	function updatestats(){		
		document.getElementById('level').innerHTML = String(level);
		if (curhealth >= 0){
			document.getElementById('hp').innerHTML = String(curhealth) + '/' + String(totalhealth);
		}
		document.getElementById('exp').innerHTML = String(exp) + '/' + String(100);
		document.getElementById('str').innerHTML = String(str);
		document.getElementById('def').innerHTML = String(def);
		document.getElementById('eqp1').innerHTML = String(item1);
		document.getElementById('eqp2').innerHTML = String(item2);
		
	}
    updatestats();
	
	// Change the next button to attack
	function fightbuttons() {
		document.getElementById('button1').innerHTML = "ATTACK";
	}
				
	// Go through the story
	$('#button1').click(function(){
		if (begin === 1){
			document.getElementById('words').innerHTML = "You appear on a field somewhere in Kimbrosia, the land of dreams.";
			begin = 2;
		}
		else if (begin === 2){	
			document.getElementById('words').innerHTML = "You find yourself equipped with a sword and a shield. You seem familiar with these tools like you've used them before.";	
			begin = 3;
		}	
		else if (begin === 3) {
			document.getElementById('words').innerHTML = "You find a note that reads, 'DEFEAT THE THREE MONSTERS AHEAD, AND YOU WILL BE FREE.'";	
			begin = 4;
		}
		else if (begin === 4) {
			document.getElementById('words').innerHTML = "The monsters are conveniently lined up ahead. Seems easy enough. Let's begin!";	
			begin = 5;
			document.getElementById('button1').innerHTML = "BEGIN!";
		}
		else if (begin === 5) {
			document.getElementById('button1').innerHTML = "CONTINUE";
			begin = 6;
			battle1turn = 1;
		};		
				
		    // Battle 1
			if (battle1turn === 1) {
				document.getElementById('words').innerHTML = "You come up to Monster number 1, a small blue slimeball.";
				document.getElementById("image").src=slimeball;
				battle1turn = 2;
			}
			else if (battle1turn === 2) {
				document.getElementById('words').innerHTML = "The slimeball says, 'I've been waiting for someone to bring me out of this dream. I've been a slime for a couple hours and I read a note that said I can't leave until someone defeats me.'";
				battle1turn = 3;
				document.getElementById('button1').innerHTML = "FIGHT!";
			}
			else if (battle1turn == 3) {
				document.getElementById('words').innerHTML = "";
				document.getElementById('button1').innerHTML = "ATTACK";
				
					battle1turn = 4;					
					document.getElementById('words').innerHTML = "You hit the slimeball for 1 damage. The slimeball is defeated! You gain 150 exp!";
					document.getElementById('button1').innerHTML = "Continue";
					level = 2;
					curhealth = 200;
					totalhealth = 200;
					str = 5;
					def = 5;
					exp = 50;
					item1 = "sword2";
					item2 = "shield2";
					updatestats();
					document.getElementById("image").src="";
			}
			
			else if (battle1turn === 4) {
				document.getElementById('words').innerHTML = "The slimeball says, 'Thanks! Now I can go back to being human!' The slimeball disappears into thin air. You continue on to Monster 2.";
				battle1turn = 5;
				battle2turn = 1;
			};
			
			// Battle 2
		    if (battle2turn === 1) {
				document.getElementById('words').innerHTML = "You come up to Monster number 2 ...a blue cube monster.";
				document.getElementById("image").src=cube;
				battle2turn = 2;
			}
			else if (battle2turn === 2) {
				document.getElementById('words').innerHTML = "The cube monster says to you, 'So... I'm in the same situation as the first guy.'";
				battle2turn = 3;
				document.getElementById('button1').innerHTML = "FREE HIM!";
			}
			else if (battle2turn == 3) {
				document.getElementById('button1').innerHTML = "Continue";
				
					battle2turn = 4;					
					document.getElementById('words').innerHTML = "You hit the cube for 5 damage. The cube is defeated! You gain 250 exp!";
					level = 5;
					curhealth = 500;
					totalhealth = 500;
					str = 17;
					def = 17;
					exp = 0;
					item1 = "sword3";
					item2 = "shield3";
					updatestats();				
					document.getElementById("image").src="";
			}
			
			else if (battle2turn === 4) {
				document.getElementById('words').innerHTML = "'Thanks human! I can now join my forefathers in Cube Heaven.' Apparently this monster was the real deal.";
				battle2turn = 5;				
				battle3turn = 1;
			};
			
			// Battle 3
		    if (battle3turn === 1) {
				document.getElementById('words').innerHTML = "You come up to the final monster. It's a giant Gray Rectangular Prism. There seems to be a theme with shapes here.";
				document.getElementById("image").src=prism;
				battle3turn = 2;
			}
			else if (battle3turn === 2) {
				document.getElementById('words').innerHTML = "The Prism says, 'It seems that you defeated the two monsters ahead of me. Unfortunately, I will not be so easy to defeat.'";
				battle3turn = 3;
				document.getElementById('button1').innerHTML = "ATTACK!";				
			}
			else if (battle3turn === 3) {
				document.getElementById('words').innerHTML = "You hit the prism but barely do any damage. The prism shoots lasers at you. You get hit for a lot of damage.";
				document.getElementById('button1').innerHTML = "Continue";
					battle3turn = 4;					
					curhealth = 1;
					updatestats();				
			}

			else if (battle3turn === 4) {
				document.getElementById('words').innerHTML = "You are almost defeated. You realize there is only one more thing you can do.";
				document.getElementById('button1').innerHTML = "Set Prism HP = 0!";
				battle3turn = 5;
			}
			
			else if (battle3turn == 5) {
				document.getElementById('words').innerHTML = "'How? That's kind of cheap dude..' The Prism is defeated and disappears. You win!";
				document.getElementById('button1').innerHTML = "Continue";
				
					battle3turn = 6;					
					level = 99;
					curhealth = 999;
					totalhealth = 999;
					str = 299;
					def = 299;
					exp = 99;
					item1 = "KSword";
					item2 = "KShield";
					updatestats();				
					document.getElementById("image").src="";
			}
			
			else if (battle3turn === 6) {
				document.getElementById('words').innerHTML = "You return back to where you were before entering Kimbrosia. Thank you for playing!";
				battle3turn = 7;
			};
			
			
	});
})