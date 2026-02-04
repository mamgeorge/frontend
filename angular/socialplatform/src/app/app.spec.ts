import { App } from './app';

describe('App', () => {

  it('should have defined title', () => {

    console.log('TEST: defined title!')
    const componentApp = new App();
    expect(componentApp.title).toBeDefined()
  })
})
