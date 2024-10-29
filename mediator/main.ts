interface Mediator {
    notify(sender:object, event: string):void
}

class ConcreteMediator implements Mediator {
    private component1: Component1
    private component2: Component2

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1
        this.component1.setMediator(this)

        this.component2 = c2
        this.component2.setMediator(this)
    }

    /**
     * notify
     */
    public notify(sender:object, event:string): void {
        if (event === "A") {
            console.log("Mediator reacts on A, triggers following operation")
            this.component2.doC()
        }
        if (event === "D") {
            console.log("Mediator reacts on D, triggers following operation")
            this.component1.doB()
            this.component2.doC()
        }
    }
}

class BaseComponent {
    protected mediator: Mediator | undefined

    constructor(mediator?:Mediator) {
        this.mediator = mediator
    }

    /**
     * setMediator
     */
    public setMediator(mediator: Mediator) {
        this.mediator = mediator
    }

    protected notify(sender:object, event:string) {
        if (typeof this.mediator !== "undefined") {
            this.mediator.notify(sender, event)
        }
    }
}

class Component1 extends BaseComponent {
    /**
     * doA
     */
    public doA(): void {
        console.log("Component 1 does A")
        this.notify(this, "A")
    }

    /**
     * doB
     */
    public doB():void {
        console.log("Component 1 does B")
        this.notify(this, "B")
    }
}

class Component2 extends BaseComponent {
    /**
     * doA
     */
    public doC(): void {
        console.log("Component 2 does C")
        this.notify(this, "C")
    }

    /**
     * doB
     */
    public doD():void {
        console.log("Component 2 does D")
        this.notify(this, "D")
    }
}

const c1 = new Component1()
const c2 = new Component2()
const mediator = new ConcreteMediator(c1, c2)

c1.doA()

console.log()
c2.doD()
