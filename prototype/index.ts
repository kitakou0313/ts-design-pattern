class ComponentWithBackReference {
    public prototype: Prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype
    }

}

class Prototype {
    public primitive: any = null
    public component: object = {}
    public circularReference: ComponentWithBackReference

    public clone(): this {
        // ts, HavaScriptの場合はObject.assginで実現可能
        const clone = Object.create(this.component) as this
        
        clone.component = Object.create(this.component)

        clone.circularReference = {
            ...this.circularReference,
            prototype: {
                ...this
            }
        }
        return clone
    }
}

function clientCode() {
    const p1 = new Prototype()

    p1.primitive = 245
    p1.component = new Date()
    p1.circularReference = new ComponentWithBackReference(p1)

    const p2 = p1.clone()

    console.log(p1)
    console.log(p2)
}

clientCode()
