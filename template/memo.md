# Template pattern
アルゴリズムの大まかな流れをsuper classで定義しておき、特定のステップをサブクラスで上書きするパターン

## 問題
- アルゴリズムの全体の流れは同じだが、一部の処理が異なる処理を考える
    - ファイルを読み込み、共通の処理をするソフトウェア
    - 入力されるファイルの種類ごとに入力処理は異なるが、そのデータを処理する部分は同じ
- 各ファイルの種類ごとに全体の処理を全て持つサブクラスを作成するパターンではいくつかの問題がある
    - サブクラス間でのコードの重複
    - クラス利用側での条件分岐の実装

## 解決策
- 処理全体の流れを実装したtemplate Classを定義する
    - 各処理をstepに分割し、メソッドに切り出す
        - サブクラスでの実装を強制する場合はabstractにする
    - 各stepを全体の処理を実行するメソッドで呼び出す
- 個々のケースに処理を実装したい場合、サブクラスを定義して処理をstepをoverrideする
    - step単位でのoverrideにより、共通となる処理の実装の重複を回避できる

## 実装の流れ
- 対象となる処理をstepごとに分ける
    - 共通となるもの、固有になるものが独立するようstepを分ける
- templateクラスを定義し、アルゴリズム全体の処理を行うtemplateメソッド、stepメソッドを利用して実装する
    - tempalteメソッドはfinalアクセス修飾子をつけ、サブクラスから変更できないようにするとよい
- アルゴリズムのパターンごとにサブクラスを実装し、stepをオーバーライドする