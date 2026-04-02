---
title: "dotfiles で管理している Mac 特有のおすすめツール"
date: "2026-04-02"
slug: "mac-tools-recommendation"
tags: ["Mac", "ツール", "dotfiles", "開発環境"]
description: "chezmoi で管理している dotfiles の中から、Mac 特有のおすすめツールを厳選して紹介します。"
---

# dotfiles で管理している Mac 特有のおすすめツール

自分の開発環境は [chezmoi](https://www.chezmoi.io/) という dotfiles 管理ツールで管理しています。設定ファイルやインストールスクリプトを Git で管理しておくことで、新しい Mac でもワンコマンドで同じ環境を再現できます。

今回はその中から、**Mac でしか使えない・Mac だからこそ活きるツール** に絞って紹介します。

なお、この記事に出てくるツールはすべて [Homebrew](https://brew.sh/)（Mac 向けのパッケージマネージャー）でインストールできます。Homebrew 自体の導入がまだの方は、公式サイトの手順に従ってまずそちらを入れてください。

---

## CLI ツール編

ターミナルから使うコマンドラインツールです。

### mactop

Mac の「アクティビティモニタ」をターミナルで見られるようなツールです。Apple Silicon（M1 / M2 / M3 / M4 チップ）の効率コアとパフォーマンスコアがそれぞれどのくらい使われているか、GPU の使用率はどうかといった、Mac 固有の情報をリアルタイムで確認できます。

アクティビティモニタを開くほどでもないけど、今 Mac がどれくらい頑張っているか気になる、というときにさっと `mactop` と打つだけで確認できるので気に入っています。

```bash
brew install mactop
```

### dockutil

Mac の画面下（または横）に並んでいるアプリのアイコンバー「Dock」を、コマンドラインから操作するツールです。

新しい Mac をセットアップすると、使わないアプリが Dock にたくさん並んでいますよね。これを一つずつ右クリックして外すのは面倒なので、自分はスクリプトで一括管理しています。`dockutil --remove all` で全部消してから、普段使うアプリだけを追加する、という流れです。

```bash
brew install dockutil

# 使用例: Dock を一度リセットして、使うアプリだけ追加
dockutil --remove all --no-restart
dockutil --add /Applications/Google\ Chrome.app
dockutil --add /Applications/Visual\ Studio\ Code.app
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

### xcodes

iOS や macOS のアプリ開発に必要な Xcode のバージョン管理ツールです。プロジェクトによって必要な Xcode のバージョンが異なるため、複数バージョンを入れ替えることがあるのですが、Apple の公式サイトからダウンロードすると非常に時間がかかります。xcodes は Aria2 という高速ダウンローダーを使ってくれるので、体感で数倍速いです。

```bash
brew install xcodes

# 使用例
xcodes list           # インストール可能なバージョン一覧
xcodes install 16.2   # 指定バージョンをインストール
xcodes select 16.2    # 使用するバージョンを切り替え
```

---

## GUI アプリ編

### Raycast

Mac には `Cmd + Space` で起動する「Spotlight」という検索・ランチャー機能が標準で搭載されていますが、Raycast はそれを置き換えるアプリです。

アプリの起動や検索に加えて、クリップボードの履歴、スニペット、ウィンドウの整列、電卓、カラーピッカーなど、開発中にちょこちょこ必要になる機能がまとまっています。自分は特にクリップボード履歴とウィンドウ整列を毎日使っていて、これなしだと作業効率が明らかに落ちます。

拡張機能も豊富で、GitHub や 1Password との連携なども追加できます。

```bash
brew install --cask raycast
```

### BetterTouchTool

Mac のトラックパッドやキーボードの操作を自由にカスタマイズできるアプリです。

たとえば「3本指タップでミドルクリック」「ウィンドウを画面端にドラッグすると半分サイズにスナップ」のような動作を設定できます。Mac のトラックパッドはハードウェアとしては優秀ですが、標準のジェスチャー設定だけだと物足りないので、このアプリで拡張しています。

設定はプリセットファイル（`.bttpreset`）としてエクスポートできるので、dotfiles に含めておけば別の Mac でもすぐ同じ操作感を再現できます。

```bash
brew install --cask bettertouchtool
```

### xcodes-app

iOS/macOS アプリ開発で使う Xcode のバージョンを GUI で管理できるアプリです。プロジェクトごとに対応する Xcode バージョンが異なることが多く、Apple Developer サイトから手動でダウンロードするのは手間がかかります。このアプリなら一覧から選んでインストール・切り替えができます。

```bash
brew install --cask xcodes-app
```

### OrbStack

Docker を Mac で使うためのアプリです。公式の Docker Desktop と同じことができますが、起動がかなり速く、メモリ消費も少ないです。Docker Desktop が重いと感じている方にはぜひ試してほしいです。Docker のコマンドはそのまま使えるので、移行もスムーズでした。

ちなみに Docker 以外にも、Ubuntu などの Linux 環境をさっと立ち上げる機能もあります。

```bash
brew install --cask orbstack
```

### Ghostty

ターミナルアプリです。Mac には「ターミナル.app」が標準で入っていますが、開発者向けには iTerm2 というアプリが長く定番でした。Ghostty はその次の選択肢として注目されているターミナルで、GPU を使った描画で動作が軽く、macOS のネイティブな見た目にもよく馴染みます。

自分は iTerm2 から乗り換えましたが、描画のなめらかさと起動の速さが気に入っています。

```bash
brew install --cask ghostty
```

### The Unarchiver

zip 以外のアーカイブ（RAR、7z、LHA など）を解凍できるアプリです。Mac 標準のアーカイブユーティリティだと対応していない形式があったり、日本語のファイル名が文字化けすることがあります。The Unarchiver はそのあたりをカバーしてくれるので、入れておくと安心です。

```bash
brew install --cask the-unarchiver
```

---

## おまけ: defaults コマンドで Mac のシステム設定を変える

ツールの紹介ではありませんが、dotfiles では `defaults` コマンドを使って Mac のシステム設定もスクリプト化しています。`defaults` は Mac のシステム環境設定を、ターミナルから直接書き換えられるコマンドです。GUI で一つずつ変更するのが面倒な設定も、スクリプトにしておけば一発で適用できます。

自分が入れている設定の一部を紹介します。

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

今回紹介したツールはどれも、Mac を使う上での小さなストレスを解消してくれるものばかりです。個人的には **Raycast** と **OrbStack** は特に満足度が高く、入れて損はないと思います。

こういったツールや設定を chezmoi で管理しておくと、Mac を買い替えたときやクリーンインストールしたときにすぐ元の環境に戻せるのでおすすめです。
