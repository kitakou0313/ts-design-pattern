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
