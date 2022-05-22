// 防抖函数
function debounce(fn, delay = 1000, immediate, callback){
	let timer
	let isStarted = false  // 是否立即执行过
	function _debounce(...args) {
		// 利用闭包，存储timer
		// 当有定时器时，清除定时器
		return new Promise((resolve,reject) => {
			if(immediate && !isStarted){
				const value =  fn.apply(this, args)
				resolve(value)
				isStarted = true
			}
			if(timer){
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				const value =  fn.apply(this, args)
				resolve(value)
				isStarted = false
			},delay)
		})
	}

	// 取消
	_debounce.cancel = function (){
		if(timer){
			clearTimeout(timer)
			timer = null
		}
	}
	return _debounce
}