import { runApp, IAppConfig } from 'ice';

/* const appConfig: IAppConfig = {
  router: {
    type: 'browser',
  },
}; */

runApp({
  app: {
    renderComponent() {
      return <div>整个应用就一个简单组件</div>
    }
  }
})
