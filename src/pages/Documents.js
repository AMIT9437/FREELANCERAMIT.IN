import React from "react";

export default function Documents() {
  const services = [
    {
      title: "GST Registration",
      docs: "PAN, Aadhaar, Address Proof, Photo, Business Proof",
      about:
        "GST registration enables businesses to collect tax and claim input credit. This is mandatory for those above the turnover threshold or interstate trade.",
      importance: "Ensures legal tax compliance and the ability to conduct business under GST."
    },
    {
      title: "ITR Filing",
      docs: "PAN, Aadhaar, Salary Slips, Form 16, Bank Statements",
      about:
        "Income Tax Return filing reports your income and taxes paid for the financial year. It’s required for individuals and businesses with taxable income.",
      importance: "Avoids penalties, enables refunds, and ensures good financial standing."
    },
    {
      title: "MSME (Udyam) Registration",
      docs: "Aadhaar, PAN, Business Address Proof, Bank Details",
      about:
        "Udyam registration provides official recognition for micro, small, and medium enterprises and unlocks many benefits.",
      importance: "Grants access to government loans, subsidies, and preferential treatment in procurement."
    },
    {
      title: "Private Limited Company Registration",
      docs: "PAN & Aadhaar of directors, Proof of Address, Photos, Rent Agreement, Utility Bill, DSC & DIN",
      about:
        "Creating a Pvt Ltd company gives you a separate legal entity with limited liability. It also improves credibility and opens up funding avenues.",
      importance: "Protects owner’s personal assets and enhances professional perception."
    },
    {
      title: "Proprietorship Firm Registration",
      docs: "PAN, Aadhaar, Address Proof, Utility Bill",
      about:
        "A sole proprietor business is easy to form and operate with minimal documentation. Ideal for freelancers and small businesses.",
      importance: "Legally formalizes your business and opens access to banking and tax filings."
    },
    {
      title: "PAN Card Application",
      docs: "Aadhaar, Address Proof, Passport Photo",
      about:
        "PAN is a mandatory identity for all financial and tax-related transactions in India.",
      importance: "Required for tax filings, banking, investments, and business registrations."
    },
    {
      title: "TAN Registration",
      docs: "PAN, Business Details, Address Proof",
      about:
        "TAN is required by any entity that deducts tax at source (TDS) while making payments.",
      importance: "Ensures legal deduction and deposit of TDS, avoiding penalties."
    },
    {
      title: "Digital Signature Certificate (DSC)",
      docs: "PAN, Aadhaar, Passport Photo, Email, Phone",
      about:
        "DSC is an encrypted digital credential for signing documents electronically, required for e‑filings.",
      importance: "Ensures secure, verifiable digital signatures on GST, MCA, and tender documents."
    },
    {
      title: "GST Return Filing",
      docs: "Sales & Purchase Invoices, Bank Statements",
      about:
        "Filing monthly or quarterly GST returns (e.g. GSTR‑1, GSTR‑3B) reports your tax collection and input credit claims.",
      importance: "Keeps your GST registration active and compliant with legal norms."
    },
    {
      title: "TDS Return Filing",
      docs: "TAN, Challans, PAN of Deductees, Payment Details",
      about:
        "Quarterly filing of taxes withheld at source for salary, rent, or professional fees paid by your business.",
      importance: "Ensures deductees receive credit and you avoid penalties for non‑filing."
    },
    {
      title: "Accounting & Bookkeeping",
      docs: "Invoices, Bills, Bank Statements, Expense Records",
      about:
        "Monthly bookkeeping lets you track income, expenses, and financial position systematically.",
      importance: "Essential for tax filings, audits, loan applications, and business insights."
    },
    {
      title: "Business Audit Support",
      docs: "Financial Statements, Ledgers, Tax Records",
      about:
        "Audit reviews your accounts for accuracy, detects fraud, and ensures compliance with regulations.",
      importance: "Strengthens credibility and is mandatory for certain business types."
    },
    {
      title: "Partnership Firm Registration",
      docs: "PAN, Aadhaar of Partners, Partnership Deed, Address Proof",
      about:
        "Forming a registered partnership requires a legal agreement and structured responsibilities.",
      importance: "Legally binds partners and improves transparency in business operations."
    },
    {
      title: "Logo Design",
      docs: "Business Name, Brand Concept, Color Preferences",
      about:
        "A distinctive logo visually defines your brand identity across all marketing and communication.",
      importance: "Increases brand recall and ensures a professional perception."
    },
    {
      title: "Static Website Development",
      docs: "Content, Photos, Logo, Business Details",
      about:
        "A clean, multi‑page website built with HTML/CSS, ideal for showcasing your services or portfolio.",
      importance: "Creates a credible online presence that’s quick to build and maintain."
    },
    {
      title: "Dynamic Website Development",
      docs: "Content, Images, Business Logic, Hosting Access",
      about:
        "Dynamic websites (with Flask, databases) allow interactive content like forms and real‑time updates.",
      importance: "Enhances user experience and supports data‑driven functionalities."
    },
    {
      title: "Landing Page Design",
      docs: "Product Info, Images, Call‑to‑action Text",
      about:
        "A single‑page marketing site focused on conversions—user signups, leads, or promotional offers.",
      importance: "Boosts campaign performance and captures audience action."
    },
    {
      title: "Birthday Webpage (Custom)",
      docs: "Photos, Name, Message, Theme Preferences",
      about:
        "A personalized celebratory webpage with animations and greetings for birthdays or events.",
      importance: "Creates unique and memorable online experiences."
    },
    {
      title: "Visiting Card Design",
      docs: "Name, Contact Info, Brand Identity Elements",
      about:
        "A professional card design that leaves a lasting first impression in meetings and networking.",
      importance: "Essential for client interactions and brand consistency."
    },
    {
      title: "Flyer/Poster Design",
      docs: "Event Details, Brand Info, Visual Assets",
      about:
        "Creative marketing materials for digital or print distribution to promote products or events.",
      importance: "Attracts attention and communicates offers effectively."
    },
    {
      title: "HTML Contact Form Integration",
      docs: "Hosting Access, Email ID, Backend API (if any)",
      about:
        "A contact form on your website that allows visitors to send inquiries directly.",
      importance: "Boosts lead capture and client engagement."
    },
    {
      title: "Google Business Listing",
      docs: "Business Name, Address, Phone, Photos",
      about:
        "Registering your business on Google Maps and Search improves local discoverability.",
      importance: "Attracts local customers and enhances trust."
    },
    {
      title: "Domain & Hosting Setup",
      docs: "Domain Choice, Payment Info, Hosting Credentials",
      about:
        "Registering a web domain and connecting it with hosting servers makes your site live.",
      importance: "Without this, your website cannot be accessed online."
    },
    {
      title: "Social Media Graphics",
      docs: "Brand Colors, Message, Visual Style",
      about:
        "Custom templates for Instagram, Facebook, and other platforms to maintain brand consistency.",
      importance: "Improves online engagement and brand identity."
    },
    {
      title: "Digital Business Card (HTML)",
      docs: "Name, Contact Info, Logo, Photo",
      about:
        "An interactive card that can be viewed via browser or QR code, replacing printed cards.",
      importance: "Easy to share and update digitally."
    },
    {
      title: "Portfolio Website",
      docs: "Work Samples, Bio, Contact!",
      about:
        "A showcase site presenting your projects, testimonials, and services in a structured layout.",
      importance: "Helps build credibility and attract clients."
    },
    {
      title: "Freelance Profile Page",
      docs: "Photo, Skills, Service Listing, Contact",
      about:
        "Single-page profile to demonstrate your freelance offerings with examples and contact info.",
      importance: "Helps convert online traffic into clients."
    },
    {
      title: "Resume Webpage",
      docs: "Resume Content, Photo, Career Info",
      about:
        "Digital resume site showcasing your skills, experience, and contact info for employers.",
      importance: "Enhances professionalism and online presence."
    },
    {
      title: "Startup Consulting",
      docs: "Business Plan, ID Proof, Financial Overview",
      about:
        "Consulting on legal registrations, market entry, finance planning, and digital strategy.",
      importance: "Helps startups avoid pitfalls and start strong."
    },
    {
      title: "Annual Compliance Filing",
      docs: "Fin Statements, Board Minutes, ROC Credentials",
      about:
        "Covers mandatory filings like annual returns, financials, and director declarations.",
      importance: "Keeps your company legally active and penalty-free."
    },
    {
      title: "ITR for Freelancers",
      docs: "PAN, Bank Statement, Invoice Copies",
      about:
        "Income tax filing for self-employed & gig economy workers based on annual earnings.",
      importance: "Maintains compliance and supports loan/visa applications."
    },
    {
      title: "Basic e‑Commerce Site",
      docs: "Product Catalog, Photos, Pricing, Payment Setup",
      about:
        "A starter online store to list products, categories, and accept payments.",
      importance: "Opens up digital sales channels."
    },
    {
      title: "HTML Photo Frame Page",
      docs: "Photos, Event Details",
      about:
        "Stylish HTML page to frame photos for occasions like birthdays or anniversaries.",
      importance: "Creates shareable digital memories."
    },
    {
      title: "Income Certificate Application",
      docs: "Aadhaar, Income Proof, Form",
      about:
        "Helps you apply for official income certificates required for various privileges.",
      importance: "Necessary for scholarships and govt programs."
    },
    {
      title: "Caste Certificate Support",
      docs: "Aadhaar, Family Ration Card, Residence Proof",
      about:
        "Assists in creating caste certificates for SC/ST/OBC categories.",
      importance: "Needed for reservation benefits and schemes."
    },
    {
      title: "Website Redesign",
      docs: "Old Site URL, Design Preferences",
      about:
        "Revamps existing site to modern UI/UX standards with mobile responsiveness.",
      importance: "Improves usability, load speed, and SEO."
    },
    {
      title: "Financial Projection Sheet",
      docs: "Financial Estimates, Cost & Revenue Data",
      about:
        "Builds detailed budget, forecast, and cash flow sheets for planning.",
      importance: "Essential for fundraising, planning, and investor confidence."
    },
    {
      title: "Invoice Template Design (GST)",
      docs: "Business Info, GSTIN",
      about:
        "Custom invoice design with GST compliance, branding, and professional layout.",
      importance: "Supports legal billing and projected image."
    },
    {
      title: "Balance Sheet Creation",
      docs: "Bank Statements, Asset & Liability Records",
      about:
        "Produces accurate balance sheets that present business financial status.",
      importance: "Important for audits, loans, and financial clarity."
    }
  ];

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
      <h2>Documents Required for Services</h2>
      {services.map((s, i) => (
        <section key={i} style={{ background: "#fafafa", padding: "1rem", margin: "1rem 0", borderRadius: "6px" }}>
          <h3>{i + 1}. {s.title}</h3>
          <p><strong>Required Documents:</strong> {s.docs}</p>
          <p><strong>About:</strong> {s.about}</p>
          <p><strong>Why It's Important:</strong> {s.importance}</p>
        </section>
      ))}
    </div>
  );
}
