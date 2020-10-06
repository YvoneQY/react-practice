react项目相关环境的配置

react项目创建

在安装react项目之前，需要配置好相关环境，node版本至少是8.9以上的。而react项目创建有以下几种方式，任选一种

第一种：官方网站本地开发环境


#全局安装
npm i -g create-react-app

#创建项目
npx create-react-app my-app

cd my-app

#启动
npm start

#编译，部署生成环境时使用，打包压缩bundle包
npm run build
注意npx是npm5.2+或更高版本
webpack或Babel等文件都是隐藏的，可以通过npm run eject显示,使用 此命令是不可逆的。一旦显示就无法再隐藏。

第二种创建

# npm init <initializer> 在 npm 6+ 中可用
npm init react-app my-app

# yarn create 在 Yarn 0.25+ 中可用
yarn create react-app my-app





组件库Antd的安装

第一种：全局安装

npm install antd --save #或yarn安装： yarn add antd

第二种：按需加载,根据项目需要加载对应的组件


npm install antd --save #或yarn安装： yarn add antd
npm i babel-plugin-import --save-dev

找到config文件夹下的webpack.config.js，若找不到config文件，可以运行npm run eject，若该运行不成功，需要Git init，git add *和gitcommit后再操作即可显示。搜索“babel-plugin-named-asset-import”找到后替换如下配置，注意，每次修改webpack.config.js文件，都需要重启项目后，才能生效

                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                        },
                      },
                    },
                  ],
                //以下是新添加
                  [
                    "import",
                    {
                      libraryName: "antd",
                      style: "scss"
                    }
                  ]
                ],

修改 src/App.js,导入antd的按钮组件即可

import React from 'react';
import { Button } from 'antd';
import './App.css';
const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;


知识甜点：根标签不渲染使用Fragment.


react常见几种事件声明
第一种方式：箭头函数声明

import React from 'react';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

        //箭头函数方式
    onFinish = values => {
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
  render() {
        return <div>
        <div className="but1"
                onFinish={onFinish}  onFinishFailed={onFinishFailed}>点击</div>
     <div className="but2"
                onFinish={()=>this.onFinish} >点击</div>
        </div>
  }

}



第二种方式：构造函数中声明



import React from 'react';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.onFinish=this.onFinish.bind(this);
    }
    onFinish(){
        console.log('点击了')
    }

    render() {
        return <div className="login" onFinish={this.onFinish}></div>
  }

}

第三种:bind()绑定


import React from 'react';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    onFinish(){
        console.log('点击了')
    }

    render() {
        return <div className="login" onFinish={this.onFinish.bind(this)}></div>
  }

}




















































































































































































