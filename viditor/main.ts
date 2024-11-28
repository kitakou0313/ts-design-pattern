interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void
    visitConcreteComponentB(element: ConcreteComponentB): void
}

interface ComponentInVisitorPattern {
    accept(visitor: Visitor): void
}

class ConcreteComponentA implements ComponentInVisitorPattern {
    /**
     * accept
     */
    public accept(visitor: Visitor):void {
        visitor.visitConcreteComponentA(this);
    }

    public exclusiveMethodOfConcreteComponentA():string{
        return "A"
    }
}

class ConcreteComponentB implements ComponentInVisitorPattern {
    /**
     * accept
     */
    public accept(visitor: Visitor):void {
        visitor.visitConcreteComponentB(this)
    }

    /**
     * specialMethodOfConcreteComponentB
     */
    public specialMethodOfConcreteComponentB():string {
        return "B"
    }
}

class ConcreteVisitor1 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(
            `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`
        )
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(
            `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`
        )
    }
}

function clientCode(components: ComponentInVisitorPattern[], visitor:Visitor) {
    for (const component of components) {
        component.accept(visitor)
    }
}

const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB()
]

const visitor1 = new ConcreteVisitor1()
clientCode(components, visitor1)
