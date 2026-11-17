import type { Language } from "../content";
import { editorial } from "../editorial-content";

export type SagaLocale = {
  htmlLang: string;
  label: string;
  ui: {
    back: string;
    brandSub: string;
    kicker: string;
    title: string;
    intro: string;
    directBadge: string;
    contents: string;
    copy: string;
    copied: string;
    important: string;
    field: string;
    description: string;
    source: string;
    parameter: string;
    behavior: string;
    configuredTemplate: string;
    resolvedRequest: string;
    responseExample: string;
    support: string;
    footer: string;
  };
  nav: string[];
  sections: {
    link: { title: string; paragraphs: string[]; bullets: string[]; note: string };
    tracking: {
      title: string;
      paragraphs: string[];
      rows: Array<[string, string, string]>;
      manualTitle: string;
      manualText: string;
      note: string;
    };
    postback: {
      title: string;
      paragraphs: string[];
      labels: { publisher: string; matchField: string; matchValue: string; target: string };
      rulesTitle: string;
      rules: Array<[string, string]>;
      eventNote: string;
      variableNote: string;
    };
    delivery: { title: string; bullets: string[] };
    variables: { title: string; intro: string };
    example: {
      title: string;
      intro: string;
      receiverTitle: string;
      receiverText: string;
    };
    notes: { title: string; bullets: string[] };
  };
};

export const sagaLanguageOrder: Language[] = ["zh", "en", "pt", "es"];

export const sagaAutoLabels: Record<Language, string> = {
  zh: "自动识别",
  en: "Auto-detect",
  pt: "Detectar automaticamente",
  es: "Detectar automáticamente",
};

export const sagaLocales: Record<Language, SagaLocale> = {
  zh: {
    htmlLang: "zh-CN",
    label: "简体中文",
    ui: {
      back: "返回完整教程",
      brandSub: "SagaBox 对接指南",
      kicker: "SAGABOX · 推广链接与转化回传",
      title: "SagaBox 推广及 Postback 设置",
      intro: "从素材库获取 SagaBox 专属链接，直接用于自然流量或广告投放；需要把转化发送到自己的系统时，再按本页配置下游 Postback URL。",
      directBadge: "链接可直接推广",
      contents: "本页目录",
      copy: "复制",
      copied: "已复制",
      important: "重要说明",
      field: "变量",
      description: "说明",
      source: "广告平台",
      parameter: "自动识别参数",
      behavior: "处理方式",
      configuredTemplate: "配置的 URL 模板",
      resolvedRequest: "DramaCPS 实际发送的请求",
      responseExample: "建议响应",
      support: "提交配置或排查问题：support@dramacps.com",
      footer: "SagaBox 专用推广与 Postback 转发说明 · v1.0",
    },
    nav: ["获取推广链接", "Click ID 识别", "设置 Postback", "转发规则", "支持的变量", "请求与响应示例", "注意事项"],
    sections: {
      link: {
        title: "在素材库获取 SagaBox 推广链接",
        paragraphs: [
          "登录 DramaCPS，进入素材库并选择 SagaBox。复制系统为你生成的专属短链。链接已经包含 Publisher 与跟踪关系，不需要再通过其他页面生成。",
          "下面的链接是格式示例。实际推广时必须使用你自己在素材库中看到的 SagaBox 链接，不能复制其他 Publisher 的链接。",
        ],
        bullets: [
          "可直接放在 Facebook、TikTok、Google 广告、自有网站、落地页或社交媒体主页中推广。",
          "不要删除、改写或替换短链路径中的字符，否则可能导致链接无效或归因到错误账户。",
          "正式投放前先打开链接，确认目标页面、地区和设备跳转正常。",
        ],
        note: "示例短链可以直接访问，但它仅用于说明链接格式。请始终从你自己的 DramaCPS 素材库复制专属 SagaBox 链接。",
      },
      tracking: {
        title: "广告平台 Click ID 会自动识别",
        paragraphs: [
          "当 Facebook、TikTok 或 Google 在点击链接时附加平台 Click ID，DramaCPS 会自动识别并保存对应参数。你不需要把这些平台参数改名为 click_id。",
          "平台 Click ID 与 DramaCPS 的主 click_id 分开保存；需要回传时，请在 Postback URL 中使用各自的专用变量。",
        ],
        rows: [
          ["Facebook / Meta", "fbclid", "自动识别并保存为 {fbclid}"],
          ["TikTok", "ttclid", "自动识别并保存为 {ttclid}"],
          ["Google Ads", "gclid", "自动识别并保存为 {gclid}"],
          ["Google Ads", "gbraid", "自动识别并保存为 {gbraid}"],
          ["Google Ads", "wbraid", "自动识别并保存为 {wbraid}"],
        ],
        manualTitle: "手动指定主 click_id",
        manualText: "如果你使用自己的追踪系统，可以在 SagaBox 短链后添加 click_id，并把 YOUR_CLICK_ID 替换成你的动态点击编号。若原链接已经带有 ? 参数，应使用 &click_id=... 继续追加。",
        note: "不要把 fbclid、ttclid、gclid、gbraid 或 wbraid 填进 sub_id2/sub_id3。它们已有独立字段；自定义主点击编号使用 click_id。",
      },
      postback: {
        title: "设置下游 Postback URL",
        paragraphs: [
          "把你的 DramaCPS Publisher ID 和目标 URL 模板提交给 DramaCPS。收到 SagaBox 的有效转化后，DramaCPS 会把大括号中的变量替换为真实值，然后向最终 URL 发送 HTTP GET 请求。",
          "同一个 Publisher 可以配置多条转发规则。每条规则可选择一个入站字段并要求它与指定值精确匹配；如果多条规则同时匹配，系统会分别请求每一个目标 URL。不设置匹配字段的规则会接收该 Publisher 的全部有效转化。",
        ],
        labels: { publisher: "Publisher ID", matchField: "匹配字段", matchValue: "匹配值", target: "目标 URL" },
        rulesTitle: "事件筛选示例",
        rules: [
          ["event = purchase", "仅接收购买事件"],
          ["event = registration", "仅接收注册事件"],
          ["不设置条件", "接收所有有效事件"],
        ],
        eventNote: "当前 event 值为 registration 和 purchase。匹配采用区分大小写的精确匹配。",
        variableNote: "变量格式为 {field_name}，例如 {click_id}。变量值会自动进行 URL 百分号编码；可选字段缺失时替换为空字符串。",
      },
      delivery: {
        title: "Postback 转发规则",
        bullets: [
          "请求方法为 GET，不发送请求体。",
          "入站 publisher_id 必须与一条已启用规则中的 Publisher ID 完全一致。",
          "新的有效转化和合法的状态更新会被转发。",
          "测试请求、被拒绝的请求和完全重复的请求不会转发。",
          "目标接口返回任意 HTTP 2xx 即视为成功。其他状态码或超过 10 秒未响应会记录为失败。",
          "v1.0 暂不对失败请求进行自动重试。",
        ],
      },
      variables: { title: "Postback URL 支持的全部变量", intro: "所有变量在目标 URL 中都是可选的。仅加入你的接收接口实际需要的参数。" },
      example: {
        title: "完整请求与接收端响应示例",
        intro: "下面展示 URL 模板在一笔 purchase 转化中被替换后的结果。event_time 会进行 URL 编码。",
        receiverTitle: "接收端如何响应",
        receiverText: "你的接口应尽快返回任意 HTTP 2xx 状态。建议使用简短的纯文本或 JSON 响应，避免执行耗时操作后才返回。",
      },
      notes: {
        title: "上线前注意事项",
        bullets: [
          "生产环境的接收地址必须使用 HTTPS。",
          "下游系统应使用 transaction_id 去重，避免重复状态更新造成重复入账。",
          "可在 URL 中加入固定 Token，例如 ?token=YOUR_TOKEN&order={transaction_id}。不要把真实 Token 公开在教程、截图或聊天记录中。",
          "不要使用 sub_id2 或 sub_id3 接收广告平台 Click ID；请使用 {fbclid}、{ttclid}、{gclid}、{gbraid}、{wbraid} 专用变量。",
          "上线前分别测试 registration 与 purchase，并确认接收端返回 2xx、参数解码正确、金额与货币字段按预期保存。",
          "如需新增或修改规则，请提供 Publisher ID、可选的匹配字段与匹配值、完整目标 URL 模板。",
        ],
      },
    },
  },
  en: {
    htmlLang: "en",
    label: "English",
    ui: {
      back: "Back to full guide",
      brandSub: "SagaBox Integration Guide",
      kicker: "SAGABOX · PROMOTION LINKS & CONVERSION FORWARDING",
      title: "SagaBox Promotion and Postback Setup",
      intro: "Get your dedicated SagaBox link from the Material Library and use it directly for organic or paid traffic. If conversions must be sent to your own system, configure a downstream Postback URL as described below.",
      directBadge: "Ready for direct promotion",
      contents: "On this page",
      copy: "Copy",
      copied: "Copied",
      important: "Important",
      field: "Variable",
      description: "Description",
      source: "Ad platform",
      parameter: "Detected parameter",
      behavior: "Handling",
      configuredTemplate: "Configured URL template",
      resolvedRequest: "Request sent by DramaCPS",
      responseExample: "Recommended response",
      support: "Submit a configuration or request help: support@dramacps.com",
      footer: "SagaBox promotion and downstream Postback forwarding guide · v1.0",
    },
    nav: ["Get the promotion link", "Click ID detection", "Configure Postback", "Delivery rules", "Supported variables", "Request and response", "Important notes"],
    sections: {
      link: {
        title: "Get your SagaBox promotion link from the Material Library",
        paragraphs: [
          "Sign in to DramaCPS, open the Material Library and select SagaBox. Copy the dedicated short link generated for your account. The link already contains the Publisher tracking relationship, so no additional link-generation page is required.",
          "The link below demonstrates the format. For live promotion, always use the SagaBox link shown in your own Material Library; never copy another Publisher's link.",
        ],
        bullets: [
          "The link can be used directly in Facebook, TikTok or Google ads, on an owned website or landing page, or in a social profile.",
          "Do not remove, rewrite or replace characters in the short-link path, because this can invalidate the link or assign traffic incorrectly.",
          "Before launch, open the link and confirm that the destination, country availability and device redirect work correctly.",
        ],
        note: "The sample short link is clickable but is shown only to explain the format. Always copy your own dedicated SagaBox link from your DramaCPS Material Library.",
      },
      tracking: {
        title: "Advertising-platform Click IDs are detected automatically",
        paragraphs: [
          "When Facebook, TikTok or Google appends its platform Click ID to the click URL, DramaCPS automatically detects and stores the matching parameter. You do not need to rename these platform parameters to click_id.",
          "Platform Click IDs are stored separately from the primary DramaCPS click_id. Use each dedicated variable in your Postback URL when forwarding is required.",
        ],
        rows: [
          ["Facebook / Meta", "fbclid", "Detected and stored as {fbclid}"],
          ["TikTok", "ttclid", "Detected and stored as {ttclid}"],
          ["Google Ads", "gclid", "Detected and stored as {gclid}"],
          ["Google Ads", "gbraid", "Detected and stored as {gbraid}"],
          ["Google Ads", "wbraid", "Detected and stored as {wbraid}"],
        ],
        manualTitle: "Set the primary click_id manually",
        manualText: "If you use your own tracker, append click_id to the SagaBox short link and replace YOUR_CLICK_ID with your dynamic click identifier. If the original URL already contains a ? query string, append it with &click_id=... instead.",
        note: "Do not place fbclid, ttclid, gclid, gbraid or wbraid in sub_id2/sub_id3. They have dedicated fields. Use click_id for your own primary click identifier.",
      },
      postback: {
        title: "Configure a downstream Postback URL",
        paragraphs: [
          "Provide DramaCPS with your Publisher ID and target URL template. After DramaCPS receives an accepted SagaBox conversion, it replaces the variables in braces with real values and sends an HTTP GET request to the resolved URL.",
          "A Publisher may have multiple forwarding rules. Each rule may require one inbound field to exactly equal a configured value. If several rules match, DramaCPS requests every matching target URL. A rule without a match field receives all accepted conversions for that Publisher.",
        ],
        labels: { publisher: "Publisher ID", matchField: "Match field", matchValue: "Match value", target: "Target URL" },
        rulesTitle: "Event filtering examples",
        rules: [
          ["event = purchase", "Purchase events only"],
          ["event = registration", "Registration events only"],
          ["No condition", "All accepted events"],
        ],
        eventNote: "Current event values are registration and purchase. Matching is exact and case-sensitive.",
        variableNote: "Use {field_name}, for example {click_id}. Values are percent-encoded automatically. If an optional value is absent, it is replaced with an empty string.",
      },
      delivery: {
        title: "Postback delivery rules",
        bullets: [
          "Method: GET; no request body is sent.",
          "The inbound publisher_id must exactly match an active rule's Publisher ID.",
          "New accepted conversions and valid status changes are forwarded.",
          "Test requests, rejected requests and exact duplicates are not forwarded.",
          "Any HTTP 2xx response is successful. Other responses or a 10-second timeout are recorded as failed.",
          "Version 1.0 does not automatically retry failed deliveries.",
        ],
      },
      variables: { title: "All supported Postback URL variables", intro: "Every variable is optional in the target URL. Include only the values required by your receiving endpoint." },
      example: {
        title: "Complete request and receiver-response example",
        intro: "The following shows how a URL template is resolved for a purchase conversion. event_time is URL-encoded.",
        receiverTitle: "How the receiver should respond",
        receiverText: "Your endpoint should return any HTTP 2xx status as quickly as possible. A short plain-text or JSON body is recommended; avoid waiting for lengthy downstream processing before responding.",
      },
      notes: {
        title: "Pre-launch notes",
        bullets: [
          "Use HTTPS for production receiver endpoints.",
          "Deduplicate in your downstream system by transaction_id so repeated status updates do not create duplicate revenue.",
          "A fixed token may be included in the URL, for example ?token=YOUR_TOKEN&order={transaction_id}. Never expose a real token in public documentation, screenshots or chat messages.",
          "Do not use sub_id2 or sub_id3 for advertising-platform Click IDs. Use the dedicated {fbclid}, {ttclid}, {gclid}, {gbraid} and {wbraid} variables.",
          "Test both registration and purchase before launch. Confirm that the receiver returns 2xx, decodes parameters correctly and stores amount and currency as expected.",
          "To add or change a rule, provide the Publisher ID, optional match field and value, and the complete target URL template.",
        ],
      },
    },
  },
  pt: {
    htmlLang: "pt-BR",
    label: "Português",
    ui: {
      back: "Voltar ao guia completo", brandSub: "Guia de integração SagaBox", kicker: "SAGABOX · LINKS E ENVIO DE CONVERSÕES", title: "Promoção da SagaBox e configuração de Postback", intro: "Obtenha seu link exclusivo da SagaBox na Biblioteca de Materiais e use-o diretamente em tráfego orgânico ou pago. Para enviar conversões ao seu sistema, configure o Postback abaixo.", directBadge: "Pronto para divulgação", contents: "Nesta página", copy: "Copiar", copied: "Copiado", important: "Importante", field: "Variável", description: "Descrição", source: "Plataforma", parameter: "Parâmetro detectado", behavior: "Tratamento", configuredTemplate: "Modelo de URL configurado", resolvedRequest: "Requisição enviada pela DramaCPS", responseExample: "Resposta recomendada", support: "Configuração e suporte: support@dramacps.com", footer: "Guia SagaBox de promoção e encaminhamento de Postback · v1.0",
    },
    nav: ["Obter o link", "Detecção de Click ID", "Configurar Postback", "Regras de envio", "Variáveis aceitas", "Requisição e resposta", "Observações"],
    sections: {
      link: {
        title: "Obtenha o link da SagaBox na Biblioteca de Materiais",
        paragraphs: ["Entre na DramaCPS, abra a Biblioteca de Materiais e selecione SagaBox. Copie o link curto exclusivo gerado para sua conta. Ele já contém a relação de rastreamento do Publisher.", "O link abaixo mostra o formato. Em campanhas reais, use sempre o link exibido na sua própria conta e nunca o link de outro Publisher."],
        bullets: ["Use diretamente em anúncios do Facebook, TikTok ou Google, em site próprio, landing page ou perfil social.", "Não remova nem altere caracteres no caminho do link curto, pois isso pode invalidar o link ou atribuir o tráfego incorretamente.", "Antes da campanha, confira o destino, a disponibilidade no país e o redirecionamento no dispositivo."],
        note: "O link de exemplo é clicável, mas serve apenas para explicar o formato. Copie sempre o seu link exclusivo da SagaBox na Biblioteca de Materiais da DramaCPS.",
      },
      tracking: {
        title: "Os Click IDs das plataformas são detectados automaticamente",
        paragraphs: ["Quando Facebook, TikTok ou Google adiciona seu Click ID à URL, a DramaCPS detecta e armazena automaticamente o parâmetro. Não é necessário renomeá-lo para click_id.", "Os Click IDs das plataformas ficam separados do click_id principal da DramaCPS. Use a variável dedicada no Postback."],
        rows: [["Facebook / Meta", "fbclid", "Detectado e salvo como {fbclid}"], ["TikTok", "ttclid", "Detectado e salvo como {ttclid}"], ["Google Ads", "gclid", "Detectado e salvo como {gclid}"], ["Google Ads", "gbraid", "Detectado e salvo como {gbraid}"], ["Google Ads", "wbraid", "Detectado e salvo como {wbraid}"]],
        manualTitle: "Definir manualmente o click_id principal",
        manualText: "Se você usa um rastreador próprio, acrescente click_id ao link e substitua YOUR_CLICK_ID pelo identificador dinâmico. Se a URL já tiver ?, acrescente com &click_id=....",
        note: "Não coloque fbclid, ttclid, gclid, gbraid ou wbraid em sub_id2/sub_id3. Esses valores têm campos próprios. Use click_id para seu identificador principal.",
      },
      postback: {
        title: "Configure o Postback de destino",
        paragraphs: ["Envie à DramaCPS seu Publisher ID e o modelo da URL de destino. Após uma conversão válida da SagaBox, a DramaCPS substitui as variáveis entre chaves e envia uma requisição HTTP GET.", "Um Publisher pode ter várias regras. Cada regra pode exigir que um campo de entrada seja exatamente igual a um valor. Se várias regras coincidirem, todas as URLs correspondentes serão chamadas. Sem campo de correspondência, a regra recebe todas as conversões válidas do Publisher."],
        labels: { publisher: "Publisher ID", matchField: "Campo de correspondência", matchValue: "Valor de correspondência", target: "URL de destino" },
        rulesTitle: "Exemplos de filtro por evento",
        rules: [["event = purchase", "Somente compras"], ["event = registration", "Somente cadastros"], ["Sem condição", "Todos os eventos válidos"]],
        eventNote: "Os valores atuais de event são registration e purchase. A comparação é exata e diferencia maiúsculas de minúsculas.",
        variableNote: "Use {field_name}, por exemplo {click_id}. Os valores recebem codificação percentual automaticamente; um campo opcional ausente vira uma string vazia.",
      },
      delivery: {
        title: "Regras de envio do Postback",
        bullets: ["Método GET, sem corpo de requisição.", "O publisher_id recebido deve coincidir exatamente com uma regra ativa.", "Novas conversões válidas e mudanças válidas de status são encaminhadas.", "Testes, requisições rejeitadas e duplicatas exatas não são encaminhados.", "Qualquer HTTP 2xx indica sucesso. Outro status ou timeout de 10 segundos é registrado como falha.", "A versão 1.0 não tenta reenviar falhas automaticamente."],
      },
      variables: { title: "Todas as variáveis aceitas no Postback", intro: "Todas são opcionais na URL. Inclua apenas os valores de que seu endpoint realmente precisa." },
      example: { title: "Exemplo completo de requisição e resposta", intro: "Veja como o modelo é resolvido para uma compra. event_time é codificado na URL.", receiverTitle: "Resposta do receptor", receiverText: "Seu endpoint deve retornar rapidamente qualquer HTTP 2xx. Recomenda-se um corpo curto em texto ou JSON." },
      notes: {
        title: "Observações antes do lançamento",
        bullets: ["Use HTTPS em produção.", "Elimine duplicatas por transaction_id.", "É permitido adicionar um Token fixo, como ?token=YOUR_TOKEN&order={transaction_id}; nunca exponha o Token real publicamente.", "Não use sub_id2/sub_id3 para Click IDs; use {fbclid}, {ttclid}, {gclid}, {gbraid} e {wbraid}.", "Teste registration e purchase, o retorno 2xx, a decodificação, amount e currency.", "Para criar ou alterar uma regra, envie Publisher ID, campo/valor opcional de correspondência e o modelo completo da URL."],
      },
    },
  },
  es: {
    htmlLang: "es",
    label: "Español",
    ui: {
      back: "Volver a la guía completa", brandSub: "Guía de integración de SagaBox", kicker: "SAGABOX · ENLACES Y ENVÍO DE CONVERSIONES", title: "Promoción de SagaBox y configuración de Postback", intro: "Obtén tu enlace exclusivo de SagaBox en la Biblioteca de materiales y úsalo directamente con tráfico orgánico o de pago. Para enviar conversiones a tu sistema, configura el Postback indicado abajo.", directBadge: "Listo para promocionar", contents: "En esta página", copy: "Copiar", copied: "Copiado", important: "Importante", field: "Variable", description: "Descripción", source: "Plataforma", parameter: "Parámetro detectado", behavior: "Tratamiento", configuredTemplate: "Plantilla de URL configurada", resolvedRequest: "Solicitud enviada por DramaCPS", responseExample: "Respuesta recomendada", support: "Configuración y soporte: support@dramacps.com", footer: "Guía SagaBox de promoción y reenvío de Postback · v1.0",
    },
    nav: ["Obtener el enlace", "Detección de Click ID", "Configurar Postback", "Reglas de envío", "Variables admitidas", "Solicitud y respuesta", "Notas importantes"],
    sections: {
      link: {
        title: "Obtén el enlace de SagaBox en la Biblioteca de materiales",
        paragraphs: ["Inicia sesión en DramaCPS, abre la Biblioteca de materiales y selecciona SagaBox. Copia el enlace corto exclusivo generado para tu cuenta. Ya contiene la relación de seguimiento del Publisher.", "El enlace inferior solo muestra el formato. Para una campaña real, utiliza siempre el enlace que aparece en tu propia cuenta; nunca copies el de otro Publisher."],
        bullets: ["Úsalo directamente en anuncios de Facebook, TikTok o Google, en un sitio propio, landing page o perfil social.", "No elimines ni cambies caracteres de la ruta corta; podrías invalidar el enlace o asignar mal el tráfico.", "Antes de lanzar, comprueba el destino, la disponibilidad en el país y la redirección en el dispositivo."],
        note: "El enlace de ejemplo se puede abrir, pero solo ilustra el formato. Copia siempre tu enlace exclusivo de SagaBox desde tu Biblioteca de materiales de DramaCPS.",
      },
      tracking: {
        title: "Los Click IDs publicitarios se detectan automáticamente",
        paragraphs: ["Cuando Facebook, TikTok o Google añade su Click ID a la URL, DramaCPS detecta y guarda automáticamente ese parámetro. No hace falta renombrarlo como click_id.", "Los Click IDs de plataforma se guardan por separado del click_id principal de DramaCPS. Usa la variable específica en el Postback."],
        rows: [["Facebook / Meta", "fbclid", "Detectado y guardado como {fbclid}"], ["TikTok", "ttclid", "Detectado y guardado como {ttclid}"], ["Google Ads", "gclid", "Detectado y guardado como {gclid}"], ["Google Ads", "gbraid", "Detectado y guardado como {gbraid}"], ["Google Ads", "wbraid", "Detectado y guardado como {wbraid}"]],
        manualTitle: "Definir manualmente el click_id principal",
        manualText: "Si utilizas tu propio tracker, añade click_id al enlace y sustituye YOUR_CLICK_ID por el identificador dinámico. Si la URL ya contiene ?, añádelo con &click_id=....",
        note: "No pongas fbclid, ttclid, gclid, gbraid ni wbraid en sub_id2/sub_id3. Tienen campos propios. Utiliza click_id para tu identificador principal.",
      },
      postback: {
        title: "Configura la URL de Postback de destino",
        paragraphs: ["Entrega a DramaCPS tu Publisher ID y la plantilla de URL. Al recibir una conversión válida de SagaBox, DramaCPS sustituye las variables entre llaves y envía una solicitud HTTP GET.", "Un Publisher puede tener varias reglas. Cada una puede exigir que un campo entrante coincida exactamente con un valor. Si coinciden varias reglas, se solicitan todas las URLs correspondientes. Sin campo de coincidencia, la regla recibe todas las conversiones válidas del Publisher."],
        labels: { publisher: "Publisher ID", matchField: "Campo de coincidencia", matchValue: "Valor de coincidencia", target: "URL de destino" },
        rulesTitle: "Ejemplos de filtro de eventos",
        rules: [["event = purchase", "Solo compras"], ["event = registration", "Solo registros"], ["Sin condición", "Todos los eventos válidos"]],
        eventNote: "Los valores actuales de event son registration y purchase. La coincidencia es exacta y distingue mayúsculas de minúsculas.",
        variableNote: "Usa {field_name}, por ejemplo {click_id}. Los valores se codifican automáticamente en URL; un valor opcional ausente se sustituye por una cadena vacía.",
      },
      delivery: {
        title: "Reglas de envío del Postback",
        bullets: ["Método GET, sin cuerpo de solicitud.", "El publisher_id entrante debe coincidir exactamente con una regla activa.", "Se reenvían las nuevas conversiones válidas y los cambios de estado válidos.", "No se reenvían pruebas, solicitudes rechazadas ni duplicados exactos.", "Cualquier HTTP 2xx es correcto. Otro estado o un timeout de 10 segundos se registra como fallo.", "La versión 1.0 no reintenta automáticamente las entregas fallidas."],
      },
      variables: { title: "Todas las variables admitidas en el Postback", intro: "Todas son opcionales en la URL. Incluye solo los valores que necesita tu endpoint." },
      example: { title: "Ejemplo completo de solicitud y respuesta", intro: "Así se resuelve la plantilla para una compra. event_time se codifica en la URL.", receiverTitle: "Respuesta del receptor", receiverText: "El endpoint debe responder rápidamente con cualquier HTTP 2xx. Se recomienda un cuerpo breve de texto o JSON." },
      notes: {
        title: "Notas antes del lanzamiento",
        bullets: ["Usa HTTPS en producción.", "Elimina duplicados por transaction_id.", "Puedes añadir un Token fijo, por ejemplo ?token=YOUR_TOKEN&order={transaction_id}; no expongas el Token real públicamente.", "No uses sub_id2/sub_id3 para Click IDs; usa {fbclid}, {ttclid}, {gclid}, {gbraid} y {wbraid}.", "Prueba registration y purchase, el retorno 2xx, la decodificación, amount y currency.", "Para crear o modificar una regla, envía Publisher ID, campo/valor opcional de coincidencia y la plantilla completa de URL."],
      },
    },
  },
};

for (const language of sagaLanguageOrder) {
  sagaLocales[language].sections.notes.bullets[1] = editorial[language].dedup;
  sagaLocales[language].sections.notes.bullets.push(editorial[language].values);
}

export const macroRows: Array<{ key: string; descriptions: Record<Language, string> }> = [
  { key: "app_name", descriptions: { zh: "应用名称", en: "Application name", pt: "Nome do aplicativo", es: "Nombre de la aplicación" } },
  { key: "publisher_id", descriptions: { zh: "Publisher 标识", en: "Publisher identifier", pt: "Identificador do Publisher", es: "Identificador del Publisher" } },
  { key: "sub_id", descriptions: { zh: "一级 Sub ID", en: "Primary Sub ID", pt: "Sub ID principal", es: "Sub ID principal" } },
  { key: "click_id", descriptions: { zh: "DramaCPS 主点击 ID", en: "Primary DramaCPS click ID", pt: "Click ID principal da DramaCPS", es: "Click ID principal de DramaCPS" } },
  { key: "link_id", descriptions: { zh: "跟踪链接 ID", en: "Tracking link identifier", pt: "Identificador do link", es: "Identificador del enlace" } },
  { key: "fbclid", descriptions: { zh: "Meta / Facebook Click ID", en: "Meta / Facebook Click ID", pt: "Click ID do Meta / Facebook", es: "Click ID de Meta / Facebook" } },
  { key: "gclid", descriptions: { zh: "Google Click ID", en: "Google Click ID", pt: "Google Click ID", es: "Google Click ID" } },
  { key: "gbraid", descriptions: { zh: "Google GBRAID", en: "Google GBRAID", pt: "Google GBRAID", es: "Google GBRAID" } },
  { key: "wbraid", descriptions: { zh: "Google WBRAID", en: "Google WBRAID", pt: "Google WBRAID", es: "Google WBRAID" } },
  { key: "ttclid", descriptions: { zh: "TikTok Click ID", en: "TikTok Click ID", pt: "TikTok Click ID", es: "TikTok Click ID" } },
  { key: "campaign_id", descriptions: { zh: "广告活动 ID", en: "Campaign identifier", pt: "Identificador da campanha", es: "Identificador de campaña" } },
  { key: "creative_id", descriptions: { zh: "广告素材 ID", en: "Creative identifier", pt: "Identificador do criativo", es: "Identificador del creativo" } },
  { key: "source", descriptions: { zh: "流量来源", en: "Traffic source", pt: "Origem do tráfego", es: "Fuente de tráfico" } },
  { key: "event", descriptions: { zh: "registration 或 purchase", en: "registration or purchase", pt: "registration ou purchase", es: "registration o purchase" } },
  { key: "transaction_id", descriptions: { zh: "唯一交易 ID", en: "Unique transaction ID", pt: "ID único da transação", es: "ID único de transacción" } },
  { key: "user_id", descriptions: { zh: "用户 ID", en: "User identifier", pt: "Identificador do usuário", es: "Identificador del usuario" } },
  { key: "amount", descriptions: { zh: "用户实际支付金额", en: "Customer payment amount", pt: "Valor pago pelo cliente", es: "Importe pagado por el cliente" } },
  { key: "payout", descriptions: { zh: "Publisher 佣金", en: "Publisher commission", pt: "Comissão do Publisher", es: "Comisión del Publisher" } },
  { key: "currency", descriptions: { zh: "ISO-4217 三位货币代码", en: "ISO-4217 currency code", pt: "Código de moeda ISO-4217", es: "Código de moneda ISO-4217" } },
  { key: "product_id", descriptions: { zh: "商品 ID", en: "Product identifier", pt: "Identificador do produto", es: "Identificador del producto" } },
  { key: "product_name", descriptions: { zh: "商品名称", en: "Product name", pt: "Nome do produto", es: "Nombre del producto" } },
  { key: "drama_id", descriptions: { zh: "短剧 ID", en: "Drama identifier", pt: "Identificador do drama", es: "Identificador del drama" } },
  { key: "status", descriptions: { zh: "approved、pending、refunded 或 cancelled", en: "approved, pending, refunded or cancelled", pt: "approved, pending, refunded ou cancelled", es: "approved, pending, refunded o cancelled" } },
  { key: "event_time", descriptions: { zh: "ISO-8601 事件时间", en: "ISO-8601 event time", pt: "Data/hora ISO-8601 do evento", es: "Hora del evento en ISO-8601" } },
  { key: "os", descriptions: { zh: "操作系统", en: "Operating system", pt: "Sistema operacional", es: "Sistema operativo" } },
  { key: "device_type", descriptions: { zh: "mobile、tablet 或 desktop", en: "mobile, tablet or desktop", pt: "mobile, tablet ou desktop", es: "mobile, tablet o desktop" } },
  { key: "request_id", descriptions: { zh: "DramaCPS 原始请求 ID", en: "DramaCPS delivery source request ID", pt: "ID da solicitação original da DramaCPS", es: "ID de la solicitud original de DramaCPS" } },
];
