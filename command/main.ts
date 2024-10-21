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
