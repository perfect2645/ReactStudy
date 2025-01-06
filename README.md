# ReactStudy
react study

# install node and it's tool

## 安装 fnm (快速 Node 管理器)
winget install Schniz.fnm
## 配置 fnm 环境
fnm env --use-on-cd | Out-String | Invoke-Expression
## 下载并安装 Node.js
fnm use --install-if-missing 22
## 验证环境中是否存在正确的 Node.js 版本
node -v # 应该打印 `v22.12.0`
## 验证环境中是否存在正确的 npm 版本
npm -v # 应该打印 `10.9.0`