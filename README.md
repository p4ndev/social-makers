# Social makers
Online social network to makers share their current or future projects.

# Motivation
Everyone has ideas, few people make it real due to different reasons.

One of them, is the lack of raw material or even instructions of how proceed.

# Overview
Project is a repository that will group real people, with best intentions to help, share and even sponsor.

It can be in any field of activity like IoT, Wood, Appliance, Fun, Toys, Garden, Handicraft.

# How it works
Anyone can publish project idea, invite friends to contribute or even ask them to make it.

Imagine that anyone has material to send to put away, it could be helpful to someone's idea.

Once you it is, you just notify the project maker, and then he/she will figure it out how to collect it.

# Architecture

## Database
Multi model databases (Fauna) to accomplish different scenarios (document, relational, time series and etc).

![Multi model Database](https://github.com/p4ndev/social-makers/raw/master/Docs/database.jpg "Fauna DB")

## Api
Restful API's has coded in Asp.net Core with C#, grouped in a gateway done with Nginx.

![Backend N-Tier Architecture](https://github.com/p4ndev/social-makers/raw/master/Docs/backend.jpg "Asp.Net Core API + Nginx")

The Api gateway will expose some endpoints related to common action to consumers.

It's using SignalR to collect event throughout the API's, direct and basic authentication on server side.

## Web app
Main channel of usage today, maybe in the near future it could be available on tv, streaming platform, education, mobile and etc.

![Frontend Architecture](https://github.com/p4ndev/social-makers/raw/master/Docs/frontend.jpg "Angular Framework + Tailwind + RxJS")

It has been coded in Angular Framework with Tailwind and RxJS.

# Restrictions
There is no restriction of size, type, commercial and so on.

# Disclaimer
It's not a advertising platform to create invoices to anyone, the main purpose is make ideas come true somehow.

# Visual Design & Identity
Three different version of main logo, with no type - it can be applied to any color aligned around.

There's 3 different concept applied to advertising the tool (font: Arvo)
