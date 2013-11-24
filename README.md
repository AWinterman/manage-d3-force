# D3-force-link-manage #

Manage d3 force directed layouts.

 - `loops`: true if a link can connect a node to itself?
 - `directed`: true if a link from A -> B === B -> A?
 - `multiedge`: true if the link A -> B can appear multiple times in a graph.

## `manage.is(A, B)` ##
Checks for equality between two links, paying attention to
whether the graph is directed. Links are equal if they point to the same
objects.

## `manage.indexOf(link)` ##
Checks if the link exists in the d3.force.links() array. It has the same
signature as Array.indexOf

## `manage.has(link, force)`##
Returns true if the link is in the force directed
layout.

##`manage.count(link)` ##
Returns a count of the number of times a link appears in
the `force.links()` array. 

## `manage.add_link(link)`##
Add a link to the graph. If the graph does not allow multiple edges, check st
to make sure we don't already have it. `Change#add_link` also updates the
neighborhoods of the source and the target to include the new link.  Returns
`true` if the link was successfully added to the array, `false` otherwise.

## `manage.remove_link(link)` 

Remove the link, once. If the graph is not directed, it will treat a link
and its reverse as though they were identical. 

This method will also update the neighborhood attributes of the source and
target, removing its first argument from both.  If the link to be removed
is in the d3.layout.force().link() array, returns `true`. Returns
`false` otherwise.

## `manage.reverse(link)` ##
Reverse source and target for a link.

## `manage.orphan(node)` ##
Remove all links connecting to a node

## `manage.remove(node)` ##
Remove all links to a node (`orphan` it), and then rmove the node itself.

