## ArdourCollab

Ardour Collab is an Angular application which uses a node Express backend to expose the endpoints of the OSC control surface in Ardour. The intent is to develop a web-based interface that you can use to control your DAW transport and share tracks with your band members or others in an online cloud presence.

Currently the only functionality is a simple wrapper around the oscsend utility with a sanitizer for whatever you choose to do with it.

# Sending commands
The simple CLI control allows you to send commands straight to Ardour.

You will, of course, have to go into preferences->control surfaces to enable OSC. Read the howto on 

Try /transport_play and /transport_stop

This is development code, if you weren't sent here then you probably don't need it.

# Planned functionality

Eventually I plan to add an interface that looks much like Ardour so you can use Ardour "headless" and control it from another machine on your network. E.g. I can plug my audio equipment into the main recording machine and I can connect from my laptop to trigger the transport to start and stop, and perform other sundry tasks. This will allow me to remotely control my studio from my laptop over the wifi. You can also use a phone, but that's not the current target media.





# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

You will also need to run `node server.cjs` which will start the Express backend on port 3000.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
