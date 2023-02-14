import { EventEmitter } from 'events'

const emitterBase = new EventEmitter()

const on = (event: string, cb: any = null) => {
  return emitterBase.on(event, cb)
}

const removeListener = (event: string, cb: any = null) => {
  return emitterBase.removeListener(event, cb)
}

const emit = (event: string, data?: any) => {
  return emitterBase.emit(event, data)
}

export const emitter = {
  removeListener,
  on,
  emit
}
