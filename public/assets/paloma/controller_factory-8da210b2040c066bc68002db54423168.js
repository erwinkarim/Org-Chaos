!function(t){var r=function(t){this.instances={},this.router=t};r.prototype.make=function(t){for(var r=this.router.parse(t),e=this.instances,o=0,a=r.namespaces.length;a>o;o++){var s=r.namespaces[o];e[s]=e[s]||{},e=e[s]}return e[r.controller]=n()},r.prototype.get=function(t){for(var r=this.router.parse(t),n=this.instances,e=0,o=r.controllerPath.length;o>e;e++){var a=r.controllerPath[e];if(null==n[a])return null;n=n[a]}return n};var n=function(){var r=function(t){this.params=t};return $.extend(r,t.Controller),$.extend(r.prototype,t.Controller.prototype),r};t.ControllerFactory=r}(window.Paloma);