module.exports = Change

var Status = require('./status')

function Change(loops, directed, multiedge) {
  this.loops = loops
  this.multiedge = multiedge

  Status.call(this, directed)
}

var cons = Change
  , proto = cons.prototype = Object.create(Status.prototype)

proto.constructor = cons

proto.add_link = function(link, force) {
  var name = this.name(link)
    , idx

  if(!this.multiedge && this.has(link, force)) {
    return false
  }

  if(!this.loops) {
    if(link.source === link.target) {
      return false
    }
  }

  link.source.neighborhood.push(link)
  link.target.neighborhood.push(link)

  this.force.links().push(link)

  return true
}

proto.remove_link = function(link, force) {
  var link_array = this.force.links()
    , index = this.indexOf(link)
    , target_index
    , source_index

  if(index === -1) {
    return false
  }

  target_index = source.neighborhood.indexOf(link)
  source_index = source.neighborhood.indexOf(link)

  link_array[index].source.neighborhood.splice(target_index, 1)
  link_array[index].target.neighborhood.splice(source_index, 1)

  link_array.splice(index, 1)

  return true
}

proto.reverse = function(link) {
  var copy = this.copy(link)

  copy.source = link.target
  copy.target = link.source

  return copy
}

proto.copy = function(obj) {
  return JSON.parse(JSON.stringify(obj))
}
