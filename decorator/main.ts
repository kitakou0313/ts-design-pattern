interface Component {
    operation(): string
}

class ConcretComponent implements Component {
    /**
     * operation
     */
    public operation(): string {
        return "ConcreteComponent:"
    }
}

class Decorator implements Component {
    protected component: Component

    constructor(component: Component){
        this.component = component
    }

    public operation(): string {
        return this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    /**
     * operation
     */
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`
    }
}

class ConcreteDecoratorB extends Decorator {
    /**
     * operation
     */
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`
    }
}

function clientCode(component:Component) {
    console.log(`RESULT: ${component.operation()}`)
}

const simpleComponent = new ConcretComponent();
clientCode(simpleComponent)


const decorator2 = new ConcreteDecoratorB(
    new ConcreteDecoratorA(simpleComponent)
)
clientCode(decorator2)
