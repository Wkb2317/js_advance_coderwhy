function throttle(fn, interval, options = {leading: true, trailing: false}, resultCallback) {
	let lastTime = 0  // 上一次执行的时间
	let timer = null
	// leading 是否第一次触发
	// trailing 结尾是否触发
	const {leading, trailing} = options

	function _throttle(...args) {
		let nowTime = new Date()
		if (lastTime === 0 && leading === false) {
			lastTime = nowTime
		}

		let remainTime = interval - (nowTime - lastTime)
		if (remainTime <= 0) {
			const value =  fn.apply(this, args)
			if(typeof  resultCallback === 'function') resultCallback(value)
			lastTime = nowTime
			return
		}

		if (trailing && remainTime > 0) {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				const value =  fn.apply(this, args)
				if(typeof  resultCallback === 'function') resultCallback(value)
				lastTime = leading ? 0 : new Date().getTime()
			}, remainTime)
		}
	}

	// 取消功能
	_throttle.cancel = function (){
		if(timer) {
			clearTimeout(timer)
			timer = null
		}
		lastTime = 0
		console.log('已取消')
	}

	return _throttle
}