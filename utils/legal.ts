// Legal text for /terms and /privacy, kept as data so the copy can be
// reviewed and changed without touching the page layout.

export type LegalBlock =
    | { kind: "p"; text: string }
    | { kind: "list"; items: string[] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

export type LegalDocument = {
    title: string;
    updated: string;
    intro: string;
    sections: LegalSection[];
};

export const CONTACT_EMAIL = "hi@videlabs.io";

export const terms: LegalDocument = {
    title: "Terms of Use",
    updated: "5 November 2026",
    intro: "These terms cover your use of videlabs.io. Videpay, Chain Streets and Unipus are separate products with their own terms.",
    sections: [
        {
            heading: "1. Who we are",
            blocks: [
                {
                    kind: "p",
                    text: "Videlabs is a research and development lab building infrastructure, protocols and developer tools on-chain. The website is run by Videlabs Technologies Ltd, a company incorporated in the Federal Republic of Nigeria (RC 9985200). In these terms, \"Videlabs\", \"we\" and \"us\" mean Videlabs Technologies Ltd, and \"you\" means anyone using this website.",
                },
                {
                    kind: "p",
                    text: "By using this website you agree to these terms. If you don't agree, please don't use it.",
                },
            ],
        },
        {
            heading: "2. Our products have their own terms",
            blocks: [
                {
                    kind: "p",
                    text: "Videlabs is the parent company of these products:",
                },
                {
                    kind: "list",
                    items: [
                        "Videpay (videpay.io): non-custodial payment infrastructure.",
                        "Chain Streets (chainstreets.io): a browser life sim and city builder.",
                        "Unipus: an app for creators and fan communities, still being built.",
                    ],
                },
                {
                    kind: "p",
                    text: "Each product has its own Terms and Privacy Policy, published on its own site. When you use a product, its terms apply, not these.",
                },
            ],
        },
        {
            heading: "3. Information on this site",
            blocks: [
                {
                    kind: "p",
                    text: "This website describes our work, services and products. It is general information only. In particular:",
                },
                {
                    kind: "list",
                    items: [
                        "Nothing here is an offer to sell, or a request to buy, any token, security or other asset.",
                        "Nothing here is financial, investment, legal or tax advice.",
                        "Product descriptions may describe features that are still being built and may change.",
                        "Blockchain technology and crypto-assets carry real risks, including the total loss of value.",
                    ],
                },
                {
                    kind: "p",
                    text: "We try to keep the site accurate and up to date, but we don't promise that it is complete or free of errors.",
                },
            ],
        },
        {
            heading: "4. Working with us",
            blocks: [
                {
                    kind: "p",
                    text: "If you contact us about a project, nothing is agreed until we both sign a written agreement. That agreement sets out the scope, price, ownership of work and other terms, and it takes priority over anything on this website.",
                },
            ],
        },
        {
            heading: "5. Acceptable use",
            blocks: [
                { kind: "p", text: "When using this website, don't:" },
                {
                    kind: "list",
                    items: [
                        "break any law, or help anyone else break one;",
                        "try to gain unauthorised access to, disrupt or overload the site or its hosting;",
                        "scrape or copy the site in bulk for commercial use without our permission;",
                        "send us spam, malware, or anything misleading or unlawful through the contact form or our email addresses;",
                        "pretend to be Videlabs or to act for us.",
                    ],
                },
            ],
        },
        {
            heading: "6. Intellectual property",
            blocks: [
                {
                    kind: "p",
                    text: "The Videlabs, Videpay, Chain Streets and Unipus names and logos, and the text, design and graphics on this site, belong to Videlabs or its licensors. You may view and share the site for personal, non-commercial purposes. You may not use our names or logos in a way that suggests we endorse you without our written permission.",
                },
                {
                    kind: "p",
                    text: "Third-party names and logos, such as those of blockchain networks, belong to their owners. Showing them doesn't mean they endorse us.",
                },
            ],
        },
        {
            heading: "7. Links to other sites",
            blocks: [
                {
                    kind: "p",
                    text: "The site links to other websites, including X (Twitter). We aren't responsible for their content, terms or privacy practices.",
                },
            ],
        },
        {
            heading: "8. Disclaimers and liability",
            blocks: [
                {
                    kind: "p",
                    text: "The website is provided \"as is\". As far as the law allows:",
                },
                {
                    kind: "list",
                    items: [
                        "we give no warranties about the website;",
                        "we aren't liable for any loss that comes from using it or relying on it, including loss of profits, data or opportunity.",
                    ],
                },
                {
                    kind: "p",
                    text: "Nothing in these terms limits liability that the law doesn't allow us to limit.",
                },
            ],
        },
        {
            heading: "9. Changes",
            blocks: [
                {
                    kind: "p",
                    text: "We may update these terms from time to time. The date at the top shows when they last changed. If you keep using the site after a change, you accept the new terms.",
                },
            ],
        },
        {
            heading: "10. Law and disputes",
            blocks: [
                {
                    kind: "p",
                    text: "These terms are governed by the laws of the Federal Republic of Nigeria. The courts of Nigeria have jurisdiction over any dispute about them. If you're a consumer, you keep any protections that the law of your country gives you and that can't be taken away by contract.",
                },
            ],
        },
        {
            heading: "11. Contact",
            blocks: [
                {
                    kind: "p",
                    text: `Questions about these terms: ${CONTACT_EMAIL}.`,
                },
            ],
        },
    ],
};

export const privacy: LegalDocument = {
    title: "Privacy Policy",
    updated: "5 November 2026",
    intro: "This policy explains what happens to your data when you visit videlabs.io or contact us. It's short because we collect very little.",
    sections: [
        {
            heading: "1. Who we are",
            blocks: [
                {
                    kind: "p",
                    text: `Videlabs Technologies Ltd ("Videlabs"), a company incorporated in the Federal Republic of Nigeria (RC 9985200), is the data controller for the personal data described here. You can reach us at ${CONTACT_EMAIL}.`,
                },
                {
                    kind: "p",
                    text: "This policy covers only this website. Videpay, Chain Streets and Unipus each have their own privacy policy, which explains what that product collects and how the products share data with one another.",
                },
            ],
        },
        {
            heading: "2. The short version",
            blocks: [
                {
                    kind: "list",
                    items: [
                        "This website uses no cookies, no analytics, no advertising trackers and no social media pixels.",
                        "The contact form doesn't send anything to our servers. It opens an email in your own email app, addressed to us. Nothing is sent until you press send there.",
                        "We don't sell your personal data.",
                    ],
                },
            ],
        },
        {
            heading: "3. What we collect",
            blocks: [
                {
                    kind: "p",
                    text: "If you email us, including through the contact form, we receive what you choose to include. That's usually:",
                },
                {
                    kind: "list",
                    items: [
                        "your name and email address;",
                        "your X (Twitter) username and organisation, if you add them;",
                        "your project type, the services you need, and your message.",
                    ],
                },
                {
                    kind: "p",
                    text: "When you visit the site, our hosting provider automatically processes technical data so it can deliver the pages and keep them secure. This includes your IP address, browser type, the pages requested and the time. We don't use this data to identify you or build a profile.",
                },
            ],
        },
        {
            heading: "4. How we use it",
            blocks: [
                {
                    kind: "list",
                    items: [
                        "To reply to you and discuss your project. The legal basis is taking steps, at your request, before a possible contract, or our legitimate interest in answering enquiries.",
                        "To keep a record of our correspondence and any agreement that follows. The legal basis is our legitimate interests and legal obligations.",
                        "To keep the website running and secure. The legal basis is our legitimate interests.",
                    ],
                },
                {
                    kind: "p",
                    text: "We won't add you to a mailing list or send you marketing unless you ask us to.",
                },
            ],
        },
        {
            heading: "5. Who receives it",
            blocks: [
                { kind: "p", text: "We share personal data only with:" },
                {
                    kind: "list",
                    items: [
                        "our email and website hosting providers, who process it on our behalf;",
                        "professional advisers, or authorities where the law requires it;",
                        "a buyer or successor, if Videlabs is reorganised or sold. This policy would continue to protect your data.",
                    ],
                },
                {
                    kind: "p",
                    text: "These providers may store data outside Nigeria, including in the United States and the European Union. Where the Nigeria Data Protection Act, the GDPR or the UK GDPR applies, we use the safeguards they require for those transfers.",
                },
            ],
        },
        {
            heading: "6. How long we keep it",
            blocks: [
                {
                    kind: "list",
                    items: [
                        "Enquiries that don't lead to work: up to 2 years after our last contact.",
                        "Correspondence about a project we take on: for as long as the agreement runs, plus the period that tax and contract law requires (usually 6 years).",
                        "Hosting logs: kept by the hosting provider for a short period, usually no more than 30 days.",
                    ],
                },
            ],
        },
        {
            heading: "7. Your rights",
            blocks: [
                {
                    kind: "p",
                    text: "Depending on where you live, including under the Nigeria Data Protection Act 2023, the GDPR and the UK GDPR, you can:",
                },
                {
                    kind: "list",
                    items: [
                        "ask for a copy of your data;",
                        "have your data corrected or deleted;",
                        "object to, or restrict, how we use your data;",
                        "complain to a data protection authority. In Nigeria, that's the Nigeria Data Protection Commission.",
                    ],
                },
                {
                    kind: "p",
                    text: `To use any of these rights, email ${CONTACT_EMAIL}. We'll reply within 30 days.`,
                },
            ],
        },
        {
            heading: "8. Fonts and third-party content",
            blocks: [
                {
                    kind: "p",
                    text: "Our fonts are served from this website, not from a font service, so loading them doesn't send your data to anyone else. Links to X, Videpay and Chain Streets take you to their own sites, where their own privacy policies apply.",
                },
            ],
        },
        {
            heading: "9. Children",
            blocks: [
                {
                    kind: "p",
                    text: "This website is meant for businesses and adults. We don't knowingly collect data from children.",
                },
            ],
        },
        {
            heading: "10. Changes",
            blocks: [
                {
                    kind: "p",
                    text: "If we change how we handle data, for example by adding analytics, we'll update this page and the date at the top before the change takes effect.",
                },
            ],
        },
    ],
};
