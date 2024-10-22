interface Command {
    execute(): void
}

// Commandに該当するOperationを実行するクラス
class Receiver {
    /**
     * doSomething
     */
    public doSomething(a:string):void {
        console.log(typeof this + `: Working on ${a}`)
    }
    
    /**
     * doSomething
     */
    public doSomethingElse(b:string):void {
        console.log(typeof this + `: Also working on ${b}`)
    }
}

class SimpleCommand implements Command {
    private payload: string

    constructor(payload: string) {
        this.payload = payload
    }

    /**
     * execute
     */
    public execute():void {
        console.log(
            typeof + `: I do simple oparation with request ${this.payload}`
        )
    }
}

// receiverを利用する複雑なCommandではreceiverへの参照を持つ
class ComplexCommand implements Command {
    private receiver: Receiver

    // parameter
    private a:string
    private b:string

    constructor(receiver: Receiver, a:string, b:string){
        this.receiver = receiver
        this.a = a
        this.b = b
    }

    /**
     * execute
     */
    public execute():void {
        console.log(typeof this + `: Complex stuff should be done by receiver`)
        this.receiver.doSomething(this.a)
        this.receiver.doSomethingElse(this.b)
    }
}

class Invoker {
    private onStart: Command | null = null
    private onFinish: Command | null = null

    /**
     * setOnStart
     */
    public setOnStart(command:Command): void {
        this.onStart = command
    }

    /**
     * setOnFinish
     */
    public setOnFinish(command:Command):void {
        this.onFinish = command
    }

    // ユーザー定義の型ガードを使用
    // この関数の返すbool値によって与えた引数がCommand型か判定できる
    private isCommnad(object:any): object is Command {
        return object.execute !== undefined
    }

    /**
     * doSomethingImportant
     */
    public doSomethingImportant():void {
        console.log(typeof this + ":I will do something onStart")
        if (this.isCommnad(this.onStart)) {
            this.onStart.execute()
        }

        console.log(typeof this + ":I will do something onFinish")
        if (this.isCommnad(this.onFinish)) {
            this.onFinish.execute()
        }
    }
}

const invoker =  new Invoker()
invoker.setOnStart(new SimpleCommand("Say hi!"))
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 
    "Send email",
    "Save report"
))

invoker.doSomethingImportant()
