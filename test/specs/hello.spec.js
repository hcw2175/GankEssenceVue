import Vue from 'vue';
import App from 'src/app';

describe('App.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><app></app></div>',
      components: { App }
    }).$mount();
    expect(vm.$el.querySelector('h1').textContent).to.contain('GankEssenceVue');
    expect(vm.$el.querySelector('p').textContent).to.contain('干货精选 -- Vue2版本');
  });
});
