---
title: "zsh から fish shell に乗り換えるべき理由と、おすすめの設定・プラグイン"
date: "2026-04-02"
slug: "fish-shell-recommendation"
tags: ["fish", "シェル", "CLI", "dotfiles", "開発環境"]
description: "zsh と比較した fish shell のメリット、fish 4.0 の Rust 化、Fisher プラグイン、補完設定などをまとめて紹介します。"
---

# zsh から fish shell に乗り換えるべき理由

多くの Mac ユーザーはデフォルトの zsh をそのまま使っていると思います。自分もかつてはそうでしたが、fish shell に乗り換えてからは、シェルの設定に費やす時間が大幅に減り、日々のターミナル操作がかなり快適になりました。

この記事では、zsh と比較した fish shell のメリット、2024 年にリリースされた fish 4.0 の変更点、そして自分が実際に使っている Fisher プラグインや設定を紹介します。

```bash
brew install fish
```

---

## なぜ zsh ではなく fish なのか

### 設定なしで「使える」シェル

zsh を快適に使おうとすると、まず Oh My Zsh や Prezto などのフレームワークを入れ、そこからプラグインを選び、`.zshrc` を育てていく必要があります。シンタックスハイライトや自動補完を使うには `zsh-syntax-highlighting` や `zsh-autosuggestions` を追加でインストールしなければなりません。

fish はこれらの機能が **すべてデフォルトで組み込まれています**。インストールした瞬間から、以下が何も設定しなくても動きます。

- **シンタックスハイライト**: コマンドが正しければ青、存在しないコマンドは赤で表示される
- **オートサジェスション**: 入力中にヒストリーや補完候補が灰色で表示され、`→` キーで確定できる
- **タブ補完**: コマンドのフラグやサブコマンドに対して、説明文付きの補完候補が表示される

zsh では「まず設定を整えてから使い始める」のに対し、fish は **「入れた瞬間から最高の状態」** です。

### エラーメッセージがわかりやすい

zsh でスクリプトを書いたときに、エラーメッセージが不親切で原因の特定に時間がかかった経験がある方も多いと思います。fish はエラーメッセージが具体的で、何が悪いのか・どう直せばいいのかを明確に教えてくれます。

例えば、存在しないコマンドを実行しようとした場合でも、fish は類似コマンドの候補をサジェストしてくれます。

### Web ベースの設定画面

`fish_config` コマンドを実行すると、ブラウザで設定画面が開きます。プロンプトのテーマ、カラースキーム、関数の一覧、変数の確認などが GUI で行えます。

```bash
fish_config
```

ターミナルの設定ファイルを直接編集するのが苦手な方でも、視覚的にカスタマイズできるのは大きなメリットです。

### POSIX 非準拠は実はメリット

「fish は POSIX 非準拠だから...」という理由で敬遠する方もいますが、日常のインタラクティブ操作で POSIX 準拠が必要になる場面はほとんどありません。シェルスクリプトを書く場合は `#!/bin/bash` や `#!/bin/sh` を使えばよく、**ログインシェルとスクリプト用シェルは分けて考えるべき** です。

むしろ POSIX の制約を捨てたことで、fish はよりモダンで直感的な構文を採用できています。例えば、`&&` の代わりに `and`、`||` の代わりに `or` といった書き方ができ（もちろん `&&` と `||` も使えます）、変数のスコープも `-g`（グローバル）、`-l`（ローカル）、`-x`（エクスポート）と明示的に指定できます。

---

## fish 4.0: Rust への書き換え

2024 年末にリリースされた fish 4.0 は、長年 C++ で書かれていたコードベースが **Rust で完全に書き換え** られた大きなマイルストーンです。

### Rust 化で何が変わったか

- **パフォーマンスの向上**: 起動時間やコマンド実行のレスポンスが改善されました。特に大量のヒストリーを持つ環境での検索が高速になっています
- **メモリ安全性**: Rust のメモリ安全性の恩恵により、セグメンテーションフォルトやメモリリークのリスクが大幅に低減しました
- **今後の開発の加速**: Rust エコシステムの充実したツールチェーン（Cargo、clippy、テストフレームワーク）により、コントリビューションの敷居が下がり、開発速度の向上が期待されます

ユーザー側で意識する必要はほとんどありませんが、「シェルがクラッシュする」という不安が減るのは精神的にも大きいです。シェルは開発のすべての起点になるツールなので、その安定性が向上したことは非常にポジティブです。

---

## Fisher: fish のプラグインマネージャー

fish のプラグイン管理には [Fisher](https://github.com/jorgebucaran/fisher) を使っています。Fisher 自体もプラグインとして管理されるシンプルな設計で、`fish_plugins` というファイルにプラグイン一覧を書いておくだけでインストール・更新ができます。

```bash
# Fisher のインストール
curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher
```

### おすすめプラグイン

自分が実際に使っているプラグインは以下の通りです。

#### jethrokuan/fzf

fish 上で [fzf](https://github.com/junegunn/fzf)（ファジーファインダー）を快適に使うためのプラグインです。以下のキーバインドが追加されます。

- `Ctrl+R`: コマンドヒストリーのファジー検索
- `Ctrl+O`: ファイルのファジー検索
- `Ctrl+Alt+F`: fzf でファイルを検索してコマンドラインに挿入

zsh で fzf を使う場合はキーバインド設定を自分で `.zshrc` に追加する必要がありますが、このプラグインを入れるだけですぐ使えます。

```bash
fisher install jethrokuan/fzf
```

#### jethrokuan/z

よく移動するディレクトリを学習して、部分一致でジャンプできるプラグインです。例えば `z port` と打つだけで、以前 `cd` したことのある `/Users/mzk/Works/src/github.com/msageha/portfolio` に飛べます。

zsh の `z` コマンドと同様の機能ですが、fish のオートサジェスションと組み合わさることで、補完候補が表示されるのがさらに便利です。

```bash
fisher install jethrokuan/z
```

#### 0rax/fish-bd

現在いるディレクトリのパスの中から、親ディレクトリ名を指定して一気に上に移動できるプラグインです。

例えば、`/Users/mzk/Works/src/github.com/msageha/portfolio/content/blog` にいるときに `bd Works` と打つと `/Users/mzk/Works` に一発で移動できます。`cd ../../../../../../` のような入力から解放されます。

```bash
fisher install 0rax/fish-bd
```

#### decors/fish-ghq

[ghq](https://github.com/x-motemen/ghq) で管理しているリポジトリを fzf で検索して移動できるプラグインです。`Ctrl+G` でリポジトリの一覧が fzf で表示され、選択するとそのディレクトリに `cd` します。

Git リポジトリを大量に扱う開発者には必須のプラグインです。

```bash
fisher install decors/fish-ghq
```

#### dracula/fish

[Dracula](https://draculatheme.com/) カラーテーマを fish に適用するプラグインです。ターミナルエミュレータや各種ツールのテーマと揃えると統一感が出ます。

```bash
fisher install dracula/fish
```

#### oh-my-fish/plugin-peco

[peco](https://github.com/peco/peco) を fish で使うためのプラグインです。fzf と似たインタラクティブフィルタリングツールで、用途に応じて使い分けています。

```bash
fisher install oh-my-fish/plugin-peco
```

### fish_plugins ファイルで一括管理

Fisher のプラグイン一覧は `~/.config/fish/fish_plugins` に記録されます。このファイルを dotfiles で管理しておけば、新しい環境でも `fisher update` を実行するだけで全プラグインが復元されます。

```text
jorgebucaran/fisher
jethrokuan/z
0rax/fish-bd
oh-my-fish/plugin-peco
jethrokuan/fzf
decors/fish-ghq
dracula/fish
```

---

## 補完の設定

fish の最大の魅力のひとつが **補完機能の充実度** です。

### 組み込みの補完

fish は、man ページを解析して自動的に補完候補を生成する `fish_update_completions` というコマンドを持っています。これにより、インストール済みのほとんどの CLI ツールに対して、何もしなくても基本的な補完が効きます。

```bash
fish_update_completions
```

### CLI ツールごとの補完生成

多くのモダンな CLI ツールは、fish 向けの補完スクリプトを自動生成する機能を持っています。自分は以下のツールの補完を生成して `~/.config/fish/completions/` に配置しています。

```bash
# 各ツールの補完を生成
docker completion fish > ~/.config/fish/completions/docker.fish
gh completion -s fish > ~/.config/fish/completions/gh.fish
kubectl completion fish > ~/.config/fish/completions/kubectl.fish
rustup completions fish > ~/.config/fish/completions/rustup.fish
uv generate-shell-completion fish > ~/.config/fish/completions/uv.fish
chezmoi completion fish > ~/.config/fish/completions/chezmoi.fish
ruff generate-shell-completion fish > ~/.config/fish/completions/ruff.fish
bat --completion fish > ~/.config/fish/completions/bat.fish
fd --gen-completions fish > ~/.config/fish/completions/fd.fish
rg --generate complete-fish > ~/.config/fish/completions/rg.fish
```

これらを dotfiles のセットアップスクリプトに含めておくと、環境構築時に一括で補完が揃います。

### 補完の動作

fish の補完がすごいのは、単にコマンド名やファイル名を補完するだけではなく、**フラグの説明文まで表示してくれる** 点です。例えば `git commit --` と入力して `Tab` を押すと、`--amend`、`--message` などのフラグが、それぞれの説明文付きで一覧表示されます。

zsh でも似たことは可能ですが、`zsh-completions` のインストールと `.zshrc` への設定追加が必要です。fish ではこれがデフォルトの挙動です。

---

## その他おすすめの設定

### config.fish のキャッシュ

`direnv hook fish` や `kubectl completion fish` などの初期化処理は、呼び出すたびに数百ミリ秒かかることがあります。自分はこれらの出力をキャッシュファイルに保存し、1 週間ごとに更新する仕組みを config.fish に入れています。

```fish
set -l FISH_CONFIG_CACHE $HOME/.cache/fish/config.fish

if test -f $FISH_CONFIG_CACHE
    # キャッシュが1週間以内なら再利用
    set file_creation_time (stat -f %B $FISH_CONFIG_CACHE)
    set current_time (date +%s)
    set one_week_ago (math $current_time - 604800)

    if test $file_creation_time -ge $one_week_ago
        source $FISH_CONFIG_CACHE
        return
    end
end

# キャッシュを再生成
mkdir -p (dirname $FISH_CONFIG_CACHE)
rm -f $FISH_CONFIG_CACHE
touch $FISH_CONFIG_CACHE

# 重い初期化処理をキャッシュに書き出す
if type -q direnv
    direnv hook fish >> $FISH_CONFIG_CACHE
end
if type -q kubectl
    kubectl completion fish >> $FISH_CONFIG_CACHE
end

source $FISH_CONFIG_CACHE
```

これにより、シェルの起動が体感できるレベルで速くなります。

### カーソルスタイルの設定

fish はモードによってカーソルの形状が変わります（vi モードなど）。ターミナルアプリ側の設定と合わせるために、明示的にカーソルスタイルを固定しておくと見た目が安定します。

```fish
set -g fish_cursor_default block
set -g fish_cursor_insert block
set -g fish_cursor_replace_one underscore
set -g fish_cursor_visual block
```

### fzf のテーマ設定

fzf を使う際のカラースキームを環境変数で設定できます。ターミナルのテーマに合わせると統一感が出ます。

```fish
# Dracula テーマ
set -gx FZF_DEFAULT_OPTS "\
  --color=fg:#f8f8f2,bg:#282a36,hl:#bd93f9 \
  --color=fg+:#f8f8f2,bg+:#44475a,hl+:#bd93f9 \
  --color=info:#ffb86c,prompt:#50fa7b,pointer:#ff79c6 \
  --color=marker:#ff79c6,spinner:#ffb86c,header:#6272a4"
```

### Starship プロンプト

プロンプトのカスタマイズには [Starship](https://starship.rs/) を使っています。fish 標準のプロンプトも十分使えますが、Starship はシェルに依存しないため、万が一 bash や zsh を使う場面でも同じ見た目を維持できます。

```fish
if type -q starship
    starship init fish | source
end
```

### カスタム関数

fish では `~/.config/fish/functions/` ディレクトリに `関数名.fish` というファイルを置くだけで、自動的に関数として読み込まれます。zsh のように `.zshrc` に全部書く必要がなく、関数ごとにファイルが分かれるため管理しやすいです。

自分は以下のようなカスタム関数を定義して使っています。

- **fzf_ssh**: `~/.ssh/config` のホスト一覧を fzf で選択して SSH 接続
- **fzf_load_env**: カレントディレクトリの `.env` ファイルを fzf で選択して環境変数に読み込む
- **git_clean_branches**: main/master 以外のローカルブランチを一括削除
- **git_checkout_main**: main または master ブランチに切り替え（存在する方に自動判定）

---

## まとめ

fish shell は「設定に時間をかけたくないけど、快適なシェル環境がほしい」という方に最適です。

- **zsh からの移行理由**: シンタックスハイライト・オートサジェスション・補完がすべてデフォルトで動く
- **fish 4.0**: Rust 化によりパフォーマンスと安定性が向上
- **Fisher + プラグイン**: fzf、z、ghq 連携など、少数の厳選プラグインで十分快適
- **補完**: 組み込み補完 + CLI ツールの補完生成で、ほぼすべてのコマンドに補完が効く
- **設定のキャッシュ**: 重い初期化処理をキャッシュすることでシェルの起動を高速化

zsh で `.zshrc` を育てるのに疲れた方は、ぜひ fish を試してみてください。
