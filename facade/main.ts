// 簡略化されたinterfaceを提供したいClass

class Subsystem1 {
    /**
     * operation1
     */
    public operation1(): string {
        return (typeof this) + " is Ready"
    }

    /**
     * operationN
     */
    public operationN():string {
        return (typeof this) +" Go!"
    }
}

class Subsystem2 {
    /**
     * operation1
     */
    public operation1(): string {
        return (typeof this) +" is Ready"
    }

    /**
     * operationN
     */
    public operationN():string {
        typeof this
        return (typeof this) +" Go!"
    }
}


class Facade {
    protected subsystem1: Subsystem1
    protected subsystem2: Subsystem2


    constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
        this.subsystem1 = subsystem1 || new Subsystem1()
        this.subsystem2 = subsystem2 || new Subsystem2()
    }

    /**
     * operation
     */
    public operation(): string {
        let result = `Facade initializes subsystem:`
        result += this.subsystem1.operation1()
        result += this.subsystem2.operation1()

        result += "\n"

        result += "Doing some operation"
        result += this.subsystem1.operationN()
        result += this.subsystem2.operationN()

        return result
    }
}

function clientCode(facade:Facade) {
    console.log(facade.operation())
}

const subsystem1 = new Subsystem1()
const subsystem2 = new Subsystem2()

const facade = new Facade(subsystem1, subsystem2)

clientCode(facade)
