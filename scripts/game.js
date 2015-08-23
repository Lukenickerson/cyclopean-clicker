RocketBoots.loadComponents([
	"coords",
	"sound_cannon",
	"image_overseer",
	"state_machine",
	//"data_delivery",
	"dice",
	"looper",
	//"entity",
	//"world",
	"time_count",
	"incrementer",
	"stage"
]);

window.g = {};
RocketBoots.ready(function(){
	g = new RocketBoots.Game("Clicker");

	g.state.transition("preload");

	// Load Data
	/*
	$.getJSON("data/startData.json",function(data){
		console.log("Data", data);
		g.enemyStartData = data.enemyStartData;
		g.playerStartData = data.playerStartData;
		console.log("startData is loaded.");
		$.getJSON("data/upgrades.json",function(data){
			g.upgrades = data.upgrades;
			g.start();
		});
	});
	*/

	g.progress = {
		_num: 1
		,skulls: 0
		,getStage: function(){
			return Math.ceil(this._num / 10);
		}
		,getProgress: function(){
			return (this._num % 10);
		}
		,isAtBoss: function(){
			return (this.getProgress == 10) ? true : false;
		}
		,increment: function(){
			this._num++;
		}
	};

	function damage(dmg) {
		var realDamage = Math.min(this.hp, dmg);
		this.hp -= realDamage;
		return realDamage;
	}

	function heal(dmg) {
		var realHeal = Math.min(dmg, (this.maxHp - this.hp));
		this.hp += realHeal;
		return realHeal;
	}

	g.monster = {
		location: "Dimension 1I"
		,arms: []
		,hp: 10000
		,maxHp: 10000
		,dps: 0
		,click: 0
		,getDPS: function(){
			// *** do calculations based on arms
			return 0;
		}
		,setDPS: function(val){
			if (typeof val == 'undefined') {
				this.dps = this.getDPS();
			} else {
				this.dps = val;
			}
			return this.dps;
		}
		,damage: damage
		,heal: heal
	};

	g.opponent = {
		dps: 0
		,hp: 10
		,maxHp: 10
		,damage: damage
		,heal: heal
	};

	g.setNewOpponent = function(){

	};



	g.start = function(){
		//g.state.transition("mainmenu");
		g.state.transition("game");

	}

	g.start();


});