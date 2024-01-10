Middleware、Guard、Pipe、Interceptor、ExceptionFilter 都可以透明的添加某种处理逻辑到某个路由或者全部路由，这就是 AOP 的好处。

但是它们之间的顺序关系是什么呢？

调用关系这个得看源码了。

对应的源码是这样的：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a6c3d7eebcc4d248bd8df8c1f71f7ed~tplv-k3u1fbpfcp-watermark.image?)

很明显，进入这个路由的时候，会先调用 Guard，判断是否有权限等，如果没有权限，这里就抛异常了：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f066097b408148f7aa96b301e4613ca9~tplv-k3u1fbpfcp-watermark.image?)

抛出的 ForbiddenException 会被 ExceptionFilter 处理，返回 403 状态码。

如果有权限，就会调用到拦截器，拦截器组织了一个链条，一个个的调用，最后会调用的 controller 的方法：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20d438fd167e438cb63307c10643308a~tplv-k3u1fbpfcp-watermark.image?)

调用 controller 方法之前，会使用 pipe 对参数做处理：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc6133a5919044d29decd780253b7f6f~tplv-k3u1fbpfcp-watermark.image?)

会对每个参数做转换：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2017b403a0fb4bc6a41b261fd7cb2da0~tplv-k3u1fbpfcp-watermark.image?)

ExceptionFilter 的调用时机很容易想到，就是在响应之前对异常做一次处理。

而 Middleware 是 express 中的概念，Nest 只是继承了下，那个是在最外层被调用。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4d0291cafa9449ca4702617464c5979~tplv-k3u1fbpfcp-watermark.image?)

这就是这几种 AOP 机制的调用顺序。把这些理清楚，就知道什么逻辑放在什么切面里了。

## 总结

Nest 基于 express 这种 http 平台做了一层封装，应用了 MVC、IOC、AOP 等架构思想。

MVC 就是 Model、View Controller 的划分，请求先经过 Controller，然后调用 Model 层的 Service、Repository 完成业务逻辑，最后返回对应的 View。

IOC 是指 Nest 会自动扫描带有 @Controller、@Injectable 装饰器的类，创建它们的对象，并根据依赖关系自动注入它依赖的对象，免去了手动创建和组装对象的麻烦。

AOP 则是把通用逻辑抽离出来，通过切面的方式添加到某个地方，可以复用和动态增删切面逻辑。

Nest 的 Middleware、Guard、Interceptor、Pipe、ExceptionFilter 都是 AOP 思想的实现，只不过是不同位置的切面，它们都可以灵活的作用在某个路由或者全部路由，这就是 AOP 的优势。

我们通过源码来看了它们的调用顺序，Middleware 是 Express 的概念，在最外层，到了某个路由之后，会先调用 Guard，Guard 用于判断路由有没有权限访问，然后会调用 Interceptor，对 Contoller 前后扩展一些逻辑，在到达目标 Controller 之前，还会调用 Pipe 来对参数做检验和转换。所有的 HttpException 的异常都会被 ExceptionFilter 处理，返回不同的响应。

**Nest 就是通过这种 AOP 的架构方式，实现了松耦合、易于维护和扩展的架构。**