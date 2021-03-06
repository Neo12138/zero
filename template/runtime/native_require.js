
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"bin-debug/zero/utils/util.js",
	"bin-debug/zero/scene/Scene.js",
	"bin-debug/zero/utils/Map.js",
	"bin-debug/zero/scene/layer/EUILayer.js",
	"bin-debug/zero/loading/LoadingUI.js",
	"bin-debug/zero/notification/NotificationCenter.js",
	"bin-debug/zero/RPGUtils/Joystick.js",
	"bin-debug/game-deprecated/controller/Controller.js",
	"bin-debug/zero/scene/SceneMgr.js",
	"bin-debug/zero/notification/Controller.js",
	"bin-debug/zero/scene/layer/Layer.js",
	"bin-debug/zero/scene/layer/LayerMgr.js",
	"bin-debug/zero/loading/LoadingMgr.js",
	"bin-debug/zero/utils/System.js",
	"bin-debug/zero/Comfirm.js",
	"bin-debug/game-deprecated/controller/Login.js",
	"bin-debug/game-deprecated/controller/Startup.js",
	"bin-debug/game-deprecated/controller/TestScrollView.js",
	"bin-debug/game-deprecated/scene/Hub.js",
	"bin-debug/game-deprecated/scene/Loading.js",
	"bin-debug/game-deprecated/scene/Login.js",
	"bin-debug/game-deprecated/scene/Startup.js",
	"bin-debug/game-deprecated/scene/TestScrollView.js",
	"bin-debug/game-deprecated/struct/Scenes.js",
	"bin-debug/Main.js",
	"bin-debug/zero/Global.js",
	"bin-debug/zero/effect/Effect.js",
	"bin-debug/zero/loading/ILoadingUI.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/example/constant/global.js",
	"bin-debug/example/hub/main/HubMainController.js",
	"bin-debug/zero/notification/IController.js",
	"bin-debug/zero/notification/Notification.js",
	"bin-debug/example/hub/main/HubMainView.js",
	"bin-debug/example/loading/LoginLoadingUI.js",
	"bin-debug/example/login/LoginMainView.js",
	"bin-debug/example/RPG-game1/GameMainView.js",
	"bin-debug/example/RPG-game1/GameUIView.js",
	"bin-debug/example/RPG-game1/Role.js",
	"bin-debug/example/scenes/HubScene.js",
	"bin-debug/zero/utils/Device.js",
	"bin-debug/zero/utils/EZCookie.js",
	"bin-debug/example/scenes/LoginScene.js",
	"bin-debug/zero/utils/ResUtils.js",
	"bin-debug/example/scenes/RPGScene1.js",
	"bin-debug/zero/utils/TimeFormat.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/zero/utils/shaders/RotateFilterFactory.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1280,
		contentHeight: 720,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};