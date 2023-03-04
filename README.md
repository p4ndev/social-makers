# Social makers
Online social network to makers share their current or future projects.

The motivation was based on that everyone has ideas, few people make it real due to different reasons.

One of them, is the lack of raw material or even instructions of how proceed.

Social makers will be a repository that will group real people, with best intentions to help, share and even sponsor.

# How it works
Anyone can publish project idea, invite friends to contribute or even ask them to make it.

Imagine that anyone has material to send to put away, it could be helpful to someone's idea.

Once you it is, you just notify the project maker, and then he/she will figure it out how to collect it.

It can be in any field of activity like IoT, Wood, Appliance, Fun, Toys, Garden, Handicraft.

# Database
Multi model databases (Fauna) to accomplish different scenarios (document, relational, time series and etc).

![Multi model Database](https://github.com/p4ndev/social-makers/raw/master/docs/database.jpg "Fauna DB")

# Authentication & Authorization
Our provider is Auth0 on free plan, without social media yet.

https://github.com/p4ndev/social-makers/blob/master/uix/01.png

https://github.com/p4ndev/social-makers/blob/master/uix/02.png

https://github.com/p4ndev/social-makers/blob/master/uix/03.png

It will cover sign in, up and forgot, for web interface considering (font: Segoe UI)

# Asp.Net Core - API's
API's has coded in Asp.net Core with C#, grouped in a gateway done with Nginx.

![Backend N-Tier Architecture](https://github.com/p4ndev/social-makers/raw/master/docs/backend.jpg "Asp.Net Core API + Nginx")

The Api gateway will expose some endpoints related to common action to consumers.

It's using SignalR to collect event throughout the API's, direct and basic authentication on server side.

# Interface

## Visual Design & Identity
Three different version of main logo, with no type - it can be applied to any color aligned around (font: Arvo).

## All projects mobile version (some features hidden)
![All projects](https://github.com/p4ndev/social-makers/raw/master/uix/05.jpg "Mobile")

## All projects fully tablet / desktop version
![All projects](https://github.com/p4ndev/social-makers/raw/master/uix/04.jpg "Tablet + Desktop")

## Single project mobile version (some features hidden)
![Single project](https://github.com/p4ndev/social-makers/raw/master/uix/06.jpg "Mobile")

## Single project fully tablet / desktop version
![Single project](https://github.com/p4ndev/social-makers/raw/master/uix/07.jpg "Tablet + Desktop")

## Administration feature on display section
![Single project with administration feature](https://github.com/p4ndev/social-makers/raw/master/uix/08.jpg "Administration panel")

Go direct to the element and edit, once it's done hit button save.

example: considering the project yours, click on description section and start typing. After you're done, click save.

## New Project - Workflow (animated)
![New project](https://github.com/p4ndev/social-makers/raw/master/uix/09.gif "Desktop + Tablet only")

No mobile available due to no space.

# Angular - Single Page Application
Main channel of usage today, maybe in the near future it could be available on tv, streaming platform, education, mobile and etc.

![Frontend Architecture](https://github.com/p4ndev/social-makers/raw/master/docs/frontend.jpg "Angular Framework + Tailwind + RxJS")

For user interface and experience (font: Open Sans / 300;400;600;700).

## Components
Every piece of UI with its rules and visual definition markup.

## Models
Every entities, contracts, types or any shape of information.

## Pages
Routing components grouping other components in order to render everything properly.

## Framework based
Styles, Services, Directives, Guards and Pipes are elements framework wise.

# Restrictions
It's not an advertising platform to create invoices to anyone, the main purpose is make ideas come true.

There is no restriction of size, type, commercial and so on.

It's an academic project done by owner of this repository in order to practice related subjects.

# Progress
Kanban for entire project development phase at https://trello.com/b/GOLwcfSr
