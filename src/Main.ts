class Main extends eui.UILayer {
    protected createChildren(): void {
        super.createChildren();
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        //loading资源组应该尽可能的小，否则黑屏的时间会过长
        zero.ResUtils.loadGroup('loading', null, this.onLoadComplete, null, this);
    }

    private isThemeLoadEnd: boolean = false;

    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the
     */
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }

    private isResourceLoadEnd: boolean = false;

    private onLoadProgress(e: RES.ResourceEvent): void {
        console.log(`----loading资源 加载进度----${e.itemsLoaded}/${e.itemsTotal}`);
    }

    private onLoadComplete(): void {
        this.isResourceLoadEnd = true;
        this.createScene();
    }

    private createScene() {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.init();
            this.startCreateScene();
        }
    }
    private init():void {
        this.stage.orientation = egret.OrientationMode.LANDSCAPE;
        
        zero.System.designWidth = 1280;
        zero.System.designHeight = 720;
        zero.System.init(this.stage, true);

        zero.sceneMgr.stage = this.stage;

        //egret.localStorage 即使在APP中也可以生效
        egret.localStorage
    }
    /**
     * 创建场景界面
     * Create scene interface
     */
    private startCreateScene(): void {
        zero.loadingMgr.setLoadingUI(new example.LoginLoadingUI());
        //启动时进入的场景
        zero.sceneMgr.load(example.LoginScene);
    }
}

