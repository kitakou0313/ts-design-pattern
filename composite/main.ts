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
