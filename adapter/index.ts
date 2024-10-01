// Interface client code want to use
class Target {
    /**
     * request
     */
    public request(): string {
        return "Target: The default target message"
    }
}

class Adaptee {
    /**
     * specificRequest
    */
    public specificRequest(): string {
        return "This method cant be used from client code"
    }
}
