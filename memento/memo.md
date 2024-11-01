# Memento pattern
以前の状態を実装の詳細を明らかにすることなく保存，回復させるパターン

## 問題
- 以前の状態を復元できるソフトウェアを考える
    - テキストエディターのUndoなど
- Snapshotを取る実装を考えるが，Fieldの値をコピーする実装ではいくつか問題がある
    - これは対象のオブジェクトが緩いアクセス制限を持っている必要がある
        - privateだと他クラスから参照できない -> コピーできないため
    - 全てコピー可能でも，具体的なfieldを参照しているためコピーされる側の変更にコピーする側のClassが対応する必要がある

## 解決法
- その状態の持ち主自身にSnapshotを作成させる
    - Originator Objectと呼ぶ
    - 上の問題は不適切なカプセル化が原因なため
- Snapshotの利用者（Caretaker）はMemento Interfaceを実装したMemento objectからSnapshotを取得する
    - Snapshot取得のためのメソッドを介して取得する

# Classの構造
- Originator 
    - Snapshotの作成，復元が可能
- Memento
    - 値オブジェクト
    - Snapshotとしての状態を持つ
    - immutableなObject
    - Originatorのnested Classとして実装される
        - Originatorからは全fieldにアクセス可能
        - 他クラス（CareTaker）からは限られたアクセスしか受けつけない
- Caretaker
    - originatorへの参照を持つ
    - Mementoのコンテナクラスを持つ
    - MementoとOriginatorを用いたロジックの実装を担当する

# 実装の流れ