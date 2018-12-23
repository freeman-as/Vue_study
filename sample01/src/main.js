Vue.component('my-component', {
    props: ['items'],
    template: '#my-template'
})

function initial() {
    new Vue({
        el: '#msg',
        data: {}
    });
}