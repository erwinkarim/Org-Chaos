!function(e){var t=function(e){this.namespaceDelimiter=e};t.prototype.parse=function(e){var t=e.split(this.namespaceDelimiter),n=t.pop(),o=t,a=o.concat([n]);return{controllerPath:a,namespaces:o,controller:n}},e.Router=t}(window.Paloma);