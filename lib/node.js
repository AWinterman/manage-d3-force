var Link = require('./change')

module.exports = Nodes

function Nodes(loops, directed, multiedge) {
  Link.call(this, loops, directed, multiedge)
}

var cons = Link
  , proto = cons.prototype = Object.create(Link)

proto.constructor = cons

proto.orphan = function(node, force) {
  // remove every link in the nodes neighborhood
  node.neighborhood.forEach(make_remove(force))

  return node
}

proto.remove = function(node, force) {
  var nodes = force.nodes()

  var idx = nodes.indexOf(node)

  if(idx === -1) {
    return false
  }

  this.orphan(node, force)
  force.nodes(nodes.splice(idx, 1))

  return true
}

function make_remove(force) {
  return function(link) {
    this.remove_link(link, force)
  }
}
