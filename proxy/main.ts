interface Subject {
    request(): void
}

class RealObject implements Subject {
    /**
     * request
     */
    public request():void {
        console.log("Real Object: Handling request")
    }
}

class Proxy2 implements Subject {
    constructor(private realObject: RealObject){}
    /**
     * request
     */
    private checkAccess():boolean {
        console.log("Proxy: check request before RealObject")
        return true
    }

    private logAccess():void {
        console.log("Proxy: Logging the time of request")
    }
    
    public request():void {
        if (this.checkAccess()) {
            this.realObject.request()
            this.logAccess()
        }
    }   
}

function clientCode(object:Subject) {
    object.request()
}

const realObject = new RealObject()
clientCode(realObject)

const proxy = new Proxy2(realObject)
clientCode(proxy)
