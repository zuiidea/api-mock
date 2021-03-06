const { mock } = require('mockjs')

module.exports = (app) => {
  class OrderController extends app.Controller {
    index () {
      this.ctx.set('Access-Control-Allow-Origin', '*')
      this.ctx.body = mock({
        'data|12': [
          {
            'id|10000-99999': 1,
            'order_no|1000000000-9999999999': 1,
            'amount|1-1000.1-2': 1,
            'order_type|1-2': 1,
            'order_status|1-3': 1,
            'payment_name|1-3': 1,
            member_phone: /^1[34578]\d{9}$/,
            member_name: '@cname',
            company_name: '@cword(3, 5)公司',
            'platform|1-3': 1,
            'operating_system|1-3': 1,
            brokerage_stores: '@cword(3, 5)店',
            create_time: '@datetime',
            pay_time: '@datetime',
            send_time: '@datetime',
            finish_time: '@datetime',
            'efast_add_status|1-3': 1,
            'subscribed|1-3': 1,
          },
        ],
      })
    }
  }
  return OrderController
}
