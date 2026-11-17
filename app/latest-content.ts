import {
  locales as baseLocales,
  type GuideSection,
  type Language,
  type LocaleContent,
} from "./content";
import { editorial } from "./editorial-content";

type LocaleUpdate = {
  lastUpdated: string;
  replacements: Record<string, GuideSection>;
  rates: GuideSection;
  technical: GuideSection;
  faq: GuideSection;
};

const updates: Record<Language, LocaleUpdate> = {
  zh: {
    lastUpdated: "更新于 2026 年 10 月",
    replacements: {
      "materials-links": {
        id: "materials-links",
        eyebrow: "02 · 素材与链接",
        title: "如何获取素材并选择正确的推广链接？",
        paragraphs: [
          "登录 DramaCPS 后进入素材库。根据具体 Offer，你可能看到视频素材、短剧名称、封面、剧情介绍、平台信息、App Home URL、Drama URL、免费剧集和其他推广资料。所有正式推广都应使用自己账号素材库中生成的专属链接。",
          "App Home URL 与 Drama URL 都是带推广归因的跟踪链接。App Home URL 通常打开对应 App 首页，适合推广整个短剧平台或没有指定剧名的内容；Drama URL 通常打开指定短剧详情页或播放页，适合推广某一部具体短剧。视频对应具体短剧时，优先使用该短剧的 Drama URL。",
          "对于 App Offer，用户未安装 App 时通常会进入 Google Play 或 Apple App Store；已经安装时会尝试打开 App 或指定短剧。实际跳转会受到操作系统、内置浏览器、地区、商店上架状态和深度链接配置影响。对于 SagaBox 等网页型 Offer，素材库短链可直接打开网页内容，不需要先下载 App。",
          "用户从某一部短剧链接进入后，只要仍在对应平台的有效归因范围内，后续在同一平台购买其他短剧、金币或会员也可能产生佣金，并不一定只限最初推广的那部剧。最终仍以对应 Offer 的归因与计佣规则为准。",
        ],
        bullets: [
          "确认登录的是自己的 DramaCPS 账号，并复制自己账号生成的完整链接。",
          "视频素材、短剧名称和 Drama URL 应保持一致。",
          "落地页、预落地页、短链或第三方跳转必须保留全部查询参数，不得覆盖归因。",
          "已安装过 App、已归属于其他渠道或仍处于其他渠道保护期的老用户，可能无法重新归因；付费投放应优先获取新用户。",
          "发布前用目标国家、设备和实际投放浏览器测试最终页面，但不要通过自充值或大量测试点击验证佣金。",
        ],
        notice: { tone: "danger", text: "不要删除、修改、覆盖或重新拼接推广参数。参数丢失可能导致归因失败，DramaCPS 通常不能仅凭截图人工补记佣金。" },
      },
      "creative-whitelist": {
        id: "creative-whitelist",
        eyebrow: "03 · 素材、版权与白名单",
        title: "素材可以如何剪辑？怎样降低版权和重复内容风险？",
        paragraphs: [
          "DramaCPS 素材库中的视频用于推广对应短剧平台和 Offer，不代表可以用于无关商业项目、影视资源分发或长期免费播放服务。推广者可以截取片段、重排镜头、添加或翻译字幕、添加真人或 AI 配音、增加剧情钩子和 CTA、调整节奏、裁剪缩放，并制作 9:16 等适合社交平台的版本，但不能故意歪曲剧情、演员、平台、价格或权益。",
          "禁止原样上传素材。只改文件 Hash、速度或加一个简单水印通常不构成有效二次创作。应改变开头钩子、镜头顺序、片段长度、字幕/解说、画面结构和结尾引导，使不同版本具有实质差异。",
          "如视频含有官方平台 Logo、版权提示或水印，除非对应 Offer 提供无水印版本或明确允许，否则不要故意删除、遮挡或修改。为适配竖屏进行正常裁切，与专门移除版权标识并不相同。",
          "白名单可提交多个 TikTok、YouTube、Facebook、Instagram 账号。请提交完整且可访问的主页、频道或 Page URL；通常约三个工作日生效。更换或新增账号后应重新提交。白名单可以降低授权误判，但不能保证所有内容永久通过平台审核。",
        ],
        bullets: [
          "遇到 Facebook、YouTube Content ID 或其他版权提示时，保存视频链接、短剧名称、Drama ID、账号链接、截图和申诉状态，并联系 support@dramacps.com。",
          "“Get Video”和免费剧集是否可用取决于具体短剧，素材数量和地址可能变化或过期。",
          "文件无法上传、扩展名异常或播放格式不兼容时，应优先使用素材库提供的下载方式或联系支持获取可用文件，不要抓取付费剧集。",
          "完整剧集、付费部分、长视频、第三方网站持续嵌入和 YouTube 广告变现，不应根据一般素材授权自行推定，需获得对应平台的书面确认。",
          "保留原始素材、剪辑工程、成片、字幕文件、发布 URL 和投放记录，以便授权或流量核查。",
        ],
        notice: { tone: "warning", text: "素材获准用于推广，并不等于社交平台一定不会触发自动版权检测。二次剪辑、白名单和完整留档需要同时做好。" },
      },
      "commission-attribution": {
        id: "commission-attribution",
        eyebrow: "05 · 佣金与归因",
        title: "佣金、重复购买和不同平台归因如何计算？",
        paragraphs: [
          "DramaCPS 主要采用 CPS / Revenue Share。可计佣事件是广告主确认的有效购买、充值或订阅，而不是点击、注册或安装。用户在有效归因期内发生后续合格充值时，通常可以再次产生佣金，但不是所有平台都使用相同周期。",
          "DramaBox 对通过推广链接成功获得有效归因的新用户通常采用长期归因规则。SagaBox 采用订单级 30 天最近一次有效点击：每一笔订单都查看此前 30 天内最近的合格推广点击，因此不是永久锁定某个 Publisher。其他平台必须查看当前 Offer，不应统一描述为七天或终身。",
          "App Offer 通常根据链接参数、设备信息、点击和 AppsFlyer 等归因平台回传建立关系。已经安装、已经属于其他推广者、处于其他渠道保护期或未通过推广链接进入的用户，可能不能重新归因。DramaCPS 不会随意覆盖广告主已经确认的归因。",
        ],
        bullets: [
          "用户购买同一平台的其他短剧、金币或会员，也可能计佣，前提是归因仍有效且订单符合 Offer 规则。",
          "最后点击模式下，用户之后点击其他推广者的链接，后续订单可能归属于最新有效点击。",
          "退款、拒付、撤销、重复转化、无效流量和广告主拒绝的订单不计佣，已经入账的金额也可能在后续冲抵。",
          "收据、充值截图或口头说明不能替代广告主的设备归因和交易回传。",
        ],
        notice: { tone: "warning", text: "不存在覆盖所有 App 的统一“7天”或“终身”规则。开始投放前必须确认当前 Offer 的归因窗口、首购/复购条件和计佣基数。" },
      },
      "traffic-ads": {
        id: "traffic-ads",
        eyebrow: "07 · 流量与广告",
        title: "自然流量、付费广告和禁止流量规则",
        paragraphs: [
          "TikTok、YouTube Shorts、Facebook Reels、Instagram Reels、自有网站和内容社区等自然流量通常可以使用。Meta Ads、TikTok Ads、Google Ads、原生或应用内广告等付费流量也可在对应 Offer 允许时使用；上线前应确认平台、GEO、设备、素材和白名单要求。",
          "国家、语言和设备没有对所有 Offer 通用的开放清单。App 是否在当地上架、是否支持相应语言、广告主政策和当前 Offer 状态共同决定能否推广。US、UK、CA、AU 等英语市场常用于测试，但不代表保证转化、ROI、LTV 或始终优于其他地区。",
          "允许使用合规落地页或预落地页，但不能绕过跟踪、替换 Publisher、删除参数、强制点击或自动跳转制造访问。使用付费媒体时，应保存广告账户、花费、点击、素材、落地页和来源记录；真实性审核时可能要求在限定时间内提供证据。",
        ],
        bullets: [
          "禁止现金、返现、积分、礼品卡、任务奖励或其他激励下载和充值。",
          "禁止自充值、组织虚假充值、机器人、脚本、模拟器、设备农场和批量虚假账号。",
          "禁止伪造用户、订单、支付证明、流量来源、广告报告或账号资料。",
          "禁止虚假下载按钮、系统通知、价格、优惠、收益承诺、强制跳转和恶意弹窗。",
          "禁止冒充短剧平台官方账号、未经许可竞价品牌词或使用无授权的明星、品牌和第三方素材。",
        ],
        notice: { tone: "danger", text: "异常或不可验证的流量可能导致数据审核、暂停提现、拒付、扣回佣金或封禁账号。" },
      },
      "data-settlement": {
        id: "data-settlement",
        eyebrow: "08 · 数据与结算",
        title: "数据状态、退款调整和标准付款规则",
        paragraphs: [
          "充值数据可能因广告主 Postback、AppsFlyer/MMP、时区、支付确认、退款拒付审核、无效流量检查或同步任务而延迟。后台的点击、安装、付费用户、收入、预估佣金、待审核、已确认和无效数据代表不同阶段，预估数据不是最终应付款。",
          "标准结算按自然月进行。上月符合条件的佣金通常从次月 8 日 UTC 起可申请提现；标准最低提现金额为 100 美元，标准付款方式为银行转账。提现申请通常约 15 个工作日处理，但银行、节假日、合规审核和上游广告主付款延迟都可能影响到账。",
          "USDT 不是面向全部 Publisher 的默认保证方式，只有部分账号在单独确认后可能开放。SagaBox 等个别 Offer 可能有自己的结算时间，例如次月 15 日前；具体 Offer、合同或已确认的特别安排优先于一般说明。",
        ],
        bullets: [
          "退款、拒付、未成年人付款撤销、支付失败、欺诈、重复归因和政策违规可能取消或扣回佣金。",
          "如果上游广告主尚未完成核账或付款，相应佣金可能延迟。",
          "收款人名称、银行账户、SWIFT 等资料必须准确；资料错误可能导致退汇和额外延迟。",
          "点击量不能直接代表收益，应同时观察有效购买、收入、退款和最终确认佣金。",
        ],
        notice: { tone: "warning", text: "标准口径是最低 100 美元、按月结算、银行转账；任何 USDT、提前付款或定制周期必须以账号获得的书面确认为准。" },
      },
    },
    rates: {
      id: "rates-offers",
      eyebrow: "10 · 当前 Offer 与佣金",
      title: "公开平台级 CPS 比例（截至 2026 年 9 月 29 日）",
      paragraphs: [
        "以下是当时公开的平台级 Publisher CPS 比例，用于帮助推广者理解不同平台的大致档位。它不是对某个 GEO、iOS/Android、具体短剧或未来日期的永久承诺；账号内当前 Offer 显示的比例和条件始终优先。",
      ],
      bullets: [
        "65%：DramaBox、GoodShort、StardustTV、Playlet、SagaBox。",
        "60%：KalosTV、ShortMax、SnackShort、StarShort、HoneyReels、YourChannel、Sereal+、FlareFlow。",
        "55%：NetShort、TopShort。",
        "50%：TouchShort。",
        "45%：ReelShort。",
        "佣金可能按广告主确认的有效净收入计算，并可能扣除税费、支付或应用商店费用、退款、拒付及无效交易；具体看 Offer。",
      ],
      notice: { tone: "info", text: "开始新投放前重新查看后台。平台费率、支持地区、设备、归因和流量政策都可能更新。" },
    },
    technical: {
      id: "technical-api",
      eyebrow: "11 · API、Sub ID 与 Postback",
      title: "批量链接、数据接口和转化回传边界",
      paragraphs: [
        "有批量内容、多个流量来源或系统集成需求的 Publisher，可以联系支持申请短剧目录、推广链接生成或报表 API。开放范围取决于账号、流量规模和具体平台，不是注册后自动获得的标准权限。申请时请提供 Publisher ID、用途、预计量级、目标 GEO 和所需字段。",
        "标准推广链接可按 Offer 使用 click_id、sub_id、source、campaign_id、creative_id 等参数区分来源，但字段支持情况需要在上线前确认。素材或视频 URL 可能过期，不应把临时地址当作永久 CDN；也不应把 API 访问理解为允许不经剪辑批量重新分发素材。",
        "不同平台的 S2S、Revenue API、退款事件和交易级字段并不相同。当前公开文档中的完整网页 Postback 方案重点适用于 SagaBox；其他 App 主要依赖 DramaCPS 后台和广告主归因回传。DramaCPS 不提供 AppsFlyer Agency 权限、CTV VTA 链接，也不保证 Publisher 可自行接入每个平台的 MMP。",
      ],
      bullets: [
        "SagaBox 支持 click_id/clickid、publisher_id/publisherid、sub_id/subid、source、fbclid、ttclid、gclid、gbraid、wbraid、campaign_id、creative_id、link_id。",
        "SagaBox 可回传 registration、purchase、refund，并支持交易编号、金额、币种及对应点击字段；下游转发事件以 SagaBox 专用页面当前说明为准。",
        "需要购买金额用于 Meta、TikTok 或 Google 优化时，应在投放前确认 Offer 是否支持对应 S2S/离线转化流程。",
        "下游系统应按 transaction_id 去重，并使用 HTTPS 接收 Postback。",
      ],
      notice: { tone: "info", text: "查看单独的 SagaBox 指南获取完整参数、Postback URL 模板、变量、筛选规则和响应要求。" },
    },
    faq: {
      id: "faq",
      eyebrow: "12 · 常见问题与总则",
      title: "开始推广前最需要确认的问题",
      bullets: [
        "点击、注册或安装有佣金吗？通常没有；DramaCPS 主要按广告主确认的有效付费进行 CPS 分成。",
        "用户多次充值有佣金吗？在对应 Offer 的有效归因范围内通常可以，但 DramaBox、SagaBox 和其他平台的规则不同。",
        "App Home URL 和 Drama URL 都能跟踪吗？可以；前者推广整个 App，后者推广指定短剧。",
        "用户买了链接之外的其他短剧有佣金吗？在同一平台且归因仍有效时通常可以，最终看 Offer。",
        "可以直接上传原视频吗？不可以，应进行实质性二次剪辑。",
        "可以加字幕、翻译或 AI 配音吗？一般可以，但不能歪曲剧情或删除未经允许的版权标识。",
        "为什么找不到免费剧集？并非每部短剧都提供，素材可用性会变化。",
        "遇到 M3U8、扩展名或上传问题怎么办？使用素材库官方下载方式或联系支持获取兼容文件，不要抓取付费内容。",
        "可以使用付费广告吗？一般可以，但必须符合具体 Offer，并禁止激励、返现、欺诈和不可验证流量。",
        "可以提交多个社交账号白名单吗？可以，提交每个完整主页 URL；通常约三个工作日。",
        "最低提现是多少？标准为 100 美元；标准方式是银行转账。",
        "USDT 是否默认支持？不是，只对单独确认开放的账号适用。",
        "API 和 Postback 是否所有平台都有？没有。API 按需开放，完整 Postback 能力取决于平台，SagaBox 有单独技术说明。",
        "用户付款但后台没有数据怎么办？提供完整链接、点击时间和时区、设备、国家、短剧、录屏和订单信息给支持核查。",
      ],
      paragraphs: [
        "核心原则：使用自己的完整专属链接；具体短剧优先使用对应 Drama URL；所有素材进行明显二次剪辑；实际推广账号提前提交白名单；禁止激励、返现、虚假充值和作弊；预估佣金不等于最终佣金；每次启动新 Offer 前重新确认费率、GEO、归因、素材和结算规则。",
      ],
      notice: { tone: "danger", text: "禁止作弊、不要破坏跟踪参数、不要原样上传素材，也不要把个别账号的特殊政策理解为所有 Publisher 的通用规则。" },
    },
  },

  en: {
    lastUpdated: "Updated October 2026",
    replacements: {
      "materials-links": {
        id: "materials-links", eyebrow: "02 · ASSETS & LINKS", title: "How do I obtain assets and choose the correct promotion link?",
        paragraphs: [
          "Open the Material Library after signing in. Depending on the Offer, it may include video assets, title, cover, synopsis, platform information, an App Home URL, a Drama URL, free episodes and other promotional resources. Always use the unique link generated inside your own account.",
          "Both the App Home URL and Drama URL are attributed tracking links. The App Home URL normally opens the app home screen and suits app-level promotion. The Drama URL normally opens a specific title and is the preferred choice when the creative features that drama.",
          "For app Offers, a user without the app is normally sent to Google Play or the Apple App Store; an installed user is sent toward the app or title. For web Offers such as SagaBox, the Material Library short link opens the web experience directly and no app download is required.",
          "After entering through one drama link, purchases of another title, coins or membership on the same platform may still be commissionable while attribution remains valid. The current Offer controls.",
        ],
        bullets: ["Use the complete link from your own DramaCPS account.", "Match the creative and title to the Drama URL.", "A pre-lander, shortener or redirect must preserve every query parameter and must not overwrite attribution.", "Existing app users or users protected by another channel may not be re-attributed; paid campaigns should focus on new-user acquisition.", "Test the final destination in the target region, device and browser without self-purchasing or generating bulk test clicks."],
        notice: { tone: "danger", text: "Never remove, overwrite or rebuild tracking parameters. Lost parameters can break attribution, and screenshots alone normally cannot support manual commission credit." },
      },
      "creative-whitelist": {
        id: "creative-whitelist", eyebrow: "03 · CREATIVE, RIGHTS & WHITELIST", title: "What edits are allowed and how should copyright risk be handled?",
        paragraphs: [
          "Material Library footage is provided to promote the corresponding platform and Offer, not for unrelated redistribution or a permanent free-streaming service. You may trim and rearrange scenes, add or translate subtitles, add human or AI voice-over, create hooks and CTAs, change pacing, crop and resize, and produce 9:16 versions, provided the edit does not misrepresent the plot, actors, platform, price or benefit.",
          "Do not repost raw footage. Merely changing a file hash or speed, or adding a basic watermark, is usually not meaningful re-editing. Change the opening hook, shot order, clip length, subtitles or narration, layout and ending CTA so versions are materially different.",
          "Do not intentionally erase, cover or alter an official logo, copyright notice or watermark unless the Offer supplies a clean master or explicitly allows removal. Ordinary framing for a vertical format is different from intentionally hiding ownership information.",
          "You may submit multiple TikTok, YouTube, Facebook and Instagram accounts for whitelist review. Send full accessible profile, channel or Page URLs. Processing normally takes about three business days. A whitelist can reduce authorization mismatches but cannot guarantee that every post will pass every platform review.",
        ],
        bullets: ["For a copyright or Content ID claim, retain the video URL, drama title, Drama ID, profile URL, screenshots and appeal status, then contact support@dramacps.com.", "Get Video and free-episode availability vary by title; quantities and URLs can change or expire.", "For an incompatible file or extension, use the official download method or ask support for a compatible file; do not obtain paid episodes by unauthorized means.", "Full paid episodes, long-form redistribution, persistent third-party embedding and YouTube ad monetization require platform-specific written confirmation.", "Keep source assets, project files, subtitles, final exports, published URLs and paid-media records."],
        notice: { tone: "warning", text: "Authorized promotional use does not guarantee that automated copyright systems will never flag a post. Re-editing, whitelisting and complete records all matter." },
      },
      "commission-attribution": {
        id: "commission-attribution", eyebrow: "05 · COMMISSION & ATTRIBUTION", title: "How are commission, repeat purchases and platform attribution calculated?",
        paragraphs: [
          "DramaCPS primarily operates on CPS / Revenue Share. The commissionable event is an advertiser-approved purchase, recharge or subscription—not a click, registration or install. Repeat eligible purchases can generate commission while the relevant attribution remains valid, but platforms do not share one universal window.",
          "DramaBox generally uses longer-term attribution for a valid new user acquired through the tracking link. SagaBox applies order-level 30-day last-valid-click attribution: each order looks to the latest qualifying affiliate click in the preceding 30 days, so there is no permanent Publisher ownership. Other apps follow their current Offer rules and must not be described as universally seven-day or lifetime.",
          "App attribution normally relies on parameters, device signals, clicks and an MMP such as AppsFlyer. Existing users, users assigned to another channel, users inside another protection period or users who bypass the link may not be re-attributed. DramaCPS does not arbitrarily override advertiser attribution.",
        ],
        bullets: ["Purchases of another drama, coins or membership on the same platform may be commissionable while attribution remains valid.", "Under last-click rules, a newer valid Publisher click may receive later orders.", "Refunds, chargebacks, cancellations, duplicate conversions, invalid traffic and advertiser-rejected orders do not earn commission and may be reversed later.", "Receipts or screenshots do not replace device attribution and transaction reporting."],
        notice: { tone: "warning", text: "There is no network-wide seven-day or lifetime rule. Confirm the attribution window, first/repeat-purchase treatment and commission base for each live Offer." },
      },
      "traffic-ads": {
        id: "traffic-ads", eyebrow: "07 · TRAFFIC & PAID MEDIA", title: "Organic traffic, paid media and prohibited sources",
        paragraphs: [
          "Organic TikTok, YouTube Shorts, Facebook Reels, Instagram Reels, owned sites and content communities are generally accepted. Meta Ads, TikTok Ads, Google Ads, native and in-app media may also be used when the specific Offer permits them. Confirm platform, GEO, device, creative and whitelist requirements before launch.",
          "There is no universal country, language or device list. Store availability, language support, advertiser policy and the live Offer all matter. The US, UK, CA and AU are common English-language test markets, but DramaCPS does not guarantee conversion rate, ROI, LTV or that one GEO will always outperform another.",
          "A compliant landing page or pre-lander is allowed only if it preserves tracking and does not replace the Publisher, remove parameters, force clicks or create artificial visits. Paid-media partners should retain account, spend, click, creative, landing-page and source records for possible verification.",
        ],
        bullets: ["No cash, cashback, points, gift cards, tasks or other incentives for installs or purchases.", "No self-purchases, coordinated fake payments, bots, scripts, emulators, device farms or bulk fake accounts.", "No fabricated users, orders, payment proof, traffic source, ad reports or account information.", "No fake download buttons, system alerts, prices, offers, earnings claims, forced redirects or malicious pop-ups.", "No official-brand impersonation, unapproved brand bidding or unauthorized celebrity, brand or third-party assets."],
        notice: { tone: "danger", text: "Abnormal or unverifiable traffic can cause review, withdrawal holds, rejected payment, commission recovery or account suspension." },
      },
      "data-settlement": {
        id: "data-settlement", eyebrow: "08 · REPORTING & PAYMENT", title: "Reporting status, reversals and standard payout terms",
        paragraphs: [
          "Reporting may be delayed by advertiser Postbacks, AppsFlyer/MMP processing, time zones, payment confirmation, refund and chargeback review, invalid-traffic checks or synchronization jobs. Clicks, installs, payers, revenue, estimated, pending, confirmed and invalid records represent different stages; estimated figures are not final payable commission.",
          "Standard settlement is monthly. Eligible prior-month commission normally becomes available for withdrawal from the 8th of the following month, UTC. The standard minimum is USD 100 and the standard method is bank transfer. Requests are generally processed in about 15 business days, subject to banking, holidays, compliance review and upstream payment.",
          "USDT is not a guaranteed default method for every Publisher and is available only where separately confirmed. Certain Offers, including SagaBox, may have their own timetable such as payment before the 15th of the following month; the Offer, agreement or confirmed special arrangement controls.",
        ],
        bullets: ["Refunds, chargebacks, minor-payment reversals, failed payments, fraud, duplicate attribution and policy breaches can cancel or reverse commission.", "Upstream reconciliation or payment delays can delay the corresponding Publisher payment.", "Beneficiary name, account number and SWIFT details must be accurate.", "Click volume alone does not represent earnings; review eligible purchases, revenue, refunds and final confirmed commission."],
        notice: { tone: "warning", text: "The standard rule is USD 100 minimum, monthly settlement and bank transfer. USDT, early payment or custom cycles require written account-specific confirmation." },
      },
    },
    rates: {
      id: "rates-offers", eyebrow: "10 · CURRENT OFFERS & RATES", title: "Published platform-level CPS rates as of September 29, 2026",
      paragraphs: ["These were the published platform-level Publisher rates on that date. They are not a permanent promise for a GEO, device, title or future campaign. The current Offer in your account always controls."],
      bullets: ["65%: DramaBox, GoodShort, StardustTV, Playlet and SagaBox.", "60%: KalosTV, ShortMax, SnackShort, StarShort, HoneyReels, YourChannel, Sereal+ and FlareFlow.", "55%: NetShort and TopShort.", "50%: TouchShort.", "45%: ReelShort.", "The commission base may be advertiser-confirmed eligible net revenue after applicable taxes, processing/store fees, refunds, chargebacks and invalid transactions; check the Offer."],
      notice: { tone: "info", text: "Recheck the dashboard before every launch. Rate, GEO, device, attribution and traffic policy can change." },
    },
    technical: {
      id: "technical-api", eyebrow: "11 · API, SUB IDS & POSTBACKS", title: "Bulk links, data integrations and conversion reporting limits",
      paragraphs: [
        "Publishers with catalog-scale content, multiple sources or a system integration may contact support to request catalog, promotion-link or reporting APIs. Access depends on the account, volume and platform and is not automatically included at registration. Provide Publisher ID, use case, expected volume, target GEOs and required fields.",
        "Standard links may accept click_id, sub_id, source, campaign_id and creative_id depending on the Offer. Verify fields before launch. Material and video URLs may expire and should not be treated as a permanent CDN; API access also does not authorize unedited bulk redistribution.",
        "S2S, Revenue API, refund events and transaction-level fields differ by platform. The documented web Postback flow currently focuses on SagaBox; other apps primarily rely on the DramaCPS dashboard and advertiser attribution. DramaCPS does not provide AppsFlyer Agency access, CTV VTA links or guaranteed direct MMP access for every app.",
      ],
      bullets: ["SagaBox supports click_id/clickid, publisher_id/publisherid, sub_id/subid, source, fbclid, ttclid, gclid, gbraid, wbraid, campaign_id, creative_id and link_id.", "SagaBox can report registration, purchase and refund with transaction, amount, currency and click fields; downstream forwarding follows the current SagaBox guide.", "If purchase value is required for Meta, TikTok or Google optimization, confirm the Offer's supported S2S/offline-conversion workflow before spend begins.", "Deduplicate downstream by transaction_id and receive Postbacks over HTTPS."],
      notice: { tone: "info", text: "Open the standalone SagaBox guide for the full parameter list, URL templates, macros, filters, delivery behavior and receiver requirements." },
    },
    faq: {
      id: "faq", eyebrow: "12 · FAQ & CORE RULES", title: "What should be confirmed before promotion starts?",
      bullets: ["Do clicks, registrations or installs pay? Normally no; CPS is based on advertiser-approved payment.", "Do repeat purchases pay? Usually yes while attribution remains valid, but DramaBox, SagaBox and other apps use different rules.", "Do both App Home URL and Drama URL track? Yes; one promotes the app, the other a specific title.", "Can another title purchased on the same platform pay commission? Usually yes while attribution remains valid; the Offer controls.", "Can raw footage be uploaded? No; meaningful re-editing is required.", "Are subtitles, translation and AI voice-over allowed? Generally yes if they do not misrepresent content or remove protected ownership marks.", "Why are free episodes missing? Not every title provides them and availability can change.", "What if M3U8, file extension or upload fails? Use the official download route or ask support for a compatible file; do not obtain paid content without permission.", "Is paid traffic allowed? Generally yes where the Offer permits it; incentives, rebates, fraud and unverifiable traffic are prohibited.", "Can multiple social accounts be whitelisted? Yes; submit each full profile URL and allow about three business days.", "What is the minimum payout? The standard minimum is USD 100 by bank transfer.", "Is USDT supported by default? No; only accounts with separate confirmation may use it.", "Do all platforms provide API and Postback? No. API access is selective and technical capabilities vary; SagaBox has a dedicated guide.", "A user paid but data is missing—what should I send? Full link, click time and time zone, device, country, title, redirect recording and order information."],
      paragraphs: ["Core rules: use your own complete link; use the matching Drama URL for a specific title; meaningfully re-edit every asset; submit actual promotional accounts for whitelist review; never use incentives, rebates, fake payments or manipulation; and recheck rate, GEO, attribution, creative and settlement terms before every new Offer."],
      notice: { tone: "danger", text: "No fraud, no broken tracking parameters, no raw reposts, and never treat an account-specific exception as a universal Publisher policy." },
    },
  },

  pt: {
    lastUpdated: "Atualizado em outubro de 2026",
    replacements: {
      "materials-links": { id:"materials-links", eyebrow:"02 · MATERIAIS E LINKS", title:"Como obter materiais e escolher o link de promoção correto?", paragraphs:["Entre na Biblioteca de Materiais. Conforme a oferta, haverá vídeos, título, capa, sinopse, plataforma, App Home URL, Drama URL, episódios gratuitos e outros recursos. Use sempre o link exclusivo gerado na sua conta.","App Home URL e Drama URL são links de rastreamento atribuídos. App Home URL abre normalmente a página inicial do app; Drama URL abre uma série específica e é preferível quando o vídeo divulga essa série.","Em ofertas de aplicativo, quem não instalou costuma ir para Google Play ou Apple App Store; quem já instalou segue para o app ou série. Em ofertas web como SagaBox, o link curto abre diretamente a experiência web, sem download de app.","Depois de entrar por um link de série, compras de outra série, moedas ou assinatura na mesma plataforma também podem gerar comissão enquanto a atribuição estiver válida. A oferta atual prevalece."], bullets:["Use o link completo da sua própria conta.","Faça o vídeo e o título corresponderem ao Drama URL.","Pre-lander, encurtador ou redirecionamento deve preservar todos os parâmetros e não substituir a atribuição.","Usuários antigos ou protegidos por outro canal podem não ser reatribuídos; mídia paga deve priorizar novos usuários.","Teste o destino final no país, aparelho e navegador-alvo sem compra própria ou cliques em massa."], notice:{tone:"danger",text:"Nunca remova, substitua ou reconstrua parâmetros. Parâmetros perdidos podem quebrar a atribuição e uma captura de tela normalmente não permite crédito manual."} },
      "creative-whitelist": { id:"creative-whitelist", eyebrow:"03 · CRIATIVO, DIREITOS E LISTA BRANCA", title:"Quais edições são permitidas e como lidar com copyright?", paragraphs:["Os materiais servem para promover a plataforma e a oferta correspondentes, não para redistribuição alheia ou streaming gratuito permanente. É permitido cortar e reorganizar cenas, adicionar ou traduzir legendas, usar voz humana ou IA, criar ganchos e CTA, mudar ritmo, cortar e adaptar para 9:16, sem deturpar trama, atores, plataforma, preço ou benefício.","Não reposte o arquivo bruto. Alterar apenas hash/velocidade ou colocar uma marca d'água simples geralmente não é edição relevante. Mude abertura, ordem, duração, legendas/narração, estrutura visual e CTA final.","Não apague, cubra ou altere logo oficial, aviso de copyright ou marca d'água sem versão limpa ou permissão expressa. O recorte normal para formato vertical é diferente de ocultar autoria.","É possível enviar várias contas de TikTok, YouTube, Facebook e Instagram. Envie URLs completas e acessíveis; normalmente leva cerca de três dias úteis. A lista branca reduz conflitos de autorização, mas não garante aprovação eterna."], bullets:["Em reclamação de copyright/Content ID, guarde URL do vídeo, título, Drama ID, perfil, capturas e situação do recurso e contate support@dramacps.com.","Get Video e episódios gratuitos variam por título; quantidade e URLs podem mudar ou expirar.","Em arquivo/extensão incompatível, use o download oficial ou peça arquivo compatível; não obtenha episódios pagos sem autorização.","Episódios pagos completos, redistribuição longa, incorporação permanente e monetização no YouTube exigem confirmação escrita específica.","Guarde fontes, projeto, legendas, exportação final, URLs e dados de mídia paga."], notice:{tone:"warning",text:"Uso promocional autorizado não impede toda detecção automática. Edição, lista branca e documentação devem ser mantidas juntas."} },
      "commission-attribution": { id:"commission-attribution", eyebrow:"05 · COMISSÃO E ATRIBUIÇÃO", title:"Como funcionam comissão, compras repetidas e atribuição?", paragraphs:["DramaCPS opera principalmente por CPS/Revenue Share. O evento pagável é compra, recarga ou assinatura aprovada — não clique, cadastro ou instalação. Compras repetidas podem gerar comissão enquanto a atribuição estiver válida, mas não existe uma janela única.","DramaBox normalmente mantém atribuição mais longa para novo usuário adquirido validamente. SagaBox usa último clique válido de 30 dias por pedido: cada pedido busca o clique qualificado mais recente nos 30 dias anteriores, sem propriedade permanente do usuário. Outros apps seguem a oferta atual e não devem ser descritos como sempre sete dias ou vitalícios.","A atribuição de app usa parâmetros, sinais do aparelho, cliques e MMP como AppsFlyer. Usuário antigo, já atribuído, protegido por outro canal ou que ignorou o link pode não ser reatribuído."], bullets:["Compra de outra série, moedas ou assinatura na mesma plataforma pode gerar comissão enquanto a atribuição estiver válida.","No último clique, um novo clique válido pode receber pedidos posteriores.","Reembolso, chargeback, cancelamento, duplicata, tráfego inválido e pedido rejeitado não geram comissão e podem ser estornados.","Comprovante não substitui atribuição do aparelho e relatório da transação."], notice:{tone:"warning",text:"Não existe regra única de sete dias ou vitalícia. Confira janela, primeira/repetida compra e base de comissão de cada oferta."} },
      "traffic-ads": { id:"traffic-ads", eyebrow:"07 · TRÁFEGO E MÍDIA PAGA", title:"Tráfego orgânico, anúncios e fontes proibidas", paragraphs:["TikTok, Shorts, Reels, sites próprios e comunidades orgânicas são geralmente aceitos. Meta Ads, TikTok Ads, Google Ads, native e in-app podem ser usados quando a oferta permitir. Confirme plataforma, GEO, aparelho, criativo e lista branca.","Não há lista universal de país, idioma ou aparelho. Loja, idioma, política do anunciante e oferta vigente controlam. US, UK, CA e AU são mercados de teste comuns, sem garantia de conversão, ROI ou LTV.","Landing/pre-lander é permitido somente preservando rastreamento e sem substituir Publisher, remover parâmetros, forçar clique ou criar visita artificial. Guarde conta, gasto, clique, criativo, landing e origem para verificação."], bullets:["Sem dinheiro, cashback, pontos, brindes, tarefas ou incentivo para instalar/comprar.","Sem compra própria, pagamento falso, bot, script, emulador, fazenda ou conta falsa em massa.","Sem usuário, pedido, comprovante, origem ou relatório falsificado.","Sem botão falso, alerta de sistema, preço/oferta falsa, promessa de lucro, redirecionamento forçado ou pop-up malicioso.","Sem fingir ser oficial, usar marca/celebridade sem autorização ou licitar marca sem permissão."], notice:{tone:"danger",text:"Tráfego anormal ou não verificável pode causar análise, bloqueio de saque, recusa, recuperação de comissão ou suspensão."} },
      "data-settlement": { id:"data-settlement", eyebrow:"08 · DADOS E PAGAMENTO", title:"Status dos dados, estornos e pagamento padrão", paragraphs:["Postback, AppsFlyer/MMP, fuso, confirmação, reembolso, chargeback, análise de tráfego e sincronização podem atrasar dados. Estimado, pendente, confirmado e inválido são estágios diferentes; estimativa não é valor final.","A liquidação padrão é mensal. A comissão elegível do mês anterior normalmente fica disponível para saque a partir do dia 8 do mês seguinte, UTC. O mínimo padrão é USD 100 e o método padrão é transferência bancária. O processamento costuma levar cerca de 15 dias úteis, sujeito a banco, feriados, compliance e pagamento do anunciante.","USDT não é método padrão garantido e só vale quando confirmado para a conta. Algumas ofertas, como SagaBox, podem ter calendário próprio, por exemplo até o dia 15 do mês seguinte; oferta, contrato ou confirmação especial prevalecem."], bullets:["Reembolso, chargeback, estorno, falha, fraude, duplicata e violação podem cancelar ou recuperar comissão.","Atraso de conciliação/pagamento do anunciante pode atrasar o Publisher.","Nome do beneficiário, conta e SWIFT devem estar corretos.","Cliques não equivalem a receita; analise compras válidas, receita, reembolsos e comissão confirmada."], notice:{tone:"warning",text:"Padrão: mínimo USD 100, mensal e transferência bancária. USDT ou prazo personalizado exige confirmação escrita da conta."} },
    },
    rates:{ id:"rates-offers", eyebrow:"10 · OFERTAS E TAXAS ATUAIS", title:"Taxas CPS publicadas em 29 de setembro de 2026", paragraphs:["Taxas de Publisher por plataforma naquela data; não são promessa permanente para GEO, aparelho, título ou campanha. A oferta atual da conta prevalece."], bullets:["65%: DramaBox, GoodShort, StardustTV, Playlet e SagaBox.","60%: KalosTV, ShortMax, SnackShort, StarShort, HoneyReels, YourChannel, Sereal+ e FlareFlow.","55%: NetShort e TopShort.","50%: TouchShort.","45%: ReelShort.","A base pode ser receita líquida elegível confirmada após impostos, taxas de pagamento/loja, reembolsos, chargebacks e transações inválidas; confira a oferta."], notice:{tone:"info",text:"Revise o painel antes de cada lançamento; taxa, GEO, aparelho, atribuição e tráfego podem mudar."} },
    technical:{ id:"technical-api", eyebrow:"11 · API, SUB IDS E POSTBACK", title:"Links em massa, integração e limites de conversão", paragraphs:["Publishers com catálogo, várias fontes ou sistema próprio podem solicitar API de catálogo, links ou relatórios. Acesso depende da conta, volume e plataforma. Informe Publisher ID, uso, volume, GEO e campos necessários.","Links podem aceitar click_id, sub_id, source, campaign_id e creative_id conforme a oferta. URLs de material/vídeo podem expirar e não são CDN permanente; API não autoriza redistribuição bruta em massa.","S2S, Revenue API, refund e campos por transação variam. A documentação completa de Postback web atualmente foca SagaBox; outros apps dependem principalmente do painel e da atribuição do anunciante. Não há acesso AppsFlyer Agency, CTV VTA nem MMP direto garantido."], bullets:["SagaBox aceita click_id/clickid, publisher_id/publisherid, sub_id/subid, source, fbclid, ttclid, gclid, gbraid, wbraid, campaign_id, creative_id e link_id.","SagaBox reporta registration, purchase e refund com transação, valor, moeda e clique; o reenvio segue o guia atual.","Para otimizar Meta/TikTok/Google por valor, confirme S2S/offline antes do gasto.","Elimine duplicatas por transaction_id e receba via HTTPS."], notice:{tone:"info",text:"Abra o guia exclusivo da SagaBox para parâmetros, modelos, macros, filtros e respostas."} },
    faq:{ id:"faq", eyebrow:"12 · DÚVIDAS E REGRAS", title:"O que confirmar antes de promover?", bullets:["Clique, cadastro ou instalação pagam? Normalmente não; CPS depende de pagamento aprovado.","Compras repetidas pagam? Geralmente sim durante atribuição válida; DramaBox, SagaBox e outros diferem.","App Home URL e Drama URL rastreiam? Sim; um promove o app e outro a série.","Compra de outra série na mesma plataforma paga? Normalmente sim se a atribuição estiver válida; a oferta controla.","Posso subir vídeo bruto? Não; edição relevante é obrigatória.","Legenda, tradução e voz IA são permitidas? Geralmente sim, sem deturpar nem remover identificação protegida.","Por que faltam episódios gratuitos? Nem todo título oferece e a disponibilidade muda.","Problema de M3U8/extensão/upload? Use download oficial ou peça arquivo compatível; não obtenha conteúdo pago sem permissão.","Mídia paga é permitida? Geralmente sim se a oferta aceitar; incentivo, cashback, fraude e tráfego não verificável são proibidos.","Posso listar várias contas? Sim; envie cada URL e aguarde cerca de três dias úteis.","Mínimo? USD 100 por transferência bancária.","USDT é padrão? Não; apenas com confirmação individual.","Todos têm API/Postback? Não; API é seletiva e SagaBox tem guia próprio.","Pagamento sem dados? Envie link, horário/fuso, aparelho, país, série, gravação e pedido."], paragraphs:["Regras centrais: seu link completo; Drama URL correto; edição real; contas na lista branca; nunca incentivo, cashback, pagamento falso ou manipulação; e revisão de taxa, GEO, atribuição, material e pagamento antes de cada oferta."], notice:{tone:"danger",text:"Sem fraude, sem quebrar parâmetros, sem repost bruto e sem tratar exceção individual como política geral."} },
  },

  es: {
    lastUpdated: "Actualizado en octubre de 2026",
    replacements: {
      "materials-links": { id:"materials-links", eyebrow:"02 · MATERIALES Y ENLACES", title:"¿Cómo obtengo materiales y elijo el enlace correcto?", paragraphs:["Abre la Biblioteca de materiales. Según la oferta, puede incluir vídeos, título, portada, sinopsis, plataforma, App Home URL, Drama URL, episodios gratuitos y otros recursos. Usa siempre el enlace único de tu cuenta.","App Home URL y Drama URL son enlaces de seguimiento atribuidos. App Home URL abre el inicio de la app; Drama URL abre una serie específica y es preferible cuando el vídeo promociona esa serie.","En ofertas de app, quien no la tenga suele ir a Google Play o Apple App Store; quien ya la tenga abre la app o serie. En ofertas web como SagaBox, el enlace corto abre directamente la experiencia web, sin descargar una app.","Tras entrar por una serie, comprar otra serie, monedas o membresía de la misma plataforma también puede generar comisión mientras la atribución siga válida. Rige la oferta actual."], bullets:["Usa el enlace completo de tu propia cuenta.","Haz coincidir vídeo y título con el Drama URL.","Pre-lander, acortador o redirección debe conservar todos los parámetros y no sustituir la atribución.","Usuarios antiguos o protegidos por otro canal pueden no reatribuirse; la publicidad debe centrarse en nuevos usuarios.","Prueba el destino en país, dispositivo y navegador objetivo sin compra propia ni clics masivos."], notice:{tone:"danger",text:"Nunca borres, sustituyas ni reconstruyas parámetros. Su pérdida puede romper la atribución y una captura normalmente no permite crédito manual."} },
      "creative-whitelist": { id:"creative-whitelist", eyebrow:"03 · CREATIVO, DERECHOS Y LISTA BLANCA", title:"¿Qué ediciones se permiten y cómo gestionar copyright?", paragraphs:["Los materiales sirven para promover la plataforma y oferta correspondientes, no para redistribución ajena o streaming gratuito permanente. Se permite cortar/reordenar escenas, añadir o traducir subtítulos, voz humana o IA, ganchos y CTA, cambiar ritmo, recortar y adaptar a 9:16, sin tergiversar trama, actores, plataforma, precio o beneficio.","No publiques el archivo bruto. Cambiar solo hash/velocidad o añadir una marca simple normalmente no es edición relevante. Cambia apertura, orden, duración, subtítulos/narración, estructura visual y CTA final.","No borres, tapes ni alteres logo oficial, aviso de copyright o marca de agua sin versión limpia o permiso expreso. El recorte normal vertical es distinto de ocultar autoría.","Se pueden enviar varias cuentas de TikTok, YouTube, Facebook e Instagram. Envía URLs completas y accesibles; suele tardar unos tres días hábiles. La lista blanca reduce conflictos, pero no garantiza aprobación permanente."], bullets:["Ante copyright/Content ID, guarda URL, título, Drama ID, perfil, capturas y estado de apelación y contacta support@dramacps.com.","Get Video y episodios gratis varían por título; cantidades y URLs pueden cambiar o caducar.","Con archivo/extensión incompatible, usa descarga oficial o pide archivo compatible; no obtengas episodios de pago sin autorización.","Episodios pagados completos, redistribución larga, embedding permanente y monetización de YouTube requieren confirmación escrita específica.","Guarda fuentes, proyecto, subtítulos, exportación, URLs y datos de anuncios."], notice:{tone:"warning",text:"El uso promocional autorizado no elimina toda detección automática. Edición, lista blanca y documentación deben mantenerse juntas."} },
      "commission-attribution": { id:"commission-attribution", eyebrow:"05 · COMISIÓN Y ATRIBUCIÓN", title:"¿Cómo funcionan comisión, compras repetidas y atribución?", paragraphs:["DramaCPS funciona principalmente con CPS/Revenue Share. El evento pagable es compra, recarga o suscripción aprobada, no clic, registro o instalación. Las compras repetidas pueden pagar mientras la atribución siga válida, pero no existe una ventana única.","DramaBox suele mantener atribución más larga para un nuevo usuario adquirido válidamente. SagaBox usa último clic válido de 30 días por pedido: cada pedido busca el clic cualificado más reciente de los 30 días anteriores, sin propiedad permanente del usuario. Los demás apps siguen la oferta actual y no deben describirse siempre como siete días o de por vida.","La atribución de app usa parámetros, señales de dispositivo, clics y MMP como AppsFlyer. Un usuario antiguo, ya atribuido, protegido por otro canal o que evitó el enlace puede no reatribuirse."], bullets:["Comprar otra serie, monedas o membresía en la misma plataforma puede pagar mientras la atribución siga válida.","En último clic, un clic nuevo puede recibir pedidos posteriores.","Reembolsos, contracargos, cancelaciones, duplicados, tráfico inválido y pedidos rechazados no pagan y pueden revertirse.","El recibo no sustituye atribución del dispositivo e informe de transacción."], notice:{tone:"warning",text:"No existe una regla única de siete días o de por vida. Confirma ventana, primera/repetida compra y base de comisión de cada oferta."} },
      "traffic-ads": { id:"traffic-ads", eyebrow:"07 · TRÁFICO Y MEDIOS PAGADOS", title:"Tráfico orgánico, anuncios y fuentes prohibidas", paragraphs:["TikTok, Shorts, Reels, sitios propios y comunidades orgánicas suelen aceptarse. Meta Ads, TikTok Ads, Google Ads, native e in-app pueden usarse si la oferta lo permite. Confirma plataforma, GEO, dispositivo, creativo y lista blanca.","No hay lista universal de país, idioma o dispositivo. Tienda, idioma, política del anunciante y oferta vigente controlan. US, UK, CA y AU son mercados comunes de prueba, sin garantía de conversión, ROI o LTV.","Landing/pre-lander solo se permite conservando seguimiento y sin sustituir Publisher, borrar parámetros, forzar clic o crear visita artificial. Guarda cuenta, gasto, clics, creativo, landing y origen para verificación."], bullets:["Sin efectivo, cashback, puntos, regalos, tareas o incentivos por instalar/comprar.","Sin compra propia, pago falso, bots, scripts, emuladores, granjas o cuentas falsas masivas.","Sin usuarios, pedidos, comprobantes, origen o informes falsificados.","Sin botones falsos, alertas de sistema, precio/oferta falsos, promesa de ganancias, redirección forzada o pop-up malicioso.","Sin suplantar la marca oficial, usar marca/celebridad sin permiso o pujar marca sin autorización."], notice:{tone:"danger",text:"El tráfico anómalo o no verificable puede causar revisión, bloqueo de retiro, rechazo, recuperación de comisión o suspensión."} },
      "data-settlement": { id:"data-settlement", eyebrow:"08 · DATOS Y PAGO", title:"Estados, reversiones y pago estándar", paragraphs:["Postback, AppsFlyer/MMP, zona horaria, confirmación, reembolso, contracargo, revisión de tráfico y sincronización pueden retrasar datos. Estimado, pendiente, confirmado e inválido son etapas distintas; estimación no es pago final.","La liquidación estándar es mensual. La comisión elegible del mes anterior suele estar disponible para retiro desde el día 8 del mes siguiente, UTC. El mínimo estándar es USD 100 y el método estándar es transferencia bancaria. El procesamiento suele llevar unos 15 días hábiles, sujeto a banco, festivos, compliance y pago del anunciante.","USDT no es un método estándar garantizado y solo se aplica si se confirma para la cuenta. Algunas ofertas, como SagaBox, pueden tener calendario propio, por ejemplo antes del día 15 del mes siguiente; oferta, contrato o acuerdo especial prevalecen."], bullets:["Reembolso, contracargo, reversión, fallo, fraude, duplicado y violación pueden cancelar o recuperar comisión.","El retraso del anunciante puede retrasar al Publisher.","Nombre del beneficiario, cuenta y SWIFT deben ser correctos.","Los clics no equivalen a ingresos; revisa compras válidas, ingresos, reembolsos y comisión confirmada."], notice:{tone:"warning",text:"Estándar: mínimo USD 100, mensual y transferencia bancaria. USDT o ciclo personalizado requiere confirmación escrita de la cuenta."} },
    },
    rates:{ id:"rates-offers", eyebrow:"10 · OFERTAS Y TASAS ACTUALES", title:"Tasas CPS publicadas el 29 de septiembre de 2026", paragraphs:["Tasas de Publisher por plataforma en esa fecha; no son promesa permanente para GEO, dispositivo, título o campaña. Rige la oferta actual de la cuenta."], bullets:["65%: DramaBox, GoodShort, StardustTV, Playlet y SagaBox.","60%: KalosTV, ShortMax, SnackShort, StarShort, HoneyReels, YourChannel, Sereal+ y FlareFlow.","55%: NetShort y TopShort.","50%: TouchShort.","45%: ReelShort.","La base puede ser ingreso neto elegible confirmado tras impuestos, costes de pago/tienda, reembolsos, contracargos y transacciones inválidas; revisa la oferta."], notice:{tone:"info",text:"Revisa el panel antes de cada lanzamiento; tasa, GEO, dispositivo, atribución y tráfico pueden cambiar."} },
    technical:{ id:"technical-api", eyebrow:"11 · API, SUB IDS Y POSTBACK", title:"Enlaces masivos, integración y límites de conversión", paragraphs:["Publishers con catálogo, varias fuentes o sistema propio pueden solicitar API de catálogo, enlaces o informes. El acceso depende de cuenta, volumen y plataforma. Indica Publisher ID, uso, volumen, GEO y campos.","Los enlaces pueden aceptar click_id, sub_id, source, campaign_id y creative_id según la oferta. URLs de material/vídeo pueden caducar y no son CDN permanente; la API no autoriza redistribución bruta masiva.","S2S, Revenue API, refund y campos por transacción varían. La documentación completa de Postback web se centra actualmente en SagaBox; otros apps dependen principalmente del panel y atribución del anunciante. No se ofrece AppsFlyer Agency, CTV VTA ni MMP directo garantizado."], bullets:["SagaBox acepta click_id/clickid, publisher_id/publisherid, sub_id/subid, source, fbclid, ttclid, gclid, gbraid, wbraid, campaign_id, creative_id y link_id.","SagaBox informa registration, purchase y refund con transacción, importe, moneda y clic; el reenvío sigue su guía vigente.","Para optimizar Meta/TikTok/Google por valor, confirma S2S/offline antes de gastar.","Deduplica por transaction_id y recibe por HTTPS."], notice:{tone:"info",text:"Abre la guía exclusiva de SagaBox para parámetros, plantillas, macros, filtros y respuestas."} },
    faq:{ id:"faq", eyebrow:"12 · PREGUNTAS Y REGLAS", title:"¿Qué confirmar antes de promocionar?", bullets:["¿Clic, registro o instalación pagan? Normalmente no; CPS depende del pago aprobado.","¿Compras repetidas pagan? Generalmente sí durante atribución válida; DramaBox, SagaBox y otros difieren.","¿App Home URL y Drama URL rastrean? Sí; uno promueve el app y otro la serie.","¿Comprar otra serie en la misma plataforma paga? Normalmente sí si la atribución sigue válida; rige la oferta.","¿Puedo subir vídeo bruto? No; la edición relevante es obligatoria.","¿Subtítulos, traducción y voz IA? Generalmente sí, sin tergiversar ni borrar identificación protegida.","¿Por qué faltan episodios gratis? No todos los títulos ofrecen y la disponibilidad cambia.","¿Problema de M3U8/extensión/upload? Usa descarga oficial o pide archivo compatible; no obtengas contenido pagado sin permiso.","¿Publicidad pagada? Generalmente sí si la oferta acepta; incentivos, cashback, fraude y tráfico no verificable están prohibidos.","¿Varias cuentas en lista blanca? Sí; envía cada URL y espera unos tres días hábiles.","¿Mínimo? USD 100 por transferencia bancaria.","¿USDT estándar? No; solo con confirmación individual.","¿Todos tienen API/Postback? No; API es selectiva y SagaBox tiene guía propia.","¿Pago sin datos? Envía enlace, hora/zona, dispositivo, país, serie, grabación y pedido."], paragraphs:["Reglas centrales: enlace completo propio; Drama URL correcto; edición real; cuentas en lista blanca; nunca incentivos, cashback, pago falso o manipulación; y revisión de tasa, GEO, atribución, material y pago antes de cada oferta."], notice:{tone:"danger",text:"Sin fraude, sin romper parámetros, sin repost bruto y sin tratar una excepción individual como política general."} },
  },
};

export const latestLocales = Object.fromEntries(
  (Object.keys(baseLocales) as Language[]).map((language) => {
    const base = baseLocales[language];
    const update = updates[language];
    const review = editorial[language];
    const retained = base.sections
      .filter((section) => section.id !== "faq")
      .map((section) => update.replacements[section.id] ?? section)
      .map((section) => section.id === "overview"
        ? { ...section, paragraphs: [...review.overview, ...(section.paragraphs ?? []).slice(2)], notice: { tone: "info" as const, text: review.rateNote } }
        : section.id === "data-settlement"
          ? { ...section, paragraphs: [...(section.paragraphs ?? []).slice(0, 2), review.settlement] }
          : section);

    return [language, {
      ...base,
      ui: { ...base.ui, lastUpdated: update.lastUpdated },
      sections: [...retained, update.rates, { ...update.technical, bullets: [...(update.technical.bullets ?? []).slice(0, -1), review.dedup] }, update.faq],
    } satisfies LocaleContent];
  }),
) as Record<Language, LocaleContent>;
