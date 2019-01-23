exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        {
          username: "jthomp838",
          firstName: "Joseph",
          lastName: "Thompson",
          email: "joe.thompson838@gmail.com",
          password:
            "$2a$14$/RlFWbTVuG4F2zYXn6hm8ueN605sN31wA/ptr4n6z4Yd3ps/zY8DO"
        }
      ]);
    });
};
