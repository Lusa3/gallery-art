/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/
import { join } from 'path'
import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

sourceMapSupport.install({ handleUncaughtExceptions: false })

new Ignitor(__dirname)
  .httpServer()
  .start()


  new Ignitor(__dirname)
  .httpServer()
  .start()
  .then(() => {
    // Servir les fichiers statiques pour l'application React
    const app = global[Symbol.for('ioc.use')]('Adonis/Core/Application'); // Accéder à l'application Adonis
    app.static('/', join(__dirname, '..', 'resources', 'frontend', 'build'));
  })
  .catch(console.error);

  