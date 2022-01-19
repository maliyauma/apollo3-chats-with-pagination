Project includes type policy manipulation in apollo 3

backend is a graphql server that will read write update and delete chats
chats query gets all chats 
pagChats query gets a paginated list with limit and page argument
the resolver uses a mongoose plugin that returns the page,next page,limit,total documents...
using this info we can browse to whichever page by passing in a new page value on the fetch more
the query response will consist of a chats object of arrays and an object of the pagination options
in the front end we use the field policy to tell the cache 
to append the new results to the existing cache on the chats object of array,
while replacing the object of pagination options with the new incoming data and discarding the old data

Cache updates after add,update and delete mutations have been worked in to avoid network refetch queries after the actions


