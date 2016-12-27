项目中使用ng2-bootstrap很简单
1. 首先定位到项目所在目录，安装ng2-bootstrap

npm install ng2-bootstrap --save

2. index.html界面中引入bootstrap.css文件

3. 在主模快中，引入需要的模块(app.module.ts)

import {ButtonsModule} from "ng2-bootstrap";
@NgModule({
  imports: [ButtonsModule.forRoot()]
})
其他模块同理引入

4. 这样就可以使用了，参考官方api文档
http://valor-software.com/ng2-bootstrap/#/
