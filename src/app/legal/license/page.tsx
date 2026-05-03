import type { Metadata } from 'next'
import { LegalDoc, type LegalTocItem } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Software License Agreement',
  description:
    'Veklom Software License Agreement (EULA): self-hosted sovereign deployment, plan tiers, HIPAA/BAA terms, warranty, liability, and Ontario governing law.',
  alternates: { canonical: '/legal/license' },
  robots: { index: true, follow: true },
}

const toc: LegalTocItem[] = [
  { id: 'section-1', label: 'Deployment Model & Sovereign Execution Guarantee' },
  { id: 'section-2', label: 'Use of Software' },
  { id: 'section-3', label: 'Customer Data & Data Sovereignty' },
  { id: 'section-4', label: 'Security' },
  { id: 'section-5', label: 'Intellectual Property' },
  { id: 'section-6', label: 'Confidentiality' },
  { id: 'section-7', label: 'Fees, Payment & License Keys' },
  { id: 'section-8', label: 'Term and Termination' },
  { id: 'section-9', label: 'Warranty' },
  { id: 'section-10', label: 'Support and Availability' },
  { id: 'section-11', label: 'Indemnification' },
  { id: 'section-12', label: 'Limitation of Remedies and Damages' },
  { id: 'section-13', label: 'General Terms' },
  { id: 'section-14', label: 'Definitions' },
]

export default function LicensePage() {
  return (
    <LegalDoc
      title="Veklom Software License Agreement"
      updated="May 2, 2026"
      effective="May 2, 2026"
      intro={
        <>
          <p className="font-semibold text-slate-900">
            END-USER LICENSE AGREEMENT (EULA) FOR THE VEKLOM PLATFORM
          </p>
          <p>
            Veklom operates entirely within your infrastructure. No model weights,
            no prompt data, no execution logs, and no API keys ever leave your
            environment. Veklom does not provide a hosted or cloud-managed service.
          </p>
          <p>
            This Software License Agreement (&ldquo;Agreement&rdquo;) governs the
            installation and use of the Veklom platform software (the
            &ldquo;Software&rdquo;) provided by Veklom Inc. (&ldquo;Veklom&rdquo;).
            The Software is licensed to customers and installed within
            infrastructure controlled by the customer (&ldquo;Customer
            Environment&rdquo;). The Software is not provided as a hosted or
            software-as-a-service (SaaS) offering.
          </p>
          <p>
            By installing, accessing, or using the Software, Customer agrees to be
            bound by this Agreement.
          </p>
        </>
      }
      toc={toc}
    >
      <p className="font-semibold uppercase tracking-wide text-slate-900">
        THESE VEKLOM SOFTWARE LICENSE TERMS (&ldquo;AGREEMENT&rdquo;) ARE ENTERED
        INTO BY AND BETWEEN VEKLOM INC. (&ldquo;VEKLOM&rdquo;) AND THE ENTITY OR
        PERSON PLACING AN ORDER FOR, INSTALLING, ACCESSING, OR USING ANY VEKLOM
        SOFTWARE OFFERINGS (&ldquo;CUSTOMER&rdquo; OR &ldquo;YOU&rdquo;). BY
        INDICATING YOUR ACCEPTANCE OF THIS AGREEMENT OR BY INSTALLING, ACCESSING,
        OR USING ANY VEKLOM SOFTWARE, YOU AGREE TO BE BOUND BY ALL TERMS AND
        CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE, YOU MAY NOT INSTALL OR
        USE THE SOFTWARE.
      </p>

      <h2 id="section-1">1. Deployment Model &amp; Sovereign Execution Guarantee</h2>

      <h3 id="section-1-1">1.1 Self-Hosted Architecture</h3>
      <p>
        The Veklom platform is provided exclusively as self-hosted enterprise
        software. The Software is installed and operated within infrastructure
        controlled by the Customer, including customer-managed cloud
        infrastructure (DigitalOcean, Hetzner, AWS, GCP, Azure), private cloud
        environments, or on-premise systems. Veklom does not host, operate,
        manage, or monitor the infrastructure on which the Software runs.
      </p>

      <h3 id="section-1-2">1.2 Sovereign Execution Guarantee</h3>
      <p>
        Veklom warrants that the Software, when used in accordance with the
        Documentation:
      </p>
      <ul>
        <li>
          Does not transmit Customer Data, prompt content, model outputs,
          execution logs, or API keys to Veklom or any Veklom-controlled server;
        </li>
        <li>
          Executes all AI inference operations locally within the Customer
          Environment via Ollama or Customer-configured model providers;
        </li>
        <li>
          Does not establish persistent outbound connections to Veklom
          infrastructure during normal operation;
        </li>
        <li>
          Stores all audit logs, HMAC records, cost telemetry, and compliance
          reports exclusively within the Customer Environment.
        </li>
      </ul>
      <p>
        The sole exception is license key validation, which requires a brief,
        cryptographically signed outbound call to license.veklom.com containing
        only the license key hash and a timestamp. No Customer Data is transmitted
        during license validation.
      </p>

      <h3 id="section-1-3">1.3 Operational Responsibility</h3>
      <p>
        Customer acknowledges that the performance, availability, and security of
        the Software depend on the configuration and operation of the Customer
        Environment. Customer is responsible for provisioning and maintaining all
        infrastructure, networking, runtime configuration, storage, and security
        controls. Veklom is not responsible for outages, data loss, or security
        incidents resulting from failures or misconfiguration of Customer
        infrastructure, cloud providers, or third-party systems.
      </p>

      <h2 id="section-2">2. Use of Software</h2>

      <h3 id="section-2-1">2.1 License Grant</h3>
      <p>
        Subject to the terms of this Agreement and payment of applicable Fees,
        Veklom grants Customer a limited, non-transferable, non-sublicensable,
        non-exclusive license during the Subscription Term to install and use the
        Software in object code form within the Customer Environment solely for
        Customer&rsquo;s internal business purposes in accordance with the
        Documentation and applicable Order Form.
      </p>

      <h3 id="section-2-2">2.2 License Key Activation</h3>
      <p>
        Use of the Software requires a valid license key issued by Veklom upon
        purchase. License keys are:
      </p>
      <ul>
        <li>
          Tied to a specific Customer entity and plan tier (Sovereign Trial, Team,
          Business, or Enterprise);
        </li>
        <li>
          Non-transferable and may not be shared across unaffiliated organizations;
        </li>
        <li>
          Validated periodically via a signed request to license.veklom.com as
          described in Section 1.2;
        </li>
        <li>
          Subject to revocation upon termination of this Agreement or violation of
          its terms.
        </li>
      </ul>
      <p>
        Customer is responsible for maintaining the confidentiality of license
        keys and for all use of the Software under their key.
      </p>

      <h3 id="section-2-3">2.3 Permitted Plans</h3>
      <p>
        The Software is offered under the following plan tiers, each with
        associated call limits, feature gates, and pricing as set out in the
        applicable Order Form:
      </p>
      <ul>
        <li>
          <strong>Sovereign Trial</strong> &mdash; 14-day evaluation period,
          50,000 credits included, full feature access;
        </li>
        <li>
          <strong>Team</strong> &mdash; $12,000/month, production use up to 10
          seats;
        </li>
        <li>
          <strong>Business</strong> &mdash; $35,000/month, multi-tenant, full
          compliance suite;
        </li>
        <li>
          <strong>Enterprise</strong> &mdash; Custom pricing, air-gap deployment
          options, dedicated SLA.
        </li>
      </ul>
      <p>
        Feature access is enforced at runtime via license middleware. Attempting
        to access features above the licensed tier without upgrade constitutes a
        material breach of this Agreement.
      </p>

      <h3 id="section-2-4">2.4 Affiliates</h3>
      <p>
        Customer Affiliates may purchase licenses by executing an Order Form
        referencing this Agreement. Each such Order Form establishes a separate
        agreement between the Affiliate and Veklom. Each Affiliate is bound by the
        terms of this Agreement as if it were the Customer.
      </p>

      <h3 id="section-2-5">2.5 General Restrictions</h3>
      <p>Customer shall not, and shall not permit any third party to:</p>
      <p>
        (a) sell, rent, lease, sublicense, or otherwise make the Software
        available to any third party as a hosted or managed service;
      </p>
      <p>
        (b) use the Software to provide a service bureau, outsourced AI inference,
        or multi-tenant AI processing service for the benefit of unaffiliated
        third parties under a single license;
      </p>
      <p>
        (c) reverse engineer, decompile, disassemble, or attempt to derive source
        code or model weights bundled with the Software;
      </p>
      <p>
        (d) remove, alter, or obscure any proprietary notices, trademarks, or
        copyright notices in the Software;
      </p>
      <p>
        (e) use the Software to process data in violation of applicable laws,
        including HIPAA-regulated data without a signed BAA (see Section 3.2);
      </p>
      <p>
        (f) attempt to bypass, disable, or circumvent the license key validation
        system or any feature gate enforced by the Software.
      </p>

      <h2 id="section-3">3. Customer Data &amp; Data Sovereignty</h2>

      <h3 id="section-3-1">3.1 Customer Ownership</h3>
      <p>
        As between the parties, Customer retains all right, title, and interest in
        and to Customer Data. Veklom acquires no rights in Customer Data. Because
        the Software operates entirely within the Customer Environment, Customer
        Data is never transmitted to or stored by Veklom except as explicitly
        authorized in writing by Customer for support purposes.
      </p>

      <h3 id="section-3-2">3.2 HIPAA and Regulated Data</h3>
      <p>
        Customer may use the Software to process HIPAA-regulated data within the
        Customer Environment. Because Veklom does not access, store, or process
        Customer Data on its own infrastructure, Veklom is not a Business
        Associate under HIPAA with respect to standard deployments. If Customer
        requests that Veklom access Customer Data during a Technical Services
        engagement, the parties must execute a Business Associate Agreement (BAA)
        prior to such access.
      </p>

      <h3 id="section-3-3">3.3 Data Localization</h3>
      <p>
        Because all data processing occurs within Customer&rsquo;s chosen
        infrastructure, Customer retains full control over data residency and
        localization. The Software supports deployment in EU-sovereign,
        air-gapped, and regulated-cloud environments. Customer is solely
        responsible for selecting infrastructure compliant with applicable data
        localization laws (GDPR, PIPEDA, CCPA, etc.).
      </p>

      <h3 id="section-3-4">3.4 Audit Logs</h3>
      <p>
        The Software generates HMAC-SHA256-signed immutable audit logs for every
        execution event. These logs are stored exclusively within the Customer
        Environment. Veklom has no access to audit logs unless Customer explicitly
        shares them for support diagnosis. Audit log integrity is the
        responsibility of Customer&rsquo;s infrastructure.
      </p>

      <h2 id="section-4">4. Security</h2>

      <h3 id="section-4-1">4.1 Built-In Security Controls</h3>
      <p>
        The Software includes the following security capabilities, each operating
        within the Customer Environment:
      </p>
      <ul>
        <li>Zero-trust middleware with JWT authentication and optional MFA;</li>
        <li>AES-256-GCM encryption for data at rest;</li>
        <li>Row-Level Security (RLS) enforced at the PostgreSQL layer per tenant;</li>
        <li>API key management with SHA-256 hashing;</li>
        <li>RBAC (Role-Based Access Control) across all endpoints;</li>
        <li>HMAC-SHA256 immutable audit trail for every AI execution event;</li>
        <li>
          Content safety filters including NSFW detection and CSAM zero-tolerance
          blocking.
        </li>
      </ul>

      <h3 id="section-4-2">4.2 Customer Security Responsibility</h3>
      <p>
        Customer is responsible for the security posture of the Customer
        Environment, including network segmentation, firewall configuration, TLS
        termination, secret management, and access control to the host system.
        Veklom is not responsible for security incidents arising from
        misconfiguration of Customer infrastructure.
      </p>

      <h2 id="section-5">5. Intellectual Property</h2>

      <h3 id="section-5-1">5.1 Veklom Technology</h3>
      <p>
        Veklom and its licensors retain all right, title, and interest in and to
        the Software, Documentation, and all underlying technology, including the
        circuit breaker engine, cost intelligence layer, policy enforcement
        middleware, and compliance reporting modules. No rights are granted to
        Customer beyond the limited license set out in Section 2.1.
      </p>

      <h3 id="section-5-2">5.2 Feedback</h3>
      <p>
        If Customer provides feedback, suggestions, or enhancement requests
        (&ldquo;Feedback&rdquo;), Veklom may freely use and incorporate Feedback
        into its products without restriction, obligation, or compensation to
        Customer.
      </p>

      <h3 id="section-5-3">5.3 Usage Data</h3>
      <p>
        Because the Software runs locally, Veklom does not collect operational
        telemetry from Customer deployments by default. If Customer opts in to
        telemetry sharing (clearly labeled in the Software configuration), Usage
        Data (aggregated, anonymized performance metrics) may be transmitted to
        Veklom solely for product improvement. Usage Data will never include
        Customer Data, prompt content, or personally identifiable information.
      </p>

      <h3 id="section-5-4">5.4 Marketing</h3>
      <p>
        Veklom may reference Customer&rsquo;s name as a customer in marketing
        materials. Upon written request, Veklom will remove such references within
        30 days.
      </p>

      <h2 id="section-6">6. Confidentiality</h2>

      <h3 id="section-6-1">6.1 Mutual Confidentiality</h3>
      <p>
        Each party will protect the other&rsquo;s Confidential Information using
        the same degree of care it applies to its own confidential information,
        but no less than reasonable care. Each party agrees to: (a) use
        Confidential Information solely for purposes consistent with this
        Agreement; and (b) limit access to employees, contractors, and advisors
        who need it and are bound by equivalent confidentiality obligations.
      </p>

      <h3 id="section-6-2">6.2 Compelled Disclosure</h3>
      <p>
        If legally required to disclose Confidential Information, the Receiving
        Party will, to the extent permitted, provide prompt written notice and
        cooperate with any effort to obtain confidential treatment.
      </p>

      <h2 id="section-7">7. Fees, Payment &amp; License Keys</h2>

      <h3 id="section-7-1">7.1 Fees and Payment</h3>
      <p>
        All Fees and payment terms are set forth in the applicable Order Form.
        Except as expressly stated, all payment obligations are non-cancelable and
        all Fees are non-refundable. Fees do not include applicable taxes;
        Customer is responsible for all taxes except those based on Veklom&rsquo;s
        net income.
      </p>

      <h3 id="section-7-2">7.2 Stripe Billing</h3>
      <p>
        Veklom uses Stripe as its payment processor. By providing payment
        information, Customer agrees to Stripe&rsquo;s terms of service.
        Subscription renewals are automatic unless cancelled before the renewal
        date. Customer may manage billing through the Veklom customer portal.
      </p>

      <h3 id="section-7-3">7.3 Payment Disputes</h3>
      <p>
        Veklom will not suspend licenses with respect to Fees that Customer is
        disputing in good faith, provided Customer notifies Veklom in writing
        within 10 business days of the invoice date and cooperates to resolve the
        dispute within 30 days. Undisputed amounts must be paid on time.
      </p>

      <h3 id="section-7-4">7.4 License Suspension for Non-Payment</h3>
      <p>
        If Fees remain unpaid for 30 or more days after the due date and are not
        subject to a good-faith dispute, Veklom may suspend license key
        validation, which will prevent the Software from accepting new execution
        requests until payment is received.
      </p>

      <h2 id="section-8">8. Term and Termination</h2>

      <h3 id="section-8-1">8.1 Term</h3>
      <p>
        This Agreement becomes effective on the Effective Date and continues until
        terminated. Each Order Form remains in effect for the License Term
        specified therein unless earlier terminated.
      </p>

      <h3 id="section-8-2">8.2 Termination for Cause</h3>
      <p>
        Either party may terminate this Agreement if the other party: (a) fails to
        cure a material breach within 30 days of written notice; (b) ceases
        business operations without a successor; or (c) enters bankruptcy or
        insolvency proceedings not dismissed within 60 days. If Customer
        terminates for cause under (a), Customer is entitled to a pro-rated refund
        of prepaid Fees for the unused License Term.
      </p>

      <h3 id="section-8-3">8.3 Effect of Termination</h3>
      <p>
        Upon termination: (a) all licenses immediately terminate; (b) Customer
        must cease all use of the Software; (c) Customer must delete or destroy
        all copies of the Software, Documentation, and Veklom Confidential
        Information in its possession. Because the Software runs in the Customer
        Environment, Customer retains full control of all Customer Data. Veklom
        has no obligation to store or return Customer Data. Accrued Fees are not
        affected by termination.
      </p>

      <h3 id="section-8-4">8.4 Survival</h3>
      <p>
        Sections 2.5, 5, 6, 7.1, 8, 9.3, 11, 12, 13, and 14 survive expiration or
        termination.
      </p>

      <h2 id="section-9">9. Warranty</h2>

      <h3 id="section-9-1">9.1 Service Warranty</h3>
      <p>
        Veklom warrants that the Software, when installed and used in accordance
        with the Documentation, will operate in substantial conformity with the
        Documentation. If Veklom cannot correct a reported nonconformity within a
        reasonable time, Customer may terminate the applicable Order Form and
        receive a refund of prepaid Fees for the unused License Term as its sole
        and exclusive remedy.
      </p>

      <h3 id="section-9-2">9.2 Mutual Warranty</h3>
      <p>
        Each party represents and warrants that: (a) it has full authority to
        enter into this Agreement; (b) the Agreement constitutes its binding
        obligation; and (c) performing its obligations does not violate any other
        agreement.
      </p>

      <h3 id="section-9-3">9.3 Warranty Disclaimer</h3>
      <p className="font-semibold uppercase tracking-wide text-slate-900">
        EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE SOFTWARE AND
        DOCUMENTATION ARE PROVIDED &ldquo;AS IS.&rdquo; TO THE MAXIMUM EXTENT
        PERMITTED BY LAW, VEKLOM DISCLAIMS ALL OTHER WARRANTIES, WHETHER EXPRESS,
        IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        VEKLOM DOES NOT WARRANT THAT THE SOFTWARE WILL OPERATE WITHOUT
        INTERRUPTION OR ERROR. VEKLOM DOES NOT REVIEW CUSTOMER DATA AND MAKES NO
        WARRANTIES REGARDING ITS ACCURACY, COMPLETENESS, OR LEGALITY.
      </p>

      <h2 id="section-10">10. Support and Availability</h2>

      <h3 id="section-10-1">10.1 Support</h3>
      <p>
        During the applicable License Term, Veklom will provide the support level
        specified in the Order Form. Because the Software runs in the Customer
        Environment, Veklom support is limited to Software-level issues. Veklom is
        not responsible for availability or performance issues caused by Customer
        infrastructure.
      </p>

      <h3 id="section-10-2">10.2 License Server Uptime</h3>
      <p>
        Veklom will use commercially reasonable efforts to maintain availability
        of the license validation service at license.veklom.com. The Software
        includes a local cache grace window allowing continued operation for a
        reasonable period if the license server is temporarily unreachable,
        preventing service disruption during transient network events.
      </p>

      <h2 id="section-11">11. Indemnification</h2>

      <h3 id="section-11-1">11.1 Indemnification by Veklom</h3>
      <p>
        Veklom will defend Customer against any third-party claim alleging that
        the Software, when used in accordance with this Agreement, infringes such
        third party&rsquo;s intellectual property rights. Veklom will indemnify
        Customer from damages, costs, and expenses (including reasonable
        attorneys&rsquo; fees) awarded in such claim. If the Software becomes
        subject to an infringement claim, Veklom may: (a) modify or replace it
        with functionally equivalent software; (b) procure the right to continue
        use; or (c) terminate the applicable Order Form and refund prepaid unused
        Fees. This Section is Customer&rsquo;s sole remedy for IP infringement
        claims.
      </p>

      <h3 id="section-11-2">11.2 Indemnification by Customer</h3>
      <p>
        Customer will defend and indemnify Veklom against any third-party claim
        arising from: Customer Data, Customer Materials, or any product or service
        provided by Customer using the Software.
      </p>

      <h3 id="section-11-3">11.3 Indemnification Procedures</h3>
      <p>
        The indemnified party must: (a) promptly notify the indemnifying party in
        writing; (b) grant the indemnifying party control of the defense; and (c)
        reasonably cooperate. The indemnifying party may not settle any claim that
        imposes liability on the indemnified party without its prior written
        consent.
      </p>

      <h2 id="section-12">12. Limitation of Remedies and Damages</h2>

      <h3 id="section-12-1">12.1 Excluded Damages</h3>
      <p className="font-semibold uppercase tracking-wide text-slate-900">
        EXCEPT FOR EXCLUDED CLAIMS, NEITHER PARTY WILL BE LIABLE FOR LOSS OF USE,
        LOSS OF DATA, LOSS OF PROFITS, LOSS OF REVENUE, BUSINESS INTERRUPTION, OR
        ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY
        DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>

      <h3 id="section-12-2">12.2 General Liability Cap</h3>
      <p>
        Each party&rsquo;s total aggregate liability arising out of or relating to
        this Agreement will not exceed the total Fees actually paid to Veklom
        under the applicable Order Form during the twelve (12) months preceding
        the event giving rise to the claim.
      </p>

      <h3 id="section-12-3">12.3 Data Protection Cap</h3>
      <p>
        For Data Protection Claims, aggregate liability will not exceed two (2)
        times the General Liability Cap. No party will be liable under both caps
        for the same underlying event.
      </p>

      <h2 id="section-13">13. General Terms</h2>

      <h3 id="section-13-1">13.1 Assignment</h3>
      <p>
        Neither party may assign this Agreement without prior written consent,
        except in connection with a merger, acquisition, or sale of substantially
        all assets. Any attempted assignment in violation of this section is void.
      </p>

      <h3 id="section-13-2">13.2 Severability</h3>
      <p>
        If any provision is held invalid or unenforceable, it will be limited to
        the minimum extent necessary and the remainder of the Agreement will
        remain in effect.
      </p>

      <h3 id="section-13-3">13.3 Dispute Resolution</h3>
      <p>
        The parties will attempt in good faith to resolve disputes through senior
        representative discussions before initiating legal proceedings. Either
        party may seek injunctive relief to protect IP or Confidential Information
        without prior notice.
      </p>

      <h3 id="section-13-4">13.4 Governing Law</h3>
      <p>
        This Agreement is governed by the laws of the Province of Ontario and the
        federal laws of Canada applicable therein, without regard to
        conflict-of-law principles. The parties consent to the exclusive
        jurisdiction of the courts of Ontario for any dispute arising under this
        Agreement.
      </p>

      <h3 id="section-13-5">13.5 Entire Agreement</h3>
      <p>
        This Agreement, together with all Order Forms and addenda referenced
        herein, constitutes the entire agreement between the parties and
        supersedes all prior agreements, representations, and negotiations
        relating to the Software. In the event of conflict, Order Form terms
        prevail over this Agreement for the subject matter of that Order Form.
      </p>

      <h3 id="section-13-6">13.6 Force Majeure</h3>
      <p>
        Neither party is liable for delays caused by circumstances beyond its
        reasonable control, including natural disasters, government actions,
        internet infrastructure failures, or supply chain disruptions. Because the
        Software operates in Customer&rsquo;s environment, Customer-side force
        majeure events are the Customer&rsquo;s responsibility.
      </p>

      <h3 id="section-13-7">13.7 Notices</h3>
      <p>
        All legal notices must be in writing delivered by email with confirmation
        of receipt or by courier to the address on the applicable Order Form.
        Notices to Veklom must be sent to the email address designated on
        veklom.com.
      </p>

      <h2 id="section-14">14. Definitions</h2>
      <dl>
        <div>
          <dt>&ldquo;Affiliate&rdquo;</dt>
          <dd>
            means any entity that directly or indirectly controls, is controlled
            by, or is under common control with a party.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Agreement&rdquo;</dt>
          <dd>
            means this Software License Agreement and all incorporated Order
            Forms, addenda, and exhibits.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Confidential Information&rdquo;</dt>
          <dd>
            means non-public information designated as confidential or that a
            reasonable party would recognize as confidential given the
            circumstances of disclosure, including pricing, source code,
            architecture, and Customer Data.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Customer Data&rdquo;</dt>
          <dd>
            means all data, prompts, model outputs, configuration files, and
            content submitted to or generated by the Software within the Customer
            Environment.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Customer Environment&rdquo;</dt>
          <dd>
            means the infrastructure owned, leased, or controlled by Customer on
            which the Software is installed and operated, including cloud
            instances, virtual machines, and on-premise servers.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Documentation&rdquo;</dt>
          <dd>
            means Veklom&rsquo;s technical and user documentation for the
            Software, including the README, USER_MANUAL, and DEPLOYMENT guides
            published in the Software repository.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Excluded Claims&rdquo;</dt>
          <dd>
            means claims arising from: (a) a party&rsquo;s gross negligence or
            willful misconduct; (b) a party&rsquo;s indemnification obligations
            under Section 11; (c) Customer&rsquo;s violation of Section 2.5; or
            (d) a party&rsquo;s breach of confidentiality obligations under
            Section 6.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Fees&rdquo;</dt>
          <dd>
            means the subscription, license, or service fees set out in the
            applicable Order Form.
          </dd>
        </div>
        <div>
          <dt>&ldquo;License Key&rdquo;</dt>
          <dd>
            means the cryptographic credential issued by Veklom upon purchase
            that activates the Software and enforces plan-tier feature gates.
          </dd>
        </div>
        <div>
          <dt>&ldquo;License Term&rdquo;</dt>
          <dd>
            means the subscription period specified in the applicable Order Form,
            beginning on the activation date of the License Key.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Order Form&rdquo;</dt>
          <dd>
            means a written or electronic purchase agreement executed by both
            parties that references this Agreement.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Software&rdquo;</dt>
          <dd>
            means the Veklom platform binary, including the FastAPI backend,
            circuit breaker engine, cost intelligence module, compliance suite,
            content safety layer, and license enforcement middleware, together
            with any updates, patches, or new versions provided under the
            Subscription Term.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Subscription Term&rdquo;</dt>
          <dd>
            means the period during which Customer is licensed to use the
            Software under a valid, paid Order Form or active Sovereign Trial.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Usage Data&rdquo;</dt>
          <dd>
            means aggregated, anonymized operational metrics optionally
            transmitted by the Software when Customer opts in to telemetry
            sharing. Usage Data does not include Customer Data.
          </dd>
        </div>
        <div>
          <dt>&ldquo;Veklom Technology&rdquo;</dt>
          <dd>
            means the Software, Documentation, and all underlying technology,
            algorithms, models, and intellectual property owned or licensed by
            Veklom.
          </dd>
        </div>
      </dl>

      <hr className="my-8 border-slate-200" />
      <p className="text-sm text-slate-600">
        &copy; 2026 Veklom Inc. &middot; veklom.com &middot; Questions:{' '}
        <a
          href="mailto:legal@veklom.com"
          className="font-medium text-slate-900 underline"
        >
          legal@veklom.com
        </a>
      </p>
      <p className="text-sm text-slate-600">
        This document is provided for informational purposes. For binding legal
        effect, execute an Order Form referencing this Agreement.
      </p>
    </LegalDoc>
  )
}
