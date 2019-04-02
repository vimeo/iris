# FAQ 💬

### What if Iris doesn't have what I am looking for?

<b class="qa">Q:</b> <i>I need a component that does not currently exist in Iris, or, I need something slightly different but very similar to something in Iris. Can I has please?</i>

<b class="qa">A:</b> Yes, you can has! But first please make sure, at a minimum, that the designer you work with is aware of your request! After that, sync with someone on the Iris team. They often have information or context that will prove useful. Once everyone is in the loop, your first available course of action is to start a new branch on Iris and PR your changes. This is the fastest way to get your desired changed implemented. In some cases it will make more sense for an Iris engineer to complete the work. If so, work with them to plan and schedule the project, and to add it to the Iris backlog.

### Remember that thing we talked about a while ago? What's the status of the thing? Is it coming out soon?

<b class="qa">Q:</b> <i>A few days/weeks/months ago we discussed implementing a new feature, component, or some such item in Iris. What's the the deal with that? Can I has now please?</i>

<b class="qa">A:</b> I don't know! A good place to check on the status of something in Iris would be to consult its github issue! All issues are organized into minor version [milestones](https://github.vimeows.com/Vimeo/iris/milestones) with approximate release dates. If you need something to be expedited, please comment on the issue with further information before reaching out to an Iris engineer.


### Whatever happened to Iris 6.0?

<b class="qa">Q:</b> <i>I'm working on a project that currently uses Iris 5, and you're talking about Iris 7? What happened to Iris 6!?</i>

<b class="qa">A:</b> 🤫 We don't talk about Iris 6.

Jk! Iris 6 is being released in tandem to Iris 7 as a bridge to the very significant changes between 5 and 7. It is intended to be used outside of the new app shell, and will support React 15 and styled-components 3. It will **not** support React 16 or styled-components 4. If you are using Iris in a project that cannot be migrated to the app shell in the very near future, it is ***strongly*** recommended that you upgrade to 6.0.0. Iris 5 is now officially unsupported. There is a better system in place for maintaining and publishing minor and patch versions of ^6.0.0—which is actually almost following real semver instead of barely sort-of following "semver."

Please note: The Iris team will be primarily be focused on the development of Iris 7. Iris 6 will be community maintained. 

Currently, various Vimeo packages/apps are using the following versions of Iris:

- "4.0.18"
- "5.5.1"
- "^5.8.0"
- "5.13.0"
- "5.13.1"
- "^5.13.0"
- "5.14.0"
- "5.15.0"
- "7.0.0"

The short term goal is to make that list look like this:

- "4.0.18" (`¯\_(ツ)_/¯`)
- "^6.0.0" (`./web/assets/js/packages/…`)
- "^7.0.0" (`./frontend/..`)

### Can I use Iris outside of [Vimeo/vimeo](https://github.vimeows.com/Vimeo/vimeo)?

<b class="qa">Q:</b> <i>I'm working on a project that doesn't live inside the Vimeo monorepo. Can I use Iris in it?</i>

<b class="qa">A:</b> Yes! Iris can be used with any React (16.8+) app. The only requirement is that you are behind the IAC firewall to retrieve it from Artifactory via npm/yarn. We're working on a solution to eliminate this requirement though 😉

### I'm looking for an icon.

<b class="qa">Q:</b> <i>Does Iris have the icon I'm looking for? Where can I find it?</i>

<b class="qa">A:</b> **Icons:** https://github.vimeows.com/pages/vimeo/iris/master/?path=/story/icons--all

**Illustrations:** https://github.vimeows.com/pages/vimeo/iris/master/?path=/story/illustration--all

### I found a bug.

<b class="qa">Q:</b> <i>Where do I report bugs?</i>

<b class="qa">A:</b> Please open a new issue here: [Bug Report](https://github.vimeows.com/Vimeo/iris/issues/new?template=bug-report.md)

### Can I override the TypeScript definitions for an Iris component?

<b class="qa">Q:</b> <i>An Iris component is missing a type definition for a prop, or it has an incorrect definition. How can I correct this?</i>

<b class="qa">A:</b> Please do not override TypeScript definitions for Iris components. If you need to make an adjustment, open a pull request. If the matter is very time sensitive, please reach out in [#iris](https://vimeo.slack.com/messages/C2UF8PH0A). In absolutely dire situations, you can `ts-ignore` the problem. Please add `#iris`, `#type-issue`, and a brief explaination to your ignore comment.
