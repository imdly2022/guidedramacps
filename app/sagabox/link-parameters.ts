import type { Language } from "../content";

type Parameter = { name: string; alias?: string; description: string };
type ParameterGuide = { title: string; intro: string; aliasLabel: string; groups: { title: string; items: Parameter[] }[]; forwarding: string; boundary: string };
type LinkRuleGuide = { title: string; intro: string; items: Array<{ question: string; answer: string }>; note: string };

export const linkRuleGuides: Record<Language, LinkRuleGuide> = {
  zh: {
    title: "SagaBox 链接如何选择和使用？",
    intro: "SagaBox 的每一部短剧都可以推广。短剧链接既负责把用户带到对应内容，也用于建立推广归因。",
    items: [
      { question: "推广某一部短剧时应该使用哪个链接？", answer: "使用素材库中该短剧对应的 SagaBox 短剧链接。视频内容与链接中的短剧保持一致，用户点击后更容易继续观看。" },
      { question: "获取链接后还需要做其他设置吗？", answer: "普通推广不需要。复制素材库中的专属链接，确认跳转正常后，即可直接放到视频、主页、广告或落地页中使用。" },
      { question: "用户点击短剧链接后会发生什么？", answer: "SagaBox 是网页型 Offer，用户会直接进入链接对应的短剧网页，不需要先下载 App。进入后可以继续浏览 SagaBox 当前提供的其他短剧，并不只能观看最初链接对应的那一部剧。" },
      { question: "用户购买其他短剧，我还能获得佣金吗？", answer: "可以。用户通过你的链接成功归因后，在有效归因范围内产生的合格充值或购买可以计算佣金，不限于最初推广链接对应的短剧。" },
      { question: "是不是所有 SagaBox 短剧链接都可以推广？", answer: "是。素材库中提供的 SagaBox 短剧链接都可以推广；推广具体内容时，优先选择与视频内容相匹配的短剧链接。" },
    ],
    note: "佣金成立的前提是用户成功归因、订单有效并通过最终核算。SagaBox 采用订单级 30 天最近一次有效点击归因；如果用户之后点击了其他推广者的链接，后续订单可能归属于最近一次有效点击。退款、拒付或无效订单不产生佣金。",
  },
  en: {
    title: "How should SagaBox links be selected and used?",
    intro: "Every SagaBox drama available in the Material Library can be promoted. A drama link opens the relevant content and establishes affiliate attribution.",
    items: [
      { question: "Which link should I use for a specific drama?", answer: "Use that drama's corresponding SagaBox link from the Material Library. Matching the video to the linked drama gives viewers a more consistent path to continue watching." },
      { question: "Is additional setup required after I get the link?", answer: "No additional setup is required for ordinary promotion. Copy your dedicated link, verify the redirect, and use it in your video, profile, advertisement or landing page." },
      { question: "What happens after a user clicks a drama link?", answer: "SagaBox is a web Offer. The user opens the linked drama on the web directly, with no app download required. From there, the user may browse other dramas currently available on SagaBox and is not restricted to the original title." },
      { question: "Do I earn commission if the user purchases another drama?", answer: "Yes. Once the user is successfully attributed through your link, eligible recharges or purchases made within the valid attribution scope can earn commission, even when they relate to a different drama." },
      { question: "Can every SagaBox drama link be promoted?", answer: "Yes. SagaBox drama links supplied in the Material Library may be promoted. When promoting a particular title, choose the link that matches the video content." },
    ],
    note: "Commission requires successful attribution, a valid order and final approval. SagaBox uses order-level 30-day last-valid-click attribution. If the user later clicks another publisher's link, subsequent orders may be credited to that most recent valid click. Refunded, charged-back or invalid orders do not earn commission.",
  },
  pt: {
    title: "Como escolher e usar os links da SagaBox?",
    intro: "Todas as séries da SagaBox disponíveis na Biblioteca de Materiais podem ser promovidas. O link abre o conteúdo correspondente e estabelece a atribuição do afiliado.",
    items: [
      { question: "Qual link devo usar para uma série específica?", answer: "Use o link da SagaBox correspondente à série na Biblioteca de Materiais. Mantenha o vídeo e o drama do link alinhados." },
      { question: "Preciso configurar algo depois de obter o link?", answer: "Não para uma divulgação normal. Copie seu link exclusivo, teste o redirecionamento e use-o no vídeo, perfil, anúncio ou landing page." },
      { question: "O que acontece depois que o usuário clica?", answer: "A SagaBox é uma oferta web. O usuário abre diretamente a página da série, sem instalar aplicativo. Depois, poderá navegar por outras séries disponíveis e não ficará limitado ao título original." },
      { question: "Recebo comissão se o usuário comprar outra série?", answer: "Sim. Após a atribuição válida pelo seu link, recargas ou compras elegíveis dentro do período de atribuição podem gerar comissão, mesmo para outra série." },
      { question: "Todos os links de séries da SagaBox podem ser promovidos?", answer: "Sim. Os links da Biblioteca de Materiais podem ser usados. Para uma série específica, escolha o link correspondente ao vídeo." },
    ],
    note: "A comissão exige atribuição válida, pedido válido e aprovação final. A SagaBox usa atribuição por pedido pelo último clique válido em 30 dias. Se o usuário clicar depois no link de outro Publisher, pedidos posteriores podem ser atribuídos a esse clique. Reembolsos, chargebacks e pedidos inválidos não geram comissão.",
  },
  es: {
    title: "¿Cómo elegir y utilizar los enlaces de SagaBox?",
    intro: "Todas las series de SagaBox disponibles en la Biblioteca de materiales pueden promocionarse. El enlace abre el contenido correspondiente y establece la atribución del afiliado.",
    items: [
      { question: "¿Qué enlace debo usar para una serie concreta?", answer: "Utiliza el enlace de SagaBox correspondiente a esa serie en la Biblioteca de materiales. Haz coincidir el vídeo con la serie enlazada." },
      { question: "¿Debo configurar algo después de obtener el enlace?", answer: "No para una promoción normal. Copia tu enlace exclusivo, comprueba la redirección y úsalo en el vídeo, perfil, anuncio o landing page." },
      { question: "¿Qué ocurre después de que el usuario hace clic?", answer: "SagaBox es una oferta web. El usuario abre directamente la página de la serie, sin descargar una aplicación. Después podrá explorar otras series disponibles y no estará limitado al título original." },
      { question: "¿Recibo comisión si el usuario compra otra serie?", answer: "Sí. Cuando el usuario queda atribuido correctamente mediante tu enlace, las recargas o compras elegibles dentro del periodo de atribución pueden generar comisión aunque correspondan a otra serie." },
      { question: "¿Se pueden promocionar todos los enlaces de SagaBox?", answer: "Sí. Pueden promocionarse los enlaces de la Biblioteca de materiales. Para una serie concreta, utiliza el enlace que coincida con el vídeo." },
    ],
    note: "La comisión exige atribución correcta, una orden válida y aprobación final. SagaBox usa atribución por pedido al último clic válido dentro de 30 días. Si el usuario hace clic después en el enlace de otro Publisher, las órdenes posteriores pueden atribuirse a ese clic. Los reembolsos, contracargos y pedidos inválidos no generan comisión.",
  },
};

export const linkParameterGuides: Record<Language, ParameterGuide> = {
  zh: {
    title: "SagaBox 支持的链接参数列表",
    intro: "SagaBox 已确认支持以下 12 个参数，另有 3 个兼容别名。用户通过推广链接访问时，系统会自动捕获并绑定链接中携带的这些参数。",
    aliasLabel: "兼容别名",
    groups: [
      { title: "归因与 Publisher", items: [
        { name: "click_id", alias: "clickid", description: "主点击 ID，用于关联点击与转化。" },
        { name: "publisher_id", alias: "publisherid", description: "Publisher / 推广者 ID。" },
        { name: "sub_id", alias: "subid", description: "子渠道或自定义追踪标识。" },
        { name: "source", description: "流量来源。" },
      ] },
      { title: "广告平台 Click ID", items: [
        { name: "fbclid", description: "Facebook / Meta 点击 ID，使用 {fbclid} 回传。" },
        { name: "ttclid", description: "TikTok 点击 ID，使用 {ttclid} 回传。" },
        { name: "gclid", description: "Google 点击 ID，使用 {gclid} 回传。" },
        { name: "gbraid", description: "Google GBRAID，使用 {gbraid} 回传。" },
        { name: "wbraid", description: "Google WBRAID，使用 {wbraid} 回传。" },
      ] },
      { title: "广告活动、素材与链接", items: [
        { name: "campaign_id", description: "广告活动 ID。" },
        { name: "creative_id", description: "广告素材 ID。" },
        { name: "link_id", description: "推广 / 跟踪链接 ID。" },
      ] },
    ],
    forwarding: "发生注册（registration）、购买（purchase）或退款（refund）转化时，SagaBox 会把所有已捕获的参数作为独立字段，随 Postback payload 回传给 DramaCPS。",
    boundary: "以上说明的是 SagaBox → DramaCPS 的参数捕获和回传能力，不代表每次点击都会携带全部参数。DramaCPS → 你的接收端仍按下文的转发变量、事件和状态规则配置；不要仅凭此说明新增 event=refund 筛选。素材库短链已有的 Publisher 和链接归属信息请保留，不要随意覆盖。",
  },
  en: {
    title: "Supported SagaBox link parameters",
    intro: "SagaBox confirms support for the following 12 parameters plus 3 compatible aliases. When a user visits through a promotional link, the system automatically captures and binds these parameters when present.",
    aliasLabel: "Alias",
    groups: [
      { title: "Attribution and Publishers", items: [
        { name: "click_id", alias: "clickid", description: "Primary click identifier linking a click to its conversion." },
        { name: "publisher_id", alias: "publisherid", description: "Publisher identifier." },
        { name: "sub_id", alias: "subid", description: "Sub-channel or custom tracking identifier." },
        { name: "source", description: "Traffic source." },
      ] },
      { title: "Platform Click IDs", items: [
        { name: "fbclid", description: "Facebook / Meta Click ID; forward with {fbclid}." },
        { name: "ttclid", description: "TikTok Click ID; forward with {ttclid}." },
        { name: "gclid", description: "Google Click ID; forward with {gclid}." },
        { name: "gbraid", description: "Google GBRAID; forward with {gbraid}." },
        { name: "wbraid", description: "Google WBRAID; forward with {wbraid}." },
      ] },
      { title: "Campaign, creative and link", items: [
        { name: "campaign_id", description: "Advertising campaign identifier." },
        { name: "creative_id", description: "Ad creative identifier." },
        { name: "link_id", description: "Promotion / tracking link identifier." },
      ] },
    ],
    forwarding: "When a registration, purchase or refund conversion occurs, SagaBox passes all captured parameters back to DramaCPS as dedicated fields in the Postback payload.",
    boundary: "This describes SagaBox → DramaCPS capture and reporting; not every click necessarily includes every parameter. Configure DramaCPS → your receiver using the downstream variables, events and status rules below. Do not infer an event=refund filter from this statement alone. Preserve the Publisher and link attribution already present in your Material Library link; do not overwrite it arbitrarily.",
  },
  pt: {
    title: "Lista de parâmetros aceitos pela SagaBox",
    intro: "A SagaBox confirmou os 12 parâmetros abaixo e 3 aliases compatíveis. Quando o usuário acessa um link promocional, o sistema captura e vincula automaticamente os parâmetros presentes.",
    aliasLabel: "Alias",
    groups: [
      { title: "Atribuição e Publishers", items: [
        { name: "click_id", alias: "clickid", description: "ID principal que relaciona clique e conversão." },
        { name: "publisher_id", alias: "publisherid", description: "Identificador do Publisher." },
        { name: "sub_id", alias: "subid", description: "Identificador de subcanal ou rastreamento personalizado." },
        { name: "source", description: "Origem do tráfego." },
      ] },
      { title: "Click IDs das plataformas", items: [
        { name: "fbclid", description: "Click ID do Facebook / Meta; encaminhe com {fbclid}." },
        { name: "ttclid", description: "Click ID do TikTok; encaminhe com {ttclid}." },
        { name: "gclid", description: "Click ID do Google; encaminhe com {gclid}." },
        { name: "gbraid", description: "Google GBRAID; encaminhe com {gbraid}." },
        { name: "wbraid", description: "Google WBRAID; encaminhe com {wbraid}." },
      ] },
      { title: "Campanha, criativo e link", items: [
        { name: "campaign_id", description: "Identificador da campanha." },
        { name: "creative_id", description: "Identificador do criativo." },
        { name: "link_id", description: "Identificador do link promocional / de rastreamento." },
      ] },
    ],
    forwarding: "Quando ocorre uma conversão de cadastro (registration), compra (purchase) ou reembolso (refund), a SagaBox envia todos os parâmetros capturados à DramaCPS como campos dedicados no payload do Postback.",
    boundary: "Isso descreve SagaBox → DramaCPS; nem todo clique inclui todos os parâmetros. Configure DramaCPS → seu receptor conforme as variáveis, eventos e regras de status abaixo. Não deduza um filtro event=refund apenas desta confirmação. Preserve a atribuição de Publisher e link já existente no link da Biblioteca de Materiais.",
  },
  es: {
    title: "Lista de parámetros admitidos por SagaBox",
    intro: "SagaBox ha confirmado los 12 parámetros siguientes y 3 alias compatibles. Cuando un usuario visita un enlace promocional, el sistema captura y vincula automáticamente los parámetros presentes.",
    aliasLabel: "Alias",
    groups: [
      { title: "Atribución y Publishers", items: [
        { name: "click_id", alias: "clickid", description: "ID principal que relaciona el clic con la conversión." },
        { name: "publisher_id", alias: "publisherid", description: "Identificador del Publisher." },
        { name: "sub_id", alias: "subid", description: "Identificador de subcanal o seguimiento personalizado." },
        { name: "source", description: "Fuente de tráfico." },
      ] },
      { title: "Click IDs de las plataformas", items: [
        { name: "fbclid", description: "Click ID de Facebook / Meta; reenvía con {fbclid}." },
        { name: "ttclid", description: "Click ID de TikTok; reenvía con {ttclid}." },
        { name: "gclid", description: "Click ID de Google; reenvía con {gclid}." },
        { name: "gbraid", description: "Google GBRAID; reenvía con {gbraid}." },
        { name: "wbraid", description: "Google WBRAID; reenvía con {wbraid}." },
      ] },
      { title: "Campaña, creativo y enlace", items: [
        { name: "campaign_id", description: "Identificador de campaña." },
        { name: "creative_id", description: "Identificador del creativo." },
        { name: "link_id", description: "Identificador del enlace promocional / de seguimiento." },
      ] },
    ],
    forwarding: "Cuando ocurre una conversión de registro (registration), compra (purchase) o reembolso (refund), SagaBox devuelve a DramaCPS todos los parámetros capturados como campos independientes del payload del Postback.",
    boundary: "Esto describe SagaBox → DramaCPS; no todos los clics incluyen todos los parámetros. Configura DramaCPS → tu receptor según las variables, eventos y reglas de estado siguientes. No deduzcas un filtro event=refund solo de esta confirmación. Conserva la atribución de Publisher y enlace existente en tu enlace de la Biblioteca de materiales.",
  },
};
