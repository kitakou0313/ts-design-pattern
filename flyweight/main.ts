class Flyweight {
    private sharedState: any

    constructor(sharedState: any) {
        this.sharedState = sharedState
    }

    public operation(uniqueState: any): void{
        const s = JSON.stringify(this.sharedState)
        const u = JSON.stringify(uniqueState)
        console.log(
            `Flyweight: Display shared ${s} and unique ${u} state`
        )
    }
}

class FlyweightFactory {
    private flyweight: {[key: string]: Flyweight} = <any>{}
    
    private getKey(state: string[]): string{
        return state.join("_")
    }
    
    constructor(initialFlyweight: string[][]) {
        for (const state of initialFlyweight) {
            this.flyweight[this.getKey(state)] = new Flyweight(state)
        }
    }

    /**
     * getFlyweight
     */
    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState)

        if (!(key in this.flyweight)) {
            this.flyweight[key] = new Flyweight(sharedState)
        }

        return this.flyweight[key]
    }

    public listFlyweight():void{
        const count = Object.keys(this.flyweight).length;

        for(const key in this.flyweight){
            console.log(key)
        }
    }
}

const factory = new FlyweightFactory([
    ['hoge', 'hoge_model', 'hoge_color'],
    ['fuga', 'fuga_model', 'fuga_color'],

])
factory.listFlyweight()

function addCarToPoliceDatabase(ff:FlyweightFactory, plates: string, owner: string, brand: string, model: string, color: string) {
    const flyweight = ff.getFlyweight(
        [brand, model, color]        
    )
    flyweight.operation([plates, owner])
}
