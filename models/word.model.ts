// These words will have a one to many relationship with users 
// (users will have a list of ids of words they have seen, learned)

// Words will have a one to many relationship with sentences (can be zero if none generated yet)
// Limit to 10 (if sentences.length > 10 pop those at the end (sort by rating - upvotes and downvotes))

// Word number: this could be used to have a clear sequential order for learning, so all users follow the same path
// This is especially relevant for Level 1 and 2, perhpas 3, but 4 and 5 order the orders in a strange way
// Perhaps find an ordering that matches the Taiwan text books


// IMPORTANT: Simplified and Traditional support is essential!