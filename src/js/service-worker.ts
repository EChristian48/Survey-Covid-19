import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

precacheAndRoute(['/', 'main.js'])

registerRoute(/./, new StaleWhileRevalidate())
