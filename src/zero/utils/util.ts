namespace zero.utils {
    const types = {
        "undefined": "undefined",
        "boolean": "boolean",
        "number": "number",
        "string": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Error]": "error"
    };

    /**
     * 返回基本数据类型和一些常用对象的类型
     *  undefined
     *  boolean
     *  number
     *  string
     *  null
     *  object
     *  function
     *  array
     *  date
     *  regexp
     *  error
     *  NaN
     * @param object 被检测的对象
     * @returns {string} 该对象的类型
     */
    export function typeOf(object: any): string {
        let toString = Object.prototype.toString;

        //这个赋值表达式，总是仅取第一个有效值
        let t = types[typeof object] || types[toString.call (object)] || (object ? "object" : "null");
        if (t === "number") {
            object = +object;
            if (object !== object) {
                return "NaN";
            }
        }
        return t;
    }

    /**
     * 值的深拷贝
     * 支持 3种基本类型 boolean,number,string
     * 以及 null,undefined
     * 以及 Array,Object等其他引用类型
     * @param {T} value 待拷贝的值
     * @returns {T} 拷贝的值
     */
    export function deepClone<T>(value: T): T {
        let copy;
        //处理3种基本类型，以及null和undefined
        if (value == null || typeof value != "object") {
            return value;
        }

        //处理数组
        if (value instanceof Array) {
            copy = [];
            for (let i = 0, len = value.length; i < len; i++) {
                copy[i] = deepClone (value[i]);
            }
            return copy;
        }

        //处理对象
        if (value instanceof Object) {
            copy = {};
            for (let prop in value) {
                if (value.hasOwnProperty (prop)) {
                    copy[prop] = deepClone (value[prop]);
                }
            }
            return copy;
        }

        throw new Error ("Unable to copy value!Its type isn't supported.");
    }

    /**
     * 判断两个数组是否相等(长度，类型，值都一致则相等)
     * @param v1
     * @param v2
     * @returns {boolean}
     */
    export function arrayEqual<T>(v1: T[], v2: T[]): boolean {
        if (v1.length != v2.length) return false;
        for (let i = 0, len = v1.length; i < len; i++) {
            if (v1[i] !== v2[i]) return false;
        }
        return true;
    }

    /**
     * 比较两个对象是否相等(属性数目，属性名，属性类型，以及属性值都相等则相等)
     * 两个数组的比较也可使用此方法
     * @param {T} v1
     * @param {T} v2
     * @returns {boolean}
     */
    export function objectEqual<T>(v1: T, v2: T): boolean {
        let prop1 = Object.getOwnPropertyNames (v1);
        let prop2 = Object.getOwnPropertyNames (v2);
        //首先比较属性的数量是否相同
        if (prop1.length != prop2.length) {
            return false;
        }
        //比较属性值是否相同
        for (let i = 0, len = prop1.length; i < len; i++) {
            let propName = prop1[i];
            if (v1[propName] !== v2[propName]) {
                return false;
            }
        }
        return true;
    }
}