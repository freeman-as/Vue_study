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
            isB: false,
            selF: '',
            selB: '',
            flg: false,
        },
        created: function () {
            this.msgArray.push('sample message.');
            this.message = this.msgArray;
            this.selF = 'red';
            this.selB = 'blue';
            this.flg = true;
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
    });
}