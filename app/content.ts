export type Language = "zh" | "en" | "pt" | "es";

export type GuideSection = {
  id: string;
  title: string;
  eyebrow: string;
  paragraphs?: string[];
  bullets?: string[];
  notice?: { tone: "info" | "warning" | "danger"; text: string };
};

export type LocaleContent = {
  htmlLang: string;
  label: string;
  shortLabel: string;
  ui: {
    search: string;
    menu: string;
    close: string;
    contents: string;
    official: string;
    heroLine1: string;
    heroLine2: string;
    heroText: string;
    start: string;
    visit: string;
    chapters: string;
    languages: string;
    compliance: string;
    knowledge: string;
    guideTitle: string;
    guideIntro: string;
    supportTitle: string;
    supportText: string;
    noResults: string;
    tryAnother: string;
    important: string;
    lastUpdated: string;
    footer: string;
    backTop: string;
  };
  sections: GuideSection[];
};

export const locales: Record<Language, LocaleContent> = {
  zh: {
    htmlLang: "zh-CN",
    label: "简体中文",
    shortLabel: "中文",
    ui: {
      search: "搜索教程内容…",
      menu: "打开目录",
      close: "关闭目录",
      contents: "教程目录",
      official: "OFFICIAL CREATOR PLAYBOOK",
      heroLine1: "从素材到佣金，",
      heroLine2: "每一步都讲清楚。",
      heroText: "DramaCPS 推广者完整操作手册。了解素材使用、链接归因、流量规范和佣金结算，安全地开始你的短剧推广。",
      start: "开始阅读",
      visit: "进入 DramaCPS",
      chapters: "完整章节",
      languages: "支持语言",
      compliance: "合规指南",
      knowledge: "DRAMACPS KNOWLEDGE BASE",
      guideTitle: "推广教程与注意事项",
      guideIntro: "建议按顺序阅读。所有佣金比例、归因周期、支持地区和平台政策均以后台最新 Offer 规则、合作协议及最终核算结果为准。",
      supportTitle: "需要帮助？",
      supportText: "请提供完整链接、设备、地区、点击时间、截图或录屏，便于准确核查。",
      noResults: "没有找到相关内容",
      tryAnother: "请尝试其他关键词，或清除搜索后查看全部章节。",
      important: "重要提示",
      lastUpdated: "更新于 2026 年 8 月",
      footer: "本指南仅用于推广者培训。最终政策以 DramaCPS 后台、合作协议和广告主核算结果为准。",
      backTop: "返回顶部",
    },
    sections: [
      {
        id: "overview",
        eyebrow: "01 · 平台与账号",
        title: "DramaCPS 是什么？如何开始？",
        paragraphs: [
          "DramaCPS 是短剧 CPS 推广合作平台。推广者可以在 dramacps.com 获取短剧素材和专属推广链接，通过 TikTok、YouTube Shorts、Facebook Reels、Instagram Reels、自有网站、内容社区及合规广告投放推广短剧 App。",
          "用户通过你的专属链接下载安装 App，并在 App 内购买会员、金币、单集、整部短剧或完成其他有效充值后，你可以按照对应平台的 CPS 分成规则获得佣金。仅点击或安装通常不会直接产生佣金，订单还需要通过广告主审核。",
          "注册后请完善个人资料、注册邮箱和收款信息，并进入用户中心查看可推广的平台、短剧、素材和链接。开始推广前，应确认 Offer 是否开放、目标地区、佣金比例、归因周期、素材要求、最低提现金额和结算状态。不同平台的分成、归因和结算规则可能不同。",
        ],
        bullets: [
          "确保注册邮箱、姓名和收款资料真实、准确。",
          "每次推广前重新查看对应 Offer 的最新规则。",
          "收款信息填写错误可能导致付款失败或延迟。",
          "不要把账号密码、邮箱验证码或支付资料提供给任何人。",
        ],
        notice: { tone: "info", text: "DramaCPS 的部分 Offer 分成可能约为 45%–80%，但这不是所有 Offer 的固定比例，必须以后台当时显示的比例为准。" },
      },
      {
        id: "materials-links",
        eyebrow: "02 · 素材与链接",
        title: "如何获取素材并选择正确链接？",
        paragraphs: [
          "登录后进入用户中心的素材库。根据具体 Offer，你可能看到视频素材、短剧名称、封面、剧情介绍、平台信息、App Home URL、Drama URL 和其他推广资料。",
          "App Home URL 通常进入短剧 App 首页，适合推广整个平台、制作 App 推荐内容，或没有指定某一部短剧的情况。Drama URL 通常进入指定短剧的详情页或播放页，适合视频素材来自某一部具体短剧的推广。推广具体短剧时，建议优先使用对应 Drama URL，让视频内容与落地页保持一致。",
          "用户未安装 App 时，链接通常会跳转到 Google Play 或 Apple App Store；已经安装时，会尝试直接打开 App。实际结果可能受到手机系统、浏览器、TikTok/Facebook/Instagram 内置浏览器、用户地区、App 上架状态、短剧是否仍上架和深度链接配置影响。",
        ],
        bullets: [
          "确认登录的是自己的 DramaCPS 账号。",
          "复制自己账号生成的专属链接；使用他人的链接，佣金不会进入你的账号。",
          "短剧视频、短剧名称与 Drama URL 必须对应。",
          "使用短链或中间落地页时，确认最终跳转仍完整保留所有参数。",
        ],
        notice: { tone: "danger", text: "不要修改、删除、覆盖或重新拼接推广链接中的参数，否则可能导致系统无法识别推广者身份，且通常无法人工补记佣金。" },
      },
      {
        id: "creative-whitelist",
        eyebrow: "03 · 内容与白名单",
        title: "视频必须二次剪辑，账号应提前提交白名单",
        paragraphs: [
          "素材库视频可以用于合规推广，但必须进行明显的二次创作。可采用重新选择精彩片段、调整开头结尾、添加字幕或解说、重新配音、改变画面比例、重组镜头、调整节奏、增加转场或特效、添加剧情标题和真实观看引导等方式。每条视频都应有实质性修改。",
          "严禁将下载的原始素材完全不修改直接发布。仅添加简单水印通常不构成充分的二次剪辑。原样上传可能被识别为重复内容，导致推荐下降、限流、版权检测或账号警告。",
          "准备在 TikTok、YouTube、Facebook 或 Instagram 发布时，请向 DramaCPS 提交实际使用的完整账号或主页链接。白名单通常需要约三个工作日处理，实际时间以平台结果为准。更换账号后应重新提交；私密账号或只提供昵称可能无法审核。",
        ],
        bullets: [
          "可提交 TikTok 主页、YouTube 频道、Facebook Page、Instagram 主页等可访问链接。",
          "白名单不会免除二次剪辑要求，也不能保证所有内容永久通过平台审核。",
          "内容能否发布、是否推荐及是否触发审核，最终由社交平台决定。",
          "保留原始素材、剪辑工程、成片和已发布内容链接，以便后续核查。",
        ],
        notice: { tone: "warning", text: "必须二次剪辑后再发布。未经剪辑的原视频上传，是最容易引发重复内容和版权问题的操作之一。" },
      },
      {
        id: "publishing",
        eyebrow: "04 · 发布与转化",
        title: "如何发布，并让视频更容易产生有效转化？",
        paragraphs: [
          "推广链接可放在 TikTok 个人主页、YouTube 视频说明或频道主页、Facebook Page 按钮或评论区、Instagram Bio 或 Story、自有网站、广告落地页，以及其他允许外部链接的位置。如果说明区不能放可点击链接，可明确提示用户点击主页链接或 Bio 继续观看。",
          "推荐的视频结构是：前三秒快速展示冲突；中段保留容易理解的核心剧情；在关键答案出现前结束并留下悬念；结尾加入明确且真实的观看引导。不要堆放大量无关联镜头，也不要让视频内容与落地短剧不一致。",
        ],
        bullets: [
          "可使用：Watch the full series now. / Click the link in bio to continue. / Download the app to watch the next episode.",
          "不要宣称“完全免费”“无需注册”或“所有剧集永久免费观看”，除非对应 App 确实如此。",
          "不要冒充短剧 App 官方账号，也不要使用未经授权的明星、品牌或第三方素材。",
          "发布前实际打开一次链接，确认进入正确的 App、商店或短剧页面。",
        ],
        notice: { tone: "info", text: "内容、短剧名称和落地页越一致，用户越容易理解下一步，也越有利于形成真实转化。" },
      },
      {
        id: "commission-attribution",
        eyebrow: "05 · 佣金与归因",
        title: "佣金如何产生？用户多次充值如何计算？",
        paragraphs: [
          "佣金通常来自广告主确认的有效付费行为，包括购买会员、金币、单集、整部短剧或 Offer 规定的其他充值。点击、安装、付费属于不同阶段；仅有点击或安装并不代表一定产生佣金。",
          "只要用户仍处于你的有效归因范围内，后续符合条件的多次充值通常也可以产生佣金，不仅限于第一次充值。部分平台可能从用户首次下载或最近一次有效充值开始计算；如果连续七天没有再次充值，后续可能不再归属于原推广者。",
          "DramaBox 的归因规则可能与其他平台不同。按照现行合作规则，用户通过链接完成有效下载并成功归因后，后续充值通常可以持续计算佣金，不受上述七天未充值规则限制。政策可能调整，最终以对应 Offer 的最新规则、广告主回传和后台记录为准。",
        ],
        bullets: [
          "归因通常基于链接参数、设备信息、点击记录和广告主或第三方归因平台的回传。",
          "部分平台采用最后一次有效点击归因；用户之后点击新链接时，可能归入最新链接。",
          "如果用户已经归属于其他推广者、已经是老用户或没有经过你的链接，可能无法归因给你。",
          "DramaCPS 通常不能仅凭充值截图或口头说明手动添加佣金。",
        ],
        notice: { tone: "warning", text: "后台预估佣金不等于最终可支付佣金。只有经过广告主审核并确认的有效付费，才进入最终结算。" },
      },
      {
        id: "attribution-failures",
        eyebrow: "06 · 归因排查",
        title: "哪些情况可能导致归因失败？",
        bullets: [
          "用户未通过你的专属链接进入，或链接参数在复制、短链、中间页面跳转时丢失。",
          "用户点击你的链接后，又点击了其他推广者的链接；对应平台按最后一次有效点击归因。",
          "用户此前已经安装 App、已经属于其他推广者，或本身就是该 App 的老用户。",
          "用户更换设备、使用隐私浏览、限制广告追踪、广告拦截器，或系统/浏览器阻止追踪。",
          "用户点击后间隔过久才安装或充值，超过对应 Offer 的有效归因周期。",
          "用户没有继续通过链接，而是自行搜索应用商店下载安装。",
          "用户卸载后重新安装，但没有形成新的有效归因。",
          "用户所在地区无法下载 App、短剧已经下架，或深度链接未正确打开。",
          "用户发生退款、拒付、订单撤销，或广告主将用户、订单或流量判定为无效。",
          "用户使用代理网络、模拟器、设备农场或其他异常环境；多个账号或设备存在明显关联。",
          "广告主或归因平台回传延迟、失败，或数据尚未完成同步。",
        ],
        notice: { tone: "info", text: "申请核查时，请提供完整推广链接、平台及短剧名称、点击时间和时区、手机系统、所在地区、跳转录屏、实际页面和错误截图。" },
      },
      {
        id: "traffic-ads",
        eyebrow: "07 · 流量与广告",
        title: "允许哪些流量？哪些行为严格禁止？",
        paragraphs: [
          "一般可使用 TikTok、YouTube Shorts、Facebook Reels、Instagram Reels、自有网站、内容社区、Meta Ads、TikTok Ads、Google Ads、合规应用内广告和其他真实合法的推广渠道。国家通常没有统一限制，但 App 上架地区和具体 Offer 政策可能不同。",
          "DramaCPS 不接受激励流量和返利流量。目前也暂不支持推广者直接通过自己的 MMP 与部分短剧平台独立对接；点击、安装、充值和佣金以 DramaCPS 及广告主回传为主要依据。",
        ],
        bullets: [
          "禁止付钱、返现、积分、礼品卡、虚拟奖励或任务平台诱导用户下载或充值。",
          "禁止自充值、组织他人虚假充值、批量设备、模拟器、设备农场、机器人、脚本和自动化点击。",
          "禁止伪造用户、订单、充值记录或流量来源，禁止盗用他人账号、内容或推广链接。",
          "禁止欺骗性下载按钮、伪装系统通知、强制点击、自动跳转、恶意弹窗或隐瞒真实推广方式。",
          "广告内容必须与实际短剧和 App 一致，不得承诺不存在的奖励或权益。",
          "付费投放应保存广告账户、素材、投放数据和落地页记录；不要在未确认政策时竞价品牌词或冒充官方。",
        ],
        notice: { tone: "danger", text: "发现异常流量后，DramaCPS 或广告主可能暂停核算、拒绝结算、扣除无效佣金或封禁账号。" },
      },
      {
        id: "data-settlement",
        eyebrow: "08 · 数据与结算",
        title: "数据为什么延迟？佣金什么时候支付？",
        paragraphs: [
          "用户充值后，数据可能因为广告主回传、AppsFlyer 或其他归因平台处理、时区、支付确认、订单审核、退款拒付检查、无效流量审核或同步任务而延迟。后台可能显示点击、安装、付费用户、充值金额、预估佣金、待审核佣金、已确认佣金及无效数据。",
          "DramaCPS 通常在次月核对上一个自然月的佣金。次月由广告主核对安装、充值、退款、拒付及无效流量；广告主确认最终有效佣金后，DramaCPS 在满足条件时安排付款。一般在次月 7 日之后开始处理已核准佣金，但不代表一定在 7 日当天到账。",
          "付款时间可能受到广告主对账和付款进度、流量审核、收款资料、最低付款金额、支付渠道、节假日和银行工作日影响。如果上游广告主或短剧平台尚未向 DramaCPS 支付对应款项，DramaCPS 可能延迟支付或暂不支付相关佣金。",
        ],
        bullets: [
          "用户退款、信用卡拒付、未成年人付款撤销、支付失败或欺诈交易可能导致佣金取消或扣回。",
          "广告主认定无效的订单、设备或流量不会进入最终结算。",
          "点击数量不能直接代表收益，最终以广告主确认的有效付费数据为准。",
          "预估数据可能在最终对账后增加、减少或被去重。",
        ],
        notice: { tone: "warning", text: "结算以合作协议、后台状态、广告主最终核算和实际到账条件为准；“次月 7 日后处理”不等于固定到账日。" },
      },
      {
        id: "checklist-security",
        eyebrow: "09 · 上线检查与安全",
        title: "推广前检查、链接测试和账号安全",
        bullets: [
          "确认登录自己的账号，复制自己的专属链接，并选择正确平台和短剧。",
          "确认视频内容、短剧名称与 Drama URL 对应，且素材已经完成明显二次剪辑。",
          "查看最新佣金比例、归因周期、支持地区、素材要求和结算条件。",
          "尽量分别测试 Android 与 iOS；检查 App 是否能在目标地区下载、短剧是否仍能观看。",
          "检查所有中间跳转仍保留完整参数；不要用自充值、多设备批量点击或虚假安装测试佣金。",
          "检查字幕、标题和观看引导，删除“保证赚钱”“完全免费”等不准确承诺。",
          "保存素材、剪辑工程、发布链接和付费广告数据。",
          "仅访问 dramacps.com，警惕仿冒网站和钓鱼链接；使用强密码且不要与其他网站共用。",
          "不要购买来历不明的账号，也不要多人共用账号；定期检查收款资料是否被修改。",
          "发现异常登录、链接被替换或收款信息异常时，立即联系 support@dramacps.com。",
        ],
        notice: { tone: "info", text: "正确的链接测试只需确认跳转结果，不需要制造充值或大量点击。请勿公开发送密码、支付密码、银行卡验证码等敏感信息。" },
      },
      {
        id: "faq",
        eyebrow: "10 · 常见问题与总则",
        title: "常见问题及最重要的注意事项",
        bullets: [
          "点击或安装就有佣金吗？通常没有。CPS 佣金主要来自通过审核的有效付费。",
          "用户多次充值有佣金吗？在有效归因范围内且充值被确认时，通常可以；具体看 Offer。",
          "可以直接发原视频吗？不可以，必须进行实质性的二次剪辑。",
          "可以在多个平台推广吗？可以，但必须同时遵守 DramaCPS 与对应社交平台政策。",
          "新账号或粉丝少可以加入吗？可以，不要求必须已有大量受众。",
          "有国家限制吗？通常没有统一限制，但要看 App 上架地区和具体 Offer。",
          "用户充值但后台没数据？可能是延迟、归因失败、老用户、参数丢失、属于他人、退款或尚未回传。",
          "佣金为什么减少？可能因退款、拒付、数据去重、无效订单或流量审核。",
          "可以付费投放吗？可以使用合规广告，但禁止激励、返利、欺诈、机器人和设备农场流量。",
          "遇到问题如何联系？发送完整证据至 support@dramacps.com，不要只提供昵称或不完整截图。",
        ],
        paragraphs: [
          "最重要的原则是：使用自己的完整专属链接；具体短剧优先使用对应 Drama URL；素材必须二次剪辑；推广账号提前提交白名单；禁止激励、返利、虚假充值和作弊；预估佣金不等于最终佣金；归因与结算以最新 Offer、合作协议和广告主结果为准。",
          "DramaCPS 可根据广告主政策、平台规则、归因结果和流量质量审核数据及佣金。佣金比例、支持地区、素材要求、归因周期和结算安排可能调整，推广者应在每次开始新 Offer 前重新确认。",
        ],
        notice: { tone: "danger", text: "禁止作弊、不要破坏链接参数、不要原样上传素材——这是保护账号、归因和佣金的三条底线。" },
      },
    ],
  },
  en: {
    htmlLang: "en",
    label: "English",
    shortLabel: "EN",
    ui: {
      search: "Search the guide…",
      menu: "Open contents",
      close: "Close contents",
      contents: "Guide contents",
      official: "OFFICIAL CREATOR PLAYBOOK",
      heroLine1: "From creative to commission,",
      heroLine2: "every step made clear.",
      heroText: "The complete DramaCPS creator handbook for creative use, tracking links, attribution, traffic compliance, reporting and commission settlement.",
      start: "Start reading",
      visit: "Open DramaCPS",
      chapters: "full chapters",
      languages: "languages",
      compliance: "compliance guide",
      knowledge: "DRAMACPS KNOWLEDGE BASE",
      guideTitle: "Promotion guide and important rules",
      guideIntro: "Read in order. Commission rates, attribution windows, supported regions and platform policies are governed by the latest Offer details, agreement and final advertiser validation.",
      supportTitle: "Need help?",
      supportText: "Send the full link, device, region, click time, screenshots or a screen recording so the issue can be checked accurately.",
      noResults: "No matching content",
      tryAnother: "Try another keyword or clear the search to view every chapter.",
      important: "Important",
      lastUpdated: "Updated August 2026",
      footer: "This guide is for publisher training. Final rules are governed by the DramaCPS dashboard, agreement and advertiser validation.",
      backTop: "Back to top",
    },
    sections: [
      {
        id: "overview", eyebrow: "01 · PLATFORM & ACCOUNT", title: "What is DramaCPS and how do I start?",
        paragraphs: [
          "DramaCPS is a CPS affiliate platform for short-drama apps. Publishers can obtain approved creative assets and unique tracking links from dramacps.com and promote through TikTok, YouTube Shorts, Facebook Reels, Instagram Reels, owned websites, content communities and compliant paid media.",
          "When a user installs through your unique link and makes an eligible in-app purchase—such as a subscription, coins, episodes or a full series—you may earn commission under that Offer's CPS terms. A click or install alone normally does not create commission; the payment must also pass advertiser review.",
          "After registering, complete your profile, email and payment details. Before each launch, confirm that the Offer is active and review its target regions, current rate, attribution window, creative rules, minimum payout and settlement status. Terms differ by platform and can change.",
        ],
        bullets: ["Use accurate registration and payment information.", "Recheck the live Offer terms before every new campaign.", "Incorrect payout details can delay or prevent payment.", "Never share your password, email code or payment credentials."],
        notice: { tone: "info", text: "Some Offers may show an approximate 45%–80% CPS share, but this is not a universal fixed rate. The rate shown in the dashboard for that Offer controls." },
      },
      {
        id: "materials-links", eyebrow: "02 · ASSETS & LINKS", title: "How do I get assets and choose the right link?",
        paragraphs: [
          "Open the Creative Library in your account. Depending on the Offer, it may include video assets, title, cover art, synopsis, platform details, an App Home URL, a Drama URL and other promotional information.",
          "An App Home URL normally opens the app home screen and suits app-level promotion. A Drama URL normally opens a specific series page and should be preferred when your video promotes that series. Matching the creative, drama title and destination reduces confusion.",
          "If the app is not installed, the user will usually be sent to Google Play or the Apple App Store. If installed, the link will attempt to open the app. Results can vary with the OS, in-app browser, region, store availability, drama availability and deep-link configuration.",
        ],
        bullets: ["Confirm you are signed into your own DramaCPS account.", "Use the unique link generated for your account; another publisher's link credits them, not you.", "Make sure the creative and title match the Drama URL.", "When using a shortener or intermediate landing page, verify that every tracking parameter survives the redirect."],
        notice: { tone: "danger", text: "Do not edit, remove, overwrite or rebuild tracking parameters. Broken parameters can prevent attribution and commission usually cannot be added manually." },
      },
      {
        id: "creative-whitelist", eyebrow: "03 · CREATIVE & WHITELIST", title: "Every video needs a meaningful re-edit",
        paragraphs: [
          "Library footage may be used for compliant promotion, but it must be substantially re-edited. Select new scenes, change the opening and ending, add subtitles, commentary or new voice-over, alter pacing or aspect ratio, rearrange shots, add transitions, create a story hook and use an accurate call to action.",
          "Never download and repost the raw file unchanged. A simple watermark is usually not sufficient. Unmodified footage can be treated as duplicate content and may lose distribution, trigger copyright review or cause account warnings.",
          "Before posting on TikTok, YouTube, Facebook or Instagram, submit the full profile or Page URL you will use. Whitelisting usually takes about three business days, subject to platform processing. Submit again after changing accounts; private profiles or nicknames alone may not be reviewable.",
        ],
        bullets: ["Submit accessible TikTok profiles, YouTube channels, Facebook Pages or Instagram profiles.", "Whitelisting does not remove the re-editing requirement.", "A whitelist cannot guarantee that every post will pass every platform review forever.", "Keep source files, editing projects, final videos and published URLs for verification."],
        notice: { tone: "warning", text: "Re-edit before posting. Uploading raw, unchanged footage is one of the most common causes of duplicate-content and copyright issues." },
      },
      {
        id: "publishing", eyebrow: "04 · PUBLISHING & CONVERSION", title: "How should I publish and structure a converting video?",
        paragraphs: [
          "Place the tracking link in an allowed location: TikTok bio, YouTube description or channel page, a Facebook Page button or comment, Instagram bio or Story, your website or a compliant landing page. If the platform does not provide clickable links in captions, clearly direct viewers to the profile or bio link.",
          "A strong structure is: reveal the conflict in the first three seconds; keep the central plot easy to follow; stop before the key answer to create suspense; finish with a truthful call to action. Avoid unrelated clips and never send viewers to a different drama from the one shown.",
        ],
        bullets: ["Examples: “Watch the full series now,” “Click the link in bio to continue,” or “Download the app to watch the next episode.”", "Do not claim the app is completely free, requires no registration or offers every episode free forever unless that is actually true.", "Do not impersonate the official app account or use unauthorized celebrities, brands or third-party assets.", "Open the link before publishing and verify the correct app, store or drama page."],
        notice: { tone: "info", text: "The closer the creative, drama title and destination match, the easier it is for viewers to understand the next step and convert naturally." },
      },
      {
        id: "commission-attribution", eyebrow: "05 · COMMISSION & ATTRIBUTION", title: "How are commissions and repeat purchases credited?",
        paragraphs: [
          "Commission normally comes from advertiser-approved purchases: subscriptions, coins, episodes, full series or another payable event listed in the Offer. Clicks, installs and payments are different stages; clicks or installs alone do not guarantee earnings.",
          "While a user remains inside your valid attribution, later eligible purchases can normally earn commission as well. Some platforms may count from the first download or most recent valid purchase and may stop crediting the user after seven consecutive days without another purchase.",
          "DramaBox may follow different rules. Under the current cooperation rule, a user who completes a valid download through your link and is successfully attributed can generally continue generating commission without that seven-day inactivity limit. Rules can change; the live Offer, advertiser postback and dashboard record are final.",
        ],
        bullets: ["Attribution normally uses link parameters, device data, click records and advertiser or MMP postbacks.", "Some platforms use last valid click; clicking a newer link may move credit to that link.", "Existing users, users already assigned to another publisher and users who did not use your link may not credit to you.", "A receipt screenshot or verbal claim alone is normally insufficient for manual commission credit."],
        notice: { tone: "warning", text: "Estimated commission is not final payable commission. Only eligible payments confirmed after advertiser review enter final settlement." },
      },
      {
        id: "attribution-failures", eyebrow: "06 · ATTRIBUTION TROUBLESHOOTING", title: "What can cause attribution to fail?",
        bullets: ["The user did not enter through your unique link, or parameters were lost during copying, shortening or an intermediate redirect.", "The user clicked another publisher's link later and the platform applied last-click attribution.", "The app was already installed, the user was already assigned elsewhere, or the user was already an app customer.", "The user changed devices, used private browsing, limited tracking, used an ad blocker, or the OS/browser blocked tracking.", "Too much time passed between click, install and purchase, exceeding the Offer's attribution window.", "The user searched the app store and installed independently instead of continuing through the link.", "A reinstall did not create a new valid attribution.", "The app was unavailable in that region, the drama was removed or the deep link did not resolve correctly.", "The order was refunded, charged back, cancelled or classified as invalid by the advertiser.", "Proxy use, emulators, device farms, abnormal environments or strongly related accounts/devices triggered quality review.", "The advertiser/MMP postback was delayed, failed or has not synchronized yet."],
        notice: { tone: "info", text: "For investigation, provide the full tracking link, platform and drama, click time with time zone, OS, region, screen recording of the redirect, final page and error screenshots." },
      },
      {
        id: "traffic-ads", eyebrow: "07 · TRAFFIC & PAID MEDIA", title: "What traffic is accepted and what is prohibited?",
        paragraphs: [
          "Generally accepted sources include TikTok, YouTube Shorts, Facebook Reels, Instagram Reels, owned sites, content communities, Meta Ads, TikTok Ads, Google Ads, compliant in-app media and other genuine lawful channels. There is usually no blanket country restriction, but app-store availability and Offer rules still apply.",
          "Incentivized and rebate traffic are not accepted. DramaCPS also does not currently support publishers independently connecting their own MMP to certain drama platforms; click, install, purchase and commission reporting primarily relies on DramaCPS and advertiser postbacks.",
        ],
        bullets: ["No cash, cashback, points, gift cards, virtual rewards or task-platform incentives for downloads or purchases.", "No self-purchases, coordinated fake payments, bulk devices, emulators, device farms, bots, scripts or automated clicks.", "No fabricated users, orders, receipts or traffic sources, and no theft of another publisher's account, content or link.", "No deceptive download buttons, fake system notices, forced clicks, auto redirects, malicious pop-ups or hidden traffic methods.", "Ads must match the real drama and app and must not promise benefits that do not exist.", "Keep ad-account, creative, media and landing-page records; do not bid on brand terms or impersonate the official brand without confirmed permission."],
        notice: { tone: "danger", text: "Abnormal traffic can lead to a review hold, rejection of payment, reversal of invalid commission or account suspension." },
      },
      {
        id: "data-settlement", eyebrow: "08 · REPORTING & PAYMENT", title: "Why is data delayed and when is commission paid?",
        paragraphs: [
          "Purchase reporting can be delayed by advertiser postbacks, AppsFlyer or another MMP, time zones, payment confirmation, order review, refunds and chargebacks, invalid-traffic review or synchronization jobs. Dashboard stages may include clicks, installs, paying users, revenue, estimated commission, pending review, confirmed commission and invalid records.",
          "DramaCPS normally reconciles the prior calendar month during the following month. The advertiser verifies installs, purchases, refunds, chargebacks and traffic quality; after final confirmation and once payment conditions are met, DramaCPS arranges payment. Processing generally begins after the 7th of the following month, but the 7th is not a guaranteed arrival date.",
          "Timing may depend on advertiser reconciliation and payment, traffic review, correct payout information, minimum payout, payment rails, holidays and banking days. If the upstream advertiser or drama platform has not paid DramaCPS for the relevant amount, DramaCPS may delay or withhold that payment until the condition is met.",
        ],
        bullets: ["Refunds, card chargebacks, minor-payment reversals, failed payments and fraudulent transactions can reverse commission.", "Orders, devices or traffic classified as invalid do not enter final settlement.", "Click volume does not equal revenue; confirmed eligible payment data controls.", "Estimated figures can increase, decrease or be deduplicated during reconciliation."],
        notice: { tone: "warning", text: "Settlement is governed by the agreement, dashboard status, advertiser validation and actual payment conditions. “Processing after the 7th” is not a fixed payment date." },
      },
      {
        id: "checklist-security", eyebrow: "09 · LAUNCH CHECKLIST & SECURITY", title: "What should I check before launch?",
        bullets: ["Use your own account and unique link, and select the correct platform and drama.", "Match the video, drama title and Drama URL and complete a meaningful re-edit.", "Review the current rate, attribution window, supported region, creative rules and settlement conditions.", "Where practical, test Android and iOS; confirm the app can be installed and the drama can be watched in the target region.", "Verify that every redirect preserves all parameters. Do not test commission with self-purchases, fake installs or bulk clicks.", "Review captions, title and call to action and remove inaccurate claims such as guaranteed earnings or completely free access.", "Keep source assets, edit files, published URLs and paid-media records.", "Use only dramacps.com, beware of impersonation and phishing, and use a strong unique password.", "Do not buy unknown accounts or share one account across many people; regularly check payout details.", "If login, link or payment details look abnormal, contact support@dramacps.com immediately."],
        notice: { tone: "info", text: "A proper link test only confirms the destination; it does not require a purchase or large click volume. Never publicly send passwords, payment passwords or bank verification codes." },
      },
      {
        id: "faq", eyebrow: "10 · FAQ & CORE RULES", title: "Frequently asked questions and the rules that matter most",
        bullets: ["Do clicks or installs earn commission? Normally no; CPS is primarily based on advertiser-approved payments.", "Do repeat purchases earn commission? Normally yes while valid attribution remains and the purchase is confirmed; check the Offer.", "Can I repost the raw video? No. Meaningful re-editing is required.", "Can I promote across several social platforms? Yes, while following both DramaCPS and each platform's rules.", "Can a new creator with few followers join? Yes; a large existing audience is not required.", "Are countries restricted? Usually there is no blanket restriction, but app availability and each Offer still control.", "The user paid but no data appears—why? Possible causes include delay, failed attribution, an existing user, lost parameters, another publisher's attribution, refund or missing postback.", "Why did commission decrease? Refunds, chargebacks, deduplication, invalid orders or traffic review may reduce it.", "Can I buy traffic? Yes, if compliant; incentives, rebates, fraud, bots and device farms are prohibited.", "How do I request help? Email complete evidence to support@dramacps.com; a nickname or partial screenshot is not enough."],
        paragraphs: ["The essential rules are: use your complete unique link; use the matching Drama URL for a specific series; substantially re-edit every asset; submit promotional accounts for whitelist review; never use incentives, rebates, fake payments or manipulation; and remember that estimates are not final settlement.", "DramaCPS may review data and commission under advertiser policy, platform rules, attribution evidence and traffic quality. Rates, regions, creative rules, windows and settlement arrangements can change, so recheck every Offer before launch."],
        notice: { tone: "danger", text: "No fraud, no broken tracking parameters and no raw reposts—these are the three baseline rules for protecting your account, attribution and commission." },
      },
    ],
  },
  pt: {
    htmlLang: "pt-BR",
    label: "Português",
    shortLabel: "PT",
    ui: {
      search: "Pesquisar no guia…", menu: "Abrir sumário", close: "Fechar sumário", contents: "Sumário do guia", official: "MANUAL OFICIAL PARA CRIADORES", heroLine1: "Do criativo à comissão,", heroLine2: "cada etapa bem explicada.", heroText: "O manual completo do parceiro DramaCPS: materiais, links, atribuição, tráfego permitido, relatórios e pagamento de comissões.", start: "Começar a ler", visit: "Acessar DramaCPS", chapters: "capítulos completos", languages: "idiomas", compliance: "guia de conformidade", knowledge: "BASE DE CONHECIMENTO DRAMACPS", guideTitle: "Tutorial de divulgação e regras importantes", guideIntro: "Leia na ordem. Percentuais, janela de atribuição, países e políticas seguem a oferta mais recente, o contrato e a validação final do anunciante.", supportTitle: "Precisa de ajuda?", supportText: "Envie o link completo, aparelho, país, horário do clique, capturas ou gravação de tela para uma verificação precisa.", noResults: "Nenhum conteúdo encontrado", tryAnother: "Tente outra palavra ou limpe a busca para ver todos os capítulos.", important: "Importante", lastUpdated: "Atualizado em agosto de 2026", footer: "Este guia é destinado ao treinamento de parceiros. As regras finais seguem o painel, o contrato e a validação do anunciante.", backTop: "Voltar ao topo",
    },
    sections: [
      { id:"overview", eyebrow:"01 · PLATAFORMA E CONTA", title:"O que é o DramaCPS e como começar?", paragraphs:["DramaCPS é uma plataforma de afiliados CPS para aplicativos de minidramas. O parceiro obtém materiais aprovados e links exclusivos em dramacps.com e pode divulgar no TikTok, YouTube Shorts, Facebook Reels, Instagram Reels, sites próprios, comunidades de conteúdo e mídia paga permitida.","Quando o usuário instala pelo seu link e faz uma compra válida no aplicativo — assinatura, moedas, episódios, série completa ou outro evento indicado — você pode receber comissão conforme a oferta. Clique ou instalação, sozinhos, normalmente não geram comissão; a compra ainda precisa ser aprovada pelo anunciante.","Após o cadastro, complete perfil, e-mail e dados de pagamento. Antes de divulgar, confirme se a oferta está ativa, países, percentual, janela de atribuição, regras de material, pagamento mínimo e situação da liquidação. As condições variam e podem mudar."], bullets:["Use dados reais e corretos no cadastro e no pagamento.","Confira novamente a oferta antes de cada campanha.","Dados bancários incorretos podem impedir ou atrasar o pagamento.","Nunca compartilhe senha, código do e-mail ou credenciais financeiras."], notice:{tone:"info",text:"Algumas ofertas podem apresentar participação aproximada de 45%–80%, mas isso não é uma taxa fixa geral. Vale o percentual exibido na oferta do painel."} },
      { id:"materials-links", eyebrow:"02 · MATERIAIS E LINKS", title:"Como obter materiais e escolher o link certo?", paragraphs:["Abra a Biblioteca de Materiais. Conforme a oferta, haverá vídeos, título, capa, sinopse, plataforma, App Home URL, Drama URL e outros dados promocionais.","O App Home URL normalmente abre a página inicial do aplicativo e serve para promover a plataforma. O Drama URL abre a série específica e deve ser preferido quando o vídeo trata daquela série. Vídeo, nome e destino devem corresponder.","Sem o app instalado, o usuário normalmente vai para Google Play ou Apple App Store; com o app, o link tenta abri-lo. Sistema, navegador interno, país, disponibilidade da loja, disponibilidade da série e deep link podem alterar o resultado."], bullets:["Entre na sua própria conta DramaCPS.","Use o link exclusivo gerado para sua conta; link de outro parceiro credita a outra pessoa.","Confira se vídeo e título correspondem ao Drama URL.","Em encurtadores ou páginas intermediárias, confirme que todos os parâmetros permanecem no redirecionamento."], notice:{tone:"danger",text:"Não edite, remova ou reconstrua os parâmetros. Sem eles, a atribuição pode falhar e a comissão normalmente não pode ser lançada manualmente."} },
      { id:"creative-whitelist", eyebrow:"03 · CRIATIVO E LISTA BRANCA", title:"Todo vídeo precisa de uma edição relevante", paragraphs:["Os vídeos podem ser usados em divulgação permitida, mas precisam de edição substancial: escolha outros trechos, mude início e fim, adicione legendas, comentário ou nova dublagem, altere ritmo e formato, reorganize cenas, inclua transições, gancho e chamada verdadeira.","Nunca baixe e publique o arquivo bruto sem alteração. Apenas colocar marca d'água normalmente não basta. Conteúdo idêntico pode perder alcance, acionar revisão de direitos autorais ou gerar advertência.","Antes de publicar no TikTok, YouTube, Facebook ou Instagram, envie a URL completa do perfil ou página. A lista branca costuma levar cerca de três dias úteis. Ao trocar de conta, envie novamente; perfil privado ou somente apelido pode não ser verificável."], bullets:["Envie links acessíveis de TikTok, canal do YouTube, Facebook Page ou Instagram.","A lista branca não elimina a exigência de edição.","Ela não garante aprovação permanente de toda publicação.","Guarde originais, projeto de edição, vídeo final e URL publicada."], notice:{tone:"warning",text:"Edite antes de publicar. Repostar o arquivo original é uma das causas mais comuns de conteúdo duplicado e reclamação de direitos autorais."} },
      { id:"publishing", eyebrow:"04 · PUBLICAÇÃO E CONVERSÃO", title:"Como publicar e estruturar um vídeo que converte?", paragraphs:["Coloque o link em locais permitidos: bio do TikTok, descrição ou canal do YouTube, botão ou comentário da Facebook Page, bio ou Story do Instagram, site próprio ou landing page permitida. Se a legenda não aceitar link clicável, direcione claramente para a bio.","Estrutura recomendada: conflito nos três primeiros segundos; trama central fácil de entender; interrupção antes da resposta para criar suspense; chamada verdadeira no fim. Não misture cenas sem relação nem direcione para outra série."], bullets:["Exemplos: “Assista à série completa”, “Clique no link da bio” ou “Baixe o app para ver o próximo episódio”.","Não diga que tudo é grátis, sem cadastro ou gratuito para sempre se isso não for verdade.","Não finja ser a conta oficial e não use celebridades, marcas ou materiais de terceiros sem autorização.","Abra o link antes de publicar e confirme app, loja ou série correta."], notice:{tone:"info",text:"Quanto maior a correspondência entre criativo, título e destino, mais natural tende a ser a conversão."} },
      { id:"commission-attribution", eyebrow:"05 · COMISSÃO E ATRIBUIÇÃO", title:"Como funcionam comissão e compras repetidas?", paragraphs:["A comissão vem normalmente de compras aprovadas: assinatura, moedas, episódios, série completa ou outro evento da oferta. Clique, instalação e pagamento são etapas diferentes; cliques ou instalações não garantem receita.","Enquanto o usuário permanecer atribuído a você, novas compras válidas normalmente também podem gerar comissão. Algumas plataformas contam desde o primeiro download ou compra válida mais recente e podem encerrar a atribuição após sete dias consecutivos sem nova compra.","DramaBox pode usar regra diferente. Pela condição atual, o usuário baixado validamente pelo seu link e atribuído pode continuar gerando comissão sem esse limite de sete dias. A oferta atual, o postback do anunciante e o painel são definitivos."], bullets:["A atribuição usa parâmetros, dados do aparelho, cliques e postbacks do anunciante/MMP.","Algumas plataformas usam o último clique válido; um link mais recente pode receber a atribuição.","Usuário antigo, já atribuído ou que não usou seu link pode não ser creditado.","Comprovante isolado ou declaração verbal normalmente não permite lançar comissão manualmente."], notice:{tone:"warning",text:"Comissão estimada não é comissão final. Apenas pagamentos válidos confirmados pelo anunciante entram na liquidação."} },
      { id:"attribution-failures", eyebrow:"06 · FALHAS DE ATRIBUIÇÃO", title:"O que pode causar falha de atribuição?", bullets:["O usuário não entrou pelo seu link ou parâmetros se perderam ao copiar, encurtar ou redirecionar.","Depois, ele clicou no link de outro parceiro e a plataforma aplicou último clique.","O app já estava instalado, o usuário já estava atribuído ou já era cliente.","Troca de aparelho, navegação privada, rastreamento limitado, bloqueador ou sistema impediram a medição.","O intervalo entre clique, instalação e compra ultrapassou a janela da oferta.","O usuário pesquisou e instalou diretamente pela loja.","Uma reinstalação não criou nova atribuição válida.","App indisponível no país, série removida ou deep link incorreto.","Reembolso, chargeback, cancelamento ou classificação inválida pelo anunciante.","Proxy, emulador, fazenda de aparelhos, ambiente anormal ou contas relacionadas.","Postback atrasado, falhou ou ainda não sincronizou."], notice:{tone:"info",text:"Para investigar, envie link completo, plataforma e série, horário e fuso, sistema, país, gravação do redirecionamento, página final e erro."} },
      { id:"traffic-ads", eyebrow:"07 · TRÁFEGO E ANÚNCIOS", title:"Qual tráfego é aceito e o que é proibido?", paragraphs:["Em geral: TikTok, YouTube Shorts, Facebook Reels, Instagram Reels, sites próprios, comunidades, Meta Ads, TikTok Ads, Google Ads, mídia in-app permitida e outros canais reais e legais. Normalmente não há bloqueio geral por país, mas a loja e a oferta mandam.","Tráfego incentivado e cashback não são aceitos. No momento, o parceiro também não conecta seu próprio MMP diretamente a determinadas plataformas; os dados dependem principalmente do DramaCPS e do anunciante."], bullets:["Proibido pagar, devolver dinheiro, dar pontos, vale-presente, recompensa virtual ou tarefa para download/compra.","Proibidas compras próprias, pagamentos falsos, aparelhos em massa, emuladores, fazendas, robôs, scripts e cliques automáticos.","Proibido falsificar usuários, pedidos, comprovantes ou origem; não roube conta, conteúdo ou link de outro parceiro.","Proibidos botões enganosos, alerta falso do sistema, clique forçado, redirecionamento automático, pop-up malicioso ou ocultação da origem.","O anúncio deve corresponder ao app e à série e não prometer benefício inexistente.","Guarde conta de anúncio, criativos, dados e landing page; não use marca ou se passe por oficial sem autorização."], notice:{tone:"danger",text:"Tráfego anormal pode causar retenção para análise, recusa do pagamento, estorno da comissão ou suspensão da conta."} },
      { id:"data-settlement", eyebrow:"08 · DADOS E PAGAMENTO", title:"Por que os dados atrasam e quando a comissão é paga?", paragraphs:["Dados podem atrasar por postback, AppsFlyer/MMP, fuso horário, confirmação do pagamento, revisão do pedido, reembolso, chargeback, análise de tráfego e sincronização. O painel pode mostrar cliques, instalações, pagantes, receita, estimativa, pendente, confirmado e inválido.","DramaCPS normalmente concilia o mês anterior no mês seguinte. O anunciante valida instalações, compras, devoluções e qualidade. O processamento costuma começar depois do dia 7 do mês seguinte, mas o dia 7 não é data garantida de recebimento.","O prazo depende da conciliação e do pagamento do anunciante, revisão, dados de recebimento, mínimo, meio de pagamento, feriados e bancos. Se o anunciante/plataforma ainda não pagou o DramaCPS, o pagamento correspondente pode ser adiado ou não realizado até a condição ser atendida."], bullets:["Reembolso, chargeback, estorno de menor, pagamento falho e fraude podem cancelar comissão.","Pedido, aparelho ou tráfego inválido não entra na liquidação.","Quantidade de cliques não equivale à receita; vale o pagamento válido confirmado.","A estimativa pode subir, cair ou ser desduplicada."], notice:{tone:"warning",text:"A liquidação segue contrato, painel, validação e condição real de pagamento. “Processar depois do dia 7” não significa pagamento fixo nesse dia."} },
      { id:"checklist-security", eyebrow:"09 · CHECKLIST E SEGURANÇA", title:"O que verificar antes de divulgar?", bullets:["Use sua conta e seu link; escolha plataforma e série corretas.","Faça vídeo, título e Drama URL corresponderem e conclua uma edição relevante.","Confira percentual, janela, países, regras de material e pagamento.","Quando possível, teste Android e iOS e confirme instalação e série no país-alvo.","Confira todos os parâmetros; não teste comissão com compra própria, instalação falsa ou muitos cliques.","Revise legenda, título e chamada e retire promessa como lucro garantido ou tudo grátis.","Guarde material, projeto, URLs e registros de mídia paga.","Acesse apenas dramacps.com, evite phishing e use senha forte e exclusiva.","Não compre conta desconhecida nem compartilhe conta; revise os dados de pagamento.","Em caso de login, link ou pagamento estranho, contate support@dramacps.com."], notice:{tone:"info",text:"Um teste correto só verifica o destino; não exige compra nem volume de cliques. Nunca envie publicamente senhas ou códigos bancários."} },
      { id:"faq", eyebrow:"10 · DÚVIDAS E REGRAS", title:"Perguntas frequentes e regras essenciais", bullets:["Clique ou instalação geram comissão? Normalmente não; CPS depende de pagamento aprovado.","Compras repetidas geram? Em atribuição válida e confirmadas, normalmente sim; veja a oferta.","Posso repostar o vídeo bruto? Não; edição substancial é obrigatória.","Posso usar várias redes? Sim, cumprindo DramaCPS e a política de cada rede.","Criador novo e com poucos seguidores pode entrar? Sim; grande audiência não é exigida.","Há limite de país? Geralmente não há bloqueio único, mas app e oferta controlam.","Usuário pagou e não apareceu? Pode ser atraso, atribuição, usuário antigo, parâmetro perdido, outro parceiro, reembolso ou postback.","Por que a comissão caiu? Reembolso, chargeback, desduplicação, pedido inválido ou revisão.","Posso comprar mídia? Sim, de forma permitida; incentivo, cashback, fraude, bots e fazendas são proibidos.","Como pedir ajuda? Envie provas completas a support@dramacps.com; apelido ou imagem parcial não basta."], paragraphs:["Regras principais: use seu link completo; para série específica use o Drama URL correto; edite todo material; envie as contas para lista branca; nunca use incentivo, cashback, pagamento falso ou manipulação; e lembre que estimativa não é liquidação final.","DramaCPS pode revisar dados e comissão conforme anunciante, plataforma, atribuição e qualidade. Percentuais, países, materiais, janelas e pagamento podem mudar; confira a oferta antes de cada campanha."], notice:{tone:"danger",text:"Sem fraude, sem quebrar parâmetros e sem repostar material bruto: as três regras básicas para proteger conta, atribuição e comissão."} },
    ],
  },
  es: {
    htmlLang: "es",
    label: "Español",
    shortLabel: "ES",
    ui: {
      search:"Buscar en la guía…", menu:"Abrir índice", close:"Cerrar índice", contents:"Índice de la guía", official:"MANUAL OFICIAL PARA CREADORES", heroLine1:"Del contenido a la comisión,", heroLine2:"cada paso explicado.", heroText:"El manual completo para socios de DramaCPS: materiales, enlaces, atribución, tráfico permitido, informes y liquidación de comisiones.", start:"Empezar a leer", visit:"Abrir DramaCPS", chapters:"capítulos completos", languages:"idiomas", compliance:"guía de cumplimiento", knowledge:"BASE DE CONOCIMIENTO DRAMACPS", guideTitle:"Tutorial de promoción y reglas importantes", guideIntro:"Lee en orden. Las tasas, ventanas, países y políticas se rigen por la oferta vigente, el acuerdo y la validación final del anunciante.", supportTitle:"¿Necesitas ayuda?", supportText:"Envía el enlace completo, dispositivo, país, hora del clic, capturas o grabación para revisar el caso.", noResults:"No se encontró contenido", tryAnother:"Prueba otra palabra o limpia la búsqueda para ver todos los capítulos.", important:"Importante", lastUpdated:"Actualizado en agosto de 2026", footer:"Esta guía es para formación de socios. Las reglas finales se rigen por el panel, el acuerdo y la validación del anunciante.", backTop:"Volver arriba",
    },
    sections: [
      { id:"overview", eyebrow:"01 · PLATAFORMA Y CUENTA", title:"¿Qué es DramaCPS y cómo empiezo?", paragraphs:["DramaCPS es una plataforma de afiliación CPS para aplicaciones de minidramas. Los socios obtienen materiales aprobados y enlaces únicos en dramacps.com y pueden promocionar en TikTok, YouTube Shorts, Facebook Reels, Instagram Reels, sitios propios, comunidades y medios pagados permitidos.","Cuando un usuario instala mediante tu enlace y realiza una compra válida —suscripción, monedas, episodios, serie completa u otro evento de la oferta— puedes recibir comisión según sus condiciones. El clic o la instalación por sí solos normalmente no generan comisión; la compra debe ser validada.","Tras registrarte, completa perfil, correo y datos de cobro. Antes de promocionar, confirma que la oferta esté activa y revisa países, porcentaje, ventana de atribución, reglas creativas, mínimo y estado de liquidación. Las condiciones cambian según plataforma."], bullets:["Usa datos reales y correctos de registro y cobro.","Revisa de nuevo la oferta antes de cada campaña.","Los datos de pago incorrectos pueden retrasar o impedir el cobro.","Nunca compartas contraseña, código de correo o credenciales financieras."], notice:{tone:"info",text:"Algunas ofertas pueden mostrar una participación aproximada del 45%–80%, pero no es una tasa fija general. Rige el porcentaje mostrado en el panel."} },
      { id:"materials-links", eyebrow:"02 · MATERIALES Y ENLACES", title:"¿Cómo obtengo materiales y elijo el enlace correcto?", paragraphs:["Abre la Biblioteca de Materiales. Según la oferta, puede incluir vídeos, título, portada, sinopsis, plataforma, App Home URL, Drama URL y otros datos.","App Home URL suele abrir el inicio de la app y sirve para promocionar la plataforma. Drama URL abre una serie específica y debe preferirse cuando el vídeo corresponde a ella. Vídeo, título y destino deben coincidir.","Si la app no está instalada, el usuario suele ir a Google Play o Apple App Store; si ya está instalada, el enlace intenta abrirla. Sistema, navegador interno, país, disponibilidad y configuración del deep link pueden afectar el resultado."], bullets:["Entra en tu propia cuenta DramaCPS.","Usa el enlace único de tu cuenta; el enlace de otra persona le acredita la comisión.","Comprueba que vídeo y título coinciden con el Drama URL.","Con acortadores o páginas intermedias, confirma que todos los parámetros sobreviven al redireccionamiento."], notice:{tone:"danger",text:"No edites, borres ni reconstruyas los parámetros. Sin ellos puede fallar la atribución y normalmente no se puede añadir la comisión manualmente."} },
      { id:"creative-whitelist", eyebrow:"03 · CREATIVO Y LISTA BLANCA", title:"Cada vídeo necesita una edición sustancial", paragraphs:["Los vídeos pueden usarse para promoción permitida, pero deben reeditarse de forma visible: selecciona otros fragmentos, cambia inicio y final, añade subtítulos, comentarios o nueva voz, modifica ritmo o formato, reorganiza escenas, añade transiciones, gancho y llamada real.","Nunca descargues y publiques el archivo original sin cambios. Una simple marca de agua normalmente no basta. El contenido idéntico puede perder alcance, activar revisión de copyright o causar advertencias.","Antes de publicar en TikTok, YouTube, Facebook o Instagram, envía la URL completa del perfil o página. La lista blanca suele tardar unos tres días hábiles. Al cambiar de cuenta, envíala otra vez; perfiles privados o solo apodos pueden no ser verificables."], bullets:["Envía enlaces accesibles de TikTok, canal de YouTube, Facebook Page o Instagram.","La lista blanca no elimina la obligación de editar.","Tampoco garantiza la aprobación permanente de todo contenido.","Guarda originales, proyecto de edición, vídeo final y URL publicada."], notice:{tone:"warning",text:"Edita antes de publicar. Repostear el archivo original es una causa frecuente de contenido duplicado y problemas de copyright."} },
      { id:"publishing", eyebrow:"04 · PUBLICACIÓN Y CONVERSIÓN", title:"¿Cómo publico y estructuro un vídeo que convierta?", paragraphs:["Pon el enlace en lugares permitidos: bio de TikTok, descripción o canal de YouTube, botón o comentario de Facebook Page, bio o Story de Instagram, sitio propio o landing permitida. Si no hay enlace clicable en el texto, dirige claramente a la bio.","Estructura recomendada: conflicto en los primeros tres segundos; trama central fácil de seguir; corte antes de la respuesta para crear suspense; llamada veraz al final. No mezcles escenas sin relación ni envíes a otra serie."], bullets:["Ejemplos: “Mira la serie completa”, “Haz clic en el enlace de la bio” o “Descarga la app para ver el siguiente episodio”.","No digas que todo es gratis, sin registro o gratis para siempre salvo que sea verdad.","No suplantes la cuenta oficial ni uses celebridades, marcas o material de terceros sin autorización.","Abre el enlace antes de publicar y verifica app, tienda o serie correcta."], notice:{tone:"info",text:"Cuanto mejor coincidan creativo, título y destino, más natural será la conversión."} },
      { id:"commission-attribution", eyebrow:"05 · COMISIÓN Y ATRIBUCIÓN", title:"¿Cómo se acreditan la comisión y las compras repetidas?", paragraphs:["La comisión suele proceder de compras aprobadas: suscripción, monedas, episodios, serie completa u otro evento de la oferta. Clic, instalación y pago son etapas distintas; clics o instalaciones no garantizan ingresos.","Mientras el usuario siga atribuido a ti, nuevas compras válidas normalmente también pueden generar comisión. Algunas plataformas cuentan desde la primera descarga o última compra válida y pueden terminar la atribución tras siete días consecutivos sin otra compra.","DramaBox puede usar otra regla. Según la condición actual, un usuario descargado válidamente por tu enlace y atribuido puede seguir generando comisión sin ese límite de siete días. La oferta vigente, el postback y el panel son definitivos."], bullets:["La atribución suele usar parámetros, datos del dispositivo, clics y postbacks del anunciante/MMP.","Algunas plataformas usan el último clic válido; un enlace más reciente puede recibir el crédito.","Un usuario existente, ya atribuido o que no usó tu enlace puede no acreditarse.","Un recibo aislado o declaración verbal normalmente no permite añadir comisión manualmente."], notice:{tone:"warning",text:"La comisión estimada no es la comisión final pagadera. Solo pagos válidos confirmados entran en liquidación."} },
      { id:"attribution-failures", eyebrow:"06 · FALLOS DE ATRIBUCIÓN", title:"¿Qué puede causar un fallo de atribución?", bullets:["El usuario no entró por tu enlace o se perdieron parámetros al copiar, acortar o redirigir.","Después hizo clic en otro enlace y la plataforma aplicó el último clic.","La app ya estaba instalada, el usuario ya estaba asignado o ya era cliente.","Cambio de dispositivo, navegación privada, seguimiento limitado, bloqueador o sistema impidieron medir.","Pasó demasiado tiempo entre clic, instalación y compra y venció la ventana.","El usuario buscó e instaló directamente desde la tienda.","Una reinstalación no creó nueva atribución válida.","App no disponible en el país, serie retirada o deep link incorrecto.","Reembolso, contracargo, cancelación o clasificación inválida.","Proxy, emulador, granja de dispositivos, entorno anómalo o cuentas relacionadas.","Postback retrasado, fallido o aún sin sincronizar."], notice:{tone:"info",text:"Para investigar, envía enlace completo, plataforma y serie, hora y zona, sistema, país, grabación del redireccionamiento, página final y error."} },
      { id:"traffic-ads", eyebrow:"07 · TRÁFICO Y ANUNCIOS", title:"¿Qué tráfico se acepta y qué está prohibido?", paragraphs:["En general se aceptan TikTok, YouTube Shorts, Facebook Reels, Instagram Reels, sitios propios, comunidades, Meta Ads, TikTok Ads, Google Ads, medios in-app permitidos y otros canales reales y legales. Normalmente no hay bloqueo general por país, pero mandan la tienda y la oferta.","No se acepta tráfico incentivado ni cashback. Actualmente el socio tampoco conecta su MMP directamente a ciertas plataformas; los datos dependen principalmente de DramaCPS y del anunciante."], bullets:["Prohibido pagar, devolver dinero, dar puntos, tarjetas, recompensas virtuales o tareas por descargar/comprar.","Prohibidas compras propias, pagos falsos, dispositivos masivos, emuladores, granjas, bots, scripts y clics automáticos.","Prohibido falsificar usuarios, pedidos, recibos u origen; no robes cuentas, contenido o enlaces.","Prohibidos botones engañosos, alertas falsas, clic forzado, redirección automática, pop-ups maliciosos u ocultar el origen.","El anuncio debe coincidir con app y serie y no prometer beneficios inexistentes.","Guarda cuenta, creativos, datos y landing; no uses marca ni suplantes la cuenta oficial sin autorización."], notice:{tone:"danger",text:"El tráfico anómalo puede causar retención, rechazo del pago, reversión de comisión o suspensión de la cuenta."} },
      { id:"data-settlement", eyebrow:"08 · DATOS Y PAGO", title:"¿Por qué se retrasan los datos y cuándo se paga?", paragraphs:["Los datos pueden retrasarse por postback, AppsFlyer/MMP, zonas horarias, confirmación, revisión, reembolso, contracargo, análisis de tráfico o sincronización. El panel puede mostrar clics, instalaciones, pagadores, ingresos, estimado, pendiente, confirmado e inválido.","DramaCPS normalmente concilia el mes anterior durante el mes siguiente. El anunciante valida instalaciones, compras, devoluciones y calidad. El procesamiento suele comenzar después del día 7 del mes siguiente, pero el día 7 no es una fecha garantizada de cobro.","El plazo depende de conciliación y pago del anunciante, revisión, datos de cobro, mínimo, método, festivos y bancos. Si el anunciante/plataforma aún no ha pagado a DramaCPS, el pago correspondiente puede retrasarse o no pagarse hasta cumplirse la condición."], bullets:["Reembolso, contracargo, reversión de pago de menor, pago fallido o fraude pueden cancelar comisión.","Pedido, dispositivo o tráfico inválido no entra en liquidación.","El número de clics no equivale a ingresos; rige el pago válido confirmado.","La estimación puede subir, bajar o deduplicarse."], notice:{tone:"warning",text:"La liquidación sigue el acuerdo, panel, validación y condiciones reales. “Procesar después del día 7” no significa pago fijo ese día."} },
      { id:"checklist-security", eyebrow:"09 · CHECKLIST Y SEGURIDAD", title:"¿Qué debo comprobar antes de promocionar?", bullets:["Usa tu cuenta y enlace; elige plataforma y serie correctas.","Haz coincidir vídeo, título y Drama URL y completa una edición sustancial.","Revisa porcentaje, ventana, países, reglas creativas y pago.","Cuando sea posible, prueba Android e iOS y confirma instalación y serie en el país objetivo.","Comprueba parámetros; no pruebes comisión con compras propias, instalaciones falsas o muchos clics.","Revisa texto, título y llamada y elimina promesas de ganancia segura o acceso totalmente gratis.","Guarda materiales, proyecto, URLs y registros de anuncios.","Accede solo a dramacps.com, evita phishing y usa contraseña fuerte y única.","No compres cuentas desconocidas ni compartas una cuenta; revisa datos de cobro.","Ante login, enlace o cobro extraño, contacta support@dramacps.com."], notice:{tone:"info",text:"Una prueba correcta solo verifica el destino; no requiere compra ni volumen de clics. Nunca envíes públicamente contraseñas o códigos bancarios."} },
      { id:"faq", eyebrow:"10 · PREGUNTAS Y REGLAS", title:"Preguntas frecuentes y reglas esenciales", bullets:["¿Clic o instalación generan comisión? Normalmente no; CPS depende de pago aprobado.","¿Compras repetidas generan? Con atribución válida y confirmadas, normalmente sí; mira la oferta.","¿Puedo repostear el vídeo original? No; la edición sustancial es obligatoria.","¿Puedo usar varias redes? Sí, cumpliendo DramaCPS y cada plataforma.","¿Puede entrar un creador nuevo con pocos seguidores? Sí; no se exige gran audiencia.","¿Hay límite de país? Generalmente no hay uno único, pero app y oferta controlan.","El usuario pagó y no aparece: puede ser retraso, atribución, usuario antiguo, parámetros, otro socio, reembolso o postback.","¿Por qué bajó la comisión? Reembolso, contracargo, deduplicación, pedido inválido o revisión.","¿Puedo comprar tráfico? Sí, si es permitido; incentivos, cashback, fraude, bots y granjas están prohibidos.","¿Cómo pido ayuda? Envía pruebas completas a support@dramacps.com; apodo o captura parcial no bastan."], paragraphs:["Reglas principales: usa tu enlace completo; para una serie usa su Drama URL; edita todo material; envía cuentas a lista blanca; nunca uses incentivos, cashback, pagos falsos o manipulación; y recuerda que la estimación no es la liquidación final.","DramaCPS puede revisar datos y comisión según anunciante, plataforma, atribución y calidad. Porcentajes, países, materiales, ventanas y pagos pueden cambiar; revisa la oferta antes de cada campaña."], notice:{tone:"danger",text:"Sin fraude, sin romper parámetros y sin repostear material original: las tres reglas básicas para proteger cuenta, atribución y comisión."} },
    ],
  },
};

export const languageOrder: Language[] = ["zh", "en", "pt", "es"];
