interface Mediator {
    notify(sender:object, event: string):void
}

class ConcreteMediator implements Mediator {
    private component1: Component1
    private component2: Component2

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1
        this.component1.set
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
}

class Component1 extends BaseComponent {
    /**
     * doA
     */
    public doA(): void {
        console.log("Component 1 does A")
        this.mediator.notify(this, "A")
    }

    /**
     * doB
     */
    public doB():void {
        console.log("Component 1 does B")
        this.mediator.notify(this, "B")
    }
}

class Component2 extends BaseComponent {
    /**
     * doA
     */
    public doC(): void {
        console.log("Component 2 does C")
        this.mediator.notify(this, "C")
    }

    /**
     * doB
     */
    public doD():void {
        console.log("Component 2 does D")
        this.mediator.notify(this, "D")
    }
}

class ConcreteMediator implements Mediator {
    private component1: 
    constructor(parameters) {
        
    }
}
