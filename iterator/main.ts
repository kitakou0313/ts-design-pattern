interface Iterator<T> {
    current(): T

    next(): T

    key(): number

    valid(): boolean

    rewind(): void
}

interface Aggregator {
    getInterator(): Iterator<string>
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
    public getIterator():Iterator<string> {
        return new AlphabeticalOrderIterator(this)
    }

    /**
     * getReverseIterator
     */
    public getReverseIterator():Iterator<string> {
        return new AlphabeticalOrderIterator(this, true)
    }
}

class AlphabeticalOrderIterator implements Iterator<string> {
    constructor(parameters) {
        
    }
}
