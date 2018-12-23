function initial() {
    new Vue({
        el: '#msg',
        data: {
            msgArray: [],
            message: '',
            text1: '',
            number: 0
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
        },
        computed: {
            result: function () {
                var total = 0;
                var n = parseInt(this.number);
                total = ((1 + n) * n) / 2;
                // for (var i = 0; i <= this.number * 1; i++) {
                //     total += i;
                // }
                return total;
            }
        }
    })
}