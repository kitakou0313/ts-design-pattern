# Adapter(wrapper pattern) pattern
互換性のないinterfaceを持つもの同士を連携させるパターン

# 解決したい課題
- 連携させたい2つの対象間に互換性がないケースがある
    - データ型
        - JSON, XML
    - interface

# 解決方法
- あるobjectのinterfaceをもう一方が対応したinterfaceに変換するオブジェクトを作成する
    - adapter 
- 利用する側
    - adapter経由でのみ対象のobjectにアクセスする
    - adapter側のメソッドが呼び出されたとき，対象のobjectの適切なメソッドを呼び出す

# 実装
- 原則
    - adapterは一つのobjectのinterfaceを実装し，それ以外の一つをラップする
- adapterはclientが対応したinterfaceを実装する
    - client依存
