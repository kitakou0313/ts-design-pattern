interface Target {
    request(): string
}

class Adaptee {
    /**
     * specificRequest
    */
    public specificRequest(): string {
        return "This method cant be used from client code"
    }
}

class Adapter implements Target {
    private adaptee: Adaptee

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee
    }

    public request(): string {
        const result = this.adaptee.specificRequest() + ": this is converted"
        return `Adapter: (Translated) ${result}`
    }
}

function clietCode(target:Target) {
    console.log(target.request())
}

const adaptee = new Adaptee();
console.log(`${adaptee.specificRequest()}`)

const adapter = new Adapter(adaptee)
clietCode(adapter)
