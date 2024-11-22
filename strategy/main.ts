interface Strategy {
    doAlgorithm(data: string[]): string[]
}

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort()
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse()
    }
}

class ContextStrageyPattern {
    
    constructor(private strategy: Strategy) {
        
    }

    public setStragy(strategy: Strategy){
        this.strategy = strategy
    }

    public doSomeBussinessLogic(): void{
        const result = this.strategy.doAlgorithm(
            ["A", "B", "C"]
        )

        console.log(result.join(","))
    }
}

const contextStrageyPattern = new ContextStrageyPattern(new ConcreteStrategyA())
contextStrageyPattern.doSomeBussinessLogic()

contextStrageyPattern.setStragy(new ConcreteStrategyB())
contextStrageyPattern.doSomeBussinessLogic()

