// 実際の処理が実装されている層
interface Implementation {
    operationImplementation(): string
}

// 制御層
// 利用する側はこのinterfaceから利用する
class Abstraction {
    constructor(protected implementation: Implementation) {
    }

    public operation(): string {
        const result = this.implementation.operationImplementation()
        return `Abstraction: Base operation with ${result}`
    }
}

// client -> [Abstraction(制御層) -> implementation(制御のためのinterface)] の依存関係
// []の部分がbridgeと呼ばれる

class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return `Operation in ConcreteImplementationA`
    }
}

class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return `Operation in ConcreteImplementationB`
    }
}

function clientCode(abstraction:Abstraction) {
    console.log(abstraction.operation())
}

let implementation = new ConcreteImplementationA()
let abstraction = new Abstraction(implementation)
clientCode(abstraction)

implementation = new ConcreteImplementationB()
abstraction = new Abstraction(implementation)
clientCode(abstraction)
