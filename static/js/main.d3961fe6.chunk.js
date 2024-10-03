(this.webpackJsonptremarco=this.webpackJsonptremarco||[]).push([[0],{23:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(11),c=s.n(i),r=s(4),o=s(5),l=s(0);var d=()=>{const[e,t]=Object(n.useState)(!1),[s,a]=Object(n.useState)(0);Object(n.useEffect)((()=>{const e=()=>{const e=window.pageYOffset,t=s>e||e<=0;document.getElementById("navbar").style.top=t?"0px":"-75px",a(e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[s,a]);const i=({to:e,button:s=!1,children:n})=>Object(l.jsx)(o.a,{className:"navbar-item "+(s?"button":""),smooth:!0,to:e,onClick:()=>t(!1),children:n});return Object(l.jsxs)("nav",{id:"navbar",className:"navbar is-fixed-top",children:[Object(l.jsx)("div",{className:"navbar-brand",children:Object(l.jsxs)("a",{className:"navbar-burger burger "+(e?"is-active":""),"data-target":"navbar-content",onClick:()=>t(!e),children:[Object(l.jsx)("span",{"aria-hidden":"true"}),Object(l.jsx)("span",{"aria-hidden":"true"}),Object(l.jsx)("span",{"aria-hidden":"true"})]})}),Object(l.jsx)("div",{id:"navbar-content",className:"navbar-menu "+(e?"is-active":""),children:Object(l.jsxs)("div",{className:"navbar-end",children:[Object(l.jsx)(i,{to:"#about",children:"About"}),Object(l.jsx)(i,{to:"#skills",children:"Skills"}),Object(l.jsx)(i,{to:"#experience",children:"Experience"}),Object(l.jsx)(i,{to:"#contact",children:"Contact"}),Object(l.jsx)("a",{href:"ryan-tremarco-cv.pdf",target:"_",className:"navbar-item",children:Object(l.jsx)("button",{className:"button is-success is-outlined",children:"View CV"})})]})})]})};var h=()=>Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("div",{className:"content has-text-centered",children:["Made with ",Object(l.jsx)("i",{className:"fas fa-heart"})," using",Object(l.jsx)("strong",{children:Object(l.jsx)("a",{target:"_",href:"https://bulma.io",children:" Bulma "})}),"and",Object(l.jsx)("strong",{children:Object(l.jsx)("a",{target:"_",href:"https://reactjs.org",children:" React "})})]}),Object(l.jsxs)("div",{className:"content has-text-centered is-size-3",children:[Object(l.jsx)("a",{target:"_",href:"https://github.com/ryantremarco",children:Object(l.jsx)("i",{className:"icon fab fa-github"})}),Object(l.jsx)("a",{target:"_",href:"https://www.linkedin.com/in/ryantremarco/",children:Object(l.jsx)("i",{className:"icon fab fa-linkedin"})})]})]});var j=()=>Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"hero is-primary is-fullheight has-text-centered",children:[Object(l.jsx)("div",{className:"hero-body",children:Object(l.jsxs)("div",{className:"hero-content",children:[Object(l.jsx)("p",{className:"intro-hello",children:"Hey."}),Object(l.jsxs)("p",{className:"intro-name",children:["I'm ",Object(l.jsx)("span",{className:"avoid-wrap",children:"Ryan Tremarco."})]}),Object(l.jsxs)("p",{className:"intro-para",children:["I'm a back-end Software Engineer based in the United Kingdom.",Object(l.jsx)("br",{}),"I specialise in cloud-deployed Go microservice design and development."]}),Object(l.jsx)("section",{className:"section",children:Object(l.jsx)("a",{href:"mailto:ryantremarco@hotmail.co.uk",className:"button is-success is-outlined is-medium",children:"Get in touch"})})]})}),Object(l.jsx)("div",{className:"hero-footer",children:Object(l.jsx)("div",{className:"intro-arrow",children:Object(l.jsx)(o.a,{smooth:!0,to:"#about",children:Object(l.jsx)("i",{className:"fas fa-chevron-down is-size-3"})})})})]})});var m=({title:e,children:t,...s})=>Object(l.jsx)("section",{className:"section",...s,children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title is-size-1 has-text-centered",children:e}),Object(l.jsx)("div",{className:"columns is-centered section-content",children:t})]})});var p=()=>Object(l.jsxs)(m,{title:"About",id:"about",children:[Object(l.jsxs)("div",{className:"column is-4",children:[Object(l.jsx)("h2",{className:"title is-size-4",children:"Me"}),Object(l.jsxs)("p",{children:["Hello! I'm Ryan, a ",Object(l.jsx)("span",{className:"avoid-wrap",children:"back-end"})," Software Eningeer working for med-tech firm ",Object(l.jsx)("a",{href:"https://visfo.health/",target:"_",children:" Visfo"})," in the UK."]}),Object(l.jsxs)("p",{className:"nudge-down",children:["Since completing a ",Object(l.jsx)("span",{className:"avoid-wrap",children:"government-sponsored"})," apprenticeship scheme and obtaining my ",Object(l.jsx)("span",{className:"avoid-wrap",children:"first-class"})," honours degree I spent a number of years working ",Object(l.jsx)("span",{className:"avoid-wrap",children:"full-stack"})," development, but I have since transitioned to ",Object(l.jsx)("span",{className:"avoid-wrap",children:"back-end"})," specific work."]}),Object(l.jsxs)("p",{className:"nudge-down",children:["In the future, I intend to keep to ",Object(l.jsx)("span",{className:"avoid-wrap",children:"back-end"})," web technologies, and potentially even explore ",Object(l.jsx)("span",{className:"avoid-wrap",children:"lower-level"}),"work such as systems and embedded development. So long as it's ",Object(l.jsx)("span",{className:"avoid-wrap",children:"data-driven"}),", I'll be happy."]})]}),Object(l.jsx)("div",{className:"column is-1"}),Object(l.jsxs)("div",{className:"column is-4",children:[Object(l.jsx)("h2",{className:"title is-size-4",children:"My Interests"}),Object(l.jsx)("p",{children:"After starting to pick it up last year, I spend a portion of my free time learning Japanese. I still have a ways to go, but it's a fun journey."}),Object(l.jsxs)("p",{className:"nudge-down",children:["I enjoy playing around with technologies I don't get to use",Object(l.jsx)("span",{className:"avoid-wrap",children:"day-to-day"})," ie. Rust, Ruby, and even some purely functional tech like Haskell. This sometimes extends to pretending that I'm a game developer every now and again."]}),Object(l.jsx)("p",{className:"nudge-down",children:"I also enjoy playing in and running various tabletop games such as Dungeons and Dragons - I'm even 3D printing and painting my own minis!"})]})]});const b=[{name:"Go; Java; SpringBoot",tldr:"Web API development; testing"},{name:"JavaScript; React",tldr:"Web UI development; testing"},{name:"SQL; NoSQL; Elastic",tldr:"Data persistence; FGS; Optimisation"},{name:"GCP; AWS; OpenShift",tldr:"Product deployment; CICD management"},{name:"Linux Systems",tldr:"Development platform; Automation"},{name:"Rust",tldr:"Hobbyist development "}];var u=()=>Object(l.jsx)(m,{title:"Skills",id:"skills",children:Object(l.jsxs)("div",{className:"column is-10",children:[Object(l.jsx)("p",{className:"has-text-centered",children:"Over my years as a Software Engineer, I have made use of wide variety of programming languages and technologies. More recently, I primarily work with Go deployed with GCP infrastructure, but I have professionally developed accross the entire tech stack. As a hobbiest, I like to venture further afield into lower-level technology."}),Object(l.jsx)("p",{className:"has-text-centered nudge-down",children:"Here are some highlights:"}),Object(l.jsx)("div",{className:"columns is-multiline is-centered skills-container",children:b.map((({name:e,tldr:t})=>Object(l.jsxs)("div",{className:"column is-4 has-text-centered nudge-down",children:[Object(l.jsx)("h2",{className:"title is-size-4",children:Object(l.jsx)("strong",{children:e})}),Object(l.jsx)("p",{className:"subtitle",children:t})]},e)))})]})});const x=({company:e,date:t,children:s,className:n})=>Object(l.jsxs)("div",{className:`columns experience-pane ${n}`,children:[Object(l.jsxs)("div",{className:"column is-2",children:[Object(l.jsx)("h2",{className:"title is-size-4 has-text-right-tablet",children:e}),Object(l.jsx)("p",{className:"subtitle has-text-right-tablet",children:t})]}),Object(l.jsx)("div",{className:"experience-details column is-9 content",children:s})]});var g=()=>Object(l.jsx)(m,{title:"Experience",id:"experience",children:Object(l.jsxs)("div",{className:"column is-12",children:[Object(l.jsxs)(x,{company:"Benefex",date:"Jan 2023 - Sept 2024",children:[Object(l.jsx)("p",{children:"As a senior engineer at Benefex, I led multiple teams and projects from conception to final delivery to customers, taking resposibility for the technical leadership of design and implementation while upskilling my more junior team members."}),Object(l.jsxs)("p",{children:["Notable projects include:",Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Centralised notifications service for the whole platform supporting email, web, mobile, and Microsoft Teams push Notifications"}),Object(l.jsx)("li",{children:"Microsoft Teams app and accompanying bot built using the Azure Bot framework for notificaiton delivery and product interaction"}),Object(l.jsx)("li",{children:"A product provisioning service + global navigation wrapper to enable customers to expand usage of Benefex products globally (with an average 33% revenue increase per customer)"})]})]}),Object(l.jsxs)("p",{children:["I also put emphasis into creating and maintaining standards as well as shared packages and api clients for the backend chapter, improving the daily workflow for all back-end engineers at Benefex. This included standardising error formats accross the service landscape, introducing OpenAPI specifications to our services, and making use of and writing ",Object(l.jsx)("code",{class:"inline",children:"go gen"})," code generation tools to reduce manually-written boilerplate accross the chapter."]})]}),Object(l.jsxs)(x,{className:"nudge-down",company:"VISFO",date:"Jul 2021 - Jan 2023",children:[Object(l.jsx)("p",{children:"At VISFO, I was responsible for writing API-layer applications in Golang using Test-Driven Development practices. I also developed and maintained the GCP-based infrastructure underpinning those applications with Terraform."}),Object(l.jsx)("p",{children:"In order to help with managing rapidly changing customer requirements, I pushed for and implemented Agile practices into an environment where there were no official ways-of-working, and maintained a guiding role during events and ceremonies."})]}),Object(l.jsxs)(x,{className:"nudge-down",company:"HMG",date:"Sept 2017 - Jul 2021",children:[Object(l.jsx)("p",{children:"In this role, I was responsible for designing, developing, and maintaining a range of software products for internal customers in other government departments."}),Object(l.jsx)("p",{children:"As a full-stack engineer, I spent time working at every layer of these applications, from UX and front-end heavy projects, through to API work, and data-layer and dev-ops/infrastructure management. The primary technologies I made use of over these projects include Java/Spring Boot, JavaScript/React, and OpenShift hosted on AWS."}),Object(l.jsx)("p",{children:"Within my teams, I organised and facilitated Agile Events, often taking on a leading role to help steer development effort based on customer requirements and my team\u2019s velocity estimations."}),Object(l.jsx)("p",{children:"Secondary to my official responsibilities, I also spent time improving inner-source libraries and components used by my teams in order to improve software within the organisation beyond my own products. This also extended to helping to improve internal tooling, such as pushing for internal support of Rust\u2019s package manager, Cargo, to give the developer community better freedom in choosing the correct tool for any particular piece of work."})]})]})});var O=()=>Object(l.jsx)(m,{title:"Contact",id:"contact",children:Object(l.jsxs)("div",{className:"column is-6 has-text-centered",children:[Object(l.jsx)("p",{className:"has-text-centered",children:"I'm not actively looking for new opportunities right now, but if you think you have something I may be interested in (or you just want to say hi) please don't hesitate to send me a message."}),Object(l.jsx)("section",{className:"section",children:Object(l.jsx)("a",{href:"mailto:ryantremarco@hotmail.co.uk",className:"button is-primary is-medium",children:"Get in touch"})})]})});var v=()=>Object(l.jsxs)(r.a,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(j,{}),Object(l.jsx)(p,{}),Object(l.jsx)(u,{}),Object(l.jsx)(g,{}),Object(l.jsx)(O,{}),Object(l.jsx)(h,{})]});c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d3961fe6.chunk.js.map