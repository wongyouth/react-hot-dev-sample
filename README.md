## React 模块热替换 例子

这里放了最简单的 React Hot Module Replacement 的例子。

## 运行开发用服务器

    npm start

## 热替换效果

启动 dev-server 后，打开浏览器地址 http://localhost:8080,
然后修改 ./app/components/App.jsx 文件，可看到浏览器中内容直接更新变化。

## 编译成 iOS 项目(需要在MacOSX下安装好Xcode)

cordova platform add ios
# 打包JS文件
webpack
# 生产iOS代码
cordova build ios
# 运行iOS模拟器
cordova run ios --simulate
