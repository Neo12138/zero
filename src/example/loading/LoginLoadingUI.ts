/** Created by Neo on 2018/2/3 */

namespace example {
    import LoadingUI = zero.LoadingUI;

    /**
     * LoginLoadingUI类
     * 此加载界面 在加载登录界面的资源时显示
     */
    export class LoginLoadingUI extends LoadingUI {
        private progress: egret.TextField;

        /**
         * 构造函数
         */
        public constructor() {
            super();

            this.skinName = 'LoadingUI';
        }

        protected childrenCreated(): void {
            super.childrenCreated();

            this.progress = new egret.TextField();
            this.progress.x = 100;
            this.progress.y = 100;
            this.progress.size = 40;
            this.progress.textColor = 0xffff00;
            this.addChild(this.progress);
        }

        /**
         * 设置加载进度
         * @override
         * @param {number} loaded
         * @param {number} total
         */
        public setProgress(loaded: number, total: number): void {
            let percent: string = (loaded / total * 100).toFixed(2);
            this.progress.text = `${percent}%  (${loaded}/${total})`;
        }

    }
}