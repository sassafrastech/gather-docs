# Frequently Asked Questions

## Table of Contents

1. [Pricing/Sustainability](#pricingsustainability)
1. [Support](#support)
1. [Users & Households](#users--households)
1. [Meals](#meals)
1. [Reservations](#reservations)
1. [Feature Roadmap](#feature-roadmap)
1. [Technical Stuff](#technical-stuff)

## Pricing/Sustainability

#### How much does Gather cost?

See the [pricing/sustainability](/pricing) page.

#### Why should we pay?

Communities deserve great software, and great software is expensive to build and maintain. See the [pricing/sustainability](/pricing) page for more detail.

#### Will Gather still be around in 5 years?

Almost certainly. Gather is already in heavy use in multiple communities which depend on it to run their meals programs, common spaces, member directory and more.

Building a bigger community of paying subscribers will only deepen the system's sustainability.

#### Can our community contribute labor in lieu of money?

Yes, as long as there is a firm and accountable hours commitment and those offering to contribute possess the necessary skills. [Contact us](/contact) and let's talk!

## Support

#### How do I get help with Gather?

It depends on the type of help you need!

* **Check this page** first to see if your question has already been answered.
* **Basic help** with using the system should be provided within the community wherever possible. This allows more time for Gather staff to work on making the system better.
* **The broader community** is also available for help via the Gather discussion forum (coming soon).
* **Bugs** should be reported by [contacting Gather staff](/contact)

#### Is there any documentation?

Not yet but there will be. We have been focusing our resources to date on building functionality, and relying on communities members to support each other in using Gather.

We recognize documentation is necessary, especially for some areas of the system. We will cover the most commonly asked questions in this document for now. When more substantial documentation is rolled out, we will move much of this content there.

#### Is there a venue where we can discuss Gather with other users?

There will be very soon. We have plans to set up a [Discourse](https://discourse.org) forum for the community within the next few weeks.

#### Where do I report bugs or things that don't seem to be working right?

Please [contact us](/contact). We appreciate it!

## Users & Households

#### Do all community members need a user account?

Yes. This is a fundamental assumption of Gather's design.

#### What about children?

Children also have separate user accounts in Gather, but:

* Their user profiles are editable by their parents/guardians
* They can't sign in to the system directly and therefore can't sign their Households for meals, reserve resources, etc.
* They don't count in the calculation of the community's subscription cost.

Having children in Gather is useful for things listing them in the member directory, including them in the work-share program (coming soon), etc. But adding children is optional.

#### What are the different user roles and what can they do?

| Role | Abilities |
|---|---|
| Admin | All |
| Biller | View and update accounts, send statements, apply late fees, etc. |
| Meals Coordinator | Create and update meals and meals formulas, send meals messages |
| Photographer | Update user photos |
| Wikiist | Edit protected wiki pages, delete wiki pages |

#### What is the difference between Email and Google ID in a user profile?

Email is the address at which people want to be contacted.

Google ID is what people will use for sign in. If the person never needs to sign in, they don't need a Google ID.

#### How do households relate to units?

A unit represents a physical location like a house or apartment.

A household represents a group of users that share finances for the purposes of billing. Meal signups and billing statements are on a household basis for this reason. It wouldn't make sense to send separate statements to two members of the same household.

All users must belong to a household, but a household can have only one user.

#### Why do I have to sign in with Google?

We chose Google as the initial sign in method because it is easy and means one less password to remember.

Future integrations with Google products like Google Drive will also be made easier if all users have a linked Google account.

However, email/password sign in is a planned feature. If this is a deal breaker for your community, [let us know](/contact) and we can expedite it.

## Meals

#### How does the meals process work?

These are the basic steps:

1. **Creation**<br/>Meals are created and staff assigned. Meals are open for signup at this point.
2. **Menu Addition**<br/>The cook decides what to cook and adds the menu. This can happen as part of step 1, or separately.
3. **Closing**<br/>The meal is closed by the cook, usually before they go to shop for groceries so they know how much to buy. No signups are allowed after this point.
4. **Summary**<br/>The cook views or prints out the meal summary page which lists the number of diners of each type, the expected number of portions needed, and grocery allowance calculations.
5. **Mealtime and Late Additions**<br/>Let's eat! Any late signups permitted by the cook are recorded on the summary sheet or elsewhere.
6. **Finalizing**<br/>The biller finalizes the meal. This includes adjusting the signup counts to reflect latecomers and entering the amount spent on groceries. Charges are added to diner accounts. Care should be taken here as this step can't be undone.

## Reservations

#### How do we set maximum booking amounts or maximum days in advance or ...?

Gather has a sophisticated set of protocols for governing reservations. They include:

* Fixed start and end times (great for guest rooms or other per-day resources)
* Customizable reservation types (e.g. personal vs. official) with the ability to set different protocols for different types
* Maximum days in advance
* Maximum reservation duration
* Household limits
    * Maximum days per year with a reservation
    * Maximum total hours per year
* Customizable notices that appear at the top of the reservation form
* Customizable resource policies that reservers must agree to when making a reservation
* For multi-community clusters, the ability to disable or require a sponsor for reservations from other communities

Each of the above is configurable for a single resource or group of resources.

#### How do I configure all the above settings?

The user interface for editing these settings is still under construction. In the mean time, Gather staff can set things up for you upon request.

## Feature Roadmap

#### What about calendars? Email? File storage? Other features?

See the [planned feature roadmap](/features#planned-feature-roadmap) for what we have in store. If your idea isn't there, [let us know](/contact).

#### Can we pay extra to have feature X developed?

Yes, subject to the availability of our development staff. [Let's talk](/contact).

## Technical Stuff

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

#### Can we self-host our own Gather instance?

Gather is [open source](https://github.com/sassafrastech/gather) so anyone is free to setup their own instance. This is not something that [Sassafras](https://sassafras.coop) will be selling support services around, however.

Self-hosting is also not likely to be a cost-saving measure once you consider the value of your members' time. Maintaining an active, complex web application takes a lot of time and expertise.

Self-hosting could be a sensible model if you have a lot of developer talent (and time) in your community and you want to do a lot customization. In that case, it would be great to work together to keep as much of that code as possible in the mainline and available for other communities to benefit from.

We like to think that contributing to Gather (either with code or with dollars) is an investment in a movement.

<!--
## Billing

* Gather vs accounting system
    * Regarding the accounts bit, it currently handles meals payments only, not association fees. This may change in the future, but even then, Gather won't ever be a replacement for something like Quickbooks. I could see us building some kinds of integration with Quickbooks later, however.








-->
