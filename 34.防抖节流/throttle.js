function throttle(fn, interval, options = {leading: true, trailing: true}) {
	let timer
	let lastTime = 0// 存储上一次执行的时间
	function _throttle(...args) {
		let nowTime = new Date().getTime()  // 获取函数执行时间

		if (lastTime === 0 && options.leading === false) {
			lastTime = nowTime
		}

		let remainTime = interval - (nowTime - lastTime) // 剩余时间
		// 如果当前执行函数与上一次执行的时间差大于用户设定的，则应该开启定时器
		if (remainTime <= 0) {
			lastTime = nowTime
			fn.apply(this, args)

		}

		// 是否是开启执行
		if(remainTime > 0 && options.trailing) {
			if(timer){
				clearTimeout(timer)
				timer = null
			}
			timer = setTimeout(() => {
				fn.apply(this,args)
				lastTime = options.leading ? 0 : new Date().getTime()
			},remainTime)
		}
	}

	return _throttle
}