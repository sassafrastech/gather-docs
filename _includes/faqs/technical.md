#### What technologies and programming languages is Gather made with?

We have chosen a very well established technology stack to ensure Gather's longevity:

* Web: Ruby on Rails
* Database: PostgreSQL
* Frontend: JQuery, Backbone, Bootstrap, React (planned)
* Data Viz: D3

#### Can we get our data out of Gather for analysis or if we want to go elsewhere?

Yes.

Currently we offer CSV export of user data. Meals and accounts are not far behind. CSV is great for doing data analysis, importing to other tools, etc.

However, we recognize that CSV outputs are not complete archives of your data. For this reason, we also pledge to provide full SQL and filesystem dumps of your community's data upon request.

We do not believe in data lock-in!

#### Does Gather have an API?

Not yet. What would you need one for? [Let's talk](/contact).

#### What about calendars? Email? File storage? Other features?

See the [planned feature roadmap](/features#planned-feature-roadmap) for what we have in store. If your idea isn't there, [let us know](/contact).

#### Can we self-host our own Gather instance?

Gather is [open source](https://github.com/sassafrastech/gather) so anyone is free to setup their own instance. This is not something that [Sassafras](https://sassafras.coop) will be selling support services around, however.

Self-hosting is also not likely to be a cost-saving measure once you consider the value of your members' time. Maintaining an active, complex web application takes a lot of time and expertise.

Self-hosting could be a sensible model if you have a lot of developer talent (and time) in your community and you want to do a lot customization. In that case, it would be great to work together to keep as much of that code as possible in the mainline and available for other communities to benefit from.

We like to think that contributing to Gather (either with code or with dollars) is an investment in a movement.

#### I've heard Rails applications can be hosted for free on Heroku. How about that?

Heroku's free tier is designed for experimentation, not production use, and Gather is a beefy enough application that your users' experience will likely not be good on Heroku's free tier. Some considerations:

* 512mb of memory is low for a production Rails application. If the server runs out of memory you'll have downtime and user frustration.
* Free tier instances go to sleep after 30 minutes idle and they are slow (~20s) to start up again, which will also be frustrating for users.
* Free tier instances also don't support HTTPS, so security user profile and billing account data will be transmitted unencrypted.
* Also, once you start digging into the requisite add-ons (email, database, image processing, caching, full-text search (coming soon), monitoring) you will likely find that costs start mounting up.

Then there is support. As mentioned above, maintaining a production web application is not a trivial matter. (At Sassafras we like to say a web application is more like a dog than a hammer!) Heroku helps with some maintenance tasks but not all of them.

Given all this, we'd be much happier if your dollars were going towards supporting Gather instead of Heroku!
