window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/custom_skins/aboutUISkin.exml'] = window.homeUISkin = (function (_super) {
	__extends(homeUISkin, _super);
	var homeUISkin$Skin1 = 	(function (_super) {
		__extends(homeUISkin$Skin1, _super);
		function homeUISkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
			];
		}
		var _proto = homeUISkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "mbtn_Bg_png";
			t.x = 1;
			t.y = 6;
			return t;
		};
		return homeUISkin$Skin1;
	})(eui.Skin);

	var homeUISkin$Skin2 = 	(function (_super) {
		__extends(homeUISkin$Skin2, _super);
		function homeUISkin$Skin2() {
			_super.call(this);
			this.skinParts = [];
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
			];
		}
		var _proto = homeUISkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "mbtn_Bg_png";
			t.x = 1;
			t.y = 6;
			return t;
		};
		return homeUISkin$Skin2;
	})(eui.Skin);

	var homeUISkin$Skin3 = 	(function (_super) {
		__extends(homeUISkin$Skin3, _super);
		function homeUISkin$Skin3() {
			_super.call(this);
			this.skinParts = [];
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
			];
		}
		var _proto = homeUISkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "mbtn_Bg_png";
			t.x = 1;
			t.y = 6;
			return t;
		};
		return homeUISkin$Skin3;
	})(eui.Skin);

	var homeUISkin$Skin4 = 	(function (_super) {
		__extends(homeUISkin$Skin4, _super);
		function homeUISkin$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
			];
		}
		var _proto = homeUISkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "mbtn_Bg_png";
			t.x = 1;
			t.y = 6;
			return t;
		};
		return homeUISkin$Skin4;
	})(eui.Skin);

	function homeUISkin() {
		_super.call(this);
		this.skinParts = ["list_console_room","scrConsoleRoom","list_move","list_character","scrCharacter","list_item","scrItem","mbtnProfile","mbtnHeros","mbtnGoods","mbtnAbout"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.scrConsoleRoom_i(),this._Rect2_i(),this.list_move_i(),this._Rect3_i(),this.scrCharacter_i(),this.scrItem_i(),this.mbtnProfile_i(),this.mbtnHeros_i(),this.mbtnGoods_i(),this.mbtnAbout_i()];
	}
	var _proto = homeUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xa59b9b;
		t.height = 122.85;
		t.horizontalCenter = 0;
		t.strokeColor = 0x211709;
		t.strokeWeight = 5;
		t.percentWidth = 96;
		t.y = 110;
		return t;
	};
	_proto.scrConsoleRoom_i = function () {
		var t = new eui.Scroller();
		this.scrConsoleRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.horizontalCenter = 0;
		t.percentWidth = 94;
		t.y = 119;
		t.viewport = this.list_console_room_i();
		return t;
	};
	_proto.list_console_room_i = function () {
		var t = new eui.List();
		this.list_console_room = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 10;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xb5adad;
		t.height = 171;
		t.horizontalCenter = 0.5;
		t.strokeColor = 0x776e3d;
		t.strokeWeight = 3;
		t.percentWidth = 96;
		t.y = 232;
		return t;
	};
	_proto.list_move_i = function () {
		var t = new eui.List();
		this.list_move = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 175;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.percentWidth = 95;
		t.y = 229;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 0;
		t.orientation = "rows";
		t.verticalGap = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xc6b1b1;
		t.height = 115;
		t.horizontalCenter = 0;
		t.strokeWeight = 5;
		t.percentWidth = 96;
		t.y = 400;
		return t;
	};
	_proto.scrCharacter_i = function () {
		var t = new eui.Scroller();
		this.scrCharacter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.horizontalCenter = 0;
		t.verticalCenter = 32;
		t.percentWidth = 95;
		t.viewport = this.list_character_i();
		return t;
	};
	_proto.list_character_i = function () {
		var t = new eui.List();
		this.list_character = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 4;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.scrItem_i = function () {
		var t = new eui.Scroller();
		this.scrItem = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.horizontalCenter = 0;
		t.verticalCenter = 87;
		t.percentWidth = 95;
		t.viewport = this.list_item_i();
		return t;
	};
	_proto.list_item_i = function () {
		var t = new eui.List();
		this.list_item = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 6;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.mbtnProfile_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnProfile = t;
		t.height = 60;
		t.name = "玩家";
		t.x = 15;
		t.y = 739;
		t.skinName = homeUISkin$Skin1;
		return t;
	};
	_proto.mbtnHeros_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnHeros = t;
		t.height = 60;
		t.name = "英雄表";
		t.x = 129;
		t.y = 739;
		t.skinName = homeUISkin$Skin2;
		return t;
	};
	_proto.mbtnGoods_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnGoods = t;
		t.height = 60;
		t.name = "物品表";
		t.x = 242;
		t.y = 739;
		t.skinName = homeUISkin$Skin3;
		return t;
	};
	_proto.mbtnAbout_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnAbout = t;
		t.height = 60;
		t.name = "关于";
		t.x = 355;
		t.y = 739;
		t.skinName = homeUISkin$Skin4;
		return t;
	};
	return homeUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/buff.exml'] = window.buff = (function (_super) {
	__extends(buff, _super);
	function buff() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 52;
		this.width = 63;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"textFlow");
	}
	var _proto = buff.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x665031;
		t.percentHeight = 100;
		t.strokeColor = 0x4f0707;
		t.strokeWeight = 6;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0;
		t.textAlign = "center";
		t.textColor = 0xFFAC1C;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 79;
		return t;
	};
	return buff;
})(eui.Skin);generateEUI.paths['resource/custom_skins/buttonCommonSkin.exml'] = window.buttonCommonSkin = (function (_super) {
	__extends(buttonCommonSkin, _super);
	function buttonCommonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 50;
		this.width = 110;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = buttonCommonSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x5b4a4a;
		t.percentHeight = 100;
		t.strokeColor = 0x3a1818;
		t.strokeWeight = 5;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 0;
		t.fontFamily = "KaiTi";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return buttonCommonSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/character.exml'] = window.character = (function (_super) {
	__extends(character, _super);
	function character() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 32;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.border"],[0],this._Rect1,"strokeColor");
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = character.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x7f7968;
		t.percentHeight = 100;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 100;
		t.left = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFF00;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	return character;
})(eui.Skin);generateEUI.paths['resource/custom_skins/progressHP.exml'] = window.progressHP = (function (_super) {
	__extends(progressHP, _super);
	function progressHP() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = progressHP.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_hp_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return progressHP;
})(eui.Skin);generateEUI.paths['resource/custom_skins/chaState.exml'] = window.character = (function (_super) {
	__extends(character, _super);
	function character() {
		_super.call(this);
		this.skinParts = ["HP","MP","changeValue"];
		
		this.height = 54.67;
		this.width = 138;
		this.elementsContent = [this._Rect1_i(),this.HP_i(),this.MP_i(),this._Label1_i(),this.changeValue_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.HPMax"],[0],this.HP,"maximum");
		eui.Binding.$bindProperties(this, ["hostComponent.data.HP"],[0],this.HP,"value");
		eui.Binding.$bindProperties(this, ["hostComponent.data.MPMax"],[0],this.MP,"maximum");
		eui.Binding.$bindProperties(this, ["hostComponent.data.MP"],[0],this.MP,"value");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"textFlow");
	}
	var _proto = character.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseWidth = 35;
		t.fillColor = 0xada175;
		t.height = 61;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.HP_i = function () {
		var t = new eui.ProgressBar();
		this.HP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.horizontalCenter = 0;
		t.rotation = 0.28;
		t.skinName = "progressHP";
		t.width = 120;
		t.y = 25.75;
		return t;
	};
	_proto.MP_i = function () {
		var t = new eui.ProgressBar();
		this.MP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.horizontalCenter = 0;
		t.minimum = 0;
		t.rotation = 0.28;
		t.width = 120;
		t.y = 40.51;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.size = 17;
		t.x = 13;
		t.y = 6;
		return t;
	};
	_proto.changeValue_i = function () {
		var t = new eui.Label();
		this.changeValue = t;
		t.text = "Label";
		t.visible = false;
		t.x = 92;
		t.y = 1;
		return t;
	};
	return character;
})(eui.Skin);generateEUI.paths['resource/custom_skins/exchangeUISkin.exml'] = window.exchangeUISkin = (function (_super) {
	__extends(exchangeUISkin, _super);
	var exchangeUISkin$Skin5 = 	(function (_super) {
		__extends(exchangeUISkin$Skin5, _super);
		function exchangeUISkin$Skin5() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = exchangeUISkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return exchangeUISkin$Skin5;
	})(eui.Skin);

	function exchangeUISkin() {
		_super.call(this);
		this.skinParts = ["btnClose","listYouAll","scrYouAll","listMeAll","scrMeAll","groupAll","listYouEquip","scrYouEquip","listMeEquip","scrMeEquip","groupEquip","listYouMoney","listMeMoney","groupMoney","stack","tab"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.btnClose_i(),this.stack_i(),this.tab_i()];
	}
	var _proto = exchangeUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 221.5;
		t.verticalCenter = -381;
		t.skinName = exchangeUISkin$Skin5;
		return t;
	};
	_proto.stack_i = function () {
		var t = new eui.ViewStack();
		this.stack = t;
		t.anchorOffsetX = 0;
		t.height = 619;
		t.width = 473.12;
		t.x = 4;
		t.y = 91;
		t.elementsContent = [this.groupAll_i(),this.groupEquip_i(),this.groupMoney_i()];
		return t;
	};
	_proto.groupAll_i = function () {
		var t = new eui.Group();
		this.groupAll = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i(),this.scrYouAll_i(),this._Label2_i(),this.scrMeAll_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto.scrYouAll_i = function () {
		var t = new eui.Scroller();
		this.scrYouAll = t;
		t.anchorOffsetY = 0;
		t.height = 262;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 48;
		t.viewport = this.listYouAll_i();
		return t;
	};
	_proto.listYouAll_i = function () {
		var t = new eui.List();
		this.listYouAll = t;
		t.anchorOffsetY = 0;
		t.height = 270;
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto.scrMeAll_i = function () {
		var t = new eui.Scroller();
		this.scrMeAll = t;
		t.anchorOffsetY = 0;
		t.height = 246;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 364;
		t.viewport = this.listMeAll_i();
		return t;
	};
	_proto.listMeAll_i = function () {
		var t = new eui.List();
		this.listMeAll = t;
		return t;
	};
	_proto.groupEquip_i = function () {
		var t = new eui.Group();
		this.groupEquip = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i(),this.scrYouEquip_i(),this._Label4_i(),this.scrMeEquip_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto.scrYouEquip_i = function () {
		var t = new eui.Scroller();
		this.scrYouEquip = t;
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.viewport = this.listYouEquip_i();
		return t;
	};
	_proto.listYouEquip_i = function () {
		var t = new eui.List();
		this.listYouEquip = t;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto.scrMeEquip_i = function () {
		var t = new eui.Scroller();
		this.scrMeEquip = t;
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.y = 300;
		t.viewport = this.listMeEquip_i();
		return t;
	};
	_proto.listMeEquip_i = function () {
		var t = new eui.List();
		this.listMeEquip = t;
		return t;
	};
	_proto.groupMoney_i = function () {
		var t = new eui.Group();
		this.groupMoney = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label5_i(),this._Scroller1_i(),this._Label6_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.viewport = this.listYouMoney_i();
		return t;
	};
	_proto.listYouMoney_i = function () {
		var t = new eui.List();
		this.listYouMoney = t;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.y = 300;
		t.viewport = this.listMeMoney_i();
		return t;
	};
	_proto.listMeMoney_i = function () {
		var t = new eui.List();
		this.listMeMoney = t;
		return t;
	};
	_proto.tab_i = function () {
		var t = new eui.TabBar();
		this.tab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.91;
		t.width = 473.94;
		t.x = 2.06;
		t.y = 709.09;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return exchangeUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/FightUISkin.exml'] = window.FightUISkin = (function (_super) {
	__extends(FightUISkin, _super);
	var FightUISkin$Skin6 = 	(function (_super) {
		__extends(FightUISkin$Skin6, _super);
		var FightUISkin$Skin6$Skin7 = 		(function (_super) {
			__extends(FightUISkin$Skin6$Skin7, _super);
			function FightUISkin$Skin6$Skin7() {
				_super.call(this);
				this.skinParts = [];
				
			}
			var _proto = FightUISkin$Skin6$Skin7.prototype;

			return FightUISkin$Skin6$Skin7;
		})(eui.Skin);

		function FightUISkin$Skin6() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = FightUISkin$Skin6.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = FightUISkin$Skin6$Skin7;
			return t;
		};
		return FightUISkin$Skin6;
	})(eui.Skin);

	var FightUISkin$Skin8 = 	(function (_super) {
		__extends(FightUISkin$Skin8, _super);
		function FightUISkin$Skin8() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btnReturn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FightUISkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = 0;
			t.source = "btnReturn_png";
			t.verticalCenter = 0;
			t.percentWidth = 90;
			return t;
		};
		return FightUISkin$Skin8;
	})(eui.Skin);

	function FightUISkin() {
		_super.call(this);
		this.skinParts = ["listGoods","scrListGoods","btnReturn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.scrListGoods_i(),this.btnReturn_i(),this._Image1_i()];
	}
	var _proto = FightUISkin.prototype;

	_proto.scrListGoods_i = function () {
		var t = new eui.Scroller();
		this.scrListGoods = t;
		t.height = 517;
		t.width = 450;
		t.x = 14;
		t.y = 184;
		t.viewport = this.listGoods_i();
		t.skinName = FightUISkin$Skin6;
		return t;
	};
	_proto.listGoods_i = function () {
		var t = new eui.List();
		this.listGoods = t;
		t.height = 110;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.x = 13;
		t.y = 132;
		t.skinName = FightUISkin$Skin8;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 37;
		t.source = "goodsTitle_png";
		t.width = 132;
		t.x = 166;
		t.y = 135;
		return t;
	};
	return FightUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/function.exml'] = window.homeUISkin = (function (_super) {
	__extends(homeUISkin, _super);
	function homeUISkin() {
		_super.call(this);
		this.skinParts = ["guaji"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.guaji_i()];
	}
	var _proto = homeUISkin.prototype;

	_proto.guaji_i = function () {
		var t = new eui.Group();
		this.guaji = t;
		t.height = 436;
		t.width = 480;
		t.x = 0;
		t.y = 121;
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i(),this._Button4_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "工作";
		t.x = 71;
		t.y = 235;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "内修";
		t.x = 329;
		t.y = 129;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.label = "运功";
		t.x = 155;
		t.y = 104;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.label = "特性列表";
		t.x = 255;
		t.y = 235;
		return t;
	};
	return homeUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/functionButton.exml'] = window.herosListIR = (function (_super) {
	__extends(herosListIR, _super);
	function herosListIR() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 50;
		this.width = 110;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
		eui.Binding.$bindProperties(this, ["hostComponent.data.count"],[0],this._Label2,"text");
	}
	var _proto = herosListIR.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x5b4a4a;
		t.percentHeight = 100;
		t.strokeColor = 0x3a1818;
		t.strokeWeight = 5;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.width = 19;
		t.x = 79;
		t.y = 0;
		return t;
	};
	return herosListIR;
})(eui.Skin);generateEUI.paths['resource/custom_skins/getTaskUISkin.exml'] = window.getTaskUISkin = (function (_super) {
	__extends(getTaskUISkin, _super);
	var getTaskUISkin$Skin9 = 	(function (_super) {
		__extends(getTaskUISkin$Skin9, _super);
		function getTaskUISkin$Skin9() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = getTaskUISkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return getTaskUISkin$Skin9;
	})(eui.Skin);

	function getTaskUISkin() {
		_super.call(this);
		this.skinParts = ["btnClose","listTask1","scrTask1"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.btnClose_i(),this.scrTask1_i()];
	}
	var _proto = getTaskUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 221.5;
		t.verticalCenter = -381;
		t.skinName = getTaskUISkin$Skin9;
		return t;
	};
	_proto.scrTask1_i = function () {
		var t = new eui.Scroller();
		this.scrTask1 = t;
		t.anchorOffsetY = 0;
		t.height = 672;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 94;
		t.viewport = this.listTask1_i();
		return t;
	};
	_proto.listTask1_i = function () {
		var t = new eui.List();
		this.listTask1 = t;
		return t;
	};
	return getTaskUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/goodsBoxListIRSkin.exml'] = window.goodsBoxListIRSkin = (function (_super) {
	__extends(goodsBoxListIRSkin, _super);
	function goodsBoxListIRSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 110;
		this.width = 110;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
		eui.Binding.$bindProperties(this, ["hostComponent.data.isEquip"],[0],this._Label2,"visible");
	}
	var _proto = goodsBoxListIRSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 32;
		t.fillColor = 0x382525;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0xd10c0c;
		t.strokeWeight = 3;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 13;
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 70;
		t.left = 48;
		t.right = 0;
		t.size = 13;
		t.text = "已装备";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return goodsBoxListIRSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/goodsListIRSkin.exml'] = window.goodsListIRSkin = (function (_super) {
	__extends(goodsListIRSkin, _super);
	function goodsListIRSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 104;
		this.width = 443;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Image2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.goodsName"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.comment"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image2,"source");
	}
	var _proto = goodsListIRSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "listItemBkgd_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "微软雅黑";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFF00;
		t.verticalAlign = "middle";
		t.width = 131;
		t.x = 143;
		t.y = 22;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "微软雅黑";
		t.size = 20;
		t.textAlign = "left";
		t.textColor = 0x72E8FF;
		t.verticalAlign = "middle";
		t.width = 220;
		t.x = 117;
		t.y = 64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 69;
		t.width = 66;
		t.x = 27;
		t.y = 16;
		return t;
	};
	return goodsListIRSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/goodsUISkin.exml'] = window.goodsUISkin = (function (_super) {
	__extends(goodsUISkin, _super);
	var goodsUISkin$Skin10 = 	(function (_super) {
		__extends(goodsUISkin$Skin10, _super);
		var goodsUISkin$Skin10$Skin11 = 		(function (_super) {
			__extends(goodsUISkin$Skin10$Skin11, _super);
			function goodsUISkin$Skin10$Skin11() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = goodsUISkin$Skin10$Skin11.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return goodsUISkin$Skin10$Skin11;
		})(eui.Skin);

		function goodsUISkin$Skin10() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = goodsUISkin$Skin10.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = goodsUISkin$Skin10$Skin11;
			return t;
		};
		return goodsUISkin$Skin10;
	})(eui.Skin);

	var goodsUISkin$Skin12 = 	(function (_super) {
		__extends(goodsUISkin$Skin12, _super);
		var goodsUISkin$Skin12$Skin13 = 		(function (_super) {
			__extends(goodsUISkin$Skin12$Skin13, _super);
			function goodsUISkin$Skin12$Skin13() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = goodsUISkin$Skin12$Skin13.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return goodsUISkin$Skin12$Skin13;
		})(eui.Skin);

		function goodsUISkin$Skin12() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = goodsUISkin$Skin12.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = goodsUISkin$Skin12$Skin13;
			return t;
		};
		return goodsUISkin$Skin12;
	})(eui.Skin);

	var goodsUISkin$Skin14 = 	(function (_super) {
		__extends(goodsUISkin$Skin14, _super);
		var goodsUISkin$Skin14$Skin15 = 		(function (_super) {
			__extends(goodsUISkin$Skin14$Skin15, _super);
			function goodsUISkin$Skin14$Skin15() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = goodsUISkin$Skin14$Skin15.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return goodsUISkin$Skin14$Skin15;
		})(eui.Skin);

		function goodsUISkin$Skin14() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = goodsUISkin$Skin14.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = goodsUISkin$Skin14$Skin15;
			return t;
		};
		return goodsUISkin$Skin14;
	})(eui.Skin);

	var goodsUISkin$Skin16 = 	(function (_super) {
		__extends(goodsUISkin$Skin16, _super);
		function goodsUISkin$Skin16() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = goodsUISkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return goodsUISkin$Skin16;
	})(eui.Skin);

	function goodsUISkin() {
		_super.call(this);
		this.skinParts = ["listGoodsAll","scrListGoodsAll","listGoodsEquip","scrListGoodsEquip","listGoodsBook","scrListGoodsBook","stackBox","tabBox","btnReturn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.stackBox_i(),this.tabBox_i(),this.btnReturn_i()];
	}
	var _proto = goodsUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x5b4a4a;
		t.height = 505;
		t.horizontalCenter = 0;
		t.percentWidth = 96;
		t.y = 110;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x7c6868;
		t.height = 410;
		t.horizontalCenter = 0;
		t.strokeWeight = 8;
		t.percentWidth = 96;
		t.y = 219;
		return t;
	};
	_proto.stackBox_i = function () {
		var t = new eui.ViewStack();
		this.stackBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 394;
		t.horizontalCenter = 0;
		t.selectedIndex = 1;
		t.percentWidth = 95;
		t.y = 226;
		t.elementsContent = [this.scrListGoodsAll_i(),this.scrListGoodsEquip_i(),this.scrListGoodsBook_i()];
		return t;
	};
	_proto.scrListGoodsAll_i = function () {
		var t = new eui.Scroller();
		this.scrListGoodsAll = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 0;
		t.viewport = this.listGoodsAll_i();
		t.skinName = goodsUISkin$Skin10;
		return t;
	};
	_proto.listGoodsAll_i = function () {
		var t = new eui.List();
		this.listGoodsAll = t;
		t.anchorOffsetY = 0;
		t.height = 414;
		t.x = 0;
		t.y = -34;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.scrListGoodsEquip_i = function () {
		var t = new eui.Scroller();
		this.scrListGoodsEquip = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 0;
		t.viewport = this.listGoodsEquip_i();
		t.skinName = goodsUISkin$Skin12;
		return t;
	};
	_proto.listGoodsEquip_i = function () {
		var t = new eui.List();
		this.listGoodsEquip = t;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.scrListGoodsBook_i = function () {
		var t = new eui.Scroller();
		this.scrListGoodsBook = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 0;
		t.viewport = this.listGoodsBook_i();
		t.skinName = goodsUISkin$Skin14;
		return t;
	};
	_proto.listGoodsBook_i = function () {
		var t = new eui.List();
		this.listGoodsBook = t;
		t.layout = this._VerticalLayout3_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.tabBox_i = function () {
		var t = new eui.TabBar();
		this.tabBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 95;
		t.y = 145;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.label = "返回";
		t.x = 439;
		t.y = 110;
		t.skinName = goodsUISkin$Skin16;
		return t;
	};
	return goodsUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/progressPP.exml'] = window.progressPP = (function (_super) {
	__extends(progressPP, _super);
	function progressPP() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = progressPP.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_pp_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return progressPP;
})(eui.Skin);generateEUI.paths['resource/custom_skins/headerUISkin.exml'] = window.homeUISkin = (function (_super) {
	__extends(homeUISkin, _super);
	function homeUISkin() {
		_super.call(this);
		this.skinParts = ["HP","MP","PP","groupHeader"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.groupHeader_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"textFlow");
		eui.Binding.$bindProperties(this, ["hostComponent.data.HPMax"],[0],this.HP,"maximum");
		eui.Binding.$bindProperties(this, ["hostComponent.data.HP"],[0],this.HP,"value");
		eui.Binding.$bindProperties(this, ["hostComponent.data.MPMax"],[0],this.MP,"maximum");
		eui.Binding.$bindProperties(this, ["hostComponent.data.MP"],[0],this.MP,"value");
		eui.Binding.$bindProperties(this, ["hostComponent.data.PPMax"],[0],this.PP,"maximum");
		eui.Binding.$bindProperties(this, ["hostComponent.data.PP"],[0],this.PP,"value");
	}
	var _proto = homeUISkin.prototype;

	_proto.groupHeader_i = function () {
		var t = new eui.Group();
		this.groupHeader = t;
		t.height = 104;
		t.width = 478;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label1_i(),this.HP_i(),this.MP_i(),this.PP_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.textColor = 0x773939;
		return t;
	};
	_proto.HP_i = function () {
		var t = new eui.ProgressBar();
		this.HP = t;
		t.skinName = "progressHP";
		t.width = 212;
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.MP_i = function () {
		var t = new eui.ProgressBar();
		this.MP = t;
		t.width = 212;
		t.x = 0;
		t.y = 50;
		return t;
	};
	_proto.PP_i = function () {
		var t = new eui.ProgressBar();
		this.PP = t;
		t.skinName = "progressPP";
		t.width = 212;
		t.x = 0;
		t.y = 71;
		return t;
	};
	return homeUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/herosListIRSkin.exml'] = window.herosListIRSkin = (function (_super) {
	__extends(herosListIRSkin, _super);
	var herosListIRSkin$Skin17 = 	(function (_super) {
		__extends(herosListIRSkin$Skin17, _super);
		function herosListIRSkin$Skin17() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.7)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","checked_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","checked_png")
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","checked_png")
					])
			];
		}
		var _proto = herosListIRSkin$Skin17.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.bottom = 0;
			t.fillMode = "scale";
			t.left = 0;
			t.source = "checkNo_png";
			t.width = 36;
			return t;
		};
		return herosListIRSkin$Skin17;
	})(eui.Skin);

	function herosListIRSkin() {
		_super.call(this);
		this.skinParts = ["cb"];
		
		this.height = 104;
		this.width = 443;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Image2_i(),this.cb_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.heroName"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.comment"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.checked"],[0],this.cb,"selected");
	}
	var _proto = herosListIRSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "listItemBkgd_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "微软雅黑";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFF00;
		t.verticalAlign = "middle";
		t.width = 131;
		t.x = 143;
		t.y = 22;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "微软雅黑";
		t.size = 20;
		t.textAlign = "left";
		t.textColor = 0x72E8FF;
		t.verticalAlign = "middle";
		t.width = 220;
		t.x = 117;
		t.y = 64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 69;
		t.width = 66;
		t.x = 27;
		t.y = 16;
		return t;
	};
	_proto.cb_i = function () {
		var t = new eui.CheckBox();
		this.cb = t;
		t.height = 30;
		t.width = 29;
		t.x = 383;
		t.y = 23;
		t.skinName = herosListIRSkin$Skin17;
		return t;
	};
	return herosListIRSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/homeUISkin.exml'] = window.homeUISkin = (function (_super) {
	__extends(homeUISkin, _super);
	var homeUISkin$Skin18 = 	(function (_super) {
		__extends(homeUISkin$Skin18, _super);
		function homeUISkin$Skin18() {
			_super.call(this);
			this.skinParts = [];
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
			];
		}
		var _proto = homeUISkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "mbtn_Bg_png";
			t.x = 4;
			t.y = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.text = "属性";
			t.x = 30;
			t.y = 20;
			return t;
		};
		return homeUISkin$Skin18;
	})(eui.Skin);

	var homeUISkin$Skin19 = 	(function (_super) {
		__extends(homeUISkin$Skin19, _super);
		function homeUISkin$Skin19() {
			_super.call(this);
			this.skinParts = [];
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
			];
		}
		var _proto = homeUISkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "mbtn_Bg_png";
			t.x = 4;
			t.y = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.text = "技能";
			t.x = 30;
			t.y = 20;
			return t;
		};
		return homeUISkin$Skin19;
	})(eui.Skin);

	var homeUISkin$Skin20 = 	(function (_super) {
		__extends(homeUISkin$Skin20, _super);
		function homeUISkin$Skin20() {
			_super.call(this);
			this.skinParts = [];
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
			];
		}
		var _proto = homeUISkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "mbtn_Bg_png";
			t.x = 4;
			t.y = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.text = "物品";
			t.x = 30;
			t.y = 20;
			return t;
		};
		return homeUISkin$Skin20;
	})(eui.Skin);

	var homeUISkin$Skin21 = 	(function (_super) {
		__extends(homeUISkin$Skin21, _super);
		function homeUISkin$Skin21() {
			_super.call(this);
			this.skinParts = [];
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","mbtn_BgFc_png")
					])
			];
		}
		var _proto = homeUISkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "mbtn_Bg_png";
			t.x = 4;
			t.y = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.text = "江湖";
			t.x = 30;
			t.y = 20;
			return t;
		};
		return homeUISkin$Skin21;
	})(eui.Skin);

	function homeUISkin() {
		_super.call(this);
		this.skinParts = ["groupHeader","listFunction","scrFunction","listWork","scrWork","guaji","imgBg","list_console","scrConsole","mbtnProfile","mbtnHeros","mbtnGoods","mbtnAbout"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.groupHeader_i(),this.guaji_i(),this.imgBg_i(),this._Rect4_i(),this.scrConsole_i(),this._Rect5_i(),this.mbtnProfile_i(),this.mbtnHeros_i(),this.mbtnGoods_i(),this.mbtnAbout_i()];
	}
	var _proto = homeUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xb7ab91;
		t.percentHeight = 100;
		t.strokeWeight = 5;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupHeader_i = function () {
		var t = new eui.Group();
		this.groupHeader = t;
		t.height = 104;
		t.visible = false;
		t.width = 478;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.guaji_i = function () {
		var t = new eui.Group();
		this.guaji = t;
		t.anchorOffsetY = 0;
		t.height = 554;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this._Rect2_i(),this.scrFunction_i(),this._Rect3_i(),this.scrWork_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xb28b8b;
		t.height = 109;
		t.horizontalCenter = 0;
		t.percentWidth = 96;
		t.y = 0;
		return t;
	};
	_proto.scrFunction_i = function () {
		var t = new eui.Scroller();
		this.scrFunction = t;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 0;
		t.viewport = this.listFunction_i();
		return t;
	};
	_proto.listFunction_i = function () {
		var t = new eui.List();
		this.listFunction = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x755b5b;
		t.height = 403;
		t.horizontalCenter = 0;
		t.percentWidth = 96;
		t.y = 108;
		return t;
	};
	_proto.scrWork_i = function () {
		var t = new eui.Scroller();
		this.scrWork = t;
		t.anchorOffsetY = 0;
		t.height = 404;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 107;
		t.viewport = this.listWork_i();
		return t;
	};
	_proto.listWork_i = function () {
		var t = new eui.List();
		this.listWork = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = -2;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.percentHeight = 100;
		t.source = "loading_jpg";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x2b2a28;
		t.height = 228;
		t.horizontalCenter = 0;
		t.strokeColor = 0x000000;
		t.strokeWeight = 10;
		t.percentWidth = 96;
		t.y = 516;
		return t;
	};
	_proto.scrConsole_i = function () {
		var t = new eui.Scroller();
		this.scrConsole = t;
		t.anchorOffsetY = 0;
		t.height = 201;
		t.horizontalCenter = 0;
		t.percentWidth = 92;
		t.y = 527;
		t.viewport = this.list_console_i();
		return t;
	};
	_proto.list_console_i = function () {
		var t = new eui.List();
		this.list_console = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -16;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x696d6d;
		t.height = 51;
		t.horizontalCenter = 0;
		t.percentWidth = 96;
		t.y = 750;
		return t;
	};
	_proto.mbtnProfile_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnProfile = t;
		t.height = 50;
		t.name = "玩家";
		t.x = 15;
		t.y = 745;
		t.skinName = homeUISkin$Skin18;
		return t;
	};
	_proto.mbtnHeros_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnHeros = t;
		t.height = 50;
		t.name = "英雄表";
		t.x = 129;
		t.y = 745;
		t.skinName = homeUISkin$Skin19;
		return t;
	};
	_proto.mbtnGoods_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnGoods = t;
		t.height = 50;
		t.name = "物品表";
		t.x = 242;
		t.y = 745;
		t.skinName = homeUISkin$Skin20;
		return t;
	};
	_proto.mbtnAbout_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnAbout = t;
		t.height = 50;
		t.name = "关于";
		t.x = 355;
		t.y = 745;
		t.skinName = homeUISkin$Skin21;
		return t;
	};
	return homeUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/InputCommonSkin.exml'] = window.InputCommonSkin = (function (_super) {
	__extends(InputCommonSkin, _super);
	function InputCommonSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = InputCommonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xbfa0a0;
		t.percentHeight = 100;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return InputCommonSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/itemLargeMap.exml'] = window.itemLargeMap = (function (_super) {
	__extends(itemLargeMap, _super);
	function itemLargeMap() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 110;
		this.width = 110;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = itemLargeMap.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 32;
		t.fillColor = 0xad8585;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0xd10c0c;
		t.strokeWeight = 3;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 13;
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return itemLargeMap;
})(eui.Skin);generateEUI.paths['resource/custom_skins/itemListAction.exml'] = window.herosListIRSkin = (function (_super) {
	__extends(herosListIRSkin, _super);
	function herosListIRSkin() {
		_super.call(this);
		this.skinParts = ["rectAction","maskAction"];
		
		this.height = 36;
		this.width = 84.4;
		this.elementsContent = [this.rectAction_i(),this.maskAction_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"textFlow");
	}
	var _proto = herosListIRSkin.prototype;

	_proto.rectAction_i = function () {
		var t = new eui.Rect();
		this.rectAction = t;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 0;
		t.ellipseWidth = 9;
		t.fillColor = 0xad4c4c;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeAlpha = 0;
		t.strokeColor = 0x040f06;
		t.strokeWeight = 2;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.maskAction_i = function () {
		var t = new eui.Rect();
		this.maskAction = t;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 0;
		t.ellipseWidth = 9;
		t.fillColor = 0x472a2a;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeAlpha = 0;
		t.strokeColor = 0x040F06;
		t.strokeWeight = 1;
		t.top = 0;
		t.width = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 20;
		t.textAlign = "left";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return herosListIRSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/itemSmallMap.exml'] = window.itemSmallMap = (function (_super) {
	__extends(itemSmallMap, _super);
	function itemSmallMap() {
		_super.call(this);
		this.skinParts = ["label"];
		
		this.height = 46;
		this.width = 56;
		this.elementsContent = [this._Rect1_i(),this.label_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this.label,"textFlow");
	}
	var _proto = itemSmallMap.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 32;
		t.fillColor = 0xad8585;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0xd10c0c;
		t.strokeWeight = 3;
		t.top = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 13;
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return itemSmallMap;
})(eui.Skin);generateEUI.paths['resource/custom_skins/listItem.exml'] = window.listItem = (function (_super) {
	__extends(listItem, _super);
	function listItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 38;
		this.width = 220;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = listItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x423131;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bottom = 0;
		t.fontFamily = "微软雅黑";
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return listItem;
})(eui.Skin);generateEUI.paths['resource/custom_skins/login.exml'] = window.login = (function (_super) {
	__extends(login, _super);
	function login() {
		_super.call(this);
		this.skinParts = ["username","password","btnClose"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.username_i(),this.password_i(),this.btnClose_i()];
	}
	var _proto = login.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.TextInput();
		this.username = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.maxChars = 12;
		t.prompt = "账号：小于12位字母或数字";
		t.restrict = "0-9a-zA-Z";
		t.skinName = "InputCommonSkin";
		t.text = "";
		t.width = 376;
		t.x = 56;
		t.y = 355;
		return t;
	};
	_proto.password_i = function () {
		var t = new eui.TextInput();
		this.password = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 45;
		t.maxChars = 12;
		t.prompt = "密码：6-12位字母或数字";
		t.restrict = "0-9a-zA-Z";
		t.skinName = "InputCommonSkin";
		t.text = "";
		t.width = 376;
		t.x = 56;
		t.y = 437;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 0;
		t.label = "登录";
		t.skinName = "buttonCommonSkin";
		t.verticalCenter = 161;
		return t;
	};
	return login;
})(eui.Skin);generateEUI.paths['resource/custom_skins/mapUISkin.exml'] = window.mapUISkin = (function (_super) {
	__extends(mapUISkin, _super);
	var mapUISkin$Skin22 = 	(function (_super) {
		__extends(mapUISkin$Skin22, _super);
		function mapUISkin$Skin22() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = mapUISkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return mapUISkin$Skin22;
	})(eui.Skin);

	function mapUISkin() {
		_super.call(this);
		this.skinParts = ["btnClose","groupMapSmall","scrMapSmall","groupMapLarge","scrMapLarge","stack","tabAction"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.btnClose_i(),this.stack_i(),this.tabAction_i()];
	}
	var _proto = mapUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 221.5;
		t.verticalCenter = -381;
		t.skinName = mapUISkin$Skin22;
		return t;
	};
	_proto.stack_i = function () {
		var t = new eui.ViewStack();
		this.stack = t;
		t.anchorOffsetX = 0;
		t.height = 619;
		t.width = 473.12;
		t.x = 4;
		t.y = 91;
		t.elementsContent = [this.scrMapSmall_i(),this.scrMapLarge_i()];
		return t;
	};
	_proto.scrMapSmall_i = function () {
		var t = new eui.Scroller();
		this.scrMapSmall = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.groupMapSmall_i();
		return t;
	};
	_proto.groupMapSmall_i = function () {
		var t = new eui.Group();
		this.groupMapSmall = t;
		return t;
	};
	_proto.scrMapLarge_i = function () {
		var t = new eui.Scroller();
		this.scrMapLarge = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.groupMapLarge_i();
		return t;
	};
	_proto.groupMapLarge_i = function () {
		var t = new eui.Group();
		this.groupMapLarge = t;
		return t;
	};
	_proto.tabAction_i = function () {
		var t = new eui.TabBar();
		this.tabAction = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.91;
		t.width = 473.94;
		t.x = 2.06;
		t.y = 709.09;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return mapUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/move.exml'] = window.move = (function (_super) {
	__extends(move, _super);
	function move() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 38;
		this.width = 74;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = move.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4f4b3e;
		t.percentHeight = 100;
		t.strokeColor = 0xa02b2b;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 100;
		t.left = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFF00;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	return move;
})(eui.Skin);generateEUI.paths['resource/custom_skins/MyInfoSkin.exml'] = window.MyInfoSkin = (function (_super) {
	__extends(MyInfoSkin, _super);
	var MyInfoSkin$Skin23 = 	(function (_super) {
		__extends(MyInfoSkin$Skin23, _super);
		function MyInfoSkin$Skin23() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = MyInfoSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return MyInfoSkin$Skin23;
	})(eui.Skin);

	function MyInfoSkin() {
		_super.call(this);
		this.skinParts = ["btnClose"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.btnClose_i()];
	}
	var _proto = MyInfoSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 221.5;
		t.verticalCenter = -381;
		t.skinName = MyInfoSkin$Skin23;
		return t;
	};
	return MyInfoSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/NewsUISkin.exml'] = window.NewsUISkin = (function (_super) {
	__extends(NewsUISkin, _super);
	var NewsUISkin$Skin24 = 	(function (_super) {
		__extends(NewsUISkin$Skin24, _super);
		function NewsUISkin$Skin24() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = NewsUISkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return NewsUISkin$Skin24;
	})(eui.Skin);

	function NewsUISkin() {
		_super.call(this);
		this.skinParts = ["listTalkAll","scrTalkAll","listTalkOne","scrTalkOne","stackBox","listTalkCha","groupTalkCha","inputTalk","btnSend","groupTalkSend","tabBox","btnReturn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.stackBox_i(),this.groupTalkCha_i(),this.groupTalkSend_i(),this.tabBox_i(),this.btnReturn_i()];
	}
	var _proto = NewsUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x897d60;
		t.height = 528;
		t.strokeColor = 0x0c0808;
		t.strokeWeight = 10;
		t.percentWidth = 100;
		t.y = 108;
		return t;
	};
	_proto.stackBox_i = function () {
		var t = new eui.ViewStack();
		this.stackBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 510;
		t.horizontalCenter = 0;
		t.percentWidth = 97;
		t.y = 122;
		t.elementsContent = [this.scrTalkAll_i(),this.scrTalkOne_i()];
		return t;
	};
	_proto.scrTalkAll_i = function () {
		var t = new eui.Scroller();
		this.scrTalkAll = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.viewport = this.listTalkAll_i();
		return t;
	};
	_proto.listTalkAll_i = function () {
		var t = new eui.List();
		this.listTalkAll = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.scrTalkOne_i = function () {
		var t = new eui.Scroller();
		this.scrTalkOne = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.viewport = this.listTalkOne_i();
		return t;
	};
	_proto.listTalkOne_i = function () {
		var t = new eui.List();
		this.listTalkOne = t;
		return t;
	};
	_proto.groupTalkCha_i = function () {
		var t = new eui.Group();
		this.groupTalkCha = t;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 659;
		t.elementsContent = [this._Label1_i(),this._Rect3_i(),this.listTalkCha_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 17;
		t.text = "请先选择要私聊的人...";
		t.x = 15;
		t.y = -22;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x261d09;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.strokeColor = 0x0C0808;
		t.strokeWeight = 5;
		t.percentWidth = 96;
		t.y = 0;
		return t;
	};
	_proto.listTalkCha_i = function () {
		var t = new eui.List();
		this.listTalkCha = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.percentWidth = 94;
		t.y = 4;
		return t;
	};
	_proto.groupTalkSend_i = function () {
		var t = new eui.Group();
		this.groupTalkSend = t;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 738;
		t.elementsContent = [this.inputTalk_i(),this.btnSend_i()];
		return t;
	};
	_proto.inputTalk_i = function () {
		var t = new eui.TextInput();
		this.inputTalk = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.maxChars = 20;
		t.prompt = "输入聊天内容(最多20字)";
		t.text = "";
		t.width = 360;
		t.x = 8;
		t.y = 0;
		return t;
	};
	_proto.btnSend_i = function () {
		var t = new eui.Button();
		this.btnSend = t;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "发送";
		t.x = 374;
		t.y = 0;
		return t;
	};
	_proto.tabBox_i = function () {
		var t = new eui.TabBar();
		this.tabBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 95;
		t.y = 45;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.label = "返回";
		t.x = 439;
		t.y = 1;
		t.skinName = NewsUISkin$Skin24;
		return t;
	};
	return NewsUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/operateSkin.exml'] = window.operateSkin = (function (_super) {
	__extends(operateSkin, _super);
	function operateSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 68;
		this.width = 116;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = operateSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x4c2828;
		t.percentHeight = 100;
		t.strokeColor = 0xbf7878;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bottom = 0;
		t.fontFamily = "微软雅黑";
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFF00;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return operateSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/profileAttr.exml'] = window.herosListIRSkin = (function (_super) {
	__extends(herosListIRSkin, _super);
	function herosListIRSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 42;
		this.width = 132;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = herosListIRSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xb58f8f;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 20;
		t.textColor = 0x606037;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 91;
		return t;
	};
	return herosListIRSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/profileUISkin.exml'] = window.profileUISkin = (function (_super) {
	__extends(profileUISkin, _super);
	var profileUISkin$Skin25 = 	(function (_super) {
		__extends(profileUISkin$Skin25, _super);
		function profileUISkin$Skin25() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = profileUISkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return profileUISkin$Skin25;
	})(eui.Skin);

	function profileUISkin() {
		_super.call(this);
		this.skinParts = ["listAttr","scrAttr","listBuff","scrBuff","groupAttr","labelNeigong","btnTupo","btnNeixiu","groupNeigong","listEquipAttr","scrEquipAttr","listEquip","scrEquip","groupEquip","listSkillAttr","scrSkillAttr","groupSkill","stackBox","tabBox","btnReturn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.stackBox_i(),this.tabBox_i(),this.btnReturn_i()];
	}
	var _proto = profileUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x7f5757;
		t.height = 429;
		t.horizontalCenter = 0;
		t.percentWidth = 96;
		t.y = 110;
		return t;
	};
	_proto.stackBox_i = function () {
		var t = new eui.ViewStack();
		this.stackBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.selectedIndex = 1;
		t.percentWidth = 95;
		t.y = 240;
		t.elementsContent = [this.groupAttr_i(),this.groupNeigong_i(),this.groupEquip_i(),this.groupSkill_i()];
		return t;
	};
	_proto.groupAttr_i = function () {
		var t = new eui.Group();
		this.groupAttr = t;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.elementsContent = [this._Rect2_i(),this.scrAttr_i(),this.scrBuff_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x542f2f;
		t.height = 75;
		t.horizontalCenter = 0;
		t.strokeColor = 0x2d0a0a;
		t.strokeWeight = 9;
		t.percentWidth = 100;
		t.y = 199;
		return t;
	};
	_proto.scrAttr_i = function () {
		var t = new eui.Scroller();
		this.scrAttr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 193.67;
		t.horizontalCenter = 0;
		t.percentWidth = 99;
		t.y = 0;
		t.viewport = this.listAttr_i();
		return t;
	};
	_proto.listAttr_i = function () {
		var t = new eui.List();
		this.listAttr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.scrBuff_i = function () {
		var t = new eui.Scroller();
		this.scrBuff = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 209;
		t.viewport = this.listBuff_i();
		return t;
	};
	_proto.listBuff_i = function () {
		var t = new eui.List();
		this.listBuff = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.groupNeigong_i = function () {
		var t = new eui.Group();
		this.groupNeigong = t;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.elementsContent = [this.labelNeigong_i(),this.btnTupo_i(),this.btnNeixiu_i()];
		return t;
	};
	_proto.labelNeigong_i = function () {
		var t = new eui.Label();
		this.labelNeigong = t;
		t.text = "内功名字";
		return t;
	};
	_proto.btnTupo_i = function () {
		var t = new eui.Button();
		this.btnTupo = t;
		t.anchorOffsetX = 0;
		t.label = "突破";
		t.skinName = "buttonCommonSkin";
		t.width = 126;
		t.x = 306;
		t.y = 0;
		return t;
	};
	_proto.btnNeixiu_i = function () {
		var t = new eui.Button();
		this.btnNeixiu = t;
		t.anchorOffsetX = 0;
		t.label = "内修";
		t.skinName = "buttonCommonSkin";
		t.width = 126;
		t.x = 306;
		t.y = 70;
		return t;
	};
	_proto.groupEquip_i = function () {
		var t = new eui.Group();
		this.groupEquip = t;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.elementsContent = [this._Rect3_i(),this.scrEquipAttr_i(),this.scrEquip_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x542f2f;
		t.height = 75;
		t.horizontalCenter = 0;
		t.strokeColor = 0x2d0a0a;
		t.strokeWeight = 9;
		t.percentWidth = 100;
		t.y = 199;
		return t;
	};
	_proto.scrEquipAttr_i = function () {
		var t = new eui.Scroller();
		this.scrEquipAttr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 193.67;
		t.horizontalCenter = 0;
		t.percentWidth = 99;
		t.y = 0;
		t.viewport = this.listEquipAttr_i();
		return t;
	};
	_proto.listEquipAttr_i = function () {
		var t = new eui.List();
		this.listEquipAttr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.scrEquip_i = function () {
		var t = new eui.Scroller();
		this.scrEquip = t;
		t.height = 54;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 209;
		t.viewport = this.listEquip_i();
		return t;
	};
	_proto.listEquip_i = function () {
		var t = new eui.List();
		this.listEquip = t;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.groupSkill_i = function () {
		var t = new eui.Group();
		this.groupSkill = t;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.percentWidth = 100;
		t.elementsContent = [this.scrSkillAttr_i()];
		return t;
	};
	_proto.scrSkillAttr_i = function () {
		var t = new eui.Scroller();
		this.scrSkillAttr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 307;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.x = 0;
		t.y = 0;
		t.viewport = this.listSkillAttr_i();
		return t;
	};
	_proto.listSkillAttr_i = function () {
		var t = new eui.List();
		this.listSkillAttr = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = 0;
		t.layout = this._VerticalLayout3_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.tabBox_i = function () {
		var t = new eui.TabBar();
		this.tabBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 95;
		t.y = 145;
		t.layout = this._HorizontalLayout3_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.label = "返回";
		t.x = 439;
		t.y = 110;
		t.skinName = profileUISkin$Skin25;
		return t;
	};
	return profileUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/room.exml'] = window.room = (function (_super) {
	__extends(room, _super);
	function room() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 32;
		this.width = 120;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.border"],[0],this._Rect1,"strokeColor");
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = room.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x7f7968;
		t.percentHeight = 100;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 100;
		t.left = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFF00;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	return room;
})(eui.Skin);generateEUI.paths['resource/custom_skins/showChaUISkin.exml'] = window.showChaUISkin = (function (_super) {
	__extends(showChaUISkin, _super);
	var showChaUISkin$Skin26 = 	(function (_super) {
		__extends(showChaUISkin$Skin26, _super);
		function showChaUISkin$Skin26() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = showChaUISkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return showChaUISkin$Skin26;
	})(eui.Skin);

	function showChaUISkin() {
		_super.call(this);
		this.skinParts = ["labTitle","btnClose","labContent","listOperate","scrOperate"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labTitle_i(),this.btnClose_i(),this.labContent_i(),this.scrOperate_i()];
	}
	var _proto = showChaUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x9b7474;
		t.height = 438;
		t.horizontalCenter = 0.5;
		t.strokeColor = 0x605353;
		t.strokeWeight = 3;
		t.percentWidth = 84;
		t.y = 84;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 30;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0;
		t.text = "标题";
		t.textAlign = "center";
		t.width = 120;
		t.x = 177;
		t.y = 96;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 175.5;
		t.y = 92;
		t.skinName = showChaUISkin$Skin26;
		return t;
	};
	_proto.labContent_i = function () {
		var t = new eui.Label();
		this.labContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 164;
		t.horizontalCenter = -2.5;
		t.multiline = true;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0;
		t.text = "内容";
		t.textAlign = "left";
		t.verticalAlign = "justify";
		t.width = 275;
		t.y = 159;
		return t;
	};
	_proto.scrOperate_i = function () {
		var t = new eui.Scroller();
		this.scrOperate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.horizontalCenter = 0;
		t.percentWidth = 75;
		t.y = 355;
		t.viewport = this.listOperate_i();
		return t;
	};
	_proto.listOperate_i = function () {
		var t = new eui.List();
		this.listOperate = t;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return showChaUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/showOKUISkin.exml'] = window.showOKUISkin = (function (_super) {
	__extends(showOKUISkin, _super);
	var showOKUISkin$Skin27 = 	(function (_super) {
		__extends(showOKUISkin$Skin27, _super);
		function showOKUISkin$Skin27() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = showOKUISkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return showOKUISkin$Skin27;
	})(eui.Skin);

	function showOKUISkin() {
		_super.call(this);
		this.skinParts = ["labTitle","labContent","btnClose","btnOK","btnReturn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labTitle_i(),this.labContent_i(),this.btnClose_i(),this.btnOK_i(),this.btnReturn_i()];
	}
	var _proto = showOKUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x9b7474;
		t.height = 288;
		t.strokeColor = 0x605353;
		t.strokeWeight = 3;
		t.width = 384;
		t.x = 45;
		t.y = 179;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.fontFamily = "微软雅黑";
		t.height = 30;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0;
		t.text = "标题";
		t.textAlign = "center";
		t.width = 120;
		t.x = 180;
		t.y = 198;
		return t;
	};
	_proto.labContent_i = function () {
		var t = new eui.Label();
		this.labContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 110;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "内容 ";
		t.textAlign = "center";
		t.width = 300;
		t.x = 92;
		t.y = 278;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 170.5;
		t.verticalCenter = -202;
		t.skinName = showOKUISkin$Skin27;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.label = "确认";
		t.x = 92;
		t.y = 400;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.label = "取消";
		t.x = 292;
		t.y = 400;
		return t;
	};
	return showOKUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/showOperateUISkin.exml'] = window.showOperateUISkin = (function (_super) {
	__extends(showOperateUISkin, _super);
	var showOperateUISkin$Skin28 = 	(function (_super) {
		__extends(showOperateUISkin$Skin28, _super);
		function showOperateUISkin$Skin28() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = showOperateUISkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return showOperateUISkin$Skin28;
	})(eui.Skin);

	function showOperateUISkin() {
		_super.call(this);
		this.skinParts = ["labTitle","list","scrList","listButton","scrListButton","btnClose"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labTitle_i(),this.scrList_i(),this.scrListButton_i(),this.btnClose_i()];
	}
	var _proto = showOperateUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.fontFamily = "微软雅黑";
		t.height = 30;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0;
		t.text = "标题";
		t.textAlign = "center";
		t.width = 120;
		t.x = 180;
		t.y = 245;
		return t;
	};
	_proto.scrList_i = function () {
		var t = new eui.Scroller();
		this.scrList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123;
		t.width = 379;
		t.x = 48;
		t.y = 290;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.scrListButton_i = function () {
		var t = new eui.Scroller();
		this.scrListButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.width = 379;
		t.x = 48;
		t.y = 416;
		t.viewport = this.listButton_i();
		return t;
	};
	_proto.listButton_i = function () {
		var t = new eui.List();
		this.listButton = t;
		t.anchorOffsetX = 0;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 173.5;
		t.verticalCenter = -168;
		t.skinName = showOperateUISkin$Skin28;
		return t;
	};
	return showOperateUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/showSelectUISkin.exml'] = window.showUISkin = (function (_super) {
	__extends(showUISkin, _super);
	var showUISkin$Skin29 = 	(function (_super) {
		__extends(showUISkin$Skin29, _super);
		function showUISkin$Skin29() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = showUISkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return showUISkin$Skin29;
	})(eui.Skin);

	function showUISkin() {
		_super.call(this);
		this.skinParts = ["labTitle","list","scrList","btnClose"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labTitle_i(),this.scrList_i(),this.btnClose_i()];
	}
	var _proto = showUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x9b7474;
		t.height = 288;
		t.strokeColor = 0x605353;
		t.strokeWeight = 3;
		t.width = 384;
		t.x = 45;
		t.y = 179;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.fontFamily = "微软雅黑";
		t.height = 30;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0;
		t.text = "标题";
		t.textAlign = "center";
		t.width = 120;
		t.x = 180;
		t.y = 198;
		return t;
	};
	_proto.scrList_i = function () {
		var t = new eui.Scroller();
		this.scrList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 159;
		t.width = 379;
		t.x = 48;
		t.y = 290;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 170.5;
		t.verticalCenter = -202;
		t.skinName = showUISkin$Skin29;
		return t;
	};
	return showUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/showUISkin.exml'] = window.showUISkin = (function (_super) {
	__extends(showUISkin, _super);
	var showUISkin$Skin30 = 	(function (_super) {
		__extends(showUISkin$Skin30, _super);
		function showUISkin$Skin30() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = showUISkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return showUISkin$Skin30;
	})(eui.Skin);

	function showUISkin() {
		_super.call(this);
		this.skinParts = ["labTitle","btnClose","labContent","listOperate","scrOperate"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labTitle_i(),this.btnClose_i(),this.labContent_i(),this.scrOperate_i()];
	}
	var _proto = showUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x9b7474;
		t.height = 288;
		t.strokeColor = 0x605353;
		t.strokeWeight = 3;
		t.width = 384;
		t.x = 45;
		t.y = 179;
		return t;
	};
	_proto.labTitle_i = function () {
		var t = new eui.Label();
		this.labTitle = t;
		t.fontFamily = "微软雅黑";
		t.height = 30;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0;
		t.text = "标题";
		t.textAlign = "center";
		t.width = 120;
		t.x = 177;
		t.y = 179;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 170.5;
		t.y = 176;
		t.skinName = showUISkin$Skin30;
		return t;
	};
	_proto.labContent_i = function () {
		var t = new eui.Label();
		this.labContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 138;
		t.horizontalCenter = -2.5;
		t.multiline = true;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0;
		t.text = "内容";
		t.textAlign = "left";
		t.verticalAlign = "justify";
		t.width = 275;
		t.y = 249;
		return t;
	};
	_proto.scrOperate_i = function () {
		var t = new eui.Scroller();
		this.scrOperate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.width = 374;
		t.x = 48;
		t.y = 394;
		t.viewport = this.listOperate_i();
		return t;
	};
	_proto.listOperate_i = function () {
		var t = new eui.List();
		this.listOperate = t;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return showUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/skillSetUISkin.exml'] = window.skillSetUISkin = (function (_super) {
	__extends(skillSetUISkin, _super);
	var skillSetUISkin$Skin31 = 	(function (_super) {
		__extends(skillSetUISkin$Skin31, _super);
		function skillSetUISkin$Skin31() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = skillSetUISkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return skillSetUISkin$Skin31;
	})(eui.Skin);

	function skillSetUISkin() {
		_super.call(this);
		this.skinParts = ["btnClose","listYouAll","scrYouAll","listMeAll","scrMeAll","groupAll","listYouEquip","scrYouEquip","listMeEquip","scrMeEquip","groupEquip","listYouMoney","listMeMoney","groupMoney","stack","tab"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.btnClose_i(),this.stack_i(),this.tab_i()];
	}
	var _proto = skillSetUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 221.5;
		t.verticalCenter = -381;
		t.skinName = skillSetUISkin$Skin31;
		return t;
	};
	_proto.stack_i = function () {
		var t = new eui.ViewStack();
		this.stack = t;
		t.anchorOffsetX = 0;
		t.height = 619;
		t.width = 473.12;
		t.x = 4;
		t.y = 91;
		t.elementsContent = [this.groupAll_i(),this.groupEquip_i(),this.groupMoney_i()];
		return t;
	};
	_proto.groupAll_i = function () {
		var t = new eui.Group();
		this.groupAll = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i(),this.scrYouAll_i(),this._Label2_i(),this.scrMeAll_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto.scrYouAll_i = function () {
		var t = new eui.Scroller();
		this.scrYouAll = t;
		t.anchorOffsetY = 0;
		t.height = 262;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 48;
		t.viewport = this.listYouAll_i();
		return t;
	};
	_proto.listYouAll_i = function () {
		var t = new eui.List();
		this.listYouAll = t;
		t.anchorOffsetY = 0;
		t.height = 270;
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto.scrMeAll_i = function () {
		var t = new eui.Scroller();
		this.scrMeAll = t;
		t.anchorOffsetY = 0;
		t.height = 246;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 364;
		t.viewport = this.listMeAll_i();
		return t;
	};
	_proto.listMeAll_i = function () {
		var t = new eui.List();
		this.listMeAll = t;
		return t;
	};
	_proto.groupEquip_i = function () {
		var t = new eui.Group();
		this.groupEquip = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i(),this.scrYouEquip_i(),this._Label4_i(),this.scrMeEquip_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto.scrYouEquip_i = function () {
		var t = new eui.Scroller();
		this.scrYouEquip = t;
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.viewport = this.listYouEquip_i();
		return t;
	};
	_proto.listYouEquip_i = function () {
		var t = new eui.List();
		this.listYouEquip = t;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto.scrMeEquip_i = function () {
		var t = new eui.Scroller();
		this.scrMeEquip = t;
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.y = 300;
		t.viewport = this.listMeEquip_i();
		return t;
	};
	_proto.listMeEquip_i = function () {
		var t = new eui.List();
		this.listMeEquip = t;
		return t;
	};
	_proto.groupMoney_i = function () {
		var t = new eui.Group();
		this.groupMoney = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label5_i(),this._Scroller1_i(),this._Label6_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.viewport = this.listYouMoney_i();
		return t;
	};
	_proto.listYouMoney_i = function () {
		var t = new eui.List();
		this.listYouMoney = t;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.y = 300;
		t.viewport = this.listMeMoney_i();
		return t;
	};
	_proto.listMeMoney_i = function () {
		var t = new eui.List();
		this.listMeMoney = t;
		return t;
	};
	_proto.tab_i = function () {
		var t = new eui.TabBar();
		this.tab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.91;
		t.width = 473.94;
		t.x = 2.06;
		t.y = 709.09;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return skillSetUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/skillUISkin.exml'] = window.skillUISkin = (function (_super) {
	__extends(skillUISkin, _super);
	var skillUISkin$Skin32 = 	(function (_super) {
		__extends(skillUISkin$Skin32, _super);
		var skillUISkin$Skin32$Skin33 = 		(function (_super) {
			__extends(skillUISkin$Skin32$Skin33, _super);
			function skillUISkin$Skin32$Skin33() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = skillUISkin$Skin32$Skin33.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return skillUISkin$Skin32$Skin33;
		})(eui.Skin);

		function skillUISkin$Skin32() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = skillUISkin$Skin32.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = skillUISkin$Skin32$Skin33;
			return t;
		};
		return skillUISkin$Skin32;
	})(eui.Skin);

	var skillUISkin$Skin34 = 	(function (_super) {
		__extends(skillUISkin$Skin34, _super);
		var skillUISkin$Skin34$Skin35 = 		(function (_super) {
			__extends(skillUISkin$Skin34$Skin35, _super);
			function skillUISkin$Skin34$Skin35() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = skillUISkin$Skin34$Skin35.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return skillUISkin$Skin34$Skin35;
		})(eui.Skin);

		function skillUISkin$Skin34() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = skillUISkin$Skin34.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = skillUISkin$Skin34$Skin35;
			return t;
		};
		return skillUISkin$Skin34;
	})(eui.Skin);

	var skillUISkin$Skin36 = 	(function (_super) {
		__extends(skillUISkin$Skin36, _super);
		var skillUISkin$Skin36$Skin37 = 		(function (_super) {
			__extends(skillUISkin$Skin36$Skin37, _super);
			function skillUISkin$Skin36$Skin37() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = skillUISkin$Skin36$Skin37.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return skillUISkin$Skin36$Skin37;
		})(eui.Skin);

		function skillUISkin$Skin36() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = skillUISkin$Skin36.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = skillUISkin$Skin36$Skin37;
			return t;
		};
		return skillUISkin$Skin36;
	})(eui.Skin);

	var skillUISkin$Skin38 = 	(function (_super) {
		__extends(skillUISkin$Skin38, _super);
		var skillUISkin$Skin38$Skin39 = 		(function (_super) {
			__extends(skillUISkin$Skin38$Skin39, _super);
			function skillUISkin$Skin38$Skin39() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = skillUISkin$Skin38$Skin39.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar02_png";
				t.width = 8;
				return t;
			};
			return skillUISkin$Skin38$Skin39;
		})(eui.Skin);

		function skillUISkin$Skin38() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = skillUISkin$Skin38.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = skillUISkin$Skin38$Skin39;
			return t;
		};
		return skillUISkin$Skin38;
	})(eui.Skin);

	var skillUISkin$Skin40 = 	(function (_super) {
		__extends(skillUISkin$Skin40, _super);
		function skillUISkin$Skin40() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = skillUISkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return skillUISkin$Skin40;
	})(eui.Skin);

	function skillUISkin() {
		_super.call(this);
		this.skinParts = ["listSkill","scrListSkill","listSkill2","scrListSkill2","listSkill3","scrListSkill3","listSkill4","scrListSkill4","stackBox","tabBox","btnReturn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.stackBox_i(),this.tabBox_i(),this.btnReturn_i()];
	}
	var _proto = skillUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x5b4a4a;
		t.height = 505;
		t.horizontalCenter = 0;
		t.percentWidth = 96;
		t.y = 110;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x7c6868;
		t.height = 410;
		t.horizontalCenter = 0;
		t.strokeWeight = 8;
		t.percentWidth = 96;
		t.y = 219;
		return t;
	};
	_proto.stackBox_i = function () {
		var t = new eui.ViewStack();
		this.stackBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 394;
		t.horizontalCenter = 0;
		t.selectedIndex = 1;
		t.percentWidth = 95;
		t.y = 226;
		t.elementsContent = [this.scrListSkill_i(),this.scrListSkill2_i(),this.scrListSkill3_i(),this.scrListSkill4_i()];
		return t;
	};
	_proto.scrListSkill_i = function () {
		var t = new eui.Scroller();
		this.scrListSkill = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 0;
		t.viewport = this.listSkill_i();
		t.skinName = skillUISkin$Skin32;
		return t;
	};
	_proto.listSkill_i = function () {
		var t = new eui.List();
		this.listSkill = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.scrListSkill2_i = function () {
		var t = new eui.Scroller();
		this.scrListSkill2 = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 0;
		t.viewport = this.listSkill2_i();
		t.skinName = skillUISkin$Skin34;
		return t;
	};
	_proto.listSkill2_i = function () {
		var t = new eui.List();
		this.listSkill2 = t;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.scrListSkill3_i = function () {
		var t = new eui.Scroller();
		this.scrListSkill3 = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 0;
		t.viewport = this.listSkill3_i();
		t.skinName = skillUISkin$Skin36;
		return t;
	};
	_proto.listSkill3_i = function () {
		var t = new eui.List();
		this.listSkill3 = t;
		t.layout = this._VerticalLayout3_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.scrListSkill4_i = function () {
		var t = new eui.Scroller();
		this.scrListSkill4 = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 0;
		t.viewport = this.listSkill4_i();
		t.skinName = skillUISkin$Skin38;
		return t;
	};
	_proto.listSkill4_i = function () {
		var t = new eui.List();
		this.listSkill4 = t;
		t.layout = this._VerticalLayout4_i();
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.tabBox_i = function () {
		var t = new eui.TabBar();
		this.tabBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 95;
		t.y = 145;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.label = "返回";
		t.x = 439;
		t.y = 110;
		t.skinName = skillUISkin$Skin40;
		return t;
	};
	return skillUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/tabButton.exml'] = window.tabButton = (function (_super) {
	__extends(tabButton, _super);
	function tabButton() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 50;
		this.width = 110;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Label1","textColor",0x666666)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Label1","textColor",0xFFFFFF)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text");
	}
	var _proto = tabButton.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x5b4a4a;
		t.percentHeight = 100;
		t.strokeColor = 0x3a1818;
		t.strokeWeight = 5;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	return tabButton;
})(eui.Skin);generateEUI.paths['resource/custom_skins/TalkListCenterSkin.exml'] = window.herosListIRSkin = (function (_super) {
	__extends(herosListIRSkin, _super);
	function herosListIRSkin() {
		_super.call(this);
		this.skinParts = ["rectAction"];
		
		this.height = 90;
		this.width = 90;
		this.elementsContent = [this.rectAction_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = herosListIRSkin.prototype;

	_proto.rectAction_i = function () {
		var t = new eui.Rect();
		this.rectAction = t;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 0;
		t.ellipseWidth = 57;
		t.fillColor = 0x3f3434;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeAlpha = 0;
		t.strokeColor = 0x040f06;
		t.strokeWeight = 4;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return herosListIRSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/TalkListLeftSkin.exml'] = window.TalkListLeftSkin = (function (_super) {
	__extends(TalkListLeftSkin, _super);
	function TalkListLeftSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 60;
		this.elementsContent = [this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = TalkListLeftSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.percentHeight = 100;
		t.left = 0;
		t.size = 20;
		t.textAlign = "left";
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	return TalkListLeftSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/TalkListRightSkin.exml'] = window.herosListIRSkin = (function (_super) {
	__extends(herosListIRSkin, _super);
	function herosListIRSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 60;
		this.elementsContent = [this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = herosListIRSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.bottom = 0;
		t.right = 0;
		t.size = 20;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return herosListIRSkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/talkOne.exml'] = window.talkOne = (function (_super) {
	__extends(talkOne, _super);
	function talkOne() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 38;
		this.width = 116;
		this.elementsContent = [this._Rect1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Label1","textColor",0x666666)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Label1","textColor",0xFFFFFF)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
	}
	var _proto = talkOne.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa56161;
		t.percentHeight = 100;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "微软雅黑";
		t.horizontalCenter = 0;
		t.size = 20;
		t.textColor = 0xFFFF00;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return talkOne;
})(eui.Skin);generateEUI.paths['resource/custom_skins/talkUISkin.exml'] = window.talkUISkin = (function (_super) {
	__extends(talkUISkin, _super);
	var talkUISkin$Skin41 = 	(function (_super) {
		__extends(talkUISkin$Skin41, _super);
		function talkUISkin$Skin41() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = talkUISkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return talkUISkin$Skin41;
	})(eui.Skin);

	function talkUISkin() {
		_super.call(this);
		this.skinParts = ["btnClose","CDOur","listOur","scrListOur","listActionConsole","scrListActionConsole","listEnemy","scrListEnemy","CDEnemy","btnAttack","btnDefense","btnDodge","fightGroup","listAction","scrListAction","stackAction","tabAction"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this.btnClose_i(),this.CDOur_i(),this.scrListOur_i(),this.scrListActionConsole_i(),this.scrListEnemy_i(),this.CDEnemy_i(),this.stackAction_i(),this.tabAction_i()];
	}
	var _proto = talkUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa08080;
		t.height = 107;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 39;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x332424;
		t.height = 342;
		t.strokeColor = 0xb2a88b;
		t.strokeWeight = 7;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 150;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0xa08080;
		t.height = 110;
		t.strokeWeight = 3;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 498;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillColor = 0x564141;
		t.height = 194;
		t.strokeWeight = 15;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 606;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 221.5;
		t.verticalCenter = -381;
		t.skinName = talkUISkin$Skin41;
		return t;
	};
	_proto.CDOur_i = function () {
		var t = new eui.ProgressBar();
		this.CDOur = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3.37;
		t.maximum = 0;
		t.minimum = 0;
		t.rotation = 0.28;
		t.value = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 580.14;
		return t;
	};
	_proto.scrListOur_i = function () {
		var t = new eui.Scroller();
		this.scrListOur = t;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 506;
		t.viewport = this.listOur_i();
		return t;
	};
	_proto.listOur_i = function () {
		var t = new eui.List();
		this.listOur = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 6;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.scrListActionConsole_i = function () {
		var t = new eui.Scroller();
		this.scrListActionConsole = t;
		t.anchorOffsetY = 0;
		t.height = 314;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 166;
		t.viewport = this.listActionConsole_i();
		return t;
	};
	_proto.listActionConsole_i = function () {
		var t = new eui.List();
		this.listActionConsole = t;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.x = 0;
		t.y = -2;
		return t;
	};
	_proto.scrListEnemy_i = function () {
		var t = new eui.Scroller();
		this.scrListEnemy = t;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 47;
		t.viewport = this.listEnemy_i();
		return t;
	};
	_proto.listEnemy_i = function () {
		var t = new eui.List();
		this.listEnemy = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.CDEnemy_i = function () {
		var t = new eui.ProgressBar();
		this.CDEnemy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3.37;
		t.maximum = 0;
		t.minimum = 0;
		t.rotation = 0.28;
		t.value = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 119.14;
		return t;
	};
	_proto.stackAction_i = function () {
		var t = new eui.ViewStack();
		this.stackAction = t;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 624;
		t.elementsContent = [this.fightGroup_i(),this.scrListAction_i()];
		return t;
	};
	_proto.fightGroup_i = function () {
		var t = new eui.Group();
		this.fightGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.btnAttack_i(),this.btnDefense_i(),this.btnDodge_i()];
		return t;
	};
	_proto.btnAttack_i = function () {
		var t = new eui.Button();
		this.btnAttack = t;
		t.label = "攻击";
		t.x = 9;
		t.y = 64;
		return t;
	};
	_proto.btnDefense_i = function () {
		var t = new eui.Button();
		this.btnDefense = t;
		t.label = "防御";
		t.x = 133;
		t.y = 64;
		return t;
	};
	_proto.btnDodge_i = function () {
		var t = new eui.Button();
		this.btnDodge = t;
		t.label = "闪避";
		t.x = 260;
		t.y = 64;
		return t;
	};
	_proto.scrListAction_i = function () {
		var t = new eui.Scroller();
		this.scrListAction = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.listAction_i();
		return t;
	};
	_proto.listAction_i = function () {
		var t = new eui.List();
		this.listAction = t;
		return t;
	};
	_proto.tabAction_i = function () {
		var t = new eui.TabBar();
		this.tabAction = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 158;
		t.width = 70;
		t.x = 396;
		t.y = 624;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return talkUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/taskListItem.exml'] = window.taskListItem = (function (_super) {
	__extends(taskListItem, _super);
	function taskListItem() {
		_super.call(this);
		this.skinParts = ["label","btnSubmit","btnGiveUP"];
		
		this.height = 120;
		this.width = 328;
		this.elementsContent = [this._Rect1_i(),this.label_i(),this.btnSubmit_i(),this.btnGiveUP_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this.label,"textFlow");
	}
	var _proto = taskListItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 32;
		t.fillColor = 0xad8585;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0xd10c0c;
		t.strokeWeight = 3;
		t.top = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.size = 13;
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 70;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Button();
		this.btnSubmit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.label = "提交";
		t.right = 0;
		t.skinName = "buttonCommonSkin";
		t.width = 86;
		t.y = 16;
		return t;
	};
	_proto.btnGiveUP_i = function () {
		var t = new eui.Button();
		this.btnGiveUP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.label = "放弃";
		t.right = 0;
		t.skinName = "buttonCommonSkin";
		t.width = 84;
		t.y = 65;
		return t;
	};
	return taskListItem;
})(eui.Skin);generateEUI.paths['resource/custom_skins/taskUISkin.exml'] = window.mapUISkin = (function (_super) {
	__extends(mapUISkin, _super);
	var mapUISkin$Skin42 = 	(function (_super) {
		__extends(mapUISkin$Skin42, _super);
		function mapUISkin$Skin42() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = mapUISkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return mapUISkin$Skin42;
	})(eui.Skin);

	function mapUISkin() {
		_super.call(this);
		this.skinParts = ["btnClose","listTask1","scrTask1","listTask2","scrTask2","listTask3","scrTask3","stack","tabAction"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.btnClose_i(),this.stack_i(),this.tabAction_i()];
	}
	var _proto = mapUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 221.5;
		t.verticalCenter = -381;
		t.skinName = mapUISkin$Skin42;
		return t;
	};
	_proto.stack_i = function () {
		var t = new eui.ViewStack();
		this.stack = t;
		t.anchorOffsetX = 0;
		t.height = 619;
		t.width = 473.12;
		t.x = 4;
		t.y = 91;
		t.elementsContent = [this.scrTask1_i(),this.scrTask2_i(),this.scrTask3_i()];
		return t;
	};
	_proto.scrTask1_i = function () {
		var t = new eui.Scroller();
		this.scrTask1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.listTask1_i();
		return t;
	};
	_proto.listTask1_i = function () {
		var t = new eui.List();
		this.listTask1 = t;
		return t;
	};
	_proto.scrTask2_i = function () {
		var t = new eui.Scroller();
		this.scrTask2 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.listTask2_i();
		return t;
	};
	_proto.listTask2_i = function () {
		var t = new eui.List();
		this.listTask2 = t;
		return t;
	};
	_proto.scrTask3_i = function () {
		var t = new eui.Scroller();
		this.scrTask3 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.viewport = this.listTask3_i();
		return t;
	};
	_proto.listTask3_i = function () {
		var t = new eui.List();
		this.listTask3 = t;
		return t;
	};
	_proto.tabAction_i = function () {
		var t = new eui.TabBar();
		this.tabAction = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.91;
		t.width = 473.94;
		t.x = 2.06;
		t.y = 709.09;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return mapUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/tradingUISkin.exml'] = window.tradingUISkin = (function (_super) {
	__extends(tradingUISkin, _super);
	var tradingUISkin$Skin43 = 	(function (_super) {
		__extends(tradingUISkin$Skin43, _super);
		function tradingUISkin$Skin43() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
			];
		}
		var _proto = tradingUISkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = -1.5;
			t.source = "close_png";
			t.verticalCenter = -1.5;
			t.percentWidth = 90;
			return t;
		};
		return tradingUISkin$Skin43;
	})(eui.Skin);

	function tradingUISkin() {
		_super.call(this);
		this.skinParts = ["btnClose","listYouAll","scrYouAll","listMeAll","scrMeAll","groupAll","listYouEquip","scrYouEquip","listMeEquip","scrMeEquip","groupEquip","listYouMoney","listMeMoney","groupMoney","stack","tab"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.btnClose_i(),this.stack_i(),this.tab_i()];
	}
	var _proto = tradingUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.horizontalCenter = 221.5;
		t.verticalCenter = -381;
		t.skinName = tradingUISkin$Skin43;
		return t;
	};
	_proto.stack_i = function () {
		var t = new eui.ViewStack();
		this.stack = t;
		t.anchorOffsetX = 0;
		t.height = 619;
		t.width = 473.12;
		t.x = 4;
		t.y = 91;
		t.elementsContent = [this.groupAll_i(),this.groupEquip_i(),this.groupMoney_i()];
		return t;
	};
	_proto.groupAll_i = function () {
		var t = new eui.Group();
		this.groupAll = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i(),this.scrYouAll_i(),this._Label2_i(),this.scrMeAll_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto.scrYouAll_i = function () {
		var t = new eui.Scroller();
		this.scrYouAll = t;
		t.anchorOffsetY = 0;
		t.height = 262;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 48;
		t.viewport = this.listYouAll_i();
		return t;
	};
	_proto.listYouAll_i = function () {
		var t = new eui.List();
		this.listYouAll = t;
		t.anchorOffsetY = 0;
		t.height = 270;
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto.scrMeAll_i = function () {
		var t = new eui.Scroller();
		this.scrMeAll = t;
		t.anchorOffsetY = 0;
		t.height = 246;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 364;
		t.viewport = this.listMeAll_i();
		return t;
	};
	_proto.listMeAll_i = function () {
		var t = new eui.List();
		this.listMeAll = t;
		return t;
	};
	_proto.groupEquip_i = function () {
		var t = new eui.Group();
		this.groupEquip = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i(),this.scrYouEquip_i(),this._Label4_i(),this.scrMeEquip_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto.scrYouEquip_i = function () {
		var t = new eui.Scroller();
		this.scrYouEquip = t;
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.viewport = this.listYouEquip_i();
		return t;
	};
	_proto.listYouEquip_i = function () {
		var t = new eui.List();
		this.listYouEquip = t;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto.scrMeEquip_i = function () {
		var t = new eui.Scroller();
		this.scrMeEquip = t;
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.y = 300;
		t.viewport = this.listMeEquip_i();
		return t;
	};
	_proto.listMeEquip_i = function () {
		var t = new eui.List();
		this.listMeEquip = t;
		return t;
	};
	_proto.groupMoney_i = function () {
		var t = new eui.Group();
		this.groupMoney = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label5_i(),this._Scroller1_i(),this._Label6_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "对方";
		t.y = 7;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.viewport = this.listYouMoney_i();
		return t;
	};
	_proto.listYouMoney_i = function () {
		var t = new eui.List();
		this.listYouMoney = t;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "自己";
		t.y = 307;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 50;
		t.percentWidth = 100;
		t.y = 300;
		t.viewport = this.listMeMoney_i();
		return t;
	};
	_proto.listMeMoney_i = function () {
		var t = new eui.List();
		this.listMeMoney = t;
		return t;
	};
	_proto.tab_i = function () {
		var t = new eui.TabBar();
		this.tab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.91;
		t.width = 473.94;
		t.x = 2.06;
		t.y = 709.09;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return tradingUISkin;
})(eui.Skin);generateEUI.paths['resource/custom_skins/workItem.exml'] = window.herosListIRSkin = (function (_super) {
	__extends(herosListIRSkin, _super);
	function herosListIRSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 42;
		this.width = 132;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.flow"],[0],this._Label1,"textFlow");
		eui.Binding.$bindProperties(this, ["hostComponent.data.startTime"],[0],this._Label2,"text");
	}
	var _proto = herosListIRSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x474141;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeColor = 0x000000;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 100;
		t.size = 20;
		t.textAlign = "left";
		t.textColor = 0xb5b5a6;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "微软雅黑";
		t.percentHeight = 100;
		t.size = 20;
		t.textAlign = "right";
		t.textColor = 0xb5b5a6;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = -5;
		return t;
	};
	return herosListIRSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);