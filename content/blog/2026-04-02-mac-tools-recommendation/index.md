---
title: "dotfiles で管理している Mac 特有のおすすめツール"
date: "2026-04-02"
slug: "mac-tools-recommendation"
tags: ["Mac", "ツール", "dotfiles", "開発環境"]
description: "chezmoi で管理している dotfiles の中から、Mac 特有のおすすめツールを厳選して紹介します。"
---

# Mac 特有のおすすめツール

今回は初めてMacを使う人や、あまりMacをカスタマイズしていない人に向けて、 **Mac でしか使えない・Mac だからこそ活きるツール** を紹介します。

なお、この記事に出てくるツールは手動はもちろん、すべて [Homebrew](https://brew.sh/)（Mac 向けのパッケージマネージャー）でインストールできます。

---

## GUI アプリ編

### Raycast

Mac には `Cmd + Space` で起動する「Spotlight」という検索・ランチャー機能が標準で搭載されていますが、Raycast はそれを置き換えるアプリです。

アプリの起動や検索に加えて、クリップボードの履歴、スニペット、ウィンドウの整列、電卓、カラーピッカーなど、開発中にちょこちょこ必要になる機能がまとまっています。

拡張機能も豊富で、GitHub や 1Password との連携なども追加できます。

自分は特にクリップボード履歴と 1Password 用の拡張機能を毎日使っていて、これなしだと作業効率が明らかに落ちます。

また、Macにインストール済のアプリ起動のために Hot Key を設定できるのも便利です。
自分は後述する Ghostty を Raycast 経由で起動するようにしていて、`Cmd + T` でターミナルがすぐ開けるようになっています。

```bash
brew install --cask raycast
```

### BetterTouchTool

Mac のトラックパッドやキーボードの操作を自由にカスタマイズできるアプリです。

たとえば「3本指タップでミドルクリック」「ウィンドウを画面端にドラッグすると半分サイズにスナップ」のような動作を設定できます。
macOS Sequoia からウィンドウのタイル配置が標準機能として追加されましたが、BetterTouchTool ではより柔軟なスナップ設定（3分割や任意のサイズ指定など）が可能です。
また、特定のキーを押しながらウィンドウをドラッグすることで、フォーカスを切り替えずにウィンドウを移動・リサイズできる機能も重宝しています。


```bash
brew install --cask bettertouchtool
```

### The Unarchiver

zip 以外のアーカイブ（RAR、7z、LHA など）を解凍できるアプリです。Mac 標準のアーカイブユーティリティだと対応していない形式があったり、日本語のファイル名が文字化けすることがあります。The Unarchiver はそのあたりをカバーしてくれるので、入れておくと安心です。

```bash
brew install --cask the-unarchiver
```

## 開発者向けツール編

### Ghostty

ターミナルアプリです。
Mac には「ターミナル.app」が標準で入っていますが、開発者向けには iTerm2 というアプリが長く定番でした。
Ghostty はその次の選択肢として注目されているターミナルで、GPU を使った描画で動作が軽く、macOS のネイティブな見た目にもよく馴染みます。
iTerm2 と比べると、起動が速く、描画もなめらかで、個人的には非常に満足しています。
iTerm2 には Hotkey Window が存在し、そのショートカットキーを押すことでどこであってもいきなりターミナルを開くことができました。
Ghostty にも同様の機能として Quick Terminal というものが存在しますが、残念ながら iTerm2 と比べ、Ghostty の Quick Terminal 機能ではペイン分割はできてもタブを増やすことは現時点ではできません。

そこで、私は、前述の Raycast の Hot Key 機能を使って、Quick Terminalではない Ghostty を起動するようにしています。
こうすることで、iTerm2 の Hotkey Window と同様の使い勝手で Ghostty を使うことができ、タブもペインも両方活用できるようになりました。

```bash
brew install --cask ghostty
```


### OrbStack

Docker を Mac で使うためのアプリです。
公式の Docker Desktop と同じことができますが、起動がかなり速く、メモリ消費も少ないです。
Docker Desktop が重い、遅いと感じている方にはぜひ試してほしいです。
Docker のコマンドはそのまま使えるので、移行もスムーズでした。

ちなみに Docker 以外にも、Ubuntu などの Linux 環境をさっと立ち上げる機能もあります。

```bash
brew install --cask orbstack
```

### xcodes-app

iOS や macOS のアプリ開発に必要な Xcode のバージョンを管理するツールの GUI 版です。
プロジェクトごとに対応する Xcode バージョンが異なることが多く、Apple Developer サイトから手動でダウンロードするのは手間がかかります。このアプリなら一覧から選んでインストール・切り替えができます。
また、ダウンロード時には Aria2 という高速ダウンローダーを使い、最大16並列接続でダウンロードしてくれるため、通常の公式サイト経由のダウンロードと比べて3〜5倍速いとされています。

```bash
brew install --cask xcodes-app
```

---

## CLI ツール編

ターミナルから使うコマンドラインツールです。

### mactop

Mac の「アクティビティモニタ」をターミナルで見られるようなツールです。Apple Silicon（M1 / M2 / M3 / M4 チップ）の効率コアとパフォーマンスコアがそれぞれどのくらい使われているか、GPU の使用率はどうかといった、Mac 固有の情報をリアルタイムで確認できます。

通常の `top` コマンドや `htop` では CPU 使用率は全体の合計で表示されるため、Apple Silicon のコアごとの使用率を知りたいときに役立ちます。
CPU負荷が高いタスク（ビルドや Local LLM の推論など）を実行しているときに、どのコアがどれくらい使われているかをさっと確認できるのが便利です。

```bash
brew install mactop
```

### blueutil

Bluetooth のオン/オフやデバイスの接続をコマンドラインから操作できるツールです。普段使いで直接叩くことは少ないですが、スクリプトに組み込んで「Mac 起動時に特定のデバイスを自動接続する」といった使い方ができます。

```bash
brew install blueutil

# 使用例
blueutil --power 1      # Bluetooth ON
blueutil --power 0      # Bluetooth OFF
blueutil --paired        # ペアリング済みデバイス一覧
```


### dockutil

Mac の画面下（または横）に並んでいるアプリのアイコンバー「Dock」を、コマンドラインから操作するツールです。

新しい Mac をセットアップすると、使わないアプリが Dock にたくさん並んでいますよね。
これを一つずつ右クリックして外すのは面倒なので、自分はスクリプトで一括管理しています。`dockutil --remove all` で全部消してから、普段使うアプリだけを追加する、という流れです。

```bash
brew install dockutil

# 使用例: Dock を一度リセットして、使うアプリだけ追加
dockutil --remove all --no-restart
dockutil --add /Applications/Google\ Chrome.app
dockutil --add /Applications/Visual\ Studio\ Code.app
```

---

## おまけ: コマンドで Mac のシステム設定を変える

ツールの紹介ではありませんが、`defaults` コマンドを使って Mac のシステム設定を変更することができます。
`defaults` は Mac のシステム環境設定を、ターミナルから直接書き換えられるコマンドです。
例えば、初期セットアップをする際に、GUI で一つずつ変更するのが面倒な設定も、スクリプトにしておけば一発で適用できます。

自分が入れている設定の一部を紹介します。

特に、ホットコーナーを設定し、マウスを右上に持っていくと、自動でスクリーンセーバーが起動するようにする設定は、強くおすすめします。
これにより、座席を離れる際に、ぱっとすぐに画面をロックできるようになり、セキュリティ面で安心感が増します。

```bash
# キーリピートを高速化
# 標準だとカーソルキーの長押しが遅いので、コーディング時はこれがないと辛い
defaults write -g InitialKeyRepeat -int 15
defaults write -g KeyRepeat -int 2

# Dock を右に配置して、自動で隠す
# 画面の縦幅を確保したいので右寄せ＋自動非表示にしています
defaults write com.apple.dock orientation -string "right"
defaults write com.apple.dock autohide -bool true

# Finder でパスバーとステータスバーを表示
# 今どのフォルダにいるか分かりやすくなります
defaults write com.apple.finder ShowPathbar -bool true
defaults write com.apple.finder ShowStatusBar -bool true

# ネットワークドライブに .DS_Store を作らない
# 共有フォルダを汚さないようにする設定
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
```

---

## まとめ

今回紹介したツールはどれも、Mac を使う上での小さなストレスを解消してくれるものばかりです。
**Raycast** と **BetterTouchTool** は特に満足度が高く、Mac ユーザーなら入れて損はないと思います。

また、エンジニアの方は、**Ghostty** と **Raycast** の組み合わせであったり、 Docker コンテナをよく使う人は **OrbStack** を入れると、開発環境の快適さが大きく向上すると思います。
