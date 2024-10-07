// 全てのノードが継承するinterfaceを定義するクラス
abstract class Compopent {
    protected parent!: Compopent | null

    /**
     * setParent
     */
    public setParent(parent: Compopent | null) {
        this.parent = parent
    }
    /**
     * getParent
     */
    public getParent(): Compopent | null {
        return this.parent
    }

    public add(component: Compopent): void{}
    public remove(component: Compopent): void{}

    /**
     * isComposite
     */
    public isComposite(): boolean {
        return false
    }

    /**
     * operation
     */
    public abstract operation(): string
}

class Leaf extends Compopent {
    public operation(): string{
        return "Leaf"
    }
}

class Composite extends Compopent {
    protected children: Compopent[] = [];

    public add(component: Compopent): void{
        this.children.push(component)
        component.setParent(this)
    }

    /**
     * remove
     */
    public remove(component: Compopent): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1)

        component.setParent(null)
    }

    /**
     * isComposite
     */
    public isComposite(): boolean {
        return true
    }

    /**
     * operation
     */
    public operation() {
        const results = []
        for (const child of this.children) {
            results.push(child.operation())
        }
        return `Branch(${results.join("+")})`
    }
}

function clientCode(component:Compopent) {
    console.log(`Results: ${component.operation()}`)
}

const simple = new Leaf()
clientCode(simple)

const root = new Composite()
const branch1 = new Composite()
branch1.add(new Leaf())
branch1.add(new Leaf())
const branch2 = new Composite()
branch2.add(new Leaf())

root.add(branch1)
root.add(branch2)

clientCode(root)
