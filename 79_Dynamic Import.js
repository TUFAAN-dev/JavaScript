// Instead of static import, load module on demand
async function loadModule() {
      const module = await import('./someModule.js');
      module.doSomething();
}

// In browser, dynamic import returns a promise


