//object literals

const blogs = [
    {
        title: "prvi blog",
        likes: 30
    },
    {
        title: "drugi blog",
        likes: 50
    }
];

let user = {
    name: "crystal",
    age: 30,
    email: "e@ma.il",
    location: "berlin",
    blogs: [    
    {
        title: "prvi blog",
        likes: 30
    },
    {
        title: "drugi blog",
        likes: 50
    }],
    login: function(){
        console.log("korisnik ulogiran");
    },
    logBlogs: function(){
        for (let i = 0; i<this.blogs.length; i++) {
            console.log(this.blogs[i].title, this.blogs[i].likes);
        }
    }
};

console.log(user);

user.login();
user.logBlogs();