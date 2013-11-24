var Node = require('./lib/node')

module.exports = Manage

function Manage(force, loops, directed, multiedge) {
  if(!(this instanceof Manage)) {
    return new Manage(force, loops, directed, multiedge)
  }

  var node = new Node(loops, directed, multiedge)

  this.force = force

  for(var method in node) {
    this[method] = bind(node[method], this.force, this)
  }
}

Manage.prototype.constructor = Manage

function bind(fn, force, self) {
  if((typeof fn) !== 'function') {
    return fn
  }

  return function() {
    var args = [].slice.call(arguments)

    args.push(force)

    return fn.apply(self, args)
  }
}



