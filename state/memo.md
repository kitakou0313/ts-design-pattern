# State
Obejctに状態によって振る舞いを変えさせるパターン

## 問題
- Finit state machineの実装を考える
    - 状態の数が有限
    - 処理の結果がStateに依存
    - ある状態から他の状態に遷移できる
        - 有効グラフとして遷移が表現される
- Finit state machineを分岐文(if, switch)のみで実装するのは困難
    - 状態による振る舞いを変えるとすべての状態に依存する処理を変更する必要がある

## 解決法
- State毎に対応するClassを作成し，Stateに依存する処理をInterfaceで定義して各Classで実装する
    - 元のClassはcontextと呼ぶ
    - Stateに依存する処理を利用する時はInterfaceを介して実行するため，分岐文が不要になる
- contextは現在のStateを表すClassのObjectに対して参照を持つ
    - 状態遷移の際は参照するオブジェクトを切り替える

# 実装の流れ
