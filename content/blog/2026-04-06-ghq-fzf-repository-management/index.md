---
title: "ghq + fzf でリポジトリ管理を快適にする"
date: "2026-04-06"
slug: "ghq-fzf-repository-management"
tags: ["ghq", "fzf", "CLI", "Git", "開発環境"]
description: "ghq でリポジトリを一元管理し、fzf と組み合わせて爆速で移動する方法を、fish・zsh・bash それぞれの導入手順とともに紹介します。"
---

# ghq + fzf でリポジトリ管理を快適にする

開発をしていると、手元のリポジトリがどんどん増えていきます。
`~/projects` に置いたり、`~/work` に置いたり、`~/Desktop` にとりあえず clone したり。気づいたら同じリポジトリが複数箇所にあったり、「あのリポジトリどこに clone したっけ」と探し回ったりした経験、ないでしょうか。

自分はこの問題を [ghq](https://github.com/x-motemen/ghq) と [fzf](https://github.com/junegunn/fzf) の組み合わせで解決しています。一度この運用に慣れると、もう手動で `git clone` して適当なディレクトリに置く生活には戻れません。

---

## ghq とは

ghq は、Git リポジトリを **一定のルールに従ったディレクトリ構造** で管理するツールです。Go の `go get` に影響を受けた設計で、リポジトリの URL に基づいてディレクトリが自動的に決まります。

例えば、以下のコマンドでリポジトリを取得すると:

```bash
ghq get https://github.com/junegunn/fzf
```

`~/ghq/github.com/junegunn/fzf` のように、ホスト名 / オーナー名 / リポジトリ名 という階層で自動的に配置されます。

GitHub だけでなく GitLab や Bitbucket のリポジトリも同じルールで管理できるので、「このリポジトリはどこにあるか」を考える必要がなくなります。ホスティングサービスが違っても、ディレクトリ構造を見ればすぐにわかります。

### よく使うコマンド

```bash
# リポジトリを取得（clone）
ghq get https://github.com/junegunn/fzf

# SSH で取得（git@... 形式も使える）
ghq get git@github.com:msageha/portfolio.git

# 管理しているリポジトリの一覧
ghq list

# フルパスで一覧表示
ghq list --full-path

# 全リポジトリを一括更新
ghq list | ghq get --update --parallel
```

最後の一括更新は地味に便利で、各リポジトリのリモート追跡ブランチをまとめて最新にしてくれます。朝の作業開始前に叩いておくと、`git pull` する前にリモートの状況を把握できます。

### ghq の設定

ghq のルートディレクトリは `.gitconfig` で設定します。

```ini
[ghq]
    root = ~/Works/src
```

`root` を設定すると、`ghq get` で取得したリポジトリはすべてこのディレクトリ以下に配置されます。デフォルトでは `~/ghq` になりますが、自分は `~/Works/src` にしています。好みの場所に変えてください。

---

## fzf と組み合わせる

ghq だけでも十分便利ですが、リポジトリが増えてくると `ghq list` の出力をスクロールして探すのが面倒になります。ここで fzf の出番です。

fzf はインタラクティブなファジーファインダーで、標準入力から受け取ったテキストをあいまい検索できます。ghq と fzf を組み合わせると、**リポジトリ名の一部を入力するだけで目的のリポジトリに一瞬で移動** できます。

基本的な考え方はシンプルで、`ghq list` の出力を fzf に渡して、選択した結果に `cd` するだけです。

```bash
cd $(ghq list --full-path | fzf)
```

これだけで動きますが、fzf をキャンセルすると空文字が `cd` に渡って HOME に飛ばされるので、実用的にはシェルの関数として空チェック付きで登録しておくのがおすすめです。

---

## シェルごとの導入方法

### インストール（共通）

まず ghq と fzf をインストールします。どのシェルでも共通です。

```bash
# Homebrew（macOS / Linux）
brew install ghq fzf

# mise でインストールする場合
mise use -g ghq@latest fzf@latest

# Go でインストールする場合（ghq のみ）
go install github.com/x-motemen/ghq@latest
```

`.gitconfig` に ghq のルートディレクトリを設定しておきます。

```bash
git config --global ghq.root ~/Works/src
```

### fish shell の場合

fish を使っている場合は、Fisher プラグインを入れるのが一番手軽です。Fisher をまだ入れていない方は、[前回の fish shell の記事](/blog/fish-shell-recommendation/)を参考にインストールしてください。

```bash
fisher install jethrokuan/fzf
fisher install decors/fish-ghq
```

`decors/fish-ghq` を入れると、`Ctrl+G` を押すだけで ghq 管理下のリポジトリが fzf で一覧表示され、選択するとそのディレクトリに移動します。設定は以上です。キーバインドもプラグインが勝手に登録してくれるので、何も書く必要がありません。

fish はこういう「プラグインを入れたら即使える」体験が本当に良いです。

### zsh の場合

zsh では、関数を `.zshrc` に追加します。

```bash
# .zshrc に追加
function ghq-fzf() {
  local selected
  selected=$(ghq list --full-path | fzf --preview "ls -la {}" --query "$LBUFFER")
  if [ -n "$selected" ]; then
    BUFFER="cd ${selected}"
    zle accept-line
  fi
  zle clear-screen
}
zle -N ghq-fzf
bindkey '^g' ghq-fzf
```

これで `Ctrl+G` を押すと、ghq のリポジトリ一覧が fzf で表示されます。`--preview` オプションで選択中のディレクトリの中身がプレビューされるのも便利です。

fzf 自体のキーバインド（`Ctrl+R` でヒストリー検索など）も有効にしたい場合は、以下も `.zshrc` に追加してください。

```bash
# fzf のキーバインドと補完を有効化
source <(fzf --zsh)
```

### bash の場合

bash でも基本的な考え方は同じです。`.bashrc` に以下を追加します。

```bash
# .bashrc に追加
function ghq-fzf() {
  local selected
  selected=$(ghq list --full-path | fzf --preview "ls -la {}" --query "$READLINE_LINE")
  if [ -n "$selected" ]; then
    cd "$selected" || return
    READLINE_LINE=""
    READLINE_POINT=0
  fi
}
bind -x '"\C-g": ghq-fzf'
```

`Ctrl+G` で fzf が起動し、選択したリポジトリに移動します。

fzf のキーバインドと補完を有効にするには、以下も追加します。

```bash
# fzf のキーバインドと補完を有効化
eval "$(fzf --bash)"
```

---

## 実際の運用

自分の環境では、個人のリポジトリ、会社のリポジトリ、OSS のリポジトリなど、数十個のリポジトリを ghq で管理しています。新しいプロジェクトに参加したときも `ghq get` するだけで、ディレクトリの場所を考える必要がありません。

また、新しい PC をセットアップするときにも ghq は威力を発揮します。リポジトリの URL 一覧をスクリプトにまとめておけば、`ghq get` を順番に実行するだけで全リポジトリが正しいディレクトリ構造で復元されます。

```bash
#!/usr/bin/env bash
# リポジトリを一括取得するスクリプトの例
ghq get --shallow git@github.com:msageha/portfolio.git
ghq get --shallow git@github.com:your-org/project-a.git
ghq get --shallow git@github.com:your-org/project-b.git

# 取得済みリポジトリの一括更新
ghq list | ghq get --update --parallel
```

`--shallow` をつけると shallow clone になるので、ヒストリーが大量にあるリポジトリでも高速に取得できます。

---

## まとめ

- **ghq**: リポジトリを URL ベースのディレクトリ構造で一元管理。「どこに clone したっけ」問題から解放される
- **fzf との組み合わせ**: リポジトリ名をあいまい検索して一瞬で移動。リポジトリが増えるほど効果を実感する
- **fish**: `decors/fish-ghq` プラグインを入れるだけ。`Ctrl+G` で即使える
- **zsh / bash**: 関数を設定ファイルに追加して `Ctrl+G` にバインド

リポジトリの数が少ないうちは `cd` で直接移動しても困りませんが、10 個、20 個と増えてくると ghq + fzf のありがたみがわかります。導入コストはほぼゼロなので、気になった方はまず `ghq get` で 1 つリポジトリを取得してみてください。
