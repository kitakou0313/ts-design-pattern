abstract class State {
    protected context: Context

    /**
     * setContext
     */
    public setContext(context: Context) {
        this.context = context
    }

    constructor(context:Context){
        this.context = context
    }

    public abstract handle1():void
    public abstract handle2():void        
}

class ConcreteStateA extends State {
    public handle1(): void {
        console.log(`ConcreteStateA handles request1`)
        console.log(`ConcreteStateA wanto to change the state of the context`)
        this.context.transitionTo(new ConcreteStateB(this.context))
    }

    public handle2(): void {
        console.log(`ConcreteStateA handles request2`)
    }
}

class ConcreteStateB extends State {
    public handle1(): void {
        console.log(`ConcreteStateB handles request1`)
        console.log(`ConcreteStateB wanto to change the state of the context`)
        this.context.transitionTo(new ConcreteStateA(this.context))
    }

    public handle2(): void {
        console.log(`ConcreteStateB handles request2`)
    }
}

class Context {
    private state: State

    /**
     * transitionTo
     */
    public transitionTo(state: State): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}`)
        this.state = state
        this.state.setContext(this)
    }

    constructor(state: State){
        console.log(`Context: Transition to ${(<any>state).constructor.name}`)
        this.state = state
        this.state.setContext(this)
    }

    /**
     * request1
     */
    public request1():void {
        this.state.handle1()
    }

    /**
     * request2
     */
    public request2():void {
        this.state.handle2()
    }
}

const context = new Context(new ConcreteStateA())
context.request1()
context.request2()
