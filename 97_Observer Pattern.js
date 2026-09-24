class EventEmitter {
      constructor() {
            this.events = {};
      }
      on(event, listener) {
            if (!this.events[event]) this.events[event] = [];
            this.events[event].push(listener);
      }
      emit(event, data) {
            if (this.events[event]) {
                  this.events[event].forEach(listener => listener(data));
            }
      }
}
const emitter = new EventEmitter();
emitter.on("data", (data) => console.log("Listener 1:", data));
emitter.on("data", (data) => console.log("Listener 2:", data));
emitter.emit("data", {value: 42});

