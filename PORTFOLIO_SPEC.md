Parth's Portfolio — Product & Development Specification

Living specification for the portfolio website.
This document should evolve alongside development so design, UX, content, and implementation remain consistent.

0. Project Overview

Purpose

The portfolio should present Parth as an engineer who can work across:

Robotics Software

Embedded Software

Embedded Hardware

Electronics / Communication Engineering

Software Engineering

The website should not feel like five disconnected career identities.

The common thread is the ability to understand and work across multiple layers of a technical system — from circuits and embedded systems to software and robotics.

Core Positioning

The portfolio should communicate:

A systems-oriented engineer who enjoys working across hardware and software boundaries and turning ideas into things that work in the real world.

Primary Design Principle

Show the engineering, don't just describe the engineer.

Projects, results, system diagrams, implementation decisions, and real outcomes should carry more weight than adjectives or generic claims.

1. Site Architecture

V1 Homepage Flow

Hero / Landing

About Me

Selected Work / Projects

Experience

Education

CTA / Contact

Footer

Main Navigation

Desktop:

PARTH'S PORTFOLIO                         WORK   ABOUT   RESUME

Navigation behavior:

WORK → scroll to Selected Work

ABOUT → scroll to About Me

RESUME → open resume

PARTH'S PORTFOLIO → homepage / top

PARTH MULE inside hero → scroll to About Me

Navigation should remain visible but visually secondary to the hero.

Future Sections

Engineering Notes / Articles are intentionally not part of V1.

The information architecture should leave room for:

/notes
/notes/<slug>

later without requiring a full redesign.

2. Hero / Landing

2.1 Purpose

The landing page should:

Establish identity immediately.

Communicate breadth without appearing unfocused.

Create curiosity.

Encourage scrolling rather than immediate navbar usage.

Feel minimal, intentional, and atmospheric.

The visitor should understand within seconds that Parth works across several engineering domains that connect naturally.

2.2 Content

Portfolio Label

PARTH'S PORTFOLIO

Name

PARTH MULE

The name is interactive.

Click behavior: smooth-scroll to About Me.

It should look like text, not a conventional CTA button.

Dynamic Identity

Displayed inline:

I am a Robotics Engineer▌

Only the role portion changes.

I am stays fixed.

Final rotating identities:

a Robotics Engineer

an Embedded Engineer

an Electronics Engineer

a Software Engineer

Computer Vision is intentionally not a rotating identity. It will be demonstrated through projects.

Hero Supporting Statement

LOCKED

I like where circuits become code, and code becomes something real.

This remains static while the role changes.

2.3 Typing Animation

The identity line uses a refined developer-style typing effect.

Behavior:

TYPE ROLE
   ↓
HOLD
   ↓
DELETE ROLE
   ↓
TYPE NEXT ROLE
   ↓
REPEAT

Rules:

I am never disappears.

Cursor remains immediately after the animated text.

Typing should feel deliberate rather than terminal/hacker-like.

The layout must not jump when role lengths change.

Reserve enough horizontal space for the longest role.

Animation begins automatically.

Animation stops once meaningful scrolling begins.

Reduced-motion users should see a static identity without animation.

Timing values are not yet locked and should remain configurable during development.

Suggested initial values:

Typing speed:    55–75 ms / character
Deletion speed:  30–45 ms / character
Hold duration:   1800–2400 ms
Transition gap:  150–300 ms

These are starting points, not final design tokens.

2.4 Hero Layout

Desktop concept:

┌─────────────────────────────────────────────────────────┐
│ PARTH'S PORTFOLIO                     WORK ABOUT RESUME │
│                                                         │
│                                                         │
│                         PARTH MULE                      │
│                                                         │
│                  I am a Robotics Engineer▌             │
│                                                         │
│       I like where circuits become code, and code       │
│                  becomes something real.               │
│                                                         │
│                           ↓                             │
└─────────────────────────────────────────────────────────┘

Hero should occupy approximately one viewport.

Target:

min-height: 100svh;

Use modern viewport units where supported.

The next section may subtly peek into the viewport on large screens if it improves scroll affordance.

2.5 Scroll Cue

Preferred minimal treatment:

↓

Behavior:

Subtle vertical motion.

Never distracting.

Clicking scrolls to the next section.

Should indicate that the primary interaction is scrolling.

2.6 Hero Visual Typography / Background Word

The hero uses a bright, editorial visual system rather than the common dark portfolio aesthetic. The background is light, with oversized typography creating the main visual identity.

Background Word Treatment

A single oversized word sits behind the primary PARTH MULE name. It is not a headline or additional message; it is a visual layer that reinforces the engineering identity.

Treatment:

Oversized uppercase word spanning most of the hero width.

Burgundy outline only (#6D001A); interior remains transparent / background-colored.

Thin stroke, approximately 1–2px on desktop; responsive on smaller screens.

PARTH MULE sits in front in solid near-black (#000000).

A subtle offset/secondary outline may be used around PARTH MULE to echo the layered reference treatment.

The background word remains visually quieter than the name and must never reduce readability.

No glow, neon, heavy shadow, or 3D extrusion.

The effect should feel editorial, industrial, and precise.

Candidate Background Words

The exact word remains an open content/design decision. Strong candidates are:

Word

Why it works

Character

BUILD

Directly communicates making real systems; broad enough for every target role.

Strongest overall candidate

SYSTEMS

Directly reinforces the portfolio's systems-oriented positioning.

Technical / conceptual

CONNECT

Represents the connection between circuits, embedded systems, software, and robotics.

Conceptual / distinctive

CREATE

Communicates making and experimentation without locking into one domain.

Creative / broad

MAKE

Extremely simple and human; pairs well with minimal typography.

Minimal / confident

INTEGRATE

Reflects hardware/software integration and systems engineering.

Technical / mature

CONTROL

Strong connection to robotics, embedded systems, and real-world machines.

Engineering-heavy

MOTION

Connects naturally to robotics and physical systems.

Dynamic / visual

SIGNAL

Connects to electronics and communication while remaining visually strong.

Electronics-oriented

COMPUTE

Connects software, embedded computing, and robotics perception.

Software-oriented

DESIGN

Broad engineering/design language; less specific to implementation.

Editorial / broad

SOLVE

Communicates problem-solving, but feels more generic.

Direct / functional

Preferred Shortlist

For V1 visual exploration, test these first:

BUILD — recommended default

SYSTEMS — strongest positioning match

CONNECT — most distinctive conceptual option

MAKE — cleanest minimalist option

INTEGRATE — strongest systems-engineering interpretation

Do not rotate these words automatically. The background word should initially be a deliberate static visual element; motion can be considered later only if it adds meaning.

2.7 Hero Atmosphere

Visual direction is inspired by the restrained technical / premium feeling seen in engineering and robotics websites such as Verity.

Goals:

Bright / near-white visual foundation.

Strong typography.

High contrast.

Restrained accent use.

Large amount of negative space.

Ambient visual movement rather than decorative animation.

Avoid:

Cyberpunk visuals.

Neon overload.

Floating 3D objects with no meaning.

Terminal/hacker clichés.

Heavy particle effects.

Distracting parallax.

Technology-logo walls.

The hero should feel engineered, not decorated.

3. About Me

3.1 Purpose

The About section explains the common thread across Parth's engineering interests.

It should answer:

Why do electronics, embedded systems, software, and robotics belong in the same profile?

This section should clarify identity without duplicating the resume.

3.2 Primary Statement

LOCKED

From electronics and embedded systems to software and robotics, I enjoy following problems across layers and turning ideas into things that work.

This is the central About statement.

3.3 About Content Principles

The section may expand briefly on:

engineering curiosity

systems thinking

working across hardware/software boundaries

building real systems

learning across layers

Avoid:

long autobiography

childhood stories unless genuinely relevant

generic words such as "passionate", "innovative", or "hard-working"

duplicate Experience content

huge technology lists

resume-style bullet dumping

The About section should feel personal but still engineering-focused.

3.4 Visual Direction

Preferred structure:

ABOUT ME

Large statement / paragraph

Supporting visual or small systems-spectrum element

Potential conceptual spectrum:

Electronics → Embedded → Communication → Software → Perception → Robotics

This visual is not yet locked.

Interaction should remain subtle.

The Hero carries the strongest motion.
About should prioritize clarity.

4. Selected Work / Projects

4.1 Purpose

Selected Work is the main proof section of the portfolio.

It should show the strongest projects that demonstrate Parth's engineering breadth.

This is not intended to be an archive of everything ever built.

The selection should communicate focused breadth.

4.2 Core UX Requirement

Every project must be understandable at first glance.

A visitor should immediately understand:

What exactly is this?

before deciding whether to explore technical details.

4.3 Project One-Liner Rule

Every project must include a one-sentence explanation describing:

SYSTEM + PURPOSE + CONTEXT

Technology names should support the explanation, not replace it.

Bad

A computer vision pipeline using PyTorch, OpenCV and CUDA.

Better

An aerial computer-vision system for detecting, identifying and counting warehouse inventory from UAV imagery.

4.4 Homepage Project Entry

Each homepage work entry should contain:

NUMBER

PROJECT NAME

ONE-LINE EXPLANATION

PROJECT TYPE / CONTEXT

DOMAIN / TECHNOLOGY TAGS

VIEW PROJECT →

Example:

01

UAV INVENTORY PERCEPTION

An aerial computer-vision system for detecting,
identifying and counting warehouse inventory from UAV imagery.

Professional Work · Robotics · Computer Vision

PyTorch · OpenCV · OCR · Depth Estimation

VIEW PROJECT →

4.5 Current Candidate Projects

01 — UAV Inventory Perception System

What it demonstrates:

real-world robotics

computer vision

production engineering

UAV systems

OCR

depth estimation

GPU processing

deployment

real operational constraints

This should likely receive the highest visual priority.

02 — FlightBus

What it demonstrates:

CAN

embedded-systems concepts

communication protocols

DBC

SocketCAN

simulation

UAV systems thinking

publicly inspectable engineering work

03 — UAV Visual SLAM & Navigation

What it demonstrates:

ROS

ORB-SLAM2

visual navigation

waypoint control

PID

autonomy

drone integration

04 — GPU-Accelerated RAW ISP

What it demonstrates:

CUDA

CuPy

Raspberry Pi imaging

RAW image processing

performance engineering

multiprocessing

optimization

Key result candidate:

~30 min → ~2–3 min batch-processing time

05 — ESP32 UAV Control System

What it demonstrates:

ESP32

ESP-IDF

firmware

networking

WebSockets

UDP

CRTP

embedded software

4.6 Project Hierarchy

Projects should not necessarily receive equal visual weight.

Recommended hierarchy:

UAV INVENTORY PERCEPTION
        ↓
Largest / hero work entry

FLIGHTBUS          VISUAL SLAM

GPU RAW ISP        ESP32 CONTROL

This is conceptual only. Final layout may differ.

4.7 Project Classification

Clearly distinguish:

Professional Work
Personal Project
Academic Project
Open Source / Public Project

This prevents ambiguity about ownership and context.

5. Project Detail Page

5.1 Purpose

Each significant project receives its own detailed page.

The page should serve three levels of reader:

15-second reader

Needs:

project name

one-line explanation

role

context

key result

1-minute reader

Needs:

system overview

architecture

contribution

major results

5+ minute reader

Needs:

implementation detail

engineering challenges

design decisions

diagrams

GitHub / media / demo where available

5.2 Proposed Structure

PROJECT HEADER

PROJECT NAME

One-line explanation

Context / type
Technology tags

────────────────────────

AT A GLANCE

Role
Domain
Status
Scale
My Contribution

────────────────────────

SYSTEM OVERVIEW

Architecture / flow diagram

────────────────────────

THE PROBLEM

────────────────────────

THE APPROACH

────────────────────────

MY CONTRIBUTION

────────────────────────

ENGINEERING CHALLENGES

────────────────────────

IMPLEMENTATION

────────────────────────

RESULTS

────────────────────────

MEDIA / DEMO

────────────────────────

SOURCE / LINKS

GitHub
Demo
Related material

────────────────────────

KEY TAKEAWAYS

Not every project must use every section.

The structure should be consistent but flexible.

5.3 Diagrams

If available, project pages should prioritize flow diagrams and architecture diagrams.

Example:

UAV
 ↓
Image Capture
 ↓
Detection
 ↓
Depth Estimation
 ↓
OCR
 ↓
Verification
 ↓
Inventory Report

Diagrams should make the system easier to understand than paragraphs alone.

5.4 GitHub

For public/personal projects:

GitHub Repository →

Use contextual wording:

Source code and implementation

For professional/company work:

Source code unavailable — proprietary implementation.

Do not expose:

proprietary code

internal repositories

credentials

client data

confidential images

model weights

internal deployment details

restricted architecture

NDA-covered material

6. Experience

6.1 Purpose

Experience provides professional context.

It should not duplicate the technical detail already available inside project pages.

The visitor should understand:

where Parth worked

what role he held

what types of systems he worked on

the level of responsibility / exposure

links to relevant work

6.2 Initial Structure

EXPERIENCE

Project Engineer — Software Development
ZephDroids UAVs
2026

Short role summary

Selected contributions
→ ...
→ ...
→ ...

Related Work →

Technical implementation belongs inside the relevant project page.

7. Education

7.1 Purpose

Education provides technical foundation without distracting from real engineering work.

7.2 Initial Content

EDUCATION

COEP Technological University

B.Tech — Electronics & Telecommunication Engineering
Minor — Computer Engineering

2022–2026
CGPA: 7.82 / 10

Achievements and certifications may be added later only if they improve the portfolio.

Avoid turning Education into a large academic-history section.

8. CTA / Contact

8.1 Purpose

The CTA should close the portfolio naturally.

It should invite conversation without sounding like marketing copy.

8.2 Current Direction

Headline ideas:

LET'S TALK.

or

LET'S BUILD SOMETHING.

Final copy is not yet locked.

Possible supporting copy:

Open to opportunities where I can build, learn, and solve interesting engineering problems.

Links:

Email

LinkedIn

GitHub

Resume

9. Footer

Minimal footer.

Example:

PARTH'S PORTFOLIO

Work
About
Resume

LinkedIn
GitHub
Email

© 2026 Parth Mule

No unnecessary footer sitemap.

10. Navigation & UX

10.1 Navigation Philosophy

Navigation should always be available but should not dominate the first interaction.

Primary intended behavior:

LAND
  ↓
READ HERO
  ↓
BECOME CURIOUS
  ↓
SCROLL

Navbar is a utility, not the hero.

10.2 Smooth Scrolling

Internal homepage navigation should use smooth scrolling where appropriate.

Accessibility:

Respect prefers-reduced-motion.

Do not force long animated scrolling.

Section targets should account for sticky-header offset.

10.3 Link Behavior

Hero Name

PARTH MULE → About Me

Navbar

WORK → Selected Work
ABOUT → About Me
RESUME → Resume

Project

VIEW PROJECT → → project detail page

11. Motion & Animation

11.1 Philosophy

Motion should communicate state and guide attention.

It should not exist purely for decoration.

Use:

subtle fade / translate entrance

typing effect in hero

restrained hover transitions

gentle scroll cue motion

subtle page transitions if performant

Avoid:

excessive parallax

scroll hijacking

dramatic card flips

bouncing elements

constant motion

effects that delay reading

11.2 Reduced Motion

All major animations must support:

@media (prefers-reduced-motion: reduce)

For reduced-motion users:

typing effect becomes static

entrance transitions are removed or minimized

scroll cue animation is removed

page transitions become instant/minimal

12. Visual Identity

12.1 Direction

Target visual personality:

Technical
Minimal
Industrial
Precise
Premium
Engineering-focused

References:

Verity — atmosphere / palette direction

Murphy Amos — project storytelling

Joseph Ma — technical depth

Tejas Murkute — immediate professional clarity

The website should feel like:

A modern engineering portfolio with the clarity of technical documentation and the polish of a premium robotics product site.

12.2 Color Direction

Exact tokens are not locked yet.

Initial concept:

Background

Near-black / charcoal.

Candidate range:

#090B0C
#0B0D0E
#111315

Primary text

Warm off-white.

Candidate range:

#F1F0EB
#F4F2EC

Secondary text

Muted neutral gray.

Candidate range:

#92928E
#9A9A96

Accent

To be chosen later based on Verity-inspired direction.

Potential families:

restrained lime

technical green

warm yellow / amber

Accent must be used sparingly.

12.3 Visual Rules

Prefer:

strong typography

generous whitespace

thin borders

outlined typography as a recurring visual language

limited burgundy accent color

editorial spacing

clean diagrams

Avoid:

dark-background portfolio clichés

glassmorphism overload

neon cyberpunk

excessive rounded cards

gradient text everywhere

icon walls

oversized tech logos

13. Typography

Typography is not yet locked.

Requirements:

Highly legible.

Strong large-display typography.

Good technical/editorial character.

Excellent mobile readability.

Clear separation between display and body hierarchy.

Code/technical data may use a restrained monospace font.

Likely structure:

Display Font
Body Font
Monospace Font

Exact fonts to be decided.

14. Responsive Design

The site must support:

Desktop

Laptop

Tablet

Mobile

Key responsive requirements:

Hero

Inline I am <role> should remain readable.

May wrap intentionally on small screens.

Never overflow.

Supporting statement must remain concise.

Hero should use svh instead of relying only on vh.

Navigation

Desktop:

PARTH'S PORTFOLIO     WORK ABOUT RESUME

Mobile navigation treatment is not yet locked.

Project Pages

Architecture diagrams must scale or become vertically stacked.

Tables should become cards or scrollable where necessary.

Large metrics should remain readable.

15. Accessibility

Minimum requirements:

Semantic HTML.

Keyboard-accessible navigation.

Visible focus states.

Sufficient contrast.

Proper heading hierarchy.

Alt text for meaningful images.

Decorative visuals ignored by screen readers.

prefers-reduced-motion support.

Accessible link/button labels.

Do not rely only on color to convey meaning.

Target:

WCAG 2.2 AA

where practical.

16. Performance

The portfolio should feel fast.

Targets:

Minimal JS where possible.

Lazy-load below-the-fold images.

Optimize diagrams and screenshots.

Use modern image formats.

Avoid autoplay video unless specifically useful.

Preload only critical hero assets.

Prevent layout shift.

Avoid large animation libraries unless justified.

Target experience:

The user should never have to wait for visual polish before reading the content.

17. SEO / Metadata

Each page should have:

Unique <title>

Meta description

Canonical URL

Open Graph title

Open Graph description

Open Graph image

Twitter/X card metadata

Structured semantic headings

Suggested homepage title:

Parth Mule — Robotics, Embedded & Software Engineer

This can be revised later.

Each project page should have project-specific metadata.

18. Technical Architecture

Not yet locked.

Potential stack options:

Preferred initial direction

Next.js
TypeScript
Tailwind CSS or CSS Modules
Framer Motion only if needed
MDX / structured content for projects
Vercel deployment

Alternative:

React + Vite

The framework should not dictate the design.

Priority:

Maintainability
Performance
Simple content editing
SEO
Responsive behavior

19. Suggested Project Structure

Possible Next.js structure:

portfolio/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   │
│   └── work/
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── navigation/
│   ├── hero/
│   ├── about/
│   ├── work/
│   ├── experience/
│   ├── education/
│   ├── contact/
│   └── ui/
│
├── content/
│   └── projects/
│
├── public/
│   ├── images/
│   ├── diagrams/
│   └── resume/
│
├── styles/
│
└── README.md

Final structure should be adapted to the selected framework.

20. Development Sequence

Recommended build order:

01  Project setup

02  Global layout
    └── navbar
    └── global typography
    └── page container

03  Hero
    └── static layout
    └── role typing system
    └── name interaction
    └── scroll cue

04  About
    └── primary statement
    └── supporting layout

05  Selected Work
    └── project data model
    └── project preview component

06  Project Detail Template
    └── metadata
    └── architecture
    └── sections
    └── links

07  Experience

08  Education

09  CTA / Footer

10  Visual system refinement
    └── colors
    └── typography
    └── spacing
    └── borders
    └── accents

11  Motion polish

12  Responsive behavior

13  Accessibility audit

14  Performance optimization

15  SEO / metadata

16  Final QA

21. Acceptance Criteria — V1

The website is considered ready for V1 when:

Hero

Role animation works correctly.

I am remains fixed.

Supporting statement is stable.

Name links to About.

Scroll cue works.

Hero remains usable without animation.

About

Primary statement is present.

Section clearly explains profile breadth without resume duplication.

Projects

Every featured project has a clear one-liner.

Project type is visible.

Each project can open a dedicated page.

At least one public project links to source code where available.

Project Pages

Project can be understood within first viewport.

Contribution is clearly separated from overall project scope.

Architecture / flow diagram is included where useful.

Proprietary information is not exposed.

Experience

Professional context is clear.

Content does not duplicate full project descriptions.

Education

Degree, university, minor, period, and CGPA are clear.

CTA

Contact methods are accessible.

Overall

Responsive across mobile and desktop.

Keyboard navigable.

Reduced motion supported.

No major layout shift.

No broken project links.

Good contrast.

Site loads quickly.

22. Locked Decisions

The following decisions are currently considered locked unless later testing reveals a strong reason to change them.

Site Name

Parth's Portfolio

Hero Visual Direction

Bright background + oversized outlined background word + solid PARTH MULE

The background-word treatment is locked as a design direction. The exact word is still open and will be selected after visual testing.

Hero Roles

Robotics Engineer
Embedded Engineer
Electronics Engineer
Software Engineer

Hero Role Presentation

I am <animated role>

Typing happens inline.

Hero Supporting Statement

I like where circuits become code, and code becomes something real.

Hero Name Interaction

PARTH MULE → ABOUT ME

About Primary Statement

From electronics and embedded systems to software and robotics, I enjoy following problems across layers and turning ideas into things that work.

Homepage Order

Hero
↓
About Me
↓
Selected Work
↓
Experience
↓
Education
↓
CTA
↓
Footer

Notes

Not included in V1.

Project Philosophy

Every project must be understandable at first glance and have a dedicated detail page.

23. Open Decisions

Still to be designed / locked:

Exact color palette

Accent color

Typography

Grid and spacing tokens

Hero background treatment

Navbar sticky behavior details

Hero typing timing

Project-card visual treatment

Project hover behavior

About visual / systems spectrum

Exact selected-project ordering

Experience copy

Education visual treatment

CTA copy

Footer final structure

Mobile navigation

Page transitions

Project diagram style

Framework / deployment stack

Analytics

Resume behavior: inline page vs PDF

Domain name

Development Rule

Whenever a design or UX decision is made during development:

Update this specification.

Implement it in code.

Test it on desktop and mobile.

Only then treat the decision as locked.

The specification and implementation should evolve together.
