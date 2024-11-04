class Originator {
    private state: string
    constructor(state: string) {
        this.state = state
    }

    private generateRandomString(length: number = 10){
        const charSet = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

        var arrayOfChars: string[] = []

        for (let index = 0; index < length; index++) {
            arrayOfChars.push(charSet.charAt(
                Math.floor(Math.random() * charSet.length)
            ))
        }

        return arrayOfChars.join("")
    }

    public doSomething(): void{
        console.log(`Originator: My current state is ${this.state}`)
        console.log(`Originator: Do something`)
        this.state = this.generateRandomString(30)
        console.log(`Originator: and my state has changed to: ${this.state}`)
    }

    public save(): Memento {
        return new ConcreteMemento(this.state)
    }

    /**
     * restore
     */
    public restore(memento: Memento) {
        this.state = memento.getState()
        console.log(`Originator: My state has changed to ${this.state}`)
    }
}

interface Memento{
    getState(): string
    getName(): string
    getDate(): string
}

class ConcreteMemento implements Memento {
    private state: string;
    private date: Date

    constructor(state: string) {
        this.state = state;
        this.date = new Date()
    }

    /**
     * getState
     */
    public getState() {
        return this.state
    }

    public getName(): string {
        return `${this.date} / (${this.state}...)`;
    }

    /**
     * getDat
     */
    public getDate() {
        return this.date.toISOString()
    }
}

class CareTaker {
    private memento: Memento[] = []
    private originator: Originator

    constructor(originator: Originator) {
        this.originator = originator
    }

    public backup(){
        this.memento.push(this.originator.save())
    }

    /**
     * undo
     */
    public undo() {
        if (!this.memento.length) {
            return
        }
        const memento = this.memento.pop() as Memento

        console.log(`Caretaker: Restoring state to ${memento?.getName()}`)
        this.originator.restore(memento)
    }

    /**
     * showHistory
     */
    public showHistory() {
        console.log(`Caretaker: Here is the list of mementos`)
        for (const memento of this.memento) {
            console.log(memento.getName())
        }
    }
}

const originator = new Originator("HogeHoge-first-state")
const caretaker = new CareTaker(originator)

caretaker.backup()
originator.doSomething()

caretaker.backup()
originator.doSomething()

caretaker.backup()
originator.doSomething()

caretaker.showHistory()

caretaker.undo()
caretaker.undo()

