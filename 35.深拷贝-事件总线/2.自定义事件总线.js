class EventBus {
	constructor() {
		this.eventCallbacks = {}
	}

	on(eventName, handler,thisArg){
		if(!this.eventCallbacks[eventName]){
			this.eventCallbacks[eventName] = []
		}
		this.eventCallbacks[eventName].push({
			handler,
			thisArg
		})
	}

	off(eventName, handleCallBack) {
		let event = [...this.eventCallbacks[eventName]]
		if (!event) return
		this.eventCallbacks[eventName] = event.filter(item => item.handler !== handleCallBack)
	}

	emit(eventName, payload) {
		const event = this.eventCallbacks[eventName]
		if(!event) return
		event.forEach(obj => {
			obj.handler.call(obj.thisArg, payload)
		})
	}
}

const eventBus = new EventBus()

eventBus.on('changeValue',handleCallback)
eventBus.on('changeValue', function (value){
	console.log('监听：', value)
}, {name: 'coder'})

function handleCallback(value) {
	console.log('handleCallBack:',value)
}
eventBus.on('changeValue',handleCallback)

eventBus.off('changeValue', handleCallback)

eventBus.emit('changeValue', 'aaa')

