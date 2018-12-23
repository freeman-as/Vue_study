function initial() {
    new Vue({
        el: '#msg',
        data: {
            msgArray: [],
            message: '',
            text1: ''
        },
        created: function () {
            this.msgArray.push('sample message.');
            this.message = this.msgArray;
        },
        methods: {
            doAction: function () {
                this.msgArray.push(this.text1);
                this.message = this.msgArray;
            }
        }
    })
}