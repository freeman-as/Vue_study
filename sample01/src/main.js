function initial() {
    new Vue({
        el: '#msg',
        data: {
            msgArray: [],
            message: '',
            text1: '',
            number: '0',
            woTax: '0',
            isA: true,
            isB: false
        },
        created: function () {
            this.msgArray.push('sample message.');
            this.message = this.msgArray;
        },
        methods: {
            doAction: function () {
                this.msgArray.push(this.text1);
                this.message = this.msgArray;
            },
            change: function () {
                this.isA = !this.isA;
                this.isB = !this.isB;
            }
        },
        computed: {
            wTax: {
                get: function () {
                    return parseInt(this.woTax * 1.08);
                },
                set: function (val) {
                    this.woTax = Math.ceil(val / 1.08);
                }
            }
        }
    })
}