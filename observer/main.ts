interface Observer {
    update(subject: SubjectObPattern): void
}

interface SubjectObPattern {
    attach(observer: Observer):void
    detach(observer: Observer):void
    notify(): void
}

class ConcreteSubject implements SubjectObPattern {
    public state: number = 0

    private observers: Observer[] = []

    public attach(observer: Observer): void {
        const isEixt = this.observers.includes(observer)

        this.observers.push(observer)
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)

        this.observers.splice(observerIndex, 1)
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }

    /**
     * someBusinessLogic
     */
    public someBusinessLogic() {
        this.state = Math.floor(
            Math.random() * (10 + 1)
        )        
        console.log(`current state:${this.state}`)
        this.notify()
    }
}


class ConcreteObserverA implements Observer {
    /**
     * update
     */
    public update(subject: SubjectObPattern) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log(`ConcreteObserverA: Reacted to the event.`)
        }
    }
}

class ConcreteObserverB implements Observer {
    /**
     * update
     */
    public update(subject: SubjectObPattern) {
        if (subject instanceof ConcreteSubject && subject.state % 3 === 0) {
            console.log(`ConcreteObserverB: Reacted to the event.`)
        }
    }
}

const subject = new ConcreteSubject()

subject.attach(new ConcreteObserverA())
subject.attach(new ConcreteObserverB())

subject.someBusinessLogic()
subject.someBusinessLogic()
