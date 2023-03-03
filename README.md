# Social makers
Online social network to makers share their current or future projects.

The motivation was based on that everyone has ideas, few people make it real due to different reasons.

One of them, is the lack of raw material or even instructions of how proceed.

# Overview
Social makers will be a repository that will group real people, with best intentions to help, share and even sponsor.

It can be in any field of activity like IoT, Wood, Appliance, Fun, Toys, Garden, Handicraft.

# How it works
Anyone can publish project idea, invite friends to contribute or even ask them to make it.

Imagine that anyone has material to send to put away, it could be helpful to someone's idea.

Once you it is, you just notify the project maker, and then he/she will figure it out how to collect it.

# Database
Multi model databases (Fauna) to accomplish different scenarios (document, relational, time series and etc).

![Multi model Database](https://github.com/p4ndev/social-makers/raw/master/Docs/database.jpg "Fauna DB")

# Authentication & Authorization
Our provider is Auth0 on free plan, without social media yet.

https://github.com/p4ndev/social-makers/blob/master/uix/01.png

https://github.com/p4ndev/social-makers/blob/master/uix/02.png

https://github.com/p4ndev/social-makers/blob/master/uix/03.png

It will cover sign in, up and forgot, for web interface considering (font: Segoe UI)

# Api
Restful API's has coded in Asp.net Core with C#, grouped in a gateway done with Nginx.

![Backend N-Tier Architecture](https://github.com/p4ndev/social-makers/raw/master/Docs/backend.jpg "Asp.Net Core API + Nginx")

The Api gateway will expose some endpoints related to common action to consumers.

It's using SignalR to collect event throughout the API's, direct and basic authentication on server side.

# Web app
Main channel of usage today, maybe in the near future it could be available on tv, streaming platform, education, mobile and etc.

![Frontend Architecture](https://github.com/p4ndev/social-makers/raw/master/Docs/frontend.jpg "Angular Framework + Tailwind + RxJS")

It has been coded in Angular Framework with Tailwind and RxJS.

# Icons
Every icons used come from Font Awesome in HTML / Css classes.

# Restrictions
There is no restriction of size, type, commercial and so on.

It's not a advertising platform to create invoices to anyone, the main purpose is make ideas come true somehow.

# Interface

## Visual Design & Identity
Three different version of main logo, with no type - it can be applied to any color aligned around (font: Arvo).

https://github.com/p4ndev/social-makers/raw/master/concept/1.jpg

https://github.com/p4ndev/social-makers/raw/master/concept/2.jpg

https://github.com/p4ndev/social-makers/raw/master/concept/3.jpg

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