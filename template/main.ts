abstract class AbstractClass {
    /**
     * templateMethod
     */
    public templateMethod():void {
        this.baseOperation1()
        this.requiredOperation1()
        this.baseOperation2()
        this.hook1()
        this.requiredOperation2()
        this.baseOperation3()
        this.hook2()
    }

    protected baseOperation1(): void{
        console.log(`AbstraceClass says: I am doing the bulk of the work`)
    }

    protected baseOperation2(): void{
        console.log(`AbstraceClass says: But I let subclassed override some operations`)
    }
    
    protected baseOperation3(): void{
        console.log(`AbstraceClass says: But I am doing the bulk of the work anyway`)
    }

    protected abstract requiredOperation1():void;
    protected abstract requiredOperation2():void;

    protected hook1(): void{}
    protected hook2(): void{}
}

class ConcreteClass1 extends AbstractClass{
    protected requiredOperation1(): void {
        console.log(`ConcreteClass1 says: Implemented Operation1`)
    }
    protected requiredOperation2(): void {
        console.log(`ConcreteClass1 says: Implemented Operation2`)
    }
}

class ConcreteClass2 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log("ConcreteClass2 says: Implemented Operation1")
    }
    protected requiredOperation2(): void {
        console.log("ConcreteClass2 says: Implemented Operation2")
    }

    protected hook1(): void {
        console.log("ConcreteClass2 says: Overridden Hook1")
    }
}

function clientCode(abstractClass:AbstractClass) {
    abstractClass.templateMethod();
}

clientCode(new ConcreteClass1())
console.log()
clientCode(new ConcreteClass2())
