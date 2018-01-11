exports.firebaseUrl = function (choice, req=null, usr=null) {
  console.log("choise= " + choice + " do " + usr);
  switch(choice){
    case "database_url":
      return "https://techedu-1e7d4.firebaseio.com"
    case "get_cookie_auth":
      return ('https://techedu-1e7d4.firebaseio.com/cookies/' + req.cookies.auth + '.json');
    case "get_users":
      return 'https://techedu-1e7d4.firebaseio.com/users/.json';
    case "get_organizations":
      return 'https://techedu-1e7d4.firebaseio.com/organizations.json';
    case "get_courses_all":
      return 'https://techedu-1e7d4.firebaseio.com/courses.json';
    case "get_courses_all_auth":
      if (!usr) return 'https://techedu-1e7d4.firebaseio.com/users/'+ req.user + '/courses.json';
      else return 'https://techedu-1e7d4.firebaseio.com/users/'+ usr + '/courses.json';
    case "get_user_auth":
      return ('https://techedu-1e7d4.firebaseio.com/users/' + req.user + '.json');
  }
}
