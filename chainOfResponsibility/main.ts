interface Handler<Request = string, Result = string>{
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>
    handle(request: Request):Result
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler

    /**
     * setNext
     * handler1.setNext(handler2).setNext(handler3)
     */
    public setNext(handler:Handler):Handler {
        this.nextHandler = handler
        return handler
    }

    /**
     * handle
     */
    public handle(request: string):string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request)
        }
        return "null";
    }
}

class MonkeyHandler extends AbstractHandler {
    /**
     * handle
     */
    public handle(request: string): string {
        if (request === "Banana") {
            return typeof this + ": I will eat this"
        }
        return super.handle(request)
    }        
}

class SquirreHandler extends AbstractHandler {
    /**
     * handle
     */
    public handle(request: string):string {
        if (request === "Nuts") {
            return typeof this + `I will eat ${request}`
        }
        return super.handle(request)
    }
}

function clientCode(handler:Handler) {
    const foods = ["Nuts", "Banana"]
    for (const food of foods) {
        const result = handler.handle(food)
        console.log(
            `Results of ${food}: ${result}`
        )
    }
}

const monkey = new MonkeyHandler()
const squirre = new SquirreHandler()
monkey.setNext(squirre)

clientCode(monkey)
