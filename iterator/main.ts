interface OriIterator<T> {
    current(): T

    next(): T

    key(): number

    valid(): boolean

    rewind(): void
}

interface Aggregator {
    getIterator(): OriIterator<string>
}

class WordCollection implements Aggregator {
    private items: string[] = []

    /**
     * getItems
     */
    public getItems(): string[] {
        return this.items
    }

    /**
     * getCount
     */
    public getCount(): number {
        return this.items.length
    }

    /**
     * addItem
     */
    public addItem(item:string): void {
        this.items.push(item)
    }

    /**
     * getIterator
     */
    public getIterator():OriIterator<string> {
        return new AlphabeticalOrderIterator(this)
    }

    /**
     * getReverseIterator
     */
    public getReverseIterator():OriIterator<string> {
        return new AlphabeticalOrderIterator(this, true)
    }
}

class AlphabeticalOrderIterator implements OriIterator<string> {
    private collection: WordCollection
    private position: number = 0
    private reverse: boolean = false

    constructor(collection: WordCollection, reverse: boolean = false){
        this.collection = collection
        this.reverse = reverse

        if (reverse) {
            this.position = collection.getCount() - 1
        }
    }

    rewind(): void {
        this.position = this.reverse ? this.collection.getCount() - 1: 0
    }

    current(): string {
        return this.collection.getItems()[this.position]
    }

    key(): number {
        return this.position
    }

    next(): string{
        const item = this.collection.getItems()[this.position]
        this.position += this.reverse ? -1:1
        return item
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position > 0
        }
        return this.position < this.collection.getCount()
    }
}

const collection = new WordCollection();
collection.addItem("First")
collection.addItem("Second")
collection.addItem("Third")

const iterator = collection.getReverseIterator()
while (iterator.valid()) {
    console.log(iterator.next())
}

const reverseIterator = collection.getReverseIterator()
while(reverseIterator.valid()){
    console.log(reverseIterator.next())
}
