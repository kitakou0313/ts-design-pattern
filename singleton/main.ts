class Singleton {
    static #instance: Singleton;

    // コンストラクタにprivateアクセス修飾子を付与する
    // インスタンス取得用static method以外からの取得を防ぐため
    private constructor() {
    }

    // instance取得用methodをstaticで実装
    public static getInstance(): Singleton{
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton()
        }

        return Singleton.#instance
    }

    // instance毎の処理を非statice methodで実装
    public someBusinessLogic(){
        console.log("Hoge")
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log("Singleton works")
    }
}

clientCode()
