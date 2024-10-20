# Command pattern
リクエストを独立したオブジェクトに変換し，メソッドへの引数として渡せる状態や遅延，キューでの処理，取り消し可能な操作とするパターン

## 問題
- 同一の操作を複数の要素から行えるケースでは，同一処理に関するコードが散逸する
    - エディターアプリにおけるコピー操作
        - ショートカット，ボタンなど

## 解決法
- ビジネスロジックを利用する側が共通で呼び出すCommand interfaceを実装したクラスを定義する
    - propertyとして可能な操作に対応するCommand Classを持つ
- Command Classの特徴
    - 1操作につき1 Command interface実装クラスが対応する
    - Command interfaceには設定されたパラメータを元に処理を実行するメソッドを持つ
        - 引数は持たない

# 実装の流れ
- Command Interfaceを実装する
    - 操作の実行を表すメソッドのみを持つ
- 具体的な操作に対応するCommand Interface実行クラスを作成する
    - 以下の特徴を持つ
        - 実行に必要なパラメータはコンストラクタで受け取り，propertyに持つ
        - 対応する操作を実際に行うレシーバーへの参照を持つ
- 操作実行側をCommand interfaceに対応するよう変更
- Client側の初期化の流れを変更
    - 1. レシーバー作成
    - 2. Command Interface実装クラスのインスタンス作成，必要ならレシーバーへの参照を持つ
    - 3. Senderクラスのインスタンスを作成，必要ならCommand Interface実装クラスへの参照を持たせる
        
