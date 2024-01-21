import { register } from 'register-service-worker'
import { useQuasar } from 'quasar'
import { NetworkHandler } from 'src/assets/scripts/networkHandler'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(/* registration */) {
    NetworkHandler.setOnline(true)
  },

  registered(/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached(/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound(/* registration */) {
    // console.log('New content is downloading.')
  },

  updated(/* registration */) {
    // console.log('New content is available; please refresh.')
  },

  offline() {
    const $q = useQuasar()

    $q.notify({
      message: 'You are offline. Please check your internet connection.',
      color: 'info',
      actions: [
        { icon: 'close', color: 'white', round: true, handler: () => { /* ... */ } }
      ]
    })

    NetworkHandler.setOffline(true)
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error(/* err */) {
    // console.error('Error during service worker registration:', err)
  }
})
